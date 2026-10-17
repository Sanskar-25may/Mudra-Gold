import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "gold-bordered" | "dark";
}

export function Card({
  className,
  variant = "default",
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-white border border-navy-100 shadow-sm",
    elevated: "bg-white border border-navy-100/90 shadow-md hover:shadow-lg transition-shadow duration-200",
    "gold-bordered":
      "bg-white border-2 border-gold-400/90 shadow-md relative overflow-hidden",
    dark: "bg-navy-900 border border-navy-800 text-white shadow-lg",
  };

  return (
    <div
      className={cn("rounded-xl p-6 sm:p-8", variantStyles[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}
