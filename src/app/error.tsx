"use client";

import React, { useEffect } from "react";
import { Phone, RefreshCw, AlertCircle } from "lucide-react";
import { siteConfig, telLink } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[APP_RUNTIME_ERROR]", error);
  }, [error]);

  return (
    <div className="py-24 sm:py-32 bg-navy-50/40 min-h-[60vh] flex items-center">
      <Container size="narrow">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-red-100 border border-red-200 flex items-center justify-center mx-auto text-red-600 shadow-sm">
            <AlertCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              System Notice
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950">
              Something Went Wrong
            </h1>
            <p className="text-sm sm:text-base text-navy-700/80 max-w-md mx-auto">
              We encountered an unexpected error while processing this page. Please try refreshing or reach out to our team directly.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="md" onClick={() => reset()} className="gap-2">
              <RefreshCw className="w-4 h-4 text-gold-300" />
              <span>Try Again</span>
            </Button>

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
