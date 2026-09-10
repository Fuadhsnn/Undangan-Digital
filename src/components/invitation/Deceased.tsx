"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { event } from "@/config/event";

export function Deceased() {
  const [imageError, setImageError] = useState(false);

  // Fallback to our custom elegant Islamic memorial SVG if jpg doesn't exist
  const photoSrc = imageError ? "/images/almarhum.svg" : event.deceasedPhoto;

  return (
    <section
      id="mengenang-almarhum"
      className="py-12 sm:py-16 bg-[#F5F1E9]/40 border-y border-[#E2DCD0]"
      aria-labelledby="deceased-heading"
    >
      <Container>
        <ScrollReveal direction="up" distance={20} duration={0.6}>
          <SectionHeader
            badge="Mengenang Almarhum"
            title="In Memoriam"
            subtitle="Doa dan ingatan tulus kami persembahkan bagi almarhum tercinta"
          />
        </ScrollReveal>

        <div className="flex flex-col items-center text-center">
          {/* Portrait Circular Frame with elegant ring border */}
          <ScrollReveal direction="up" distance={30} duration={0.7} delay={0.1}>
            <div className="relative group p-[3px] rounded-full bg-gradient-to-br from-[#9C7A4A] via-[#C9AB7E] to-[#9C7A4A] shadow-[0_8px_30px_rgba(45,64,48,0.08)] mb-6">
              <div className="absolute inset-0 rounded-full bg-[#9C7A4A]/10 blur-sm -z-10" aria-hidden="true" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-[#EDE6D8] ring-4 ring-white">
                <Image
                  src={photoSrc}
                  alt={`Foto kenangan Almarhum ${event.deceasedName}`}
                  fill
                  className="object-cover object-top scale-[1.25] transition-transform duration-700 group-hover:scale-[1.35]"
                  onError={() => setImageError(true)}
                  sizes="(max-width: 640px) 240px, 288px"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Name & Honorific */}
          <ScrollReveal direction="up" distance={20} duration={0.6} delay={0.2}>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#9C7A4A] uppercase mb-1">
              Almarhum
            </p>
            <h3
              id="deceased-heading"
              className="text-2xl sm:text-3xl font-serif font-bold text-[#2D4030] tracking-tight mb-4"
            >
              {event.deceasedName}
            </h3>
          </ScrollReveal>

          {/* Memorial Blessing Prayer */}
          <ScrollReveal direction="up" distance={20} duration={0.65} delay={0.3}>
            <div className="max-w-md mx-auto p-5 rounded-xl bg-white/80 border border-[#E2DCD0] shadow-sm">
              <p className="text-sm sm:text-base text-[#1E2420] italic leading-relaxed">
                “Semoga Allah SWT mengampuni segala dosa dan kesalahan beliau,
                menerima seluruh amal ibadahnya, serta menempatkan beliau di tempat
                terbaik di sisi-Nya.”
              </p>
              <p className="text-xs text-[#58635B] mt-2 font-medium tracking-wide">
                Aamiin Yaa Rabbal &apos;Aalamiin
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
