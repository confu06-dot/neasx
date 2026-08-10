import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { hashPassword } from "./auth";

export type Plan = "free" | "pro" | "business";

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  plan: Plan;
  credits: number;
  createdAt: string;
}

export type PublicUser = Omit<User, "passwordHash">;

const DATA_DIR = path.join(process.cwd(), "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");

export function toPublicUser(user: User): PublicUser {
  const { passwordHash: _passwordHash, ...rest } = user;
  return rest;
}

async function readUsers(): Promise<User[]> {
  try {
    const raw = await fs.readFile(USERS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeUsers(users: User[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const users = await readUsers();
  return users.find((u) => u.email === email) ?? null;
}

export async function findUserById(id: string): Promise<User | null> {
  const users = await readUsers();
  return users.find((u) => u.id === id) ?? null;
}

export async function createUser(input: {
  name: string;
  email: string;
  password: string;
}): Promise<User> {
  const users = await readUsers();
  const user: User = {
    id: crypto.randomUUID(),
    name: input.name,
    email: input.email,
    passwordHash: hashPassword(input.password),
    plan: "free",
    credits: 30000,
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  await writeUsers(users);
  return user;
}

export async function updateUser(
  id: string,
  patch: Partial<Pick<User, "plan" | "credits">>
): Promise<User | null> {
  const users = await readUsers();
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...patch };
  await writeUsers(users);
  return users[index];
}
