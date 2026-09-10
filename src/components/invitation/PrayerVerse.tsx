import React from "react";
import { Container } from "@/components/ui/Container";
import { IslamicOrnament } from "@/components/ui/IslamicOrnament";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { quranVerse, memorialPrayer } from "@/data/prayers";

export function PrayerVerse() {
  return (
    <section
      id="doa-ayat"
      className="py-16 sm:py-24 text-center bg-[#FAF8F5]"
      aria-labelledby="prayer-verse-heading"
    >
      <Container>
        {/* Ayat Al-Qur'an Section */}
        <ScrollReveal direction="up" distance={25} duration={0.75}>
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E2DCD0] shadow-[0_4px_24px_rgba(45,64,48,0.03)] mb-8">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#9C7A4A] uppercase mb-4">
              Kalamullah
            </p>

            <h2
              id="prayer-verse-heading"
              className="text-xl sm:text-2xl font-serif text-[#2D4030] font-semibold mb-6"
            >
              QS. {quranVerse.surahName}: {quranVerse.ayahNumber}
            </h2>

            <div className="py-4 px-2 sm:px-4">
              <p
                className="font-arabic text-2xl sm:text-3xl text-[#2D4030] leading-[2.3] sm:leading-[2.5]"
                dir="rtl"
              >
                {quranVerse.arabic}
              </p>
            </div>

            <IslamicOrnament variant="divider" className="my-6" />

            <p className="text-sm sm:text-base text-[#1E2420] italic max-w-lg mx-auto leading-relaxed">
              {quranVerse.translation}
            </p>
            <p className="text-xs text-[#58635B] mt-2 font-medium">
              (Surat ke-{quranVerse.surahNumber})
            </p>
          </div>
        </ScrollReveal>

        {/* Supplication for Deceased */}
        <ScrollReveal direction="up" distance={20} duration={0.7} delay={0.15}>
          <div className="bg-white/80 rounded-2xl p-6 sm:p-8 border border-[#E2DCD0] shadow-sm">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#9C7A4A] uppercase mb-2">
              Doa Bagi Almarhum
            </p>
            <h3 className="text-lg font-serif text-[#2D4030] font-semibold mb-4">
              {memorialPrayer.title}
            </h3>

            <p
              className="font-arabic text-xl sm:text-2xl text-[#2D4030] leading-[2.2] py-2"
              dir="rtl"
            >
              {memorialPrayer.arabic}
            </p>

            {memorialPrayer.latin && (
              <p className="text-xs sm:text-sm text-[#58635B] italic max-w-md mx-auto mt-3">
                {memorialPrayer.latin}
              </p>
            )}

            <p className="text-xs sm:text-sm text-[#1E2420] max-w-md mx-auto mt-3 leading-relaxed">
              {memorialPrayer.translation}
            </p>

            <p className="text-[11px] text-[#7B877F] mt-3 uppercase tracking-wider">
              {memorialPrayer.source}
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
