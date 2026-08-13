import { NextResponse } from "next/server";
import { verifyPasswordResetToken } from "@/lib/auth";
import { findPasswordReset, markPasswordResetUsed } from "@/lib/reset";
import { findUserById, updateUserPassword } from "@/lib/db";

export const runtime = "nodejs";

const INVALID_LINK_ERROR = "This password reset link is invalid or has expired.";

export async function POST(request: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const token = typeof body.token === "string" ? body.token.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!token) {
    return NextResponse.json({ error: INVALID_LINK_ERROR }, { status: 400 });
  }

  if (password.length < 6) {
    return NextResponse.json(
      { error: "Password must be at least 6 characters." },
      { status: 400 }
    );
  }

  const userId = verifyPasswordResetToken(token);
  if (!userId) {
    return NextResponse.json({ error: INVALID_LINK_ERROR }, { status: 400 });
  }

  const record = await findPasswordReset(token.split(".")[0]);
  if (!record || record.used) {
    return NextResponse.json({ error: INVALID_LINK_ERROR }, { status: 400 });
  }

  const user = await findUserById(userId);
  if (!user || user.email !== record.email) {
    return NextResponse.json({ error: INVALID_LINK_ERROR }, { status: 400 });
  }

  await updateUserPassword(user.id, password);
  await markPasswordResetUsed(record.tokenPayload);

  return NextResponse.json({
    ok: true,
    message:
      "Your password has been updated. You can now log in with your new password.",
  });
}
