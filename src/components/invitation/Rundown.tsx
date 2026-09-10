import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { rundownData } from "@/data/rundown";

export function Rundown() {
  return (
    <section
      id="susunan-acara"
      className="py-14 sm:py-20 bg-[#F5F1E9]/30 border-y border-[#E2DCD0]"
      aria-labelledby="rundown-heading"
    >
      <Container>
        <ScrollReveal direction="up" distance={20} duration={0.6}>
          <SectionHeader
            badge="Rangkaian Ibadah"
            title="Susunan Acara"
            subtitle="Agenda kegiatan Haul akan berlangsung khidmat dengan urutan sebagai berikut:"
          />
        </ScrollReveal>

        <div className="relative pl-6 sm:pl-8 ml-2 sm:ml-4">
          {/* Vertical connecting line */}
          <div
            className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-[1.5px] bg-[#D8D0C0]"
            aria-hidden="true"
          />

          <div className="space-y-6 sm:space-y-8">
            {rundownData.map((item, index) => (
              <ScrollReveal
                key={item.id}
                direction="up"
                distance={18}
                duration={0.55}
                delay={index * 0.08}
              >
                <div className="relative group">
                  {/* Timeline node badge */}
                  <div
                    className="absolute -left-6 sm:-left-8 top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border-2 border-[#9C7A4A] flex items-center justify-center text-[10px] sm:text-xs font-bold text-[#2D4030] shadow-sm transition-transform duration-200 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    {item.order}
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E2DCD0] shadow-[0_2px_8px_rgba(45,64,48,0.02)] transition-all duration-200 hover:border-[#9C7A4A]/50">
                    <h3 className="text-base sm:text-lg font-semibold text-[#2D4030]">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-xs sm:text-sm text-[#58635B] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal direction="none" duration={0.5} delay={0.2}>
          <p className="text-center text-xs text-[#58635B] mt-8 italic">
            * Rangkaian acara dimulai tepat pukul 07.00 WIB dan berlangsung berkesinambungan hingga selesai.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
