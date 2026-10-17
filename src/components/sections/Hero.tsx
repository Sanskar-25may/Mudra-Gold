import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Phone, ArrowRight, Eye, CheckCircle2 } from "lucide-react";
import { homeContent } from "@/content/home";
import { siteConfig, telLink } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const { hero } = homeContent;

  return (
    <div className="relative bg-gradient-to-b from-navy-50/70 via-white to-white pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden border-b border-navy-100">
      {/* Subtle gold ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-navy-100/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Official Emblem & Badge */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 drop-shadow-md hover:scale-105 transition-transform duration-300">
              <Image
                src="/Mudra_Gold-logo.png"
                alt="Mudra Gold Pure Bullion Coin Emblem"
                width={96}
                height={96}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <Badge variant="gold" className="px-4 py-1.5 text-xs shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-gold-700" />
              <span>{hero.badge}</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-950 leading-[1.15]">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-navy-700 max-w-2xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>

          {/* 3 Key Trust Bullets */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm font-semibold text-navy-900">
            {hero.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-navy-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="gold" size="lg" className="w-full sm:w-auto gap-2 shadow-md">
                <span>Sell Gold for Cash</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <a href={telLink} className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Branch: {siteConfig.primaryPhone}</span>
              </Button>
            </a>
          </div>

          {/* In-Person Transparency Assurance Card */}
          <div className="mt-8 pt-6 border-t border-navy-100 max-w-xl mx-auto flex items-center justify-center gap-3 text-xs sm:text-sm text-navy-700">
            <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
              <Eye className="w-4 h-4 text-gold-700" />
            </div>
            <p className="text-left">
              <strong className="text-navy-950">100% In-Front-Of-You Guarantee:</strong> Cleaning, scientific testing, and weighing are always conducted directly in your presence.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
