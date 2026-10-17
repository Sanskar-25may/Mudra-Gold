import React from "react";
import Link from "next/link";
import { Sparkles, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { homeContent } from "@/content/home";
import { siteConfig, telLink } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function PromoBand() {
  const { promoBand } = homeContent;

  return (
    <div className="bg-navy-950 text-white py-14 sm:py-18 relative overflow-hidden border-y border-navy-900">
      <div className="absolute right-0 top-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Instant In-Store Cash Assurance</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {promoBand.headline}
          </h2>

          <p className="text-sm sm:text-base text-navy-100/90 max-w-2xl mx-auto leading-relaxed">
            {promoBand.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 text-xs sm:text-sm text-white">
            {promoBand.features.map((feature, i) => (
              <div
                key={i}
                className="bg-navy-900/90 border border-navy-800/80 rounded-lg p-3 text-center flex flex-col items-center justify-center gap-2"
              >
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                <span className="font-medium text-white">{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="gold" size="lg" className="w-full sm:w-auto gap-2">
                <span>Find Your Nearest Branch</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <a href={telLink}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-navy-700 hover:bg-navy-900 gap-2">
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Us Now: {siteConfig.primaryPhone}</span>
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
