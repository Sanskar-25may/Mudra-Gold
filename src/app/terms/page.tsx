import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = constructMetadata({
  title: "Terms & Conditions — Mudra Gold",
  description: "Terms and conditions governing precious metal evaluation, transactions, and services at Mudra Gold.",
  canonicalUrl: "/terms",
});

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container size="narrow">
        <div className="max-w-none space-y-6 text-navy-800 text-sm leading-relaxed">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700 block">
            Customer Terms
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
            Terms & Conditions
          </h1>
          <p className="text-xs text-navy-500">
            Last updated: October 2026
          </p>

          <p>
            Welcome to Mudra Gold, A Unit of MKS Enterprises. By visiting our website or engaging in transactions at our branch locations, you agree to comply with the terms and statutory policies set forth below.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy-950 pt-4">
            1. Age Eligibility
          </h2>
          <p>
            In compliance with statutory and regulatory regulations, customers must be at least <strong>21 years of age</strong> to sell gold or silver articles at Mudra Gold. We do not transact with minors.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy-950 pt-4">
            2. Mandatory KYC & Proof of Ownership
          </h2>
          <p>
            Every seller must present an original, valid government-issued photo identity proof (such as Aadhaar Card, PAN Card, Voter ID, or Passport) and provide current residential address details. Mudra Gold reserves the right to decline transactions if genuine ownership of the precious metal cannot be established.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy-950 pt-4">
            3. In-Person Scientific Valuation
          </h2>
          <p>
            All jewellery cleaning, weighing on certified 3-decimal scales, and non-destructive spectrometry purity testing are conducted directly in the customer&rsquo;s presence. Valuations are calculated based on the net pure precious metal content and the prevailing market rate at the time of evaluation. Customers are under no obligation to proceed with the sale if they decline the valuation.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy-950 pt-4">
            4. Payment Methods & Receipt
          </h2>
          <p>
            Payments are disbursed on the spot upon customer acceptance of the final valuation. Payment is issued via Instant Cash (up to statutory cash transaction limits mandated by Indian tax laws) or through verified electronic bank transfer (UPI, IMPS, NEFT, or RTGS) directly to the seller&rsquo;s personal bank account. A formal invoice is issued for every transaction.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy-950 pt-4">
            5. Swarn Vriddhi & Custom Coins
          </h2>
          <p>
            Inquiries submitted regarding the Swarn Vriddhi gold savings plan or bespoke minted coins are non-binding requests for callback and do not constitute online payment transactions. Formal enrollment terms are finalized at the branch.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy-950 pt-4">
            6. Governing Jurisdiction
          </h2>
          <p>
            Any disputes arising in connection with transactions or services rendered shall be subject to the exclusive jurisdiction of the competent courts in Gorakhpur, Uttar Pradesh.
          </p>
        </div>
      </Container>
    </div>
  );
}
