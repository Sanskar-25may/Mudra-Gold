import { Metadata } from "next";
import { siteConfig } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mymudragold.in";

export function constructMetadata({
  title,
  description,
  canonicalUrl,
  ogImage = "/Mudra_Gold-logo.png",
}: {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
} = {}): Metadata {
  // SEO Audit Section 7: Exact Google-optimized title & meta description formats
  const pageTitle = title
    ? title.includes("|")
      ? title
      : `${title} | Mudra Gold`
    : "Sell Gold for Instant Cash in Gorakhpur | Mudra Gold";

  const pageDescription =
    description ||
    "Mudra Gold buys your old gold and silver at the best rates with 100% transparent testing and instant payment. Branches in Gorakhpur and Lucknow. Call +91 96213 19818.";

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl,
      siteName: "Mudra Gold",
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "Mudra Gold — Cash for Gold in Gorakhpur & Lucknow",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    icons: {
      icon: "/Mudra_Gold-logo.png",
      shortcut: "/Mudra_Gold-logo.png",
      apple: "/Mudra_Gold-logo.png",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateLocalBusinessSchema() {
  // Schema markup directly adhering to Section 7 & 8 of the SEO Audit
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#organization`,
        name: "Mudra Gold (A Unit of MKS Enterprises)",
        description:
          "Trusted buyer of old gold and silver in Gorakhpur and Lucknow with transparent testing and instant payment.",
        url: `${siteUrl}/`,
        image: `${siteUrl}/Mudra_Gold-logo.png`,
        logo: `${siteUrl}/Mudra_Gold-logo.png`,
        telephone: "+91-9621319818",
        email: "info@mymudragold.in",
        priceRange: "$$",
        sameAs: [
          "https://www.facebook.com/MudraGold",
          "https://www.instagram.com/official_mudra_gold/",
          "https://www.linkedin.com/company/mudra-gold",
        ],
      },
      ...siteConfig.branches.map((branch) => ({
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#branch-${branch.id}`,
        name: `Mudra Gold — ${branch.name}`,
        parentOrganization: { "@id": `${siteUrl}/#organization` },
        telephone: branch.phone,
        email: siteConfig.email,
        url: `${siteUrl}/contact`,
        address: {
          "@type": "PostalAddress",
          streetAddress: branch.address,
          addressLocality: branch.city,
          addressRegion: branch.state,
          postalCode: branch.pincode,
          addressCountry: "IN",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "10:00",
            closes: "20:00",
          },
        ],
      })),
    ],
  };
}
