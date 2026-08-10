import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import { findUserById, toPublicUser } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  const cookieStore = await cookies();
  const userId = verifySessionToken(cookieStore.get(SESSION_COOKIE)?.value);

  if (!userId) {
    return NextResponse.json({ user: null });
  }

  const user = await findUserById(userId);
  if (!user) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({ user: toPublicUser(user) });
}
