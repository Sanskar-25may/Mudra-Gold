import React from "react";
import { homeContent } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Eye } from "lucide-react";

export function HowItWorks() {
  const { howItWorks } = homeContent;

  return (
    <section className="py-16 sm:py-24 bg-navy-50/40 border-b border-navy-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <Badge variant="gold">Simple & Transparent</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
            How Selling Your Gold Works
          </h2>
          <p className="text-sm sm:text-base text-navy-700/80">
            A straightforward 5-step process conducted entirely in front of your eyes in our private evaluation chambers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {howItWorks.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white rounded-xl p-6 border border-navy-100 shadow-xs flex flex-col justify-between relative group hover:border-gold-400 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-full bg-navy-950 text-gold-300 font-serif font-bold text-lg flex items-center justify-center ring-2 ring-gold-400/30">
                    {step.number}
                  </span>
                  {idx === 2 && (
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-gold-900 bg-gold-100 border border-gold-200 px-2 py-0.5 rounded-full">
                      <Eye className="w-3 h-3 text-gold-700" /> Live
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-navy-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-navy-700/80 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {step.highlight && (
                <div className="pt-3 border-t border-navy-100 text-[11px] font-semibold text-navy-900 flex items-center gap-1.5">
                  <span className="text-gold-600 font-bold">✓</span> {step.highlight}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-navy-800 bg-white inline-block px-5 py-2.5 rounded-full border border-navy-200 shadow-2xs">
            ✨ Average appraisal takes less than <strong className="text-navy-950">15 minutes</strong> with instant payout.
          </p>
        </div>
      </Container>
    </section>
  );
}
