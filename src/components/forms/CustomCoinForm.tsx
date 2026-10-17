"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { CheckCircle2, Sparkles, AlertCircle } from "lucide-react";
import { customCoinSchema, CustomCoinFormData } from "@/lib/validators";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export function CustomCoinForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomCoinFormData>({
    resolver: zodResolver(customCoinSchema),
    defaultValues: {
      weightGrams: 5,
      engraveText: "",
      occasion: "",
      notes: "",
    },
  });

  const onSubmit = async (data: CustomCoinFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/custom-coin", {
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
          result.error || "Unable to submit custom coin request. Please contact us."
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
      <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-4">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-xl font-bold text-emerald-950">
          Custom Coin Request Received!
        </h3>
        <p className="text-sm text-emerald-800 max-w-md mx-auto">
          We will review your engraving specifications and get in touch with a mockup preview and turnaround timeline.
        </p>
        <Button variant="outline" size="sm" onClick={() => setIsSuccess(false)} className="border-navy-300 text-navy-900 hover:bg-navy-50">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl border border-navy-100 p-6 sm:p-8 shadow-sm space-y-4"
    >
      <div className="flex items-center gap-4 pb-3 border-b border-navy-100">
        <div className="relative w-14 h-14 flex-shrink-0 drop-shadow-md">
          <Image
            src="/Mudra_Gold-logo.png"
            alt="Mudra Gold Coin Emblem"
            width={56}
            height={56}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-gold-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Bespoke Minting Service</span>
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-950">
            Order Customized 24K Gold or 999 Silver Coins
          </h3>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-navy-700/80">
        Personalize hallmarked gold coins with laser-engraved names, corporate logos, or auspicious wedding dates.
      </p>

      {serverError && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-xs text-red-800 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Full Name"
          placeholder="e.g. Priya Sharma"
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
        <Select
          label="Coin Weight"
          required
          options={[
            { value: "2", label: "2 Grams (24K Gold / Pure Silver)" },
            { value: "5", label: "5 Grams (24K Gold / Pure Silver)" },
            { value: "10", label: "10 Grams (24K Gold / Pure Silver)" },
          ]}
          error={errors.weightGrams?.message}
          {...register("weightGrams", { valueAsNumber: true })}
        />

        <Input
          label="Occasion / Event"
          placeholder="e.g. Wedding, Diwali, Corporate"
          error={errors.occasion?.message}
          {...register("occasion")}
        />
      </div>

      <Input
        label="Text to Engrave"
        placeholder="e.g. 'Rahul & Sneha 2026' or Company Name"
        helperText="Max 60 characters for crisp laser engraving"
        error={errors.engraveText?.message}
        {...register("engraveText")}
      />

      <Textarea
        label="Additional Requirements or Logo Instructions"
        rows={3}
        placeholder="Quantity required, delivery timeframe, or corporate packaging requirements..."
        error={errors.notes?.message}
        {...register("notes")}
      />

      <Button
        type="submit"
        variant="gold"
        size="lg"
        isLoading={isSubmitting}
        className="w-full font-bold text-navy-950"
      >
        Request Custom Coin Quote & Mockup
      </Button>
    </form>
  );
}
