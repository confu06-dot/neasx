"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, KeyRound, LockKeyhole } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20";

export default function ResetPasswordForm({ token }: { token: string }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSuccess(
        data.message || "Your password has been updated. You can now log in."
      );
      setPassword("");
      setConfirm("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!token) {
    return (
      <div className="mt-10 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm leading-6 text-red-300">
        This password reset link is invalid or has expired. Please request a new
        one from the{" "}
        <Link
          href="/forgot-password"
          className="font-semibold text-red-200 underline"
        >
          forgot password
        </Link>{" "}
        page.
      </div>
    );
  }

  if (success) {
    return (
      <div className="mt-10 text-center">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-6">
          <CheckCircle2 size={26} className="mx-auto text-emerald-400" />
          <p className="mt-3 text-sm leading-6 text-emerald-300">{success}</p>
        </div>

        <Link
          href="/login"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20"
        >
          Go to log in
        </Link>
      </div>
    );
  }

  return (
    <>
      {error && (
        <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="new-password"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-400"
          >
            New password
          </label>

          <input
            id="new-password"
            type="password"
            required
            autoComplete="new-password"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-400"
          >
            Confirm password
          </label>

          <input
            id="confirm-password"
            type="password"
            required
            autoComplete="new-password"
            minLength={6}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Repeat your password"
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <LockKeyhole size={16} />
          {loading ? "Updating…" : "Update password"}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
          <KeyRound size={12} />
          Use at least 6 characters — a mix of letters and numbers is safer.
        </p>
      </form>
    </>
  );
}
