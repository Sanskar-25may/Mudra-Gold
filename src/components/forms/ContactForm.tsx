"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validators";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
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
          result.error || "Failed to send message. Please call our branch."
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
          Message Sent Successfully!
        </h3>
        <p className="text-sm text-emerald-800 max-w-md mx-auto">
          Thank you for messaging Mudra Gold. Our customer support team will review your query and reply promptly.
        </p>
        <Button variant="outline" size="sm" onClick={() => setIsSuccess(false)} className="border-navy-300 text-navy-900 hover:bg-navy-50">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl border border-navy-100 p-6 sm:p-8 shadow-sm space-y-4"
    >
      <div>
        <h3 className="font-serif text-xl font-bold text-navy-950">Send Us a Direct Message</h3>
        <p className="text-xs sm:text-sm text-navy-700/80 mt-1">
          Have a question about gold rates, valuation procedure, or custom coins? Leave us a note.
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

      <input type="text" {...register("honeypot")} tabIndex={-1} className="hidden" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Full Name"
          placeholder="e.g. Anand Mishra"
          required
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          label="Phone Number"
          type="tel"
          placeholder="e.g. 96213 19818"
          required
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <Input
        label="Email Address (Optional)"
        type="email"
        placeholder="e.g. anand@example.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <Textarea
        label="Your Message or Query"
        rows={4}
        placeholder="Describe your requirement, approximate jewellery weight, or query..."
        required
        error={errors.message?.message}
        {...register("message")}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full font-semibold"
      >
        Send Message
      </Button>
    </form>
  );
}
