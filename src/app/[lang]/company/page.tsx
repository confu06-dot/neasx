import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import {
  Users,
  Briefcase,
  Mail,
  ArrowRight,
  AtSign,
  Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Company",
  description:
    "About NEASX, careers and how to get in touch with the team.",
};

const companyCards = [
  {
    icon: Users,
    title: "About",
    description:
      "Learn about our mission, values and the team behind NEASX.",
    href: "/about",
  },
  {
    icon: Briefcase,
    title: "Careers",
    description:
      "Join us in building the future of AI products for real work.",
    href: "/careers",
  },
  {
    icon: Mail,
    title: "Contact",
    description:
      "Questions, feedback or partnerships — we'd love to hear from you.",
    href: "/contact",
  },
];

export default function CompanyPage() {
  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Company</Badge>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Building the ecosystem for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              real work.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
            NEASX builds a growing ecosystem of AI products designed to
            automate real work and help people and businesses move faster.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {companyCards.map((card) => {
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
              </Link>
            );
          })}
        </div>

        {/* Social */}
        <div className="mt-16 rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-sm">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Follow NEASX Labs
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400">
            Stay up to date with product launches, company news and behind
            the scenes.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="https://x.com/neasxlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              <AtSign size={16} />
              Twitter / X
            </Link>

            <Link
              href="https://instagram.com/neasxlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              <Camera size={16} />
              Instagram
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}