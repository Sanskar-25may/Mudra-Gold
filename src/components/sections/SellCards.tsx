import React from "react";
import Link from "next/link";
import { Coins, Sparkles, Check, ArrowRight, Clock } from "lucide-react";
import { homeContent } from "@/content/home";
import { telLink, waLink } from "@/content/site";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function SellCards() {
  const { gold, silver } = homeContent.sellCards;

  return (
    <div className="py-14 sm:py-20 bg-white border-b border-navy-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-700 block mb-1">
            Immediate In-Store Liquidation
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy-950">
            Turn Your Old Precious Metals into Cash
          </h2>
          <p className="text-sm text-navy-700 mt-2">
            No melting deductions, no arbitrary estimations. Walk into our branches in Gorakhpur or Lucknow and witness precision scientific valuation live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Sell Gold Card - 60% White base, 30% Navy structure, 10% Gold highlights */}
          <Card variant="gold-bordered" className="flex flex-col justify-between bg-gradient-to-br from-white via-white to-gold-50/30">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-800">
                  <Coins className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-gold-100 text-gold-900 border border-gold-300 rounded-full">
                  Primary Service
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  {gold.title}
                </h3>
                <p className="text-sm font-semibold text-gold-700 mt-1">
                  {gold.tagline}
                </p>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-gold-100">
                {gold.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-navy-800 font-medium">
                    <Check className="w-4 h-4 text-gold-600 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-gold-200/60 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-navy-600 font-medium">
                <Clock className="w-3.5 h-3.5 text-gold-600" />
                <span>{gold.hoursNote}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Link href="/contact" className="w-full">
                  <Button variant="gold" size="md" className="w-full gap-1.5 text-xs font-bold">
                    <span>Visit Branch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
                <a href={telLink} className="w-full">
                  <Button variant="outline" size="md" className="w-full text-xs font-semibold">
                    Call Branch
                  </Button>
                </a>
              </div>
            </div>
          </Card>

          {/* Sell Silver Card - Crisp white base with Navy accents and Gold indicators */}
          <Card variant="default" className="flex flex-col justify-between bg-gradient-to-br from-white via-white to-navy-50/50 border-navy-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-200 flex items-center justify-center text-navy-800">
                  <Sparkles className="w-6 h-6 text-navy-700" />
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-navy-100 text-navy-900 border border-navy-200 rounded-full">
                  All Silver Articles
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  {silver.title}
                </h3>
                <p className="text-sm font-semibold text-navy-600 mt-1">
                  {silver.tagline}
                </p>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-navy-100">
                {silver.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-navy-800 font-medium">
                    <Check className="w-4 h-4 text-navy-700 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-navy-100 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-navy-600 font-medium">
                <Clock className="w-3.5 h-3.5 text-navy-600" />
                <span>{silver.hoursNote}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="secondary" size="md" className="w-full gap-1.5 text-xs font-semibold">
                    <span>WhatsApp Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </a>
                <Link href="/contact" className="w-full">
                  <Button variant="outline" size="md" className="w-full text-xs font-semibold">
                    Branch Locations
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
