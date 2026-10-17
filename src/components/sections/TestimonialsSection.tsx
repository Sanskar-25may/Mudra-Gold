import React from "react";
import Link from "next/link";
import { Star, MessageSquarePlus, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TestimonialItem } from "@/types";

// Note: Testimonials carry isPlaceholder: true until confirmed by client per rules.md §2.6
export const sampleTestimonials: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rameshwar Prasad",
    city: "Civil Lines, Gorakhpur",
    rating: 5,
    comment:
      "I had ancient ancestral gold jewellery with stones. The ultrasonic cleaning was done right in front of me and the exact weight and purity were calculated transparently without stone weight deductions.",
    approved: true,
    isPlaceholder: true,
  },
  {
    id: "test-2",
    name: "Dr. Alok Srivastava",
    city: "Arjunganj, Lucknow",
    rating: 5,
    comment:
      "Very professional store atmosphere compared to typical unorganised sonars. The computerized spectrometer readout gave me total confidence in the karat test. Immediate bank transfer on the spot.",
    approved: true,
    isPlaceholder: true,
  },
  {
    id: "test-3",
    name: "Vandana Tripathi",
    city: "Gorakhpur",
    rating: 5,
    comment:
      "Sold unused gold coins and received instant cash. Courteous staff and completely fair valuation without hidden crucible charges. Highly recommend to anyone in Eastern UP.",
    approved: true,
    isPlaceholder: true,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-navy-100">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="space-y-2">
            <Badge variant="gold">Customer Experiences</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
              Trusted by Sellers Across Eastern UP
            </h2>
            <p className="text-sm sm:text-base text-navy-700/80 max-w-xl">
              Hear directly from people who have visited our Gorakhpur and Lucknow branches.
            </p>
          </div>

          <Link href="/testimonials">
            <Button variant="outline" size="sm" className="gap-1.5 shrink-0 border-navy-300 text-navy-900 hover:bg-navy-50">
              <MessageSquarePlus className="w-3.5 h-3.5 text-gold-600" />
              <span>+ Add Your Testimonial</span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-navy-50/40 rounded-xl p-6 border border-navy-100 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <div className="space-y-3">
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

              <div className="pt-4 mt-4 border-t border-navy-100">
                <span className="font-serif font-bold text-sm text-navy-950 block">
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
  );
}
