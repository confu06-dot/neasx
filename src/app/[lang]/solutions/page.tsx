import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  UserRound,
  Rocket,
  Code2,
  Building2,
  Users,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI solutions for freelancers, startups, developers, teams and enterprises. Find the right NEASX products for your workflow.",
  keywords: [
    "AI for freelancers",
    "AI for startups",
    "AI for developers",
    "AI for teams",
    "AI for enterprise",
    "business AI solutions",
  ],
};

const solutions = [
  {
    icon: UserRound,
    title: "For Freelancers",
    subtitle: "Save hours every week",
    description:
      "Automate repetitive work, generate content faster and deliver more to your clients without burning out.",
    gradient: "from-cyan-500 to-blue-500",
    benefits: [
      "Generate blog posts and marketing copy with Writer",
      "Research topics and competitors with Chat",
      "Automate client reporting with Agent",
      "Create social media graphics with Studio",
    ],
    cta: "Start Free",
    href: "/signup",
  },
  {
    icon: Rocket,
    title: "For Startups",
    subtitle: "Build and automate faster",
    description:
      "Ship products quicker with AI-powered workflows, research and automation that scale with your growth.",
    gradient: "from-violet-500 to-fuchsia-500",
    benefits: [
      "Generate product documentation instantly",
      "Automate customer support responses",
      "Research market trends and competitors",
      "Create marketing assets at scale",
    ],
    cta: "Start Free",
    href: "/signup",
  },
  {
    icon: Code2,
    title: "For Developers",
    subtitle: "Build AI into your products",
    description:
      "Integrate NEASX APIs and SDKs to add intelligence to your applications. Build faster with ready-made AI infrastructure.",
    gradient: "from-blue-500 to-violet-500",
    benefits: [
      "Access all NEASX products via unified API",
      "Pre-built SDKs for popular languages",
      "Webhook support for async workflows",
      "Usage tracking and analytics dashboard",
    ],
    cta: "View API Docs",
    href: "/docs",
  },
  {
    icon: Users,
    title: "For Teams",
    subtitle: "Collaborate with AI",
    description:
      "Give your team AI superpowers. Share workspaces, manage credits and collaborate on AI-powered projects.",
    gradient: "from-emerald-500 to-teal-500",
    benefits: [
      "Shared workspaces and projects",
      "Team usage analytics and reporting",
      "Centralized billing and credit management",
      "Role-based access control",
    ],
    cta: "Start Free Trial",
    href: "/signup",
  },
  {
    icon: Building2,
    title: "For Enterprise",
    subtitle: "AI infrastructure for organizations",
    description:
      "Deploy scalable AI infrastructure with security, privacy and control built in. Custom models, SSO and dedicated support.",
    gradient: "from-slate-400 to-slate-600",
    benefits: [
      "SSO & SAML authentication",
      "On-premise deployment options",
      "Custom AI models and fine-tuning",
      "HIPAA / SOC 2 compliance available",
      "Dedicated account manager",
      "Custom SLAs and contracts",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
];

const useCases = [
  "Content Creation",
  "Market Research",
  "Customer Support",
  "Data Analysis",
  "Report Generation",
  "Social Media Management",
  "Email Automation",
  "Document Processing",
  "Image Generation",
  "Voice Synthesis",
  "Translation",
  "Summarization",
];

export default function SolutionsPage() {
  return (
    <>
      <Section className="relative overflow-hidden !pt-32 !pb-16 lg:!pt-36">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />
          <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Solutions</Badge>

            <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              AI that fits{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                your workflow.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              From individual freelancers to enterprise teams, NEASX products
              adapt to how you work. One ecosystem, infinite use cases.
            </p>
          </div>

          {/* Solutions */}
          <div className="mt-16 space-y-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025] backdrop-blur-sm transition-all duration-500 hover:border-blue-400/20 hover:bg-white/[0.04]"
                >
                  <div className="grid gap-8 p-8 lg:grid-cols-[1fr_1.2fr] lg:p-10">
                    {/* Left */}
                    <div>
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${solution.gradient}`}
                      >
                        <Icon size={26} />
                      </div>

                      <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300/60">
                        {solution.subtitle}
                      </p>

                      <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                        {solution.title}
                      </h2>

                      <p className="mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                        {solution.description}
                      </p>

                      <div className="mt-8">
                        <Link href={solution.href}>
                          <Button
                            variant={index === 4 ? "secondary" : "primary"}
                          >
                            {solution.cta}
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        What you can do
                      </p>

                      <ul className="mt-5 space-y-3">
                        {solution.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                              <Check size={11} className="text-emerald-400" />
                            </span>

                            <span className="text-sm text-slate-300">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section className="!py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Endless use cases
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-400">
              NEASX products work across industries and functions. Here are
              just a few ways people use the ecosystem.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {useCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/25 hover:bg-white/[0.06] hover:text-white"
              >
                {useCase}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#products"
              className="text-sm font-semibold text-blue-400 transition hover:text-cyan-300"
            >
              Explore all products →
            </Link>
          </div>
        </Container>
      </Section>

      {/* Comparison */}
      <Section className="!py-20">
        <Container>
          <div className="rounded-[40px] border border-white/10 bg-white/[0.025] p-10 backdrop-blur-sm sm:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Why choose NEASX?
              </h2>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-3xl font-black text-white">7+</p>
                  <p className="mt-2 text-sm text-slate-400">
                    AI products in one ecosystem
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-3xl font-black text-white">1</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Account for everything
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-3xl font-black text-white">Free</p>
                  <p className="mt-2 text-sm text-slate-400">
                    To start, forever
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="!py-20">
        <Container>
          <div className="rounded-[40px] border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.09] via-[#0b1220]/90 to-violet-500/[0.09] px-8 py-16 text-center sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight tracking-[-0.03em] text-white sm:text-4xl">
              Find the right solution for{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                your team.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
              Start with the Free plan or talk to sales about Enterprise.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/signup">
                <Button icon>Start Free Today</Button>
              </Link>

              <Link href="/contact">
                <Button variant="secondary">Talk to Sales</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
