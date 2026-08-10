"use client";

import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function CreditsBadge({ initial }: { initial: number }) {
  const [credits, setCredits] = useState(initial);

  useEffect(() => {
    const update = async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data?.user && typeof data.user.credits === "number") {
          setCredits(data.user.credits);
        }
      } catch {
        // Ignore — keep current value.
      }
    };

    window.addEventListener("neasx:credits", update);
    return () => window.removeEventListener("neasx:credits", update);
  }, []);

  return (
    <Link
      href="/dashboard/billing"
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-amber-300 transition hover:bg-white/[0.08]"
      title="Credits remaining"
    >
      <Zap size={14} />
      {credits.toLocaleString()}
      <span className="text-slate-500">credits</span>
    </Link>
  );
}
