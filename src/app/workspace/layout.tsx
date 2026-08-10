import { redirect } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import { LayoutGrid, Home } from "lucide-react";
import LogoutButton from "@/components/auth/LogoutButton";
import CreditsBadge from "@/components/workspace/CreditsBadge";
import { getCurrentUser } from "@/lib/session";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export default async function WorkspaceLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const available = products.filter((p) => p.status === "AVAILABLE");
  const comingSoon = products.filter((p) => p.status === "COMING SOON");

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[170px]" />
        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-[170px]" />
      </div>

      {/* Top bar */}
      <header className="border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-black tracking-[-0.02em] text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-sm text-white">
                <Home size={16} />
              </span>
              NEASX
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <CreditsBadge initial={user.credits} />

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              <LayoutGrid size={16} />
              Dashboard
            </Link>

            <LogoutButton />
          </div>
        </div>

        {/* Tool switcher */}
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 pb-4">
          <div className="flex min-w-max items-center gap-2">
            {available.map((p) => (
              <Link
                key={p.slug}
                href={`/workspace/${p.slug}`}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
              >
                {p.name.replace("NEASX ", "")}
              </Link>
            ))}

            <span className="mx-2 h-4 w-px bg-white/10" />

            {comingSoon.map((p) => (
              <span
                key={p.slug}
                title="Coming soon"
                className={cn(
                  "cursor-not-allowed rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 text-xs font-semibold text-slate-600"
                )}
              >
                {p.name.replace("NEASX ", "")} · Soon
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">{children}</main>
    </div>
  );
}
