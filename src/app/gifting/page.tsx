import React from "react";
import { Metadata } from "next";
import { Gift } from "lucide-react";
import { giftingContent } from "@/content/gifting";
import { constructMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CustomCoinForm } from "@/components/forms/CustomCoinForm";

export const metadata: Metadata = constructMetadata({
  title: "Gifting Articles & Custom 24K Gold Coins — Mudra Gold",
  description:
    "Explore pure 24K 999 gold and 999 silver coins with custom laser engraving for weddings, festivals, birthdays, and corporate recognition. Available in 2g, 5g, 10g.",
  canonicalUrl: "/gifting",
});

export default function GiftingPage() {
  const { hero, categories } = giftingContent;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-navy-50/60 via-white to-white py-16 sm:py-24 border-b border-navy-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="gold">{hero.badge}</Badge>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 tracking-tight">
              {hero.title}
            </h1>
            <p className="text-base sm:text-lg text-navy-700/80 leading-relaxed pt-2">
              {hero.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Categories Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-navy-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="font-serif text-3xl font-bold text-navy-950">
              Precious Coins for Every Milestone
            </h2>
            <p className="text-sm text-navy-700/80">
              Guaranteed 24K 999 purity hallmarked bullion enclosed in tamper-evident security assay cards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl p-8 border border-navy-100 shadow-2xs hover:shadow-md hover:border-gold-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center text-gold-400 ring-1 ring-gold-400/30">
                      <Gift className="w-6 h-6" />
                    </div>
                    {cat.badge && (
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-gold-100 text-gold-950 rounded-full border border-gold-300">
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-navy-950">
                    {cat.title}
                  </h3>

                  <p className="text-sm text-navy-700/80 leading-relaxed">
                    {cat.description}
                  </p>

                  {cat.weightOptions && (
                    <div className="pt-2">
                      <span className="text-xs font-semibold text-navy-500 uppercase block mb-1.5">
                        Available Denominations:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.weightOptions.map((w, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium bg-navy-50 text-navy-900 px-3 py-1 rounded-md border border-navy-200"
                          >
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <span className="text-xs font-semibold text-navy-500 uppercase block mb-1.5">
                      Ideal For:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.idealFor.map((item, i) => (
                        <span
                          key={i}
                          className="text-xs text-navy-800 bg-navy-50 border border-navy-100 px-2.5 py-0.5 rounded font-medium"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Custom Coin Order Form Section */}
      <section className="py-16 sm:py-24 bg-navy-50/40 border-t border-navy-100" id="custom-order">
        <Container size="narrow">
          <div className="text-center mb-8 space-y-2">
            <h2 className="font-serif text-3xl font-bold text-navy-950">
              Request Your Bespoke Engraved Coin
            </h2>
            <p className="text-sm text-navy-700/80">
              Share your engraving requirements or corporate quantity needs and our team will provide a digital visual proof and pricing.
            </p>
          </div>
          <CustomCoinForm />
        </Container>
      </section>
    </div>
  );
}
