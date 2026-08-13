import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { Mail, MessageSquare, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the NEASX team. We typically respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Contact</Badge>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              talk.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
            Questions, feedback, press or partnerships — we'd love to
            hear from you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg">
              <Mail size={22} />
            </div>

            <h3 className="mt-5 text-sm font-bold text-white">Email</h3>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              support@neasx.com
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg">
              <MessageSquare size={22} />
            </div>

            <h3 className="mt-5 text-sm font-bold text-white">Help center</h3>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              Browse FAQs and guides
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg">
              <Clock size={22} />
            </div>

            <h3 className="mt-5 text-sm font-bold text-white">Response time</h3>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              Within 24 hours
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="mx-auto mt-12 max-w-2xl rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10">
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Topic
              </label>
              <select className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 focus:border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                <option>General question</option>
                <option>Support</option>
                <option>Billing</option>
                <option>Press</option>
                <option>Partnerships</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us how we can help..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/20"
            >
              Send message
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-600">
            By submitting, you agree to our{" "}
            <Link
              href="/legal/privacy"
              className="text-slate-400 underline transition hover:text-white"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
}