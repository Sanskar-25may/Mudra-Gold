import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { siteConfig, telLink, waLink } from "@/content/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200 pt-16 pb-24 lg:pb-16 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-navy-800">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/Mudra_Gold-logo.png"
                  alt="Mudra Gold Official Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain drop-shadow-sm"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  MUDRA GOLD
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-gold-400 block -mt-1">
                  {siteConfig.parentCompany}
                </span>
              </div>
            </div>

            <p className="text-sm text-navy-300 leading-relaxed">
              Eastern UP’s trusted destination for instant cash against old gold and silver. 100% transparent live valuation, certified purity testing, and zero hidden deductions.
            </p>

            <div className="pt-2 text-xs text-navy-300 space-y-1">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-white tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-navy-300 hover:text-gold-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-navy-300 hover:text-gold-300 transition-colors">
                  About Mudra Gold
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-navy-300 hover:text-gold-300 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gifting" className="text-navy-300 hover:text-gold-300 transition-colors">
                  Gifting Articles & Coins
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-navy-300 hover:text-gold-300 transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-navy-300 hover:text-gold-300 transition-colors">
                  Customer Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-navy-300 hover:text-gold-300 transition-colors">
                  Branch Locations & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Branches */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-white tracking-wide">
              Our Branches
            </h3>
            <ul className="space-y-4 text-xs">
              {siteConfig.branches.map((b) => (
                <li key={b.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-sm">
                      {b.name}
                    </span>
                    {b.isComingSoon && (
                      <span className="text-[10px] bg-gold-900/60 text-gold-300 px-2 py-0.5 rounded border border-gold-700">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-navy-300">{b.address}</p>
                  {!b.isComingSoon && (
                    <a
                      href={b.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 transition-colors pt-0.5"
                    >
                      <MapPin className="w-3 h-3" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-white tracking-wide">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={telLink}
                className="flex items-start gap-2.5 hover:text-gold-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-white font-medium">{siteConfig.primaryPhone}</span>
                  <span className="text-xs text-navy-400">10:00 AM – 8:00 PM All Days</span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-navy-300 hover:text-gold-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-950/70 border border-emerald-700/80 text-emerald-400 text-xs font-medium hover:bg-emerald-900/70 transition-colors"
              >
                <span>Chat on WhatsApp &rarr;</span>
              </a>
            </div>

            <div className="pt-2">
              <span className="text-xs text-navy-400 block mb-2 font-medium">Follow Us:</span>
              <div className="flex gap-3 text-xs">
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-400 hover:text-gold-400 transition-colors"
                >
                  Facebook
                </a>
                <span className="text-navy-700">•</span>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-400 hover:text-gold-400 transition-colors"
                >
                  Instagram
                </a>
                <span className="text-navy-700">•</span>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-400 hover:text-gold-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-navy-400">
          <p>
            &copy; {currentYear} Mudra Gold. All rights reserved. {siteConfig.parentCompany}.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
