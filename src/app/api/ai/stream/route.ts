import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import { findUserById, updateUser, type Plan } from "@/lib/db";
import { generate, type AITool, type ChatMessage } from "@/lib/ai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CREDIT_COST = 1;
// Pro/Business plans have unlimited AI actions - see the billing page.
const UNLIMITED_PLANS: readonly Plan[] = ["pro", "business"];

// Chunk the generated text by sentence so the client sees progressive output
// even though the (demo) engine produces the full reply synchronously.
const CHUNK_RE = /[^.!?…]+[.!?…]+|[^.!?…]+$/g;
const CHUNK_DELAY_MS = 40;

const encoder = new TextEncoder();

interface StreamBody {
  prompt?: string;
  tool?: AITool;
  mode?: string;
  targetLanguage?: string;
  history?: unknown;
}

/** Validates and caps the client-supplied conversation history. */
function sanitizeHistory(value: unknown): ChatMessage[] {
  if (!Array.isArray(value)) return [];
  const out: ChatMessage[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object") continue;
    const msg = item as { role?: unknown; content?: unknown };
    const role =
      msg.role === "user" || msg.role === "assistant" ? msg.role : null;
    if (!role || typeof msg.content !== "string") continue;
    out.push({ role, content: msg.content.slice(0, 4000) });
    if (out.length >= 20) break;
  }
  return out;
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const userId = verifySessionToken(cookieStore.get(SESSION_COOKIE)?.value);
  if (!userId) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  const user = await findUserById(userId);
  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  const unlimited = UNLIMITED_PLANS.includes(user.plan);

  if (!unlimited && user.credits < CREDIT_COST) {
    return Response.json(
      { error: "Out of credits. Top up from the billing page." },
      { status: 402 }
    );
  }

  let body: StreamBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
  if (!prompt) {
    return Response.json({ error: "Prompt is required" }, { status: 400 });
  }

  const tool: AITool =
    body.tool === "writer" || body.tool === "agent" || body.tool === "api"
      ? body.tool
      : "chat";

  const history = sanitizeHistory(body.history);

  const { text, demo, model } = await generate({
    prompt,
    tool,
    mode: body.mode,
    targetLanguage: body.targetLanguage,
    history,
  });

  // Deduct the credit up-front (before any streaming starts) so a connection
  // that drops mid-stream still charged the user correctly.
  let creditsLeft = user.credits;
  if (!unlimited) {
    const updated = await updateUser(userId, {
      credits: user.credits - CREDIT_COST,
    });
    if (!updated) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }
    creditsLeft = updated.credits;
  }

  const chunks = text.match(CHUNK_RE) ?? [text];

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (event: Record<string, unknown>) => {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(event)}\n\n`)
        );
      };

      try {
        for (const chunk of chunks) {
          send({ delta: chunk });
          await new Promise((resolve) => setTimeout(resolve, CHUNK_DELAY_MS));
        }
        send({ done: true, demo, model, creditsLeft });
        controller.close();
      } catch {
        // Client disconnected mid-stream — nothing else to send.
        try {
          controller.close();
        } catch {
          // Already closed.
        }
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
