import React from "react";
import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { aboutContent } from "@/content/about";
import { constructMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = constructMetadata({
  title: "About Mudra Gold | Trusted Gold Buyers in Eastern UP",
  description:
    "Mudra Gold, a unit of MKS Enterprises, is Eastern UP's trusted destination for selling gold and silver with scientific purity testing, fair valuation and instant cash payment.",
  canonicalUrl: "/about",
});

export default function AboutPage() {
  const { hero, vision, pillars, whyChooseUs } = aboutContent;

  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-navy-50/60 via-white to-white py-16 sm:py-24 border-b border-navy-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="gold">{hero.badge}</Badge>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 tracking-tight leading-tight">
              {hero.title}
            </h1>
            <p className="text-sm font-semibold tracking-widest uppercase text-gold-700">
              {hero.tagline}
            </p>
            <p className="text-base sm:text-lg text-navy-700/80 leading-relaxed pt-2">
              {hero.intro}
            </p>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-white border-b border-navy-100">
        <Container size="narrow">
          <div className="bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-2xl p-8 sm:p-12 shadow-lg border border-navy-800 text-center space-y-4">
            <Badge variant="dark" className="border-gold-500/40 text-gold-300">{vision.title}</Badge>
            <blockquote className="font-serif text-xl sm:text-2xl text-gold-300 italic leading-relaxed">
              &ldquo;{vision.quote}&rdquo;
            </blockquote>
            <p className="text-sm sm:text-base text-navy-100/90 max-w-2xl mx-auto leading-relaxed">
              {vision.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Core Pillars */}
      <section className="py-16 sm:py-24 bg-navy-50/30 border-b border-navy-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <Badge variant="gold">Our Guiding Pillars</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
              How We Safeguard Every Customer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-navy-100 shadow-2xs hover:border-gold-400 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center text-gold-400 mb-4 font-bold text-base ring-1 ring-gold-400/30">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-950 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-navy-700/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-white border-b border-navy-100">
        <Container size="narrow">
          <div className="space-y-6 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              {whyChooseUs.headline}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
              {whyChooseUs.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-navy-50/40 border border-navy-100">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-navy-900">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Full FAQ Section on About page */}
      <FAQSection limit={10} showAllLink={false} />
    </div>
  );
}
