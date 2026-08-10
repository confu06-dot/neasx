import { NextResponse } from "next/server";
import { SESSION_COOKIE, isSecureRequest } from "@/lib/auth";

export async function POST(request: Request) {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: isSecureRequest(request),
    path: "/",
    maxAge: 0,
  });
  return response;
}
