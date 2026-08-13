import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Check, X, Minus } from "lucide-react";

export const metadata: Metadata = {
  title: "Compare NEASX",
  description:
    "See how NEASX compares to other AI platforms. Feature comparison, pricing, and ecosystem advantages.",
  keywords: [
    "NEASX vs ChatGPT",
    "NEASX vs Claude",
    "AI platform comparison",
    "best AI tools",
  ],
};

const competitors = [
  { name: "NEASX", color: "from-blue-500 to-violet-500" },
  { name: "ChatGPT Plus", color: "from-emerald-500 to-teal-500" },
  { name: "Claude Pro", color: "from-amber-500 to-orange-500" },
  { name: "Gemini Advanced", color: "from-purple-500 to-pink-500" },
];

const features = [
  {
    category: "Products & Features",
    items: [
      {
        name: "AI Writing Workspace",
        neasx: true,
        chatgpt: true,
        claude: true,
        gemini: true,
      },
      {
        name: "Intelligent Chat",
        neasx: true,
        chatgpt: true,
        claude: true,
        gemini: true,
      },
      {
        name: "Autonomous AI Agents",
        neasx: true,
        chatgpt: false,
        claude: false,
        gemini: false,
      },
      {
        name: "Creative Studio (Images/Video)",
        neasx: true,
        chatgpt: "partial",
        claude: false,
        gemini: "partial",
      },
      {
        name: "Voice Intelligence",
        neasx: true,
        chatgpt: "partial",
        claude: false,
        gemini: false,
      },
      {
        name: "Vision/OCR",
        neasx: true,
        chatgpt: true,
        claude: true,
        gemini: true,
      },
      {
        name: "Developer API",
        neasx: true,
        chatgpt: true,
        claude: true,
        gemini: true,
      },
    ],
  },
  {
    category: "Ecosystem",
    items: [
      {
        name: "All products in one account",
        neasx: true,
        chatgpt: false,
        claude: false,
        gemini: false,
      },
      {
        name: "Unified credit system",
        neasx: true,
        chatgpt: false,
        claude: false,
        gemini: false,
      },
      {
        name: "Cross-product workflows",
        neasx: true,
        chatgpt: false,
        claude: false,
        gemini: false,
      },
      {
        name: "Shared workspace",
        neasx: true,
        chatgpt: false,
        claude: false,
        gemini: false,
      },
    ],
  },
  {
    category: "Enterprise",
    items: [
      {
        name: "Team collaboration",
        neasx: true,
        chatgpt: true,
        claude: true,
        gemini: true,
      },
      {
        name: "SSO & SAML",
        neasx: true,
        chatgpt: true,
        claude: true,
        gemini: true,
      },
      {
        name: "Custom AI models",
        neasx: true,
        chatgpt: "partial",
        claude: false,
        gemini: false,
      },
      {
        name: "On-premise deployment",
        neasx: true,
        chatgpt: false,
        claude: false,
        gemini: false,
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        name: "Free plan available",
        neasx: true,
        chatgpt: true,
        claude: true,
        gemini: true,
      },
      {
        name: "Pro plan price",
        neasx: "$20/mo",
        chatgpt: "$20/mo",
        claude: "$20/mo",
        gemini: "$20/mo",
      },
      {
        name: "Unlimited usage in Pro",
        neasx: true,
        chatgpt: "partial",
        claude: "partial",
        gemini: "partial",
      },
    ],
  },
];

function FeatureCell({ value }: { value: boolean | string | "partial" }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15">
          <Check size={14} className="text-emerald-400" />
        </div>
      </div>
    );
  }

  if (value === false) {
    return (
      <div className="flex justify-center">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700/30">
          <X size={14} className="text-slate-600" />
        </div>
      </div>
    );
  }

  if (value === "partial") {
    return (
      <div className="flex justify-center">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/15">
          <Minus size={14} className="text-amber-400" />
        </div>
      </div>
    );
  }

  return <div className="text-center text-sm text-slate-300">{value}</div>;
}

export default function ComparePage() {
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
            <Badge>Comparison</Badge>

            <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              How NEASX{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                compares
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              One ecosystem, seven products, unified experience. See how NEASX
              stacks up against other AI platforms.
            </p>
          </div>

          {/* Comparison table */}
          <div className="mt-16 overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header */}
              <div className="grid grid-cols-5 gap-4 rounded-t-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <div className="font-semibold text-white">Features</div>
                {competitors.map((comp) => (
                  <div key={comp.name} className="text-center">
                    <div
                      className={`mx-auto mb-2 h-10 w-10 rounded-xl bg-gradient-to-br ${comp.color}`}
                    />
                    <p className="text-sm font-semibold text-white">
                      {comp.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Feature rows */}
              {features.map((section, sectionIndex) => (
                <div key={section.category}>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-300">
                      {section.category}
                    </h3>
                  </div>

                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="grid grid-cols-5 gap-4 border-b border-white/5 p-6 transition-colors hover:bg-white/[0.02]"
                    >
                      <div className="text-sm text-slate-300">{item.name}</div>
                      <FeatureCell value={item.neasx} />
                      <FeatureCell value={item.chatgpt} />
                      <FeatureCell value={item.claude} />
                      <FeatureCell value={item.gemini} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15">
                <Check size={12} className="text-emerald-400" />
              </div>
              Included
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/15">
                <Minus size={12} className="text-amber-400" />
              </div>
              Partial / Limited
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-700/30">
                <X size={12} className="text-slate-600" />
              </div>
              Not available
            </div>
          </div>
        </Container>
      </Section>

      {/* Why NEASX */}
      <Section className="!py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white">
                Why choose NEASX?
              </h2>

              <ul className="mt-6 space-y-4">
                {[
                  "One account unlocks all 7 AI products",
                  "Unified credit system across products",
                  "Cross-product workflows and automation",
                  "Enterprise-grade security and compliance",
                  "Free to start, scale as you grow",
                ].map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                      <Check size={11} className="text-emerald-400" />
                    </span>
                    <span className="text-sm leading-7 text-slate-300">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="/signup">
                  <Button icon>Start Free Today</Button>
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white">
                Still not sure?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Every plan comes with full access to the NEASX ecosystem. Try
                it free and see the difference yourself.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  href="/pricing"
                  className="block rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  View pricing plans →
                </Link>

                <Link
                  href="/contact"
                  className="block rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Talk to sales →
                </Link>

                <Link
                  href="/#products"
                  className="block rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Explore products →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
