import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Check, Sparkles, Zap, Building2, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for NEASX AI products. Start free, upgrade when you're ready. No hidden fees.",
  keywords: [
    "NEASX pricing",
    "AI pricing",
    "AI subscription",
    "AI tools pricing",
    "affordable AI",
  ],
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Perfect for exploring the NEASX ecosystem.",
    cta: "Get Started",
    href: "/signup",
    featured: false,
    icon: Sparkles,
    features: [
      "Access to all 7 products",
      "30 AI actions / month",
      "1 workspace",
      "Community support",
      "Basic models",
    ],
    limitations: [
      "Limited AI credits",
      "Standard response time",
    ],
  },
  {
    name: "Starter",
    price: "$12",
    period: "/mo",
    description: "For individuals getting started with AI.",
    cta: "Start Free Trial",
    href: "/signup",
    featured: false,
    icon: Zap,
    features: [
      "Everything in Free",
      "300 AI actions / month",
      "3 workspaces",
      "Priority support",
      "Advanced models",
      "Longer context windows",
    ],
    limitations: [],
  },
  {
    name: "Pro",
    price: "$20",
    period: "/mo",
    description: "For power users who need unlimited AI.",
    cta: "Start Free Trial",
    href: "/signup",
    featured: true,
    icon: Zap,
    features: [
      "Everything in Starter",
      "Unlimited AI actions",
      "Unlimited workspaces",
      "Priority support",
      "Early access to new products",
      "API access (10K requests/mo)",
      "Advanced AI agents",
      "Custom instructions",
    ],
    limitations: [],
  },
  {
    name: "Business",
    price: "$50",
    period: "/user/mo",
    description: "For teams that need collaboration and control.",
    cta: "Start Free Trial",
    href: "/signup",
    featured: false,
    icon: Building2,
    features: [
      "Everything in Pro",
      "Team management (5+ users)",
      "Centralized billing",
      "SSO & SAML",
      "Shared workspaces",
      "Admin dashboard",
      "API access (100K requests/mo)",
      "Custom AI models",
      "Audit logs",
    ],
    limitations: [],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations that need security at scale.",
    cta: "Contact Sales",
    href: "/contact",
    featured: false,
    icon: Building2,
    features: [
      "Everything in Business",
      "Unlimited users",
      "Custom contracts & SLAs",
      "Dedicated support",
      "On-premise deployment options",
      "Custom integrations",
      "Volume discounts",
      "Training & onboarding",
      "HIPAA / SOC 2 compliance",
    ],
    limitations: [],
  },
];

const faqs = [
  {
    question: "What are AI actions?",
    answer:
      "An AI action is any request you make to a NEASX product — a Writer generation, a Chat message, an Agent task, an image generation, etc. Free users get 30 actions per month, Starter gets 300, and Pro users get unlimited.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel your subscription at any time from your dashboard. You'll keep access until the end of your billing period.",
  },
  {
    question: "Do unused credits roll over?",
    answer:
      "No. Credits reset at the beginning of each billing cycle. Pro users have unlimited credits, so this doesn't apply.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, Amex) via Stripe. Enterprise customers can arrange invoicing.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. All paid plans come with a 7-day free trial. No credit card required to start with the Free plan.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer:
      "You'll be notified when you're close to your limit. Once exceeded, you can upgrade your plan or wait until the next billing cycle.",
  },
];

export default function PricingPage() {
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
            <Badge>Pricing</Badge>

            <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Simple pricing.{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                One ecosystem.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Start free. Upgrade when you're ready. One account unlocks
              every NEASX product. No hidden fees.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {plans.slice(0, 3).map((plan) => {
              const Icon = plan.icon;

              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${
                    plan.featured
                      ? "border-blue-400/30 bg-gradient-to-b from-blue-500/[0.09] to-white/[0.02] shadow-2xl shadow-blue-950/30 lg:scale-[1.05]"
                      : "border-white/10 bg-white/[0.025] hover:border-blue-400/20"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-6 top-6 rounded-full border border-blue-400/25 bg-blue-500/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-blue-300">
                      Most Popular
                    </span>
                  )}

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tight text-white">
                      {plan.price}
                    </span>

                    <span className="text-sm text-slate-500">
                      {plan.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {plan.description}
                  </p>

                  <div className="my-7 h-px w-full bg-white/10" />

                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                          <Check size={11} className="text-emerald-400" />
                        </span>

                        <span className="text-sm text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}

                    {plan.limitations.map((limitation) => (
                      <li
                        key={limitation}
                        className="flex items-start gap-3 opacity-60"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700/30">
                          <X size={11} className="text-slate-500" />
                        </span>

                        <span className="text-sm text-slate-500">
                          {limitation}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link href={plan.href} className="block">
                      <Button
                        variant={plan.featured ? "primary" : "secondary"}
                        className="w-full"
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Business & Enterprise */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {plans.slice(3, 5).map((plan) => {
              const Icon = plan.icon;

              return (
                <div
                  key={plan.name}
                  className="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-black tracking-tight text-white">
                      {plan.price}
                    </span>

                    <span className="text-sm text-slate-500">
                      {plan.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {plan.description}
                  </p>

                  <div className="my-7 h-px w-full bg-white/10" />

                  <ul className="flex-1 grid gap-3 sm:grid-cols-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                          <Check size={11} className="text-emerald-400" />
                        </span>

                        <span className="text-sm text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link href={plan.href} className="block">
                      <Button variant="secondary" className="w-full">
                        {plan.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs text-slate-600">
            All plans include access to the full NEASX ecosystem. Prices in
            USD.
          </p>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="!py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-black tracking-tight text-white sm:text-4xl">
              Frequently asked questions
            </h2>

            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-bold text-white">
                    {faq.question}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-slate-400">
                Still have questions?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-blue-400 transition hover:text-cyan-300"
                >
                  Contact our team →
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="!py-20">
        <Container>
          <div className="rounded-[40px] border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.09] via-[#0b1220]/90 to-violet-500/[0.09] px-8 py-16 text-center sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight tracking-[-0.03em] text-white sm:text-4xl">
              Ready to get started with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                NEASX?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
              Start for free. No credit card required. Upgrade anytime.
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
