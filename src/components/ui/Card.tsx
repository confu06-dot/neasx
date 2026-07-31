import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] backdrop-blur-xl transition-all duration-500",
        "hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_25px_80px_rgba(59,130,246,.18)]",
        className
      )}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-500/15 blur-[90px]" />
        <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-violet-500/15 blur-[90px]" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}