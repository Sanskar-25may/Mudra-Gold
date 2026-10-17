import { GiftingCategory } from "@/types";

export const giftingContent = {
  hero: {
    badge: "Mudra Gold Gifting Collection",
    title: "Timeless Precious Keepsakes for Life's Significant Moments",
    subtitle:
      "Celebrate milestones, corporate achievements, and festive occasions with 24K 999 pure gold and 999 fine silver coins customized with precision laser engraving.",
  },
  categories: [
    {
      id: "wedding-coins",
      title: "Wedding & Shubh Muhurat Coins",
      description:
        "Bespoke minted 24K gold and pure silver coins featuring traditional Lakshmi-Ganesh motifs or engraved with bride and groom names.",
      weightOptions: ["2 Grams", "5 Grams", "10 Grams", "20 Grams (Silver)"],
      idealFor: ["Wedding Return Gifts", "Anniversaries", "Griha Pravesh", "Baby Showers"],
      badge: "Most Popular",
    },
    {
      id: "corporate-awards",
      title: "Corporate Rewards & Recognition",
      description:
        "Honor employee milestones, distributor excellence, and festive Diwali corporate gifting with coins custom engraved with your company logo.",
      weightOptions: ["2 Grams", "5 Grams", "10 Grams"],
      idealFor: ["Diwali Corporate Gifting", "Long Service Awards", "Partner Appreciation", "Executive Milestones"],
      badge: "Custom Logo Support",
    },
    {
      id: "festive-religious",
      title: "Festive & Spiritual Collectibles",
      description:
        "Pure hallmarked spiritual medallions for Dhanteras, Akshaya Tritiya, and devotional offerings with protective tamper-evident certificates.",
      weightOptions: ["2 Grams", "5 Grams", "10 Grams"],
      idealFor: ["Dhanteras", "Akshaya Tritiya", "Pooja Offerings", "Diwali"],
    },
    {
      id: "personalized-keepsakes",
      title: "Personalized Family Keepsakes",
      description:
        "Gift an asset that appreciates in value. Personalize gold and silver coins with customized dates, blessings, or newborn birth milestones.",
      weightOptions: ["2 Grams", "5 Grams", "10 Grams"],
      idealFor: ["Birthdays", "First Milestone Celebrations", "Graduations"],
    },
  ] as GiftingCategory[],
};
