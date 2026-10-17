"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Star, CheckCircle2, AlertCircle } from "lucide-react";
import { testimonialSchema, TestimonialFormData } from "@/lib/validators";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export function TestimonialForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [rating, setRating] = useState<number>(5);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      rating: 5,
      city: "",
      comment: "",
      name: "",
    },
  });

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    setValue("rating", newRating);
  };

  const onSubmit = async (data: TestimonialFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setIsSuccess(true);
        reset();
      } else {
        setServerError(result.error || "Failed to submit review.");
      }
    } catch {
      setServerError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
        <h3 className="font-serif text-lg font-bold text-emerald-950">
          Thank You for Your Feedback!
        </h3>
        <p className="text-xs sm:text-sm text-emerald-800">
          Your review has been submitted for moderation and will appear on our website shortly.
        </p>
        <Button variant="outline" size="sm" onClick={() => setIsSuccess(false)} className="border-navy-300 text-navy-900 hover:bg-navy-50">
          Submit Another Review
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl border border-navy-100 p-6 sm:p-8 shadow-sm space-y-4 text-left"
    >
      <h3 className="font-serif text-xl font-bold text-navy-950">Share Your Experience</h3>
      <p className="text-xs sm:text-sm text-navy-700/80">
        We value transparent customer feedback. Tell other sellers about your experience at Mudra Gold.
      </p>

      {serverError && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-xs text-red-800 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Name"
          placeholder="e.g. Sunil Dubey"
          required
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          label="Your City"
          placeholder="e.g. Gorakhpur"
          required
          error={errors.city?.message}
          {...register("city")}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold tracking-wider uppercase text-navy-900 mb-1.5">
          Your Rating
        </label>
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => handleRatingChange(star)}
              className="p-1 text-gold-400 hover:text-gold-500 focus:outline-none"
              aria-label={`${star} star rating`}
            >
              <Star
                className={`w-6 h-6 ${
                  star <= rating ? "fill-gold-400 text-gold-500" : "text-navy-200"
                }`}
              />
            </button>
          ))}
          <span className="text-xs font-medium text-navy-600 ml-2">
            {rating} of 5 Stars
          </span>
        </div>
      </div>

      <Textarea
        label="Your Review / Comments"
        rows={4}
        placeholder="How was the cleaning, purity testing, customer service, or valuation accuracy?"
        required
        error={errors.comment?.message}
        {...register("comment")}
      />

      <Button
        type="submit"
        variant="primary"
        size="md"
        isLoading={isSubmitting}
        className="w-full"
      >
        Submit Testimonial
      </Button>

      <p className="text-center text-[11px] text-navy-400">
        All reviews undergo basic moderation to filter spam before appearing publicly.
      </p>
    </form>
  );
}
