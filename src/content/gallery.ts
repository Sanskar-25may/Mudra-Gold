export interface GalleryItem {
  id: string;
  title: string;
  category: "Store" | "Testing" | "Cleaning" | "Coins";
  description: string;
  image: string;
  isPlaceholder: boolean;
}

export const galleryContent = {
  hero: {
    badge: "Visual Showcase",
    title: "Inside Mudra Gold: Facilities & Equipment",
    subtitle:
      "A glimpse into our welcoming branch interiors, advanced scientific testing instruments, and custom-minted precious coin collections.",
  },
  items: [
    {
      id: "store-civil-lines",
      title: "Gorakhpur Civil Lines Branch",
      category: "Store",
      description: "Air-conditioned customer reception and private appraisal counters in Civil Lines, Gorakhpur.",
      image: "/images/gallery/store-gorakhpur.svg",
      isPlaceholder: true,
    },
    {
      id: "store-lucknow",
      title: "Lucknow Arjunganj Branch",
      category: "Store",
      description: "Conveniently located branch near Murari Hospital, Arjunganj, Lucknow.",
      image: "/images/gallery/store-lucknow.svg",
      isPlaceholder: true,
    },
    {
      id: "ultrasonic-cleaning",
      title: "Ultrasonic Jewellery Wash Unit",
      category: "Cleaning",
      description: "Specialized high-frequency ultrasonic tanks removing wax and grime right in front of customers.",
      image: "/images/gallery/ultrasonic-cleaner.svg",
      isPlaceholder: true,
    },
    {
      id: "spectrometer-analysis",
      title: "Scientific Karat Spectrometer",
      category: "Testing",
      description: "Certified computerized spectrometer providing accurate non-destructive purity readouts.",
      image: "/images/gallery/spectrometer.svg",
      isPlaceholder: true,
    },
    {
      id: "precision-scale",
      title: "3-Decimal Certified Digital Scale",
      category: "Testing",
      description: "Calibration-verified weighing scale displaying gross and net weight down to milligram precision.",
      image: "/images/gallery/precision-scale.svg",
      isPlaceholder: true,
    },
    {
      id: "custom-coins-display",
      title: "24K 999 Minted Gold Coins",
      category: "Coins",
      description: "Tamper-evident assay-packaged 2g, 5g, and 10g gold coins with custom laser engraving.",
      image: "/images/gallery/gold-coins.svg",
      isPlaceholder: true,
    },
  ] as GalleryItem[],
};
