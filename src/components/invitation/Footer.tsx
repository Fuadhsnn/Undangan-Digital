import React from "react";
import { Container } from "@/components/ui/Container";
import { IslamicOrnament } from "@/components/ui/IslamicOrnament";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { event } from "@/config/event";

export function Footer() {
  return (
    <footer className="py-16 sm:py-20 text-center bg-[#FAF8F5] border-t border-[#E2DCD0]">
      <Container>
        <ScrollReveal direction="up" distance={20} duration={0.7}>
          <p className="font-arabic text-xl sm:text-2xl text-[#2D4030] mb-2 leading-relaxed">
            وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </p>
          <p className="text-xs text-[#58635B] uppercase tracking-wider mb-4">
            Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
          </p>

          <p className="text-xs sm:text-sm text-[#58635B] max-w-md mx-auto leading-relaxed mb-6">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir serta meluangkan waktu untuk
            bersama-sama memanjatkan doa bagi almarhum.
          </p>

          <IslamicOrnament variant="divider" className="my-4" />

          <div className="mt-6">
            <p className="text-xs text-[#9C7A4A] font-semibold uppercase tracking-[0.2em] mb-1">
              Keluarga Besar Penyelenggara
            </p>
            <p className="text-base sm:text-lg font-serif font-bold text-[#2D4030]">
              {event.organizer}
            </p>
          </div>

          <div className="mt-12 pt-6 border-t border-[#E2DCD0]/60 text-[11px] text-[#7B877F]">
            <p>
              Undangan Digital Haul • Didesain dengan penuh takzim &amp; kehangatan
            </p>
            <p className="mt-1">
              © 2026 {event.organizer}. Seluruh hak cipta dilindungi.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </footer>
  );
}
