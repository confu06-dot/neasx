import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { ChevronDown, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Answers to common questions and guides to get the most out of NEASX.",
};

const faqs = [
  {
    question: "What are NEASX credits?",
    answer:
      "Credits are the currency used across all NEASX products. Every account starts with 30,000 free credits per month. Different actions cost different amounts — for example, a short Chat response costs fewer credits than a long Writer draft.",
  },
  {
    question: "Is NEASX really free to start?",
    answer:
      "Yes. Create an account and you immediately get 30,000 free credits every month. No credit card required. If you need more, you can buy additional credits or upgrade to a subscription at any time.",
  },
  {
    question: "Can I use the same account across all products?",
    answer:
      "Absolutely. One NEASX account works across Writer, Chat, Agent, Studio, Voice, Vision and the API. Your credits, history and workspaces are shared across the entire ecosystem.",
  },
  {
    question: "How do credits reset?",
    answer:
      "Free monthly credits reset at the start of each month. Unused free credits don't roll over. Purchased credits never expire and are used only after your free credits for the month.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel or change your plan at any time from your account settings. When you cancel, you keep access until the end of your billing period.",
  },
  {
    question: "How do I get support?",
    answer:
      "Open a chat in the help widget, email us at support@neasx.com, or use the contact page. We typically respond within 24 hours.",
  },
];

export default function HelpPage() {
  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Help Center</Badge>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            How can we{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              help?
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
            Frequently asked questions and guides to help you get the most
            out of NEASX.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors open:border-blue-400/25"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                <span className="text-sm font-semibold text-white sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className="shrink-0 text-slate-500 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              <p className="border-t border-white/5 px-6 py-5 text-sm leading-7 text-slate-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {/* Contact card */}
        <div className="mx-auto mt-16 max-w-3xl rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg">
            <Mail size={22} />
          </div>

          <h2 className="mt-6 text-2xl font-bold tracking-tight text-white">
            Still need help?
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400">
            Our support team is here for you. Reach out and we'll get
            back to you within 24 hours.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20"
            >
              Contact support
            </Link>

            <Link
              href="mailto:support@neasx.com"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              support@neasx.com
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}