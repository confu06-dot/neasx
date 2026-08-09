import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full px-6 sm:px-10 lg:px-16",
        className
      )}
    >
      {children}
    </div>
  );
}