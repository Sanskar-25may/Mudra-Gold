import React from "react";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import { faqsContent } from "@/content/faqs";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

interface FAQSectionProps {
  limit?: number;
  showAllLink?: boolean;
}

export function FAQSection({ limit = 5, showAllLink = true }: FAQSectionProps) {
  const displayedFaqs = faqsContent.slice(0, limit);

  return (
    <section className="py-16 sm:py-24 bg-navy-50/30 border-b border-navy-100" id="faqs">
      <Container size="narrow">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <Badge variant="gold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-sm sm:text-base text-navy-700/80">
            Everything you need to know about documentation, valuation, cleaning, and payouts before you visit.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-navy-100 p-6 sm:p-8 shadow-xs">
          <Accordion items={displayedFaqs} />
        </div>

        {showAllLink && (
          <div className="mt-8 text-center">
            <Link href="/about#faqs">
              <Button variant="ghost" size="sm" className="gap-1.5 text-navy-900 hover:text-gold-700">
                <span>View Full FAQ & Documentation Rules</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
