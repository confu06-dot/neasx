import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import { findUserById, updateUser, toPublicUser, type Plan } from "@/lib/db";

export const runtime = "nodejs";

const PLANS: Plan[] = ["free", "pro", "business"];

// NOTE: This is a demo checkout. When the NEASX backend (FastAPI + Stripe) is
// connected, this route will create a real Stripe Checkout Session and verify
// the payment via webhook before activating the subscription.
export async function POST(request: Request) {
  const cookieStore = await cookies();
  const userId = verifySessionToken(cookieStore.get(SESSION_COOKIE)?.value);

  if (!userId) {
    return NextResponse.json(
      { error: "You must be logged in to change your plan." },
      { status: 401 }
    );
  }

  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const plan = body.plan as Plan;
  if (!PLANS.includes(plan)) {
    return NextResponse.json({ error: "Invalid plan." }, { status: 400 });
  }

  const user = await findUserById(userId);
  if (!user) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  const updated = await updateUser(userId, { plan });
  if (!updated) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true, user: toPublicUser(updated) });
}
