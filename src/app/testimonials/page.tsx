import React from "react";
import { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { sampleTestimonials } from "@/components/sections/TestimonialsSection";
import { TestimonialForm } from "@/components/forms/TestimonialForm";

export const metadata: Metadata = constructMetadata({
  title: "Customer Reviews | Mudra Gold Gorakhpur",
  description:
    "Read what customers say about selling their gold and silver at Mudra Gold. Transparent process, best rates and instant payment, in their own words.",
  canonicalUrl: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-navy-50/60 via-white to-white py-16 sm:py-24 border-b border-navy-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="gold">Customer Voices</Badge>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 tracking-tight">
              Customer Experiences & Reviews
            </h1>
            <p className="text-base sm:text-lg text-navy-700/80 leading-relaxed pt-2">
              Transparency and respect are the foundation of Mudra Gold. Discover what sellers have to say about our testing accuracy, store environment, and instant payouts.
            </p>
          </div>
        </Container>
      </section>

      {/* Testimonials List */}
      <section className="py-16 sm:py-24 bg-white border-b border-navy-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-navy-50/40 rounded-xl p-8 border border-navy-100 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-gold-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-500" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-gold-400/30" />

                  <p className="text-sm text-navy-900/90 italic leading-relaxed">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-navy-100">
                  <span className="font-serif font-bold text-base text-navy-950 block">
                    {t.name}
                  </span>
                  <span className="text-xs text-navy-500 block">
                    {t.city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Submission Form Section */}
      <section className="py-16 sm:py-24 bg-navy-50/40 border-t border-navy-100" id="submit-review">
        <Container size="narrow">
          <TestimonialForm />
        </Container>
      </section>
    </div>
  );
}
