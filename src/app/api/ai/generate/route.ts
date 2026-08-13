import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import { findUserById, updateUser, type Plan } from "@/lib/db";
import { generate, type AITool, type ChatMessage } from "@/lib/ai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CREDIT_COST = 1;

// The billing page markets Pro/Business as "Unlimited AI actions", so paid
// plans never consume or run out of credits. Only Free plan users pay per
// request from their included credit balance.
const UNLIMITED_PLANS: readonly Plan[] = ["pro", "business"];

interface GenerateBody {
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
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const user = await findUserById(userId);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const unlimited = UNLIMITED_PLANS.includes(user.plan);

  if (!unlimited && user.credits < CREDIT_COST) {
    return NextResponse.json(
      { error: "Out of credits. Top up from the billing page." },
      { status: 402 }
    );
  }

  let body: GenerateBody;
  try {
    body = (await request.json()) as GenerateBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  const tool: AITool =
    body.tool === "writer" || body.tool === "agent" || body.tool === "api"
      ? body.tool
      : "chat";

  const { text, demo, model } = await generate({
    prompt,
    tool,
    mode: body.mode,
    targetLanguage: body.targetLanguage,
    history: sanitizeHistory(body.history),
  });

  let creditsLeft = user.credits;
  if (!unlimited) {
    const updated = await updateUser(userId, {
      credits: user.credits - CREDIT_COST,
    });
    if (!updated) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    creditsLeft = updated.credits;
  }

  return NextResponse.json({
    text,
    demo,
    model,
    creditsUsed: unlimited ? 0 : CREDIT_COST,
    creditsLeft,
  });
}
