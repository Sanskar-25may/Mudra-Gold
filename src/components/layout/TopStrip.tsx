import React from "react";
import Link from "next/link";
import { Phone, Clock } from "lucide-react";
import { siteConfig, telLink } from "@/content/site";

export function TopStrip() {
  return (
    <div className="bg-navy-950 text-white text-xs py-2.5 px-4 border-b border-navy-800/80">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <span className="font-semibold text-gold-400 tracking-wide">
            {siteConfig.parentCompany}
          </span>
          <span className="hidden md:inline text-navy-600">|</span>
          <span className="hidden md:flex items-center gap-1.5 text-navy-200">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            {siteConfig.hours}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={telLink}
            className="flex items-center gap-1.5 text-white hover:text-gold-300 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>{siteConfig.primaryPhone}</span>
          </a>
          <span className="text-navy-600">|</span>
          <Link
            href="/contact"
            className="text-gold-400 hover:text-gold-300 font-semibold uppercase tracking-wider text-[11px]"
          >
            Enquire Now &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
