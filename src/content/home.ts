import { ComparisonRow, StepItem } from "@/types";

export const homeContent = {
  hero: {
    badge: "Pioneer in Eastern UP for Instant Cash Against Gold",
    title: "Sell Gold for Instant Cash in Gorakhpur & Lucknow",
    subtitle:
      "Eastern UP's trusted destination for cash for gold and silver. Experience 100% transparent live evaluation right in front of your eyes with instant bank transfer or cash payout.",
    highlights: [
      "100% Transparent Live Evaluation",
      "Instant Cash / UPI / Bank Transfer",
      "Free Ultrasonic Cleaning & Precision Purity Test",
    ],
    verified: false,
  },
  sellCards: {
    gold: {
      title: "Sell Old Gold",
      tagline: "Instant payout with zero hidden deductions",
      points: [
        "100% Transparent live testing in front of you",
        "Scientific non-destructive purity analysis",
        "Weighing up to 3 decimal accuracy",
        "Instant Cash, UPI, or Bank Transfer",
      ],
      hoursNote: "Available 10:00 AM – 8:00 PM All Days",
      verified: false,
    },
    silver: {
      title: "Sell Silver",
      tagline: "Fair market valuation for all silver articles",
      points: [
        "Instant cash for silver jewellery, utensils & coins",
        "No melting loss or testing charges",
        "Transparent live market rate valuation",
        "Fast, secure, and respectful service",
      ],
      hoursNote: "Available 10:00 AM – 8:00 PM All Days",
      verified: false,
    },
  },
  promoBand: {
    headline: "Bring Your Old Gold, Leave with Instant Cash!",
    description:
      "Never settle for approximate touchstone tests or unfair melting deductions. Every evaluation step is performed live on modern scientific equipment right before your eyes.",
    features: [
      "Complimentary Scientific Purity Check",
      "High-Tech Ultrasonic Jewellery Cleaning",
      "Weighing Calibrated to 3 Decimals",
      "Immediate Payout on the Spot",
    ],
    verified: false,
  },
  howItWorks: [
    {
      number: 1,
      title: "Visit Our Branch",
      description:
        "Walk into our Gorakhpur or Lucknow branch with your gold/silver items and valid government ID.",
      highlight: "Welcoming & secure store environment",
    },
    {
      number: 2,
      title: "Free Ultrasonic Cleaning",
      description:
        "We clean your jewellery using state-of-the-art ultrasonic machines right in front of you to eliminate dirt and wax.",
      highlight: "Zero damage, 100% accurate gross weight",
    },
    {
      number: 3,
      title: "Scientific Purity Testing",
      description:
        "Your gold's exact karat purity is verified using modern non-destructive testing equipment while you watch.",
      highlight: "No guesswork or arbitrary deductions",
    },
    {
      number: 4,
      title: "Live Market Valuation",
      description:
        "The final valuation is computed transparently based on current prevailing market bullion rates.",
      highlight: "Clear, itemized valuation breakdown",
    },
    {
      number: 5,
      title: "Instant Payout",
      description:
        "Receive your payment immediately via instant cash, UPI, or RTGS/NEFT bank transfer with a proper receipt.",
      highlight: "Fast, safe, and transparent",
    },
  ] as StepItem[],
  comparison: [
    {
      aspect: "Purity Testing",
      mudraGold: "Scientific multi-level testing while you watch",
      traditional: "Old touchstone method with approximate guesswork",
    },
    {
      aspect: "Jewellery Cleaning",
      mudraGold: "Free ultrasonic cleaning for true accurate weight",
      traditional: "No cleaning; arbitrary melting deductions applied",
    },
    {
      aspect: "Weighing Scale",
      mudraGold: "Precision certified scale calibrated to 3 decimals",
      traditional: "Rounded down to the lowest whole number",
    },
    {
      aspect: "Pricing & Rate",
      mudraGold: "Competitive, transparent market-linked live rates",
      traditional: "Prices vary widely and differ from market rates",
    },
    {
      aspect: "Crucibles & Loss",
      mudraGold: "Premium zero-retention crucibles (zero gold loss)",
      traditional: "Low-quality crucibles that cause gold residue loss",
    },
    {
      aspect: "Payment & Invoice",
      mudraGold: "Instant Cash / UPI / Bank transfer with invoice",
      traditional: "Often cash only without official documentation",
    },
  ] as ComparisonRow[],
  swarnVriddhi: {
    title: "Swarn Vriddhi Plan",
    subtitle: "Gold Coin Savings Plan",
    headline: "Pay 11 Installments and Get the 12th Free",
    description:
      "A disciplined, rewarding way to accumulate pure hallmarked gold coins for family weddings, future milestones, or wealth preservation.",
    benefits: [
      "Disciplined monthly savings structure",
      "Bonus 12th coin contribution on maturity",
      "Guaranteed 24K 999 purity hallmarked gold coins",
      "Transparent terms and easy enrollment",
    ],
    verified: false,
  },
};
