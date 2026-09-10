import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { event } from "@/config/event";

export function Location() {
  return (
    <section
      id="lokasi"
      className="py-14 sm:py-20"
      aria-labelledby="location-heading"
    >
      <Container>
        <ScrollReveal direction="up" distance={20} duration={0.6}>
          <SectionHeader
            badge="Petunjuk Arah"
            title="Lokasi Acara"
            subtitle="Peta dan panduan rute menuju kediaman Almarhum"
          />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={25} duration={0.7} delay={0.1}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DCD0] shadow-[0_4px_24px_rgba(45,64,48,0.03)] text-center">
          <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#E2DCD0] flex items-center justify-center mx-auto mb-4 text-[#9C7A4A]">
            <MapPin className="w-6 h-6" aria-hidden="true" />
          </div>

          <h3
            id="location-heading"
            className="text-xl font-serif font-bold text-[#2D4030] mb-1"
          >
            {event.location}
          </h3>

          <p className="text-sm sm:text-base text-[#58635B] max-w-sm mx-auto mb-6">
            {event.address}
          </p>

          {/* Interactive Google Maps Embed */}
          <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-[#F0ECE1] border border-[#E2DCD0] mb-6 shadow-inner">
            <iframe
              src={event.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Haul Almarhum H. Muhammad Hasan bin H. Idi"
              className="w-full h-full rounded-xl"
            />
          </div>

          {/* CTA: Buka Google Maps */}
          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#2D4030] text-[#FAF8F5] text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#1E2B20] transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-[#9C7A4A] focus-visible:ring-offset-2"
          >
            <span>Buka Google Maps</span>
            <ExternalLink className="w-4 h-4 text-[#C9AB7E]" aria-hidden="true" />
          </a>

          <p className="text-xs text-[#7B877F] mt-4">
            Tautan akan membuka aplikasi Google Maps untuk mempermudah navigasi perjalanan Anda.
          </p>
        </div>
      </ScrollReveal>
    </Container>
  </section>
  );
}
