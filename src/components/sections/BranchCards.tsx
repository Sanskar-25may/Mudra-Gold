import React from "react";
import { MapPin, Phone, Clock, ExternalLink, Sparkles } from "lucide-react";
import { siteConfig, telLink } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function BranchCards() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-navy-100" id="branches">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <Badge variant="gold">Physical Branches</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
            Visit Our Branches in Eastern UP
          </h2>
          <p className="text-sm sm:text-base text-navy-700/80">
            Convenient, prime locations equipped with CCTV security, private appraisal counters, and advanced evaluation machines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.branches.map((branch) => (
            <div
              key={branch.id}
              className={`rounded-xl border p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-200 ${
                branch.isComingSoon
                  ? "bg-navy-50/50 border-navy-200 border-dashed"
                  : "bg-white border-navy-100 hover:border-gold-400 shadow-xs hover:shadow-md"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    branch.isComingSoon ? "bg-navy-100 text-navy-700" : "bg-navy-950 text-gold-400 ring-1 ring-gold-400/30"
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>

                  {branch.isComingSoon ? (
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-navy-950 text-gold-300 border border-gold-400/30 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Coming Soon
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full">
                      Open All Days
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-navy-950">
                    {branch.name}
                  </h3>
                  {branch.landmark && (
                    <p className="text-xs font-medium text-gold-700 mt-0.5">
                      {branch.landmark}
                    </p>
                  )}
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-navy-800 pt-2 border-t border-navy-100">
                  <p className="leading-relaxed">
                    <strong className="text-navy-950">Address:</strong> {branch.address}, {branch.city}, {branch.state} - {branch.pincode}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{branch.hours}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{branch.phone}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-navy-100">
                {branch.isComingSoon ? (
                  <p className="text-xs text-center text-navy-500 italic">
                    Opening shortly to serve Basharatpur & Medical College Rd.
                  </p>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="secondary" size="sm" className="w-full gap-1.5 text-xs bg-navy-50 text-navy-900 hover:bg-navy-100 border border-navy-200">
                        <span>Get Directions</span>
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </a>
                    <a href={telLink} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full text-xs border-navy-300 text-navy-900 hover:bg-navy-50">
                        Call Branch
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
