import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NEASX collects, uses and protects your personal data.",
};

const sections = [
  {
    title: "1. Information we collect",
    body: "We collect information you provide directly, including your name, email address and account details. We also collect usage data such as product interactions, conversations and credit usage to improve our services.",
  },
  {
    title: "2. How we use your information",
    body: "Your information is used to provide and improve our products, process payments, send service notifications, and ensure the security of your account. We do not sell your personal data.",
  },
  {
    title: "3. AI content and training",
    body: "Your conversations in NEASX products are private by default. We do not train AI models on your data without your explicit consent. If you opt into training, you can opt out at any time.",
  },
  {
    title: "4. Cookies and tracking",
    body: "We use essential cookies to keep you signed in and services working. Optional analytics cookies help us understand how our products are used. You can control cookie preferences in your browser at any time.",
  },
  {
    title: "5. Data retention",
    body: "We retain your data for as long as your account is active. You can request deletion of your account and associated data at any time. If you cancel a subscription, billing records are retained for legal purposes.",
  },
  {
    title: "6. Your rights",
    body: "You have the right to access, correct, export or delete your personal data. Contact privacy@neasx.com to exercise these rights. We respond to all requests within 30 days.",
  },
  {
    title: "7. Contact",
    body: "Questions about this policy? Reach out to privacy@neasx.com or write to NEASX Labs, Istanbul, Türkiye.",
  },
];

export default function PrivacyPage() {
  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />
        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Legal</Badge>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Privacy{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              Policy.
            </span>
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: March 1, 2026
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold tracking-tight text-white">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-8 text-slate-400">
                {section.body}
              </p>
            </section>
          ))}

          <Link
            href="/legal/terms"
            className="inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            View Terms of Service →
          </Link>
        </div>
      </Container>
    </Section>
  );
}