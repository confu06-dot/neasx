import { cn } from "@/lib/utils";

interface HeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function Heading({
  badge,
  title,
  highlight,
  description,
  align = "center",
  className,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium uppercase tracking-widest text-blue-300">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}