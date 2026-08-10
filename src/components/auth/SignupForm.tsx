"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20";

export default function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setNotice("");

    if (!name || !email || !password || !confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleSocial() {
    setNotice("Social sign-in is coming soon. Use email sign-up for now.");
  }

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-white">
        Create your account
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Free forever plan. No credit card required.
      </p>

      {error && (
        <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {notice && (
        <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-400">
          {notice}
        </div>
      )}

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-400"
          >
            Full name
          </label>

          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ada Lovelace"
            className={inputClass}
          />
        </div>

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

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-400"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            required
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="confirm"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-400"
          >
            Confirm password
          </label>

          <input
            id="confirm"
            type="password"
            required
            autoComplete="new-password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Repeat your password"
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>

          <div className="relative flex justify-center text-xs">
            <span className="bg-[#0b1220] px-4 text-slate-500">
              or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={handleSocial}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>

            Google
          </button>

          <button
            type="button"
            onClick={handleSocial}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>

            GitHub
          </button>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-blue-400 transition hover:text-blue-300"
        >
          Log in
        </Link>
      </p>

      <p className="mt-4 text-center text-[11px] leading-5 text-slate-600">
        By creating an account, you agree to our{" "}
        <Link href="/legal/terms" className="underline hover:text-slate-400">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/legal/privacy" className="underline hover:text-slate-400">
          Privacy Policy
        </Link>
        .
      </p>
    </>
  );
}
