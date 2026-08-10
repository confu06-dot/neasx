"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Loader2, Sparkles, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export function DemoBadge({ demo }: { demo?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
        demo
          ? "border border-amber-400/20 bg-amber-500/10 text-amber-300"
          : "border border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
      )}
    >
      {demo ? <Cpu size={12} /> : <Sparkles size={12} />}
      {demo ? "Demo AI" : "Live AI"}
    </span>
  );
}

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(id);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      // Clipboard unavailable — ignore.
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition",
        copied
          ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
          : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
      )}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? "Copied" : label}
    </button>
  );
}

export function LoadingIndicator({ label = "Thinking…" }: { label?: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-400">
      <Loader2 size={15} className="animate-spin text-blue-400" />
      {label}
    </div>
  );
}

export function ErrorNote({ message }: { message: string }) {
  if (!message) return null;
  return (
    <p className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
      {message}
    </p>
  );
}

export function ToolHeader({
  name,
  tagline,
  gradient,
  demo,
}: {
  name: string;
  tagline: string;
  gradient: string;
  demo?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h1 className="text-2xl font-black tracking-[-0.02em] text-white sm:text-3xl">
          {name}
        </h1>
        <p className="mt-1 text-sm text-slate-400">{tagline}</p>
      </div>
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "hidden h-2.5 w-2.5 rounded-full bg-gradient-to-br sm:block",
            gradient
          )}
        />
        {demo !== undefined && <DemoBadge demo={demo} />}
      </div>
    </div>
  );
}
