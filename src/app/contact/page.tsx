import React from "react";
import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { siteConfig, telLink, waLink } from "@/content/site";
import { constructMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/forms/ContactForm";
import { LeadForm } from "@/components/forms/LeadForm";

export const metadata: Metadata = constructMetadata({
  title: "Contact Mudra Gold | Branches in Gorakhpur & Lucknow",
  description:
    "Visit or call Mudra Gold. Gorakhpur: Civil Lines, in front of St Andrew's Inter College. Lucknow: Arjunganj, near Murari Hospital. Phone +91 96213 19818.",
  canonicalUrl: "/contact",
});

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-navy-50/60 via-white to-white py-16 sm:py-24 border-b border-navy-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="gold">Get In Touch</Badge>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 tracking-tight">
              Contact & Branch Locations
            </h1>
            <p className="text-base sm:text-lg text-navy-700/80 leading-relaxed pt-2">
              Visit our branches in Gorakhpur and Lucknow for live testing and instant payment, or reach out to us by phone, WhatsApp, or the message form below.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Grid: Direct Details + Forms */}
      <section className="py-16 sm:py-24 bg-white border-b border-navy-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Branch Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-widest text-gold-700">
                  Direct Inquiries
                </span>
                <h2 className="font-serif text-2xl font-bold text-navy-950">
                  Immediate Assistance
                </h2>
                <p className="text-sm text-navy-700/80 leading-relaxed">
                  Our customer service representatives are available every day to assist you with inquiries regarding purity testing, documents, or coin customization.
                </p>
              </div>

              {/* Direct channels */}
              <div className="bg-navy-50/40 rounded-xl p-6 border border-navy-100 space-y-4 text-sm">
                <a
                  href={telLink}
                  className="flex items-start gap-3 hover:text-gold-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy-950 flex items-center justify-center text-gold-400 shrink-0 ring-1 ring-gold-400/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-navy-500 block">Call Our Branch</span>
                    <strong className="text-navy-950 text-base">{siteConfig.primaryPhone}</strong>
                    <span className="text-xs text-navy-500 block">Available 10 AM – 8 PM All Days</span>
                  </div>
                </a>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-emerald-800 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 border border-emerald-200">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-navy-500 block">WhatsApp Chat</span>
                    <strong className="text-emerald-900 text-base">{siteConfig.primaryPhone}</strong>
                    <span className="text-xs text-emerald-700 block">Fast responses to quick queries</span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 hover:text-gold-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy-950 flex items-center justify-center text-gold-400 shrink-0 ring-1 ring-gold-400/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-navy-500 block">Email Address</span>
                    <strong className="text-navy-950">{siteConfig.email}</strong>
                  </div>
                </a>

                <div className="flex items-start gap-3 pt-2 border-t border-navy-100">
                  <div className="w-9 h-9 rounded-lg bg-navy-100 flex items-center justify-center text-navy-800 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-navy-500 block">Business Hours</span>
                    <strong className="text-navy-950">{siteConfig.hours}</strong>
                  </div>
                </div>
              </div>

              {/* Branch Locations List */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-navy-950">
                  Branch Addresses
                </h3>

                <div className="space-y-3">
                  {siteConfig.branches.map((b) => (
                    <div
                      key={b.id}
                      className={`p-4 rounded-xl border text-xs sm:text-sm space-y-1.5 ${
                        b.isComingSoon
                          ? "bg-navy-50/50 border-navy-200"
                          : "bg-white border-navy-100 shadow-2xs hover:border-gold-300 transition-colors"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <strong className="text-navy-950 font-serif text-sm">
                          {b.name}
                        </strong>
                        {b.isComingSoon ? (
                          <span className="text-[10px] bg-navy-950 text-gold-300 px-2 py-0.5 rounded border border-gold-400/30">
                            Coming Soon
                          </span>
                        ) : (
                          <span className="text-[10px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                            Open
                          </span>
                        )}
                      </div>
                      <p className="text-navy-700/80">{b.address}, {b.city} - {b.pincode}</p>
                      {!b.isComingSoon && (
                        <a
                          href={b.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-navy-900 hover:text-gold-700 font-semibold pt-1 transition-colors"
                        >
                          <MapPin className="w-3.5 h-3.5 text-gold-600" />
                          <span>Open in Google Maps &rarr;</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Message & Lead Forms */}
            <div className="lg:col-span-7 space-y-8">
              <ContactForm />
              <div className="border-t border-navy-100 pt-8">
                <LeadForm title="Book a Valuation or Gifting Callback" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
