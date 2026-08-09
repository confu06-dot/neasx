import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import {
  Terminal,
  Rocket,
  Wrench,
  Database,
  ArrowRight,
  Search,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Detailed guides and API references for building with NEASX.",
};

const docSections = [
  {
    icon: Rocket,
    title: "Quickstart",
    description:
      "Get up and running with NEASX in under five minutes.",
    href: "/docs/quickstart",
  },
  {
    icon: Terminal,
    title: "API Reference",
    description:
      "Complete reference for the NEASX API — endpoints, auth, and examples.",
    href: "/docs/api",
  },
  {
    icon: Wrench,
    title: "Agents",
    description:
      "Build autonomous workflows with the NEASX Agent framework.",
    href: "/docs/agents",
  },
  {
    icon: Database,
    title: "Credits & Billing",
    description:
      "Understand credits, usage tracking, and how billing works.",
    href: "/docs/billing",
  },
];

export default function DocsPage() {
  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Documentation</Badge>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Build with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              NEASX.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
            Guides, API references and examples to help you build with the
            NEASX ecosystem.
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-10 max-w-md">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              type="search"
              placeholder="Search documentation..."
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {docSections.map((section) => {
            const Icon = section.icon;

            return (
              <Link
                key={section.title}
                href={section.href}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.05]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-blue-500/[0.06] blur-[50px] transition-all duration-500 group-hover:bg-blue-500/[0.14]" />

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg">
                  <Icon size={22} />
                </div>

                <h2 className="mt-6 text-xl font-bold tracking-tight text-white">
                  {section.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {section.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-400 transition group-hover:gap-3">
                  Read the docs
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <span className="flex items-center gap-2 text-sm text-slate-500">
            <BookOpen size={16} />
            Browse the full API reference
          </span>
          <Link
            href="https://sdk.neasx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            sdk.neasx.com →
          </Link>
        </div>
      </Container>
    </Section>
  );
}