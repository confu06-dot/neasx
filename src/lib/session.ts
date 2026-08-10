import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySessionToken } from "./auth";
import { findUserById, type User } from "./db";

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const userId = verifySessionToken(cookieStore.get(SESSION_COOKIE)?.value);
  if (!userId) return null;
  return findUserById(userId);
}
