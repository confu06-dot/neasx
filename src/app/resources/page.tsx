import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import {
  BookOpen,
  LifeBuoy,
  Activity,
  FileText,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore NEASX resources — documentation, blog, help center and system status.",
};

const resourceCards = [
  {
    icon: BookOpen,
    title: "Blog",
    description:
      "Product updates, AI insights and stories from the NEASX team.",
    href: "/blog",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Detailed guides and API references for building with NEASX.",
    href: "/docs",
  },
  {
    icon: LifeBuoy,
    title: "Help Center",
    description:
      "Answers to common questions and guides to get the most out of NEASX.",
    href: "/help",
  },
  {
    icon: Activity,
    title: "System Status",
    description:
      "Real-time status of all NEASX products and infrastructure.",
    href: "/status",
  },
];

export default function ResourcesPage() {
  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Resources</Badge>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              get started.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
            Explore guides, documentation and updates to get the most out of
            the NEASX ecosystem.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {resourceCards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.05]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-blue-500/[0.06] blur-[50px] transition-all duration-500 group-hover:bg-blue-500/[0.14]" />

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg">
                  <Icon size={22} />
                </div>

                <h2 className="mt-6 text-xl font-bold tracking-tight text-white">
                  {card.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {card.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-400 transition group-hover:gap-3">
                  Explore
                  <ArrowRight size={16} />
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}