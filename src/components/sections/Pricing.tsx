import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Start exploring with basic access to every product.",
    cta: "Get Started",
    featured: false,
    features: [
      "Access to all 7 products",
      "30 AI actions / month",
      "1 workspace",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$20",
    period: "/mo",
    description: "For individuals who need full AI power, every day.",
    cta: "Start Free Trial",
    featured: true,
    features: [
      "Unlimited AI actions",
      "Advanced models & agents",
      "Unlimited workspaces",
      "Priority support",
      "Early access features",
    ],
  },
  {
    name: "Business",
    price: "Custom",
    period: "",
    description: "For teams that need security, control and scale.",
    cta: "Contact Sales",
    featured: false,
    features: [
      "Everything in Pro",
      "Team management & SSO",
      "Centralized billing",
      "Custom AI models",
      "Dedicated support",
    ],
  },
];

export default function Pricing() {
  return (
    <Section id="pricing" className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-[140px]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Pricing</Badge>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
            Simple pricing.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              One ecosystem.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Start free. Upgrade when you're ready. No hidden fees.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${
                plan.featured
                  ? "border-blue-400/30 bg-gradient-to-b from-blue-500/[0.09] to-white/[0.02] shadow-2xl shadow-blue-950/30 lg:scale-[1.03]"
                  : "border-white/10 bg-white/[0.025] hover:border-blue-400/20"
              }`}
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full border border-blue-400/25 bg-blue-500/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-blue-300">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold text-white">{plan.name}</h3>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-5xl font-black tracking-tight text-white">
                  {plan.price}
                </span>

                <span className="text-sm text-slate-500">{plan.period}</span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                {plan.description}
              </p>

              <div className="my-7 h-px w-full bg-white/10" />

              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                      <Check size={11} className="text-emerald-400" />
                    </span>

                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="#" className="block">
                  <Button
                    variant={plan.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-600">
          All plans include access to the full NEASX ecosystem.
        </p>
      </Container>
    </Section>
  );
}