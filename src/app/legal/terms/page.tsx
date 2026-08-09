import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that govern your use of NEASX products and services.",
};

const sections = [
  {
    title: "1. Acceptance of terms",
    body: "By creating an account or using any NEASX product, you agree to these Terms of Service. If you do not agree, you may not use our services.",
  },
  {
    title: "2. Accounts",
    body: "You are responsible for maintaining the security of your account credentials. You must provide accurate information when creating an account and notify us of any unauthorized use.",
  },
  {
    title: "3. Credits and billing",
    body: "NEASX credits are consumed when you use our products. Free monthly credits reset at the start of each month and do not roll over. Purchased credits never expire. Subscriptions renew automatically unless cancelled before the renewal date.",
  },
  {
    title: "4. Acceptable use",
    body: "You agree not to use NEASX products for unlawful purposes, to generate harmful or illegal content, to attempt to reverse engineer our systems, or to interfere with the service for other users.",
  },
  {
    title: "5. AI-generated content",
    body: "Content generated with NEASX tools is provided for informational purposes. You are responsible for reviewing and verifying AI outputs before relying on them. NEASX does not guarantee accuracy of AI-generated content.",
  },
  {
    title: "6. Intellectual property",
    body: "You retain ownership of the content you create using NEASX products. NEASX owns the software, design and branding of the platform. You may not copy or resell NEASX's underlying technology.",
  },
  {
    title: "7. Service changes",
    body: "We may update, modify or discontinue features of our products at any time. We will provide reasonable notice for significant changes that affect your use.",
  },
  {
    title: "8. Limitation of liability",
    body: "To the maximum extent permitted by law, NEASX is not liable for indirect, incidental or consequential damages arising from your use of the service. Our total liability is limited to the amount you paid in the last 3 months.",
  },
  {
    title: "9. Governing law",
    body: "These terms are governed by the laws of the Republic of Türkiye. Any disputes shall be resolved in the courts of Istanbul.",
  },
  {
    title: "10. Contact",
    body: "Questions about these terms? Contact legal@neasx.com.",
  },
];

export default function TermsPage() {
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
            Terms of{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              Service.
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

          <div className="flex flex-wrap gap-6 pt-4">
            <Link
              href="/legal/privacy"
              className="inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Privacy Policy →
            </Link>

            <Link
              href="/legal/cookies"
              className="inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Cookie Policy →
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}