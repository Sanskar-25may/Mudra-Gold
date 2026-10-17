"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { siteConfig, telLink } from "@/content/site";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gifting", label: "Gifting & Coins" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact & Branches" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-navy-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/Mudra_Gold-logo.png"
                alt="Mudra Gold Official Logo"
                width={48}
                height={48}
                priority
                className="w-12 h-12 object-contain drop-shadow-xs"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-navy-950 group-hover:text-gold-700 transition-colors">
                MUDRA GOLD
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-navy-500 -mt-1">
                Where Purity Meets Trust
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-navy-950 font-bold border-b-2 border-gold-500 pb-1"
                      : "text-navy-700 hover:text-navy-950"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={telLink} className="text-navy-700 hover:text-gold-600 p-2 transition-colors" title={`Call ${siteConfig.primaryPhone}`}>
              <Phone className="w-4 h-4" />
            </a>
            <Link href="/contact">
              <Button variant="gold" size="sm" className="gap-1.5 shadow-sm font-bold text-navy-950">
                <Sparkles className="w-3.5 h-3.5 text-navy-950" />
                <span>Sell Gold for Cash</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="/contact">
              <Button variant="gold" size="sm" className="text-xs px-2.5 py-1 font-bold text-navy-950">
                Sell Gold
              </Button>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy-700 hover:text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-navy-100 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gold-50 text-navy-950 font-bold border border-gold-200"
                      : "text-navy-800 hover:bg-navy-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-navy-100 flex flex-col gap-2">
            <a
              href={telLink}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md bg-navy-50 text-navy-950 font-medium text-sm border border-navy-200 hover:bg-navy-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-600" />
              <span>Call Us: {siteConfig.primaryPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
