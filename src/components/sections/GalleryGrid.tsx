"use client";

import React, { useState } from "react";
import { galleryContent } from "@/content/gallery";
import { Camera } from "lucide-react";

export function GalleryGrid() {
  const { items } = galleryContent;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Store", "Testing", "Cleaning", "Coins"];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
              selectedCategory === cat
                ? "bg-navy-950 text-gold-300 ring-2 ring-gold-400/30"
                : "bg-white text-navy-800 border border-navy-200 hover:bg-navy-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden border border-navy-100 shadow-2xs hover:shadow-md hover:border-gold-300 transition-all flex flex-col justify-between group"
          >
            {/* Visual Frame */}
            <div className="h-56 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-6 flex flex-col justify-between text-white relative">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-400/30">
                  {item.category}
                </span>
                {item.isPlaceholder && (
                  <span className="text-[10px] bg-navy-800/80 text-navy-200 px-2 py-0.5 rounded border border-navy-700">
                    Facility Photo
                  </span>
                )}
              </div>

              <div className="flex flex-col items-center justify-center space-y-2 py-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
                  <Camera className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-navy-200">
                  Mudra Gold In-Store Facility
                </span>
              </div>

              <div className="text-[11px] text-gold-400 font-mono font-medium">
                # {item.id}
              </div>
            </div>

            <div className="p-6 space-y-2">
              <h3 className="font-serif text-lg font-bold text-navy-950">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-navy-700/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
