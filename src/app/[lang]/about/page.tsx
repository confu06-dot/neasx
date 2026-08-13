import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { Sparkles, Layers, Shield, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About NEASX",
  description:
    "Learn about our mission, values and the team behind NEASX.",
};

const values = [
  {
    icon: Sparkles,
    title: "AI for real work",
    description:
      "We build products that solve real problems — not demos. Every NEASX product is designed to help you finish real work faster.",
  },
  {
    icon: Layers,
    title: "One ecosystem",
    description:
      "One account, one credit system, one workspace. Products work together, so your work flows seamlessly across the entire ecosystem.",
  },
  {
    icon: Shield,
    title: "Privacy first",
    description:
      "Your data belongs to you. We keep conversations private by default and never train on your data without explicit consent.",
  },
  {
    icon: TrendingUp,
    title: "Free to start",
    description:
      "30,000 free credits every month — no credit card required. Great products should be accessible to everyone.",
  },
];

export default function AboutPage() {
  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>About</Badge>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            We build a better way to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              work with AI.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
            NEASX Labs is building a growing ecosystem of AI products
            designed to automate real work and help people and businesses
            move faster. Our mission is simple: make AI powerful enough to
            do the work and simple enough for everyone to use.
          </p>
        </div>

        {/* Mission stats */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm">
            <p className="text-4xl font-black text-white">7+</p>
            <p className="mt-2 text-sm text-slate-400">Products</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm">
            <p className="text-4xl font-black text-white">30K</p>
            <p className="mt-2 text-sm text-slate-400">Free credits / month</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm">
            <p className="text-4xl font-black text-white">1</p>
            <p className="mt-2 text-sm text-slate-400">Unified ecosystem</p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-white">
            What we believe
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold tracking-tight text-white">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-sm">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Join us on the journey
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400">
            Explore the ecosystem, or come build with us.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20"
            >
              Get started free
            </Link>

            <Link
              href="/careers"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              View open roles
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}