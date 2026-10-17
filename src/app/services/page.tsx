import React from "react";
import { Metadata } from "next";
import { Coins, Sparkles, ShieldCheck, Gift, Check } from "lucide-react";
import { servicesContent } from "@/content/services";
import { constructMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BranchCards } from "@/components/sections/BranchCards";
import { LeadForm } from "@/components/forms/LeadForm";

export const metadata: Metadata = constructMetadata({
  title: "Our Services | Cash for Gold, Silver Buying & Gold Coin Plans",
  description:
    "Sell old gold and silver for instant cash, join the Swarn Vriddhi gold coin purchase plan, and get free scientific purity testing at Mudra Gold, Gorakhpur and Lucknow.",
  canonicalUrl: "/services",
});

const iconMap = {
  Coins: Coins,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Gift: Gift,
};

export default function ServicesPage() {
  const { hero, servicesList } = servicesContent;

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

      {/* Detailed Services Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-navy-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {servicesList.map((service) => {
              const IconComponent =
                iconMap[service.iconName as keyof typeof iconMap] || Sparkles;

              return (
                <div
                  key={service.id}
                  className={`rounded-2xl p-8 border flex flex-col justify-between transition-shadow hover:shadow-md ${
                    service.isComplimentary
                      ? "bg-gradient-to-br from-gold-50/30 to-white border-gold-400/80"
                      : "bg-white border-navy-100"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center text-gold-400 ring-1 ring-gold-400/30">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {service.isComplimentary && (
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-gold-100 text-gold-950 rounded-full border border-gold-300">
                          Complimentary
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-2xl font-bold text-navy-950">
                      {service.title}
                    </h2>

                    <p className="text-sm font-semibold text-gold-700">
                      {service.shortDesc}
                    </p>

                    <p className="text-sm text-navy-700/80 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="pt-2 border-t border-navy-100 space-y-2">
                      <span className="text-xs font-semibold text-navy-500 uppercase block">
                        Key Advantages:
                      </span>
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-navy-900">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Branch Cards */}
      <BranchCards />

      {/* Lead Form on Services Page */}
      <section className="py-16 sm:py-24 bg-navy-50/40 border-t border-navy-100">
        <Container size="narrow">
          <div className="text-center mb-8 space-y-2">
            <h2 className="font-serif text-3xl font-bold text-navy-950">
              Book a Service or Valuation Callback
            </h2>
            <p className="text-sm text-navy-700/80">
              Our specialists are ready to guide you on gold evaluation, ultrasonic cleaning, or custom coin orders.
            </p>
          </div>
          <LeadForm title="Service Inquiry Form" />
        </Container>
      </section>
    </div>
  );
}
