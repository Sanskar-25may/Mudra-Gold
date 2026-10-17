import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "dark" | "neutral" | "success" | "outline";
}

export function Badge({
  className,
  variant = "gold",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    gold: "bg-gold-50 text-gold-900 border border-gold-300 font-semibold shadow-2xs",
    dark: "bg-navy-900 text-gold-300 border border-navy-700 font-semibold shadow-2xs",
    neutral: "bg-navy-50 text-navy-800 border border-navy-200 font-medium",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium",
    outline: "bg-transparent text-navy-800 border border-navy-300 font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs tracking-wide uppercase font-semibold",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
