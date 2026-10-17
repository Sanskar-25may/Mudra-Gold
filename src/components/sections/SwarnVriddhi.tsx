import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { homeContent } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function SwarnVriddhi() {
  const { swarnVriddhi } = homeContent;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-navy-50/40 via-white to-gold-50/30 border-b border-navy-100">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-gold-400/80 p-8 sm:p-12 shadow-md relative overflow-hidden">
          {/* Decorative badge */}
          <div className="absolute top-0 right-0 bg-gold-500 text-navy-950 font-bold text-xs uppercase px-5 py-1.5 rounded-bl-xl tracking-wider shadow-xs">
            Savings Scheme
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-gold-700">
                {swarnVriddhi.subtitle}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy-950">
                {swarnVriddhi.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-gold-700">
                {swarnVriddhi.headline}
              </p>
              <p className="text-sm text-navy-700/80 leading-relaxed">
                {swarnVriddhi.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {swarnVriddhi.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-navy-900 font-medium">
                    <Check className="w-4 h-4 text-gold-600 shrink-0 font-bold" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-navy-950 rounded-xl border border-gold-400/30 text-center space-y-4 shadow-sm">
              <div className="relative w-18 h-18 drop-shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/Mudra_Gold-logo.png"
                  alt="Mudra Gold Hallmarked Coin"
                  width={72}
                  height={72}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-gold-300 block">
                  11 + 1 Installment Benefit
                </span>
                <span className="text-xs text-navy-200/90 block mt-1">
                  Enquire today for scheme details and enrolment options.
                </span>
              </div>

              <Link href="/contact?scheme=true" className="w-full">
                <Button variant="gold" size="md" className="w-full gap-1.5 font-semibold text-xs text-navy-950">
                  <span>Enquire / Enroll Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
