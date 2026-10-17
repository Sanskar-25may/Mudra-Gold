import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-md shadow-sm";

    const variantStyles = {
      primary:
        "bg-navy-900 text-gold-300 hover:bg-navy-950 hover:text-white border border-navy-800 shadow-sm",
      secondary:
        "bg-white text-navy-900 hover:bg-navy-50 border border-navy-200 shadow-2xs",
      gold: "bg-gold-500 text-navy-950 hover:bg-gold-400 font-bold shadow-md shadow-gold-500/25 border border-gold-400 active:bg-gold-600",
      outline:
        "bg-transparent text-navy-800 border border-navy-300 hover:bg-navy-50 hover:border-navy-400",
      ghost:
        "bg-transparent text-navy-800 hover:bg-navy-50 shadow-none border-transparent",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 min-h-[36px]",
      md: "text-sm px-5 py-2.5 min-h-[44px]",
      lg: "text-base px-6 py-3 min-h-[48px]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
