"use client";

import React from "react";
import { Phone, MessageCircle, Navigation } from "lucide-react";
import { siteConfig, telLink, waLink } from "@/content/site";

export function StickyActionBar() {
  const gorakhpurBranch = siteConfig.branches[0];

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-navy-950/95 backdrop-blur-md border-t border-navy-800 shadow-2xl py-2 px-3">
      <div className="grid grid-cols-3 gap-2 text-center">
        {/* Call CTA */}
        <a
          href={telLink}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-navy-900 border border-navy-800 text-white active:bg-navy-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-gold-400 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-wide">Call Branch</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-300 active:bg-emerald-900 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-wide">WhatsApp</span>
        </a>

        {/* Directions CTA */}
        <a
          href={gorakhpurBranch?.mapUrl || "#branches"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-gold-500/15 border border-gold-500/30 text-gold-300 active:bg-gold-500/25 transition-colors"
        >
          <Navigation className="w-4 h-4 text-gold-400 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-wide">Directions</span>
        </a>
      </div>
    </div>
  );
}
