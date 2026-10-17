export interface Branch {
  id: string;
  name: string;
  landmark?: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  hours: string;
  mapUrl: string;
  isComingSoon?: boolean;
  verified: boolean;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  parentCompany: string;
  primaryPhone: string;
  secondaryPhone?: string;
  whatsappNumber: string;
  email: string;
  hours: string;
  branches: Branch[];
  socials: SocialLinks;
  verifiedClaims: {
    govtAuthorized: boolean;
  };
  needsConfirmation: string[];
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  highlight?: string;
}

export interface ComparisonRow {
  aspect: string;
  mudraGold: string;
  traditional: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  isComplimentary?: boolean;
}

export interface GiftingCategory {
  id: string;
  title: string;
  description: string;
  weightOptions?: string[];
  idealFor: string[];
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  photoUrl?: string;
  approved: boolean;
  isPlaceholder?: boolean;
  date?: string;
}

export type InquiryType =
  | "sell_gold_silver"
  | "gold_coin"
  | "silver_coin"
  | "custom_gift"
  | "other"
  | "contact_message";
