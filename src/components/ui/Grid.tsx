import { cn } from "@/lib/utils";

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export default function Grid({
  children,
  className,
}: GridProps) {
  return (
    <div
      className={cn(
        "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}