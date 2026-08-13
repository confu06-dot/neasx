"use client";

import { useState } from "react";
import Link from "next/link";
import { KeyRound, MailCheck, ArrowRight, RotateCcw } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20";

interface SentState {
  message: string;
  devLink: string | null;
}

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState<SentState | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSent(null);

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSent({
        message:
          data.message ||
          "If an account exists for this email, a password reset link is on its way.",
        devLink: typeof data.devLink === "string" ? data.devLink : null,
      });
      setEmail("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <>
        <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 text-center">
          <MailCheck size={22} className="mx-auto text-emerald-400" />
          <p className="mt-3 text-sm leading-6 text-emerald-300">
            {sent.message}
          </p>
        </div>

        {sent.devLink && (
          <div className="mt-5 rounded-2xl border border-purple-500/20 bg-purple-500/10 px-5 py-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-purple-400">
              Direct Account Recovery
            </p>

            <p className="mt-2 text-xs leading-6 text-purple-200/80">
              Use the instant verification link below to reset your password immediately:
            </p>

            <Link
              href={sent.devLink}
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-purple-400/30 bg-purple-900/40 px-3.5 py-2 text-xs font-semibold text-purple-200 shadow-md transition hover:bg-purple-900/60"
            >
              Reset Password Now
              <ArrowRight size={13} />
            </Link>
          </div>
        )}

        <button
          type="button"
          onClick={() => setSent(null)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.08]"
        >
          <RotateCcw size={14} />
          Send another link
        </button>
      </>
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
            htmlFor="email"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-400"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <KeyRound size={16} />
          {loading ? "Sending…" : "Send reset link"}
        </button>
      </form>
    </>
  );
}
