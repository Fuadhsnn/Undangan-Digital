"use client";

import React, { useState, useEffect } from "react";
import { Share2, Copy, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { event } from "@/config/event";

export function ShareWhatsApp() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const haulLabel = event.haulNumber ? `Haul ke-${event.haulNumber}` : "Peringatan Haul";
  const shareText = `${event.whatsappGreetingTemplate}${currentUrl}`;

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    shareText
  )}`;

  const handleCopy = async () => {
    if (!currentUrl) return;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="bagikan"
      className="py-12 bg-[#F5F1E9]/30 border-t border-[#E2DCD0]"
      aria-label="Bagikan Undangan"
    >
      <Container>
        <ScrollReveal direction="up" distance={20} duration={0.65}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DCD0] shadow-[0_4px_24px_rgba(45,64,48,0.03)] text-center">
          <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E2DCD0] flex items-center justify-center mx-auto mb-3 text-[#9C7A4A]">
            <Share2 className="w-5 h-5" aria-hidden="true" />
          </div>

          <h3 className="text-lg font-serif font-bold text-[#2D4030] mb-2">
            Bagikan Informasi Acara
          </h3>

          <p className="text-xs sm:text-sm text-[#58635B] max-w-sm mx-auto mb-6">
            Bantu menyebarkan kabar baik ini kepada keluarga, kerabat, dan sahabat Almarhum.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full bg-[#2D6A4F] text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#245640] transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-offset-2"
            >
              <Share2 className="w-4 h-4" />
              <span>Bagikan via WhatsApp</span>
            </a>

            <button
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-[#FAF8F5] border border-[#E2DCD0] text-xs sm:text-sm font-semibold text-[#2D4030] hover:bg-white hover:border-[#9C7A4A] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9C7A4A]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#2D6A4F]" />
                  <span>Tautan Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#7B877F]" />
                  <span>Salin Tautan</span>
                </>
              )}
            </button>
          </div>
        </div>
      </ScrollReveal>
    </Container>
  </section>
  );
}
