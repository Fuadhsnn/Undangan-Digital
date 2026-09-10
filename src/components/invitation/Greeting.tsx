import React from "react";
import { Container } from "@/components/ui/Container";
import { IslamicOrnament } from "@/components/ui/IslamicOrnament";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { event } from "@/config/event";

export function Greeting() {
  return (
    <section
      id="greeting"
      className="py-14 sm:py-20 text-center"
      aria-labelledby="greeting-heading"
    >
      <Container>
        <ScrollReveal direction="up" distance={25} duration={0.8}>
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E2DCD0] shadow-[0_4px_24px_rgba(45,64,48,0.03)] relative overflow-hidden">
          {/* Subtle Corner Accent */}
          <div
            className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#9C7A4A] to-transparent"
            aria-hidden="true"
          />

          <p
            id="greeting-heading"
            className="font-arabic text-2xl sm:text-3xl text-[#2D4030] leading-relaxed mb-2"
          >
            السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </p>
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#9C7A4A] uppercase mb-4">
            Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
          </p>

          <IslamicOrnament variant="divider" className="my-3" />

          <p className="text-sm sm:text-base text-[#1E2420] leading-relaxed max-w-lg mx-auto mt-4 font-normal">
            Dengan memohon rahmat dan ridha Allah SWT, kami sekeluarga
            mengundang Bapak/Ibu/Saudara/i untuk berkenan hadir dalam acara{" "}
            <span className="font-semibold text-[#2D4030]">
              Haul Almarhum {event.deceasedName}
            </span>
            .
          </p>

          <p className="text-xs sm:text-sm text-[#58635B] max-w-md mx-auto mt-3 leading-relaxed">
            Kehadiran serta doa tulus dari Bapak/Ibu/Saudara/i sekalian
            merupakan kehormatan dan kebahagiaan yang sangat berarti bagi kami
            sekeluarga.
          </p>
        </div>
      </ScrollReveal>
    </Container>
    </section>
  );
}
