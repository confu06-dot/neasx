import { NextResponse } from "next/server";
import { createUser, findUserByEmail, toPublicUser } from "@/lib/db";
import {
  createSessionToken,
  SESSION_COOKIE,
  getSessionCookieOptions,
  isSecureRequest,
} from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Please fill in all fields." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (password.length < 6) {
    return NextResponse.json(
      { error: "Password must be at least 6 characters." },
      { status: 400 }
    );
  }

  const existing = await findUserByEmail(email);
  if (existing) {
    return NextResponse.json(
      { error: "An account with this email already exists. Please log in." },
      { status: 409 }
    );
  }

  const user = await createUser({ name, email, password });
  const token = createSessionToken(user.id);

  const response = NextResponse.json(
    { user: toPublicUser(user) },
    { status: 201 }
  );
  response.cookies.set(
    SESSION_COOKIE,
    token,
    getSessionCookieOptions(isSecureRequest(request))
  );
  return response;
}
