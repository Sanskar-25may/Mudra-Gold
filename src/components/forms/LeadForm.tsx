"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { leadFormSchema, LeadFormData } from "@/lib/validators";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

interface LeadFormProps {
  defaultMonthlyScheme?: boolean;
  className?: string;
  title?: string;
}

export function LeadForm({
  defaultMonthlyScheme = false,
  className = "",
  title = "Get in Touch / Request Valuation",
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      state: "Uttar Pradesh",
      city: "",
      inquiryType: "sell_gold_silver",
      monthlyScheme: defaultMonthlyScheme,
      consent: true,
      honeypot: "",
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setIsSuccess(true);
        reset();
      } else {
        setServerError(
          result.error || "Something went wrong. Please call us directly."
        );
      }
    } catch {
      setServerError("Network error. Please call our branch directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-4 ${className}`}>
        <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-xl font-bold text-emerald-950">
          Enquiry Received Successfully!
        </h3>
        <p className="text-sm text-emerald-800 max-w-md mx-auto">
          Thank you for reaching out to Mudra Gold. Our valuation specialist will contact you shortly on your provided phone number.
        </p>
        <p className="text-xs text-navy-700">
          Need an immediate response? Call our branch directly at{" "}
          <strong className="text-navy-950">{siteConfig.primaryPhone}</strong>.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsSuccess(false)}
          className="mt-2 border-navy-300 text-navy-900 hover:bg-navy-50"
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`bg-white rounded-xl border border-navy-100 p-6 sm:p-8 shadow-sm space-y-5 ${className}`}
    >
      <div>
        <h3 className="font-serif text-xl font-bold text-navy-950">{title}</h3>
        <p className="text-xs sm:text-sm text-navy-700/80 mt-1">
          Fill in your details below for a quick callback and free valuation guidance.
        </p>
      </div>

      {serverError && (
        <div className="p-3.5 bg-red-50 border border-red-200 rounded-md flex items-start gap-2.5 text-xs text-red-800">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">{serverError}</p>
            <p className="mt-0.5">
              Call us directly at <strong>{siteConfig.primaryPhone}</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Hidden honeypot field for bot spam prevention */}
      <input
        type="text"
        {...register("honeypot")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Full Name"
          placeholder="e.g. Ramesh Verma"
          required
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          label="Mobile Number"
          type="tel"
          placeholder="e.g. 96213 19818"
          required
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="e.g. name@example.com (optional)"
          error={errors.email?.message}
          {...register("email")}
        />

        <Select
          label="Inquiry Type"
          required
          error={errors.inquiryType?.message}
          options={[
            { value: "sell_gold_silver", label: "Sell Old Gold & Silver" },
            { value: "gold_coin", label: "Buy Gold Coin (2g, 5g, 10g)" },
            { value: "silver_coin", label: "Buy Silver Coin" },
            { value: "custom_gift", label: "Customized Gifting Article" },
            { value: "other", label: "Other Inquiry" },
          ]}
          {...register("inquiryType")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="State"
          required
          error={errors.state?.message}
          {...register("state")}
        />

        <Input
          label="City / Town"
          placeholder="e.g. Gorakhpur, Lucknow"
          required
          error={errors.city?.message}
          {...register("city")}
        />
      </div>

      <div className="space-y-3 pt-2 border-t border-navy-100">
        <label className="flex items-start gap-2.5 cursor-pointer text-xs text-navy-800">
          <input
            type="checkbox"
            className="mt-0.5 rounded border-navy-300 text-gold-600 focus:ring-gold-500"
            {...register("monthlyScheme")}
          />
          <span>
            <strong className="text-navy-950">Swarn Vriddhi Interest:</strong> I am interested in learning more about the 11+1 month gold savings plan.
          </span>
        </label>

        <label className="flex items-start gap-2.5 cursor-pointer text-xs text-navy-800">
          <input
            type="checkbox"
            className="mt-0.5 rounded border-navy-300 text-gold-600 focus:ring-gold-500"
            {...register("consent")}
          />
          <span>
            I authorize Mudra Gold representatives to contact me via phone or WhatsApp regarding this enquiry. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-600">{errors.consent.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="gold"
        size="lg"
        isLoading={isSubmitting}
        className="w-full font-bold shadow-sm text-navy-950"
      >
        Submit Enquiry for Callback
      </Button>

      <p className="text-center text-[11px] text-navy-500">
        We respect your privacy. No spam. You can also walk into any branch directly.
      </p>
    </form>
  );
}
