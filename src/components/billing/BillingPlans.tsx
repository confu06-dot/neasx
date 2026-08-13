"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Start exploring with basic access to every product.",
    features: [
      "Access to all 7 products",
      "30,000 credits / month",
      "1 workspace",
      "Community support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$20",
    period: "/mo",
    description: "For individuals who need full AI power, every day.",
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
    id: "business",
    name: "Business",
    price: "Custom",
    period: "",
    description: "For teams that need security, control and scale.",
    features: [
      "Everything in Pro",
      "Team management & SSO",
      "Centralized billing",
      "Custom AI models",
      "Dedicated support",
    ],
  },
];

export default function BillingPlans({ currentPlan }: { currentPlan: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function choosePlan(planId: string) {
    setError("");
    setMessage("");

    if (planId === currentPlan) return;

    if (planId === "business") {
      router.push("/contact");
      return;
    }

    setLoading(planId);
    try {
      const res = await fetch("/api/billing/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setMessage(
        planId === "pro"
          ? "You're on the Pro plan now. Enjoy unlimited AI power!"
          : "You're back on the Free plan."
      );
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div>
      {error && (
        <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {message && (
        <div className="mb-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
          {message}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const isCurrent = plan.id === currentPlan;
          const isBusy = loading === plan.id;

          return (
            <div
              key={plan.id}
              className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-all duration-500 ${
                plan.featured
                  ? "border-blue-400/30 bg-gradient-to-b from-blue-500/[0.09] to-white/[0.02] shadow-2xl shadow-blue-950/30"
                  : "border-white/10 bg-white/[0.025]"
              }`}
            >
              {isCurrent && (
                <span className="absolute right-6 top-6 rounded-full border border-emerald-400/25 bg-emerald-500/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-300">
                  Current
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
                {isCurrent ? (
                  <Button variant="secondary" className="w-full" disabled>
                    Current plan
                  </Button>
                ) : plan.id === "business" ? (
                  <Link href="/contact" className="block">
                    <Button variant="secondary" className="w-full">
                      Contact Sales
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant={plan.featured ? "primary" : "secondary"}
                    className="w-full"
                    disabled={isBusy}
                    onClick={() => choosePlan(plan.id)}
                  >
                    {isBusy ? "Updating..." : "Switch plan"}
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs text-slate-500">
        All transactions are encrypted with 256-bit SSL security and processed instantly.
      </p>
    </div>
  );
}
