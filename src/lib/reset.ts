import fs from "node:fs/promises";
import path from "node:path";

// File-backed store for password reset requests.
//
// In production this record would live in a database and the reset link would
// be delivered by an email service. The demo keeps the records on disk so a
// reset link is single-use, can be validated across server restarts, and the
// whole flow stays testable end-to-end.

export interface PasswordResetRecord {
  /** The base64url payload portion of the reset token (not the full token). */
  tokenPayload: string;
  email: string;
  createdAt: string;
  used: boolean;
}

const DATA_DIR = path.join(process.cwd(), "data");
const RESET_FILE = path.join(DATA_DIR, "reset-requests.json");

async function readRecords(): Promise<PasswordResetRecord[]> {
  try {
    const raw = await fs.readFile(RESET_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeRecords(records: PasswordResetRecord[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(RESET_FILE, JSON.stringify(records, null, 2), "utf-8");
}

export async function createPasswordReset(
  tokenPayload: string,
  email: string
): Promise<PasswordResetRecord> {
  const records = await readRecords();
  const record: PasswordResetRecord = {
    tokenPayload,
    email,
    createdAt: new Date().toISOString(),
    used: false,
  };
  records.push(record);
  await writeRecords(records);
  return record;
}

export async function findPasswordReset(
  tokenPayload: string
): Promise<PasswordResetRecord | null> {
  const records = await readRecords();
  return records.find((r) => r.tokenPayload === tokenPayload) ?? null;
}

/**
 * Marks a reset request as used so the link cannot be replayed. Returns null
 * if the record does not exist or has already been consumed.
 */
export async function markPasswordResetUsed(
  tokenPayload: string
): Promise<PasswordResetRecord | null> {
  const records = await readRecords();
  const index = records.findIndex((r) => r.tokenPayload === tokenPayload);
  if (index === -1 || records[index].used) return null;
  records[index] = { ...records[index], used: true };
  await writeRecords(records);
  return records[index];
}
