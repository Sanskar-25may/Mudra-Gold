import React from "react";
import { Check, X, Shield } from "lucide-react";
import { homeContent } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function Comparison() {
  const { comparison } = homeContent;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-navy-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="gold">Why Choose Us</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
            Mudra Gold vs Traditional Unorganised Players
          </h2>
          <p className="text-sm sm:text-base text-navy-700/80">
            See how our scientific, certified procedures protect you from common deductions, melting losses, and rounded valuations.
          </p>
        </div>

        {/* Desktop & Tablet Table View */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-navy-200 shadow-sm max-w-4xl mx-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-navy-200">
                <th className="py-4 px-6 bg-navy-950 text-xs font-bold uppercase tracking-wider text-white w-1/3">
                  Valuation Aspect
                </th>
                <th className="py-4 px-6 bg-gold-500 text-xs font-bold uppercase tracking-wider text-navy-950 w-1/3 border-x border-gold-400">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-navy-950" />
                    <span>Mudra Gold (Certified)</span>
                  </div>
                </th>
                <th className="py-4 px-6 bg-navy-900/90 text-xs font-bold uppercase tracking-wider text-navy-200 w-1/3">
                  Traditional / Local Sonar
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100 text-sm">
              {comparison.map((row, i) => (
                <tr key={i} className="hover:bg-navy-50/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-navy-950 bg-navy-50/50">
                    {row.aspect}
                  </td>
                  <td className="py-4 px-6 bg-gold-50/40 text-navy-950 font-medium border-x border-gold-200/80">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.mudraGold}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-navy-700/80 bg-white">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Card View (Optimized for 360px+ screens with no overflow) */}
        <div className="md:hidden space-y-4">
          {comparison.map((row, i) => (
            <div
              key={i}
              className="rounded-xl border border-navy-100 bg-white p-5 shadow-2xs space-y-3"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-500 border-b border-navy-100 pb-1.5">
                {row.aspect}
              </h3>

              <div className="space-y-2">
                <div className="p-3 bg-gold-50/70 rounded-lg border border-gold-200">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-navy-950 flex items-center gap-1.5 mb-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Mudra Gold
                  </span>
                  <p className="text-xs font-semibold text-navy-950">
                    {row.mudraGold}
                  </p>
                </div>

                <div className="p-3 bg-navy-50/50 rounded-lg border border-navy-100">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-navy-700 flex items-center gap-1.5 mb-1">
                    <X className="w-3.5 h-3.5 text-rose-500" /> Traditional Players
                  </span>
                  <p className="text-xs text-navy-700/80">
                    {row.traditional}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
