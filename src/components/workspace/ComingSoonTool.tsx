"use client";

import { Clock, Bell, Palette, AudioLines, ScanEye, Sparkles, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { DemoBadge } from "./shared";
import type { ToolProduct } from "@/app/workspace/[slug]/page";

const ICONS: Record<string, LucideIcon> = {
  studio: Palette,
  voice: AudioLines,
  vision: ScanEye,
};

export default function ComingSoonTool({ product }: { product: ToolProduct }) {
  const Icon = ICONS[product.slug] ?? Sparkles;

  return (
    <div className="flex min-h-[480px] flex-col items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.03] px-8 py-16 text-center backdrop-blur-sm">
      <span
        className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${product.gradient} text-white`}
      >
        <Icon size={30} />
      </span>

      <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-300">
        <Clock size={13} />
        Coming soon
      </span>

      <h1 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white">
        {product.name}
      </h1>
      <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
        {product.description}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
        >
          <Bell size={15} />
          Get notified
        </Link>
        <Link
          href="/#products"
          className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.08]"
        >
          Explore other products
        </Link>
      </div>

      <div className="mt-8">
        <DemoBadge demo />
      </div>
    </div>
  );
}
