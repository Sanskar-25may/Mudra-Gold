import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { SellCards } from "@/components/sections/SellCards";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PromoBand } from "@/components/sections/PromoBand";
import { Comparison } from "@/components/sections/Comparison";
import { SwarnVriddhi } from "@/components/sections/SwarnVriddhi";
import { GiftingCards } from "@/components/sections/GiftingCards";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BranchCards } from "@/components/sections/BranchCards";
import { LeadForm } from "@/components/forms/LeadForm";
import { CustomCoinForm } from "@/components/forms/CustomCoinForm";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = constructMetadata({
  title: "Sell Gold for Instant Cash in Gorakhpur | Mudra Gold",
  description:
    "Mudra Gold buys your old gold and silver at the best rates with 100% transparent testing and instant payment. Branches in Gorakhpur and Lucknow. Call +91 96213 19818.",
  canonicalUrl: "/",
});

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Sell Gold & Silver Cards */}
      <SellCards />

      {/* 3. 5-Step Process */}
      <HowItWorks />

      {/* 4. Mudra Gold vs Traditional Players Comparison */}
      <Comparison />

      {/* 5. Cash Promo Band */}
      <PromoBand />

      {/* 6. Swarn Vriddhi 11+1 Plan */}
      <SwarnVriddhi />

      {/* 7. Gifting Articles & Coins */}
      <GiftingCards />

      {/* 8. Custom Coin Request Form Band */}
      <section className="py-16 sm:py-20 bg-navy-50/40 border-b border-navy-100">
        <Container size="narrow">
          <CustomCoinForm />
        </Container>
      </section>

      {/* 9. Verified Customer Testimonials */}
      <TestimonialsSection />

      {/* 10. Physical Branches with Map Links */}
      <BranchCards />

      {/* 11. Frequently Asked Questions */}
      <FAQSection limit={5} />

      {/* 12. Main Lead Generation Form ("Get In Touch") */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-navy-50/30 to-navy-50/50 border-t border-navy-100" id="enquire">
        <Container size="narrow">
          <div className="text-center mb-8 space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
              Get an Immediate Valuation Callback
            </h2>
            <p className="text-sm text-navy-700/80">
              Leave your inquiry and our valuation manager will assist you with procedure details, documentation, and today&apos;s bullion trends.
            </p>
          </div>
          <LeadForm title="Enquire / Request Instant Callback" />
        </Container>
      </section>
    </div>
  );
}
