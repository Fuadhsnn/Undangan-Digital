import React from "react";
import { Calendar, Clock, MapPin, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { event } from "@/config/event";

export function EventDetails() {
  return (
    <section
      id="detail-acara"
      className="py-14 sm:py-20"
      aria-labelledby="event-details-heading"
    >
      <Container>
        <ScrollReveal direction="up" distance={20} duration={0.6}>
          <SectionHeader
            badge="Informasi Pelaksanaan"
            title="Waktu & Tempat Acara"
            subtitle="Rangkaian kegiatan peringatan haul akan diselenggarakan pada:"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:gap-5">
          {/* Card: Hari & Tanggal */}
          <ScrollReveal direction="up" distance={20} duration={0.6} delay={0.05}>
            <div className="flex items-start space-x-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#E2DCD0] shadow-[0_2px_12px_rgba(45,64,48,0.03)] transition-all hover:border-[#9C7A4A]/50">
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E2DCD0] text-[#2D4030] flex-shrink-0">
                <Calendar className="w-5 h-5 text-[#9C7A4A]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#58635B] uppercase mb-0.5">
                  Hari & Tanggal
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-[#1E2420]">
                  {event.displayDate}
                </h3>
                <p className="text-xs text-[#58635B] mt-0.5">
                  Tahun 1448 H / 2026 M
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card: Waktu */}
          <ScrollReveal direction="up" distance={20} duration={0.6} delay={0.15}>
            <div className="flex items-start space-x-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#E2DCD0] shadow-[0_2px_12px_rgba(45,64,48,0.03)] transition-all hover:border-[#9C7A4A]/50">
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E2DCD0] text-[#2D4030] flex-shrink-0">
                <Clock className="w-5 h-5 text-[#9C7A4A]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#58635B] uppercase mb-0.5">
                  Waktu Acara
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-[#1E2420]">
                  {event.time}
                </h3>
                <p className="text-xs text-[#58635B] mt-0.5">
                  Diharapkan hadir tepat waktu sebelum rangkaian doa dimulai
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card: Tempat & Alamat */}
          <ScrollReveal direction="up" distance={20} duration={0.6} delay={0.25}>
            <div className="flex items-start space-x-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#E2DCD0] shadow-[0_2px_12px_rgba(45,64,48,0.03)] transition-all hover:border-[#9C7A4A]/50">
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E2DCD0] text-[#2D4030] flex-shrink-0">
                <Home className="w-5 h-5 text-[#9C7A4A]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#58635B] uppercase mb-0.5">
                  Tempat Pelaksanaan
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-[#1E2420]">
                  {event.location}
                </h3>
                <p className="text-sm text-[#58635B] mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#9C7A4A] flex-shrink-0" />
                  <span>{event.address}</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
