import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Section({
  children,
  id,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      // w-full eklenerek tüm bölümlerin ekranı baştan sona kaplaması garanti altına alındı
      className={cn("w-full py-24 lg:py-32", className)}
    >
      {children}
    </section>
  );
}