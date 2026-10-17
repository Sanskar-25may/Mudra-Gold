import React from "react";
import Link from "next/link";
import { Gift, ArrowRight } from "lucide-react";
import { giftingContent } from "@/content/gifting";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function GiftingCards() {
  const { categories } = giftingContent;

  return (
    <section className="py-16 sm:py-24 bg-navy-50/30 border-b border-navy-100">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="space-y-2">
            <Badge variant="gold">Precious Articles & Coins</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
              Gifting Articles & Bespoke Coins
            </h2>
            <p className="text-sm sm:text-base text-navy-700/80 max-w-xl">
              24K 999 purity gold and pure silver coins available in 2g, 5g, and 10g weights with personalized engraving.
            </p>
          </div>

          <Link href="/gifting">
            <Button variant="outline" size="sm" className="gap-1.5 shrink-0 border-navy-300 text-navy-900 hover:bg-navy-50">
              <span>View All Gifting Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl p-6 border border-navy-100 shadow-2xs hover:shadow-md hover:border-gold-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center text-gold-400 ring-1 ring-gold-400/30">
                    <Gift className="w-5 h-5" />
                  </div>
                  {cat.badge && (
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-gold-100 text-gold-950 rounded-md border border-gold-300">
                      {cat.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-navy-950">
                  {cat.title}
                </h3>

                <p className="text-xs text-navy-700/80 leading-relaxed">
                  {cat.description}
                </p>

                {cat.weightOptions && (
                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-navy-500 uppercase block mb-1">
                      Available Weights:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.weightOptions.map((w, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium bg-navy-50 text-navy-900 px-2 py-0.5 rounded border border-navy-200"
                        >
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-navy-100">
                <Link
                  href="/gifting"
                  className="text-xs font-semibold text-navy-900 hover:text-gold-700 flex items-center gap-1 transition-colors"
                >
                  <span>Enquire for {cat.title}</span>
                  <ArrowRight className="w-3 h-3 text-gold-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
