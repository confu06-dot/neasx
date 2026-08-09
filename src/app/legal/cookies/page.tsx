import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How NEASX uses cookies and similar technologies to improve your experience.",
};

const sections = [
  {
    title: "1. What are cookies?",
    body: "Cookies are small text files stored on your device when you visit a website. They help websites work properly and provide useful information to site owners.",
  },
  {
    title: "2. Cookies we use",
    body: "We use essential cookies required for authentication and security. We also use analytics cookies to understand aggregate usage patterns and improve our products. We do not use third-party advertising cookies.",
  },
  {
    title: "3. Session vs persistent",
    body: "Session cookies are temporary and deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. Most of our cookies are session-based.",
  },
  {
    title: "4. Managing cookies",
    body: "You can control or delete cookies through your browser settings at any time. Disabling essential cookies may prevent you from using certain features, such as staying signed in.",
  },
  {
    title: "5. Changes to this policy",
    body: "We may update this policy from time to time. You will be notified of significant changes via email or an in-product banner.",
  },
  {
    title: "6. Contact",
    body: "Questions about our use of cookies? Contact privacy@neasx.com.",
  },
];

export default function CookiesPage() {
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
            Cookie{" "}
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

          <div className="flex flex-wrap gap-6 pt-4">
            <Link
              href="/legal/privacy"
              className="inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Privacy Policy →
            </Link>

            <Link
              href="/legal/terms"
              className="inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Terms of Service →
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}