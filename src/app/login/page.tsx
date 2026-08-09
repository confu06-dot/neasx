import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Log in",
  description:
    "Log in to your NEASX account and continue working with your AI products.",
};

export default function LoginPage() {
  return (
    <>
      <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />

          <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
        </div>

        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="mx-auto max-w-xl">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10">
                <div className="text-center">
                  <Badge>Welcome back</Badge>

                  <h1 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                    Log in to{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                      NEASX
                    </span>
                  </h1>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Continue where you left off with your AI products.
                  </p>
                </div>

                <form className="mt-10 space-y-5">
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
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-400"
                      >
                        Password
                      </label>

                      <Link
                        href="/forgot-password"
                        className="text-xs font-medium text-blue-400 transition hover:text-blue-300"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <input
                      id="password"
                      type="password"
                      required
                      placeholder="Your password"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20"
                  >
                    Log in
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
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08]"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                      </svg>

                      Google
                    </button>

                    <button
                      type="button"
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
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-semibold text-blue-400 transition hover:text-blue-300"
                  >
                    Sign up free
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}