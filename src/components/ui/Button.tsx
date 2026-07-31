import { ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  icon = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
          : "border border-white/10 bg-white/5 text-white hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}

      {icon && (
        <ArrowRight
          size={18}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
}