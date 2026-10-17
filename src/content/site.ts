import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Mudra Gold",
  tagline: "Where Purity Meets Trust",
  parentCompany: "A Unit of MKS Enterprises",
  primaryPhone: "+91 96213 19818",
  secondaryPhone: "+91 95544 89818",
  whatsappNumber: "919621319818",
  email: "info@mymudragold.in",
  hours: "10:00 AM – 8:00 PM, All Days",
  branches: [
    {
      id: "gorakhpur-civil-lines",
      name: "Gorakhpur (Civil Lines)",
      landmark: "In front of St Andrew's Inter College Gate",
      address: "Ground Floor, Building No. 449S, Civil Lines",
      city: "Gorakhpur",
      state: "Uttar Pradesh",
      pincode: "273001",
      phone: "+91 96213 19818",
      hours: "10:00 AM – 8:00 PM, All Days",
      mapUrl: "https://maps.google.com/?q=Building+No+449S+Civil+Lines+Gorakhpur+273001",
      verified: false,
    },
    {
      id: "lucknow-arjunganj",
      name: "Lucknow (Arjunganj)",
      landmark: "Near Murari Hospital",
      address: "Near Murari Hospital, Arjunganj",
      city: "Lucknow",
      state: "Uttar Pradesh",
      pincode: "226002",
      phone: "+91 96213 19818",
      hours: "10:00 AM – 8:00 PM, All Days",
      mapUrl: "https://maps.google.com/?q=Near+Murari+Hospital+Arjunganj+Lucknow+226002",
      verified: false,
    },
    {
      id: "gorakhpur-hn-singh-chauraha",
      name: "Gorakhpur (HN Singh Chauraha)",
      landmark: "Near Medical College Road",
      address: "HN Singh Chauraha, Medical College Road, Basharatpur",
      city: "Gorakhpur",
      state: "Uttar Pradesh",
      pincode: "273004",
      phone: "+91 96213 19818",
      hours: "10:00 AM – 8:00 PM, All Days",
      mapUrl: "https://maps.google.com/?q=HN+Singh+Chauraha+Medical+College+Road+Basharatpur+Gorakhpur",
      isComingSoon: false,
      verified: true, // Verified from LinkedIn announcement (Opened 25 Aug 2026) per SEO Audit
    },
  ],
  socials: {
    facebook: "https://facebook.com/MudraGold",
    instagram: "https://instagram.com/official_mudra_gold",
    linkedin: "https://linkedin.com/company/mudra-gold",
  },
  verifiedClaims: {
    // Rules §2.4: default false until confirmed with registration / licence
    govtAuthorized: false,
  },
  needsConfirmation: [
    "Confirm government authorization registration or certificate details",
    "Confirm Swarn Vriddhi plan exact terms and regulatory compliance",
    "Confirm payment wording policy (Cash vs Bank transfer threshold)",
    "Confirm mandatory KYC/ID proof requirements for sellers (Aadhaar/PAN)",
    "Confirm official primary phone (9621319818 vs 9554489818)",
    "Confirm official branch operating hours for Lucknow & Gorakhpur",
    "Confirm Basharatpur branch timeline",
    "Provide real store, team, and testing equipment photos",
  ],
};

export const telLink = `tel:${siteConfig.primaryPhone.replace(/\s+/g, "")}`;
export const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hello Mudra Gold, I would like to inquire about selling gold/silver."
)}`;
