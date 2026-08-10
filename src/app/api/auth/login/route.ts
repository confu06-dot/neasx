import { NextResponse } from "next/server";
import { findUserByEmail, toPublicUser } from "@/lib/db";
import {
  createSessionToken,
  SESSION_COOKIE,
  getSessionCookieOptions,
  isSecureRequest,
  verifyPassword,
} from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email || !password) {
    return NextResponse.json(
      { error: "Please enter your email and password." },
      { status: 400 }
    );
  }

  const user = await findUserByEmail(email);
  if (!user || !verifyPassword(password, user.passwordHash)) {
    return NextResponse.json(
      { error: "Invalid email or password." },
      { status: 401 }
    );
  }

  const token = createSessionToken(user.id);

  const response = NextResponse.json({ user: toPublicUser(user) });
  response.cookies.set(
    SESSION_COOKIE,
    token,
    getSessionCookieOptions(isSecureRequest(request))
  );
  return response;
}
