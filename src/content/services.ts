import { ServiceItem } from "@/types";

export const servicesContent = {
  hero: {
    badge: "Our Core Services",
    title: "Comprehensive, Transparent Gold & Silver Solutions",
    subtitle:
      "Whether you are looking to unlock instant cash from your old jewellery, test purity, or commission bespoke minted coins, Mudra Gold provides unmatched precision and hospitality.",
  },
  servicesList: [
    {
      id: "sell-gold-silver",
      title: "Instant Cash for Old Gold & Silver",
      shortDesc:
        "Walk in with your old ornaments and receive instantaneous payment based on transparent, live market rates.",
      fullDesc:
        "We purchase all kinds of gold and silver jewellery, bars, and coins regardless of age, condition, or origin. Our non-destructive testing process preserves your ornaments intact until you confirm the valuation.",
      iconName: "Coins",
      features: [
        "Immediate payout via Cash, UPI, or Bank Transfer (NEFT/RTGS)",
        "Zero hidden deductions or appraisal charges",
        "Transparent valuation breakdown provided",
        "Respectful, private transaction environment",
      ],
      isComplimentary: false,
    },
    {
      id: "free-cleaning",
      title: "Free Ultrasonic Jewellery Cleaning",
      shortDesc:
        "Professional ultrasonic cleaning that removes accumulated dirt, oil, and wax without degrading the precious metal.",
      fullDesc:
        "Dirt and grease trapped inside ornament crevices can distort weight. Before assessing your gold, we offer free ultrasonic cleaning in high-frequency wash tanks right before your eyes.",
      iconName: "Sparkles",
      features: [
        "Completely complimentary — no obligation to sell",
        "Gentle on antique and studded jewellery",
        "Eliminates impurities for genuine gross weight",
        "Completed in under 3 minutes",
      ],
      isComplimentary: true,
    },
    {
      id: "purity-testing",
      title: "Scientific Purity Testing",
      shortDesc:
        "Certified non-destructive testing using advanced spectrometers to detect exact karat and metal composition.",
      fullDesc:
        "Say goodbye to archaic stone rubbing that leaves scratches and relies on subjective eye estimation. Our computerized analysis measures exact fineness down to the decimal without damaging your jewellery.",
      iconName: "ShieldCheck",
      features: [
        "No scratches, no acid, 100% non-destructive",
        "Precise karat breakdown (18K, 22K, 24K)",
        "Instant digital readout visible to you",
        "Complimentary with every valuation",
      ],
      isComplimentary: true,
    },
    {
      id: "custom-coins-gifting",
      title: "Customized Gifting & Hallmarked Coins",
      shortDesc:
        "24K 999 purity gold and silver coins with personalized laser engraving for weddings, festivals, and corporate gifts.",
      fullDesc:
        "Commemorate special occasions with our hallmarked coins. Available in standard 2g, 5g, and 10g weights with bespoke logo or name engraving on luxury tamper-evident blister packaging.",
      iconName: "Gift",
      features: [
        "Certified 999 hallmarked bullion",
        "Custom laser text and corporate logo engraving",
        "Elegant presentation boxes for weddings & events",
        "Attractive volume pricing for businesses",
      ],
      isComplimentary: false,
    },
  ] as ServiceItem[],
};
