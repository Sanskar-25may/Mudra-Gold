import React from "react";
import { Metadata } from "next";
import { galleryContent } from "@/content/gallery";
import { constructMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = constructMetadata({
  title: "Gallery | Mudra Gold Branches and Customer Moments",
  description:
    "See inside Mudra Gold's Gorakhpur and Lucknow branches, our transparent gold testing process and happy customers who sold their gold for instant cash.",
  canonicalUrl: "/gallery",
});

export default function GalleryPage() {
  const { hero } = galleryContent;

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

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-navy-100">
        <Container>
          <GalleryGrid />

          <div className="mt-12 p-6 rounded-xl bg-navy-50/50 border border-navy-200 text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-bold text-navy-950 uppercase tracking-wide block">
              📸 Real Branch Photography Coming Soon
            </span>
            <p className="text-xs text-navy-700/80">
              Photographs of our testing equipment, ultrasonic wash counters, and branch interiors are being updated. Visit our branches in Gorakhpur and Lucknow to view our setup in person.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
