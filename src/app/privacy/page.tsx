import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy — Mudra Gold",
  description: "Privacy policy regarding collection, use, and protection of customer information by Mudra Gold.",
  canonicalUrl: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container size="narrow">
        <div className="max-w-none space-y-6 text-navy-800 text-sm leading-relaxed">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700 block">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
            Privacy Policy
          </h1>
          <p className="text-xs text-navy-500">
            Last updated: October 2026
          </p>

          <p>
            Mudra Gold (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a unit of MKS Enterprises, respects your privacy and is committed to protecting the personal information you share with us through our website (<strong>mymudragold.in</strong>) or in person at our branch locations in Gorakhpur and Lucknow.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy-950 pt-4">
            1. Information We Collect
          </h2>
          <p>
            When you submit an inquiry form, custom coin request, or contact message, we collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your full name</li>
            <li>Your mobile phone number</li>
            <li>Your email address (if provided voluntarily)</li>
            <li>Your city and state</li>
            <li>Inquiry preferences and message details</li>
          </ul>
          <p>
            When selling gold or silver in person at our physical branches, Indian statutory regulations require customers to present an original government-issued photo identity proof (e.g. Aadhaar Card, PAN Card, Voter ID, or Passport).
          </p>

          <h2 className="font-serif text-xl font-bold text-navy-950 pt-4">
            2. How We Use Your Information
          </h2>
          <p>
            The information collected is used solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your valuation requests, callback inquiries, or custom coin requests</li>
            <li>Provide transaction invoices and statutory purchase documentation</li>
            <li>Communicate updates via phone or WhatsApp as authorized by you</li>
            <li>Prevent fraud and comply with statutory legal obligations</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-navy-950 pt-4">
            3. Information Sharing and Disclosure
          </h2>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal data to any third-party marketing agencies. Personal information is only shared when required by law or judicial process.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy-950 pt-4">
            4. Data Security
          </h2>
          <p>
            We apply administrative, technical, and physical security measures to safeguard your personal data from unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy-950 pt-4">
            5. Contact Us
          </h2>
          <p>
            If you have questions or concerns regarding our privacy practices, please contact us at:
            <br />
            <strong>Email:</strong> {siteConfig.email}
            <br />
            <strong>Phone:</strong> {siteConfig.primaryPhone}
            <br />
            <strong>Address:</strong> Ground Floor, Building No. 449S, Civil Lines, Gorakhpur, UP 273001
          </p>
        </div>
      </Container>
    </div>
  );
}
