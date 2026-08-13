import crypto from "node:crypto";

export const SESSION_COOKIE = "neasx_session";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// In production, always set AUTH_SECRET via environment variables.
const SECRET = process.env.AUTH_SECRET || "neasx-dev-secret-change-me";

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const candidate = crypto.scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");
  return (
    candidate.length === expected.length &&
    crypto.timingSafeEqual(candidate, expected)
  );
}

export function createSessionToken(userId: string): string {
  const payload = `${userId}:${Date.now() + SESSION_TTL_MS}`;
  const signature = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex");
  return `${Buffer.from(payload).toString("base64url")}.${signature}`;
}

export function verifySessionToken(token: string | undefined | null): string | null {
  if (!token) return null;

  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return null;

  const payload = Buffer.from(encoded, "base64url").toString();
  const expected = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex");

  const a = Buffer.from(signature, "hex");
  const b = Buffer.from(expected, "hex");
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

  const [userId, expires] = payload.split(":");
  if (!userId || !expires || Number(expires) < Date.now()) return null;

  return userId;
}

export const RESET_TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hour

export function createPasswordResetToken(userId: string): string {
  const payload = `${userId}:${Date.now() + RESET_TOKEN_TTL_MS}`;
  const signature = crypto
    .createHmac("sha256", SECRET)
    .update(`reset:${payload}`)
    .digest("hex");
  return `${Buffer.from(payload).toString("base64url")}.${signature}`;
}

export function verifyPasswordResetToken(
  token: string | undefined | null
): string | null {
  if (!token) return null;

  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return null;

  const payload = Buffer.from(encoded, "base64url").toString();
  const expected = crypto
    .createHmac("sha256", SECRET)
    .update(`reset:${payload}`)
    .digest("hex");

  const a = Buffer.from(signature, "hex");
  const b = Buffer.from(expected, "hex");
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

  const [userId, expires] = payload.split(":");
  if (!userId || !expires || Number(expires) < Date.now()) return null;

  return userId;
}

// Detects whether the incoming request arrived over HTTPS so the session
// cookie is only marked `Secure` when it will actually be sent over TLS.
// On plain HTTP (e.g. localhost during development or a demo server) a
// `Secure` cookie would be rejected by browsers and the user could never
// stay logged in.
export function isSecureRequest(request: Request): boolean {
  const forwarded = request.headers.get("x-forwarded-proto");
  if (forwarded) {
    return forwarded.split(",")[0].trim() === "https";
  }
  return request.url.startsWith("https://");
}

export function getSessionCookieOptions(secure?: boolean) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: secure ?? process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  };
}
