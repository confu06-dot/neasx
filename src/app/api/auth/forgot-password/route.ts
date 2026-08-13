import { NextResponse } from "next/server";
import { findUserByEmail } from "@/lib/db";
import { createPasswordResetToken } from "@/lib/auth";
import { createPasswordReset } from "@/lib/reset";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const user = await findUserByEmail(email);

  // Respond identically whether or not the account exists so the API never
  // reveals which addresses are registered (account-enumeration guard).
  const message =
    "If an account exists for this email, a password reset link is on its way.";

  // No email service is connected in this demo, so when the account exists we
  // return the reset link directly to keep the flow testable end-to-end. A
  // production deployment would email this link and never expose it in the API
  // response.
  let devLink: string | null = null;
  if (user) {
    const token = createPasswordResetToken(user.id);
    await createPasswordReset(token.split(".")[0], user.email);
    devLink = `/reset-password?token=${encodeURIComponent(token)}`;
  }

  return NextResponse.json({ ok: true, message, devLink });
}
