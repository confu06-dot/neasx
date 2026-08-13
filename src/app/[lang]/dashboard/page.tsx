import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  LifeBuoy,
  Mail,
  Sparkles,
  Zap,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import LogoutButton from "@/components/auth/LogoutButton";
import { getCurrentUser } from "@/lib/session";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your NEASX workspace — credits, plans and products.",
};

const planLabel: Record<string, string> = {
  free: "Free",
  pro: "Pro",
  business: "Business",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  const firstName = user.name.trim().split(" ")[0];
  const available = products.filter((p) => p.status === "AVAILABLE");
  const planName = planLabel[user.plan] ?? "Free";

  return (
    <Section className="relative min-h-screen overflow-hidden !pt-28 !pb-20 lg:!pt-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />
        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              Dashboard
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
              {greeting}, {firstName}.
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/dashboard/billing">
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-blue-300 transition hover:bg-white/[0.08]">
                <Sparkles size={16} />
                {planName} plan
              </span>
            </Link>

            <LogoutButton />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
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
              Credits left this cycle
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-violet-400">
              <Sparkles size={18} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Plan
              </span>
            </div>

            <p className="mt-3 text-4xl font-black text-white">{planName}</p>

            <p className="mt-2 text-xs text-slate-500">
              <Link
                href="/dashboard/billing"
                className="text-blue-400 transition hover:text-cyan-300"
              >
                Upgrade or change →
              </Link>
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400">
              <Mail size={18} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Account
              </span>
            </div>

            <p className="mt-3 truncate text-lg font-bold text-white">
              {user.email}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Member since{" "}
              {new Date(user.createdAt).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        {/* Products */}
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Your products</h2>

            <Link
              href="/#products"
              className="text-sm font-semibold text-blue-400 transition hover:text-cyan-300"
            >
              View all →
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {available.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.slug}
                  href={`/workspace/${product.slug}`}
                  className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-blue-400/20 hover:bg-white/[0.05]"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} text-white`}
                  >
                    <Icon size={20} />
                  </span>

                  <div>
                    <p className="flex items-center gap-1.5 font-semibold text-white">
                      {product.name}
                      <ArrowRight
                        size={14}
                        className="text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-blue-400"
                      />
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      {product.tagline}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-white">Quick links</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/dashboard/billing"
              className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-blue-400/20 hover:bg-white/[0.05]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white">
                <CreditCard size={20} />
              </span>

              <div>
                <p className="flex items-center gap-1 font-semibold text-white">
                  Billing & plan
                  <ArrowRight
                    size={14}
                    className="text-slate-500 transition group-hover:translate-x-0.5"
                  />
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Manage your subscription and credits
                </p>
              </div>
            </Link>

            <Link
              href="/docs"
              className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-blue-400/20 hover:bg-white/[0.05]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                <BookOpen size={20} />
              </span>

              <div>
                <p className="font-semibold text-white">Documentation</p>

                <p className="mt-1 text-sm text-slate-400">
                  API & product guides
                </p>
              </div>
            </Link>

            <Link
              href="/help"
              className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-blue-400/20 hover:bg-white/[0.05]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
                <LifeBuoy size={20} />
              </span>

              <div>
                <p className="font-semibold text-white">Help center</p>

                <p className="mt-1 text-sm text-slate-400">
                  FAQs and support
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

