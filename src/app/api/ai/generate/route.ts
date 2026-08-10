import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import { findUserById, updateUser } from "@/lib/db";
import { generate, type AITool } from "@/lib/ai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CREDIT_COST = 1;

interface GenerateBody {
  prompt?: string;
  tool?: AITool;
  mode?: string;
  targetLanguage?: string;
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

  if (user.credits < CREDIT_COST) {
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
  });

  const updated = await updateUser(userId, { credits: user.credits - CREDIT_COST });
  if (!updated) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    text,
    demo,
    model,
    creditsUsed: CREDIT_COST,
    creditsLeft: updated.credits,
  });
}
