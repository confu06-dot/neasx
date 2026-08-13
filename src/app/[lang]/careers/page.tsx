import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Come build the future of AI-powered work with the NEASX team.",
};

const roles = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote / Istanbul",
    type: "Full-time",
  },
  {
    title: "Machine Learning Engineer",
    department: "AI",
    location: "Remote / Istanbul",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote / Istanbul",
    type: "Full-time",
  },
  {
    title: "Developer Relations Lead",
    department: "Community",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    title: "Backend Engineer (Go)",
    department: "Engineering",
    location: "Remote / Istanbul",
    type: "Full-time",
  },
];

const perks = [
  "🪙 Competitive salary + stock options",
  "🏥 Health, dental & vision coverage",
  "🏠 Remote-first, flexible work",
  "📚 Annual learning & conference budget",
  "🖥️ Top-of-the-line hardware",
  "🌍 Work with a global team",
];

export default function CareersPage() {
  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Careers</Badge>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Come build the future of{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              AI work.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
            We're a small team building a big ecosystem. Join us to
            build products that help millions of people work with AI.
          </p>
        </div>

        {/* Open roles */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-lg font-bold tracking-tight text-white">
            Open roles
          </h2>

          <div className="mt-6 space-y-4">
            {roles.map((role) => (
              <Link
                key={role.title}
                href={`/careers/${role.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "")}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-blue-400/25 hover:bg-white/[0.05]"
              >
                <div>
                  <h3 className="text-sm font-bold text-white transition group-hover:text-blue-300 sm:text-base">
                    {role.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <span className="text-xs text-slate-500">
                      {role.department}
                    </span>

                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin size={11} />
                      {role.location}
                    </span>

                    <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-400">
                      {role.type}
                    </span>
                  </div>
                </div>

                <ArrowRight
                  size={18}
                  className="shrink-0 text-blue-400 transition group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Perks */}
        <div className="mx-auto mt-16 max-w-3xl rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm">
          <h2 className="text-center text-2xl font-bold tracking-tight text-white">
            What we offer
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {perks.map((perk) => (
              <div
                key={perk}
                className="rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm text-slate-300"
              >
                {perk}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            Don't see a role that fits?{" "}
            <Link
              href="mailto:careers@neasx.com"
              className="font-semibold text-blue-400 transition hover:text-blue-300"
            >
              careers@neasx.com
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  );
}