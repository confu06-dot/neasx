import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, Sparkles, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import BillingPlans from "@/components/billing/BillingPlans";
import { getCurrentUser } from "@/lib/session";

export const metadata: Metadata = {
  title: "Billing & Plan",
  description: "Manage your NEASX plan, subscription and credits.",
};

const planLabel: Record<string, string> = {
  free: "Free",
  pro: "Pro",
  business: "Business",
};

export default async function BillingPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const planName = planLabel[user.plan] ?? "Free";

  return (
    <Section className="relative min-h-screen overflow-hidden !pt-28 !pb-20 lg:!pt-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />
        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <div className="mx-auto mt-8 max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              Billing & plan
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
              Choose the plan that{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                fits your work
              </span>
            </h1>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Start free. Upgrade when you&apos;re ready. No hidden fees.
            </p>
          </div>

          {/* Current plan summary */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-violet-400">
                <Sparkles size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Current plan
                </span>
              </div>

              <p className="mt-3 text-4xl font-black text-white">{planName}</p>

              <p className="mt-2 text-xs text-slate-500">
                You&apos;re on the {planName.toLowerCase()} plan. Switch anytime
                below.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-blue-400">
                <Zap size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Credits
                </span>
              </div>

              <p className="mt-3 text-4xl font-black text-white">
                {user.credits.toLocaleString()}
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Available credits on your {planName.toLowerCase()} plan.
              </p>
            </div>
          </div>

          {/* Plans */}
          <div className="mt-10">
            <BillingPlans currentPlan={user.plan} />
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
            <h2 className="text-lg font-bold text-white">
              Payment method &amp; invoices
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Your billing and subscription preferences are active. Plan changes and credit refills are applied immediately to your account balance.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
