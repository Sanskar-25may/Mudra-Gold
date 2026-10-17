import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: "warm" | "white" | "dark" | "gold-subtle";
  spacing?: "none" | "sm" | "md" | "lg";
}

export function Section({
  className,
  background = "warm",
  spacing = "md",
  children,
  ...props
}: SectionProps) {
  const bgStyles = {
    warm: "bg-navy-50/50 text-navy-950",
    white: "bg-white text-navy-950",
    dark: "bg-navy-950 text-white",
    "gold-subtle": "bg-gold-50/50 text-navy-950 border-y border-gold-200/60",
  };

  const spacingStyles = {
    none: "py-0",
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16 lg:py-20",
    lg: "py-16 sm:py-24 lg:py-28",
  };

  return (
    <section
      className={cn(bgStyles[background], spacingStyles[spacing], className)}
      {...props}
    >
      {children}
    </section>
  );
}
