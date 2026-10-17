import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowLeft } from "lucide-react";
import { siteConfig, telLink } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 bg-navy-50/40 min-h-[60vh] flex items-center">
      <Container size="narrow">
        <div className="text-center space-y-6">
          <div className="relative w-20 h-20 mx-auto drop-shadow-md">
            <Image
              src="/Mudra_Gold-logo.png"
              alt="Mudra Gold Logo"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
              Error 404
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950">
              Page Not Found
            </h1>
            <p className="text-sm sm:text-base text-navy-700/80 max-w-md mx-auto">
              The page you are looking for may have moved or no longer exists. Return to our homepage or connect directly with our branch team.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button variant="gold" size="md" className="gap-2 text-navy-950 font-bold">
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Homepage</span>
              </Button>
            </Link>

            <a href={telLink}>
              <Button variant="outline" size="md" className="gap-2 border-navy-300 text-navy-900 hover:bg-navy-50">
                <Phone className="w-4 h-4 text-gold-600" />
                <span>Call Branch: {siteConfig.primaryPhone}</span>
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
