import React, { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold tracking-wider uppercase text-navy-900"
          >
            {label} {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-navy-950 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-colors disabled:bg-navy-50 disabled:cursor-not-allowed",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-navy-200 hover:border-navy-300",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-navy-500 mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
