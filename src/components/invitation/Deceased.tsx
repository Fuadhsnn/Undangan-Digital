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
          {/* Portrait Frame with double refined border */}
          <ScrollReveal direction="up" distance={30} duration={0.7} delay={0.1}>
            <div className="relative group p-2 rounded-2xl bg-white border border-[#9C7A4A]/30 shadow-[0_8px_30px_rgba(45,64,48,0.06)] mb-6">
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-xl overflow-hidden bg-[#EDE6D8]">
              <Image
                src={photoSrc}
                alt={`Foto kenangan Almarhum ${event.deceasedName}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={() => setImageError(true)}
                sizes="(max-width: 640px) 224px, 256px"
                priority
              />
            </div>
            {/* Delicate corner ornaments */}
            <div
              className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#9C7A4A] rounded-tl-sm pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#9C7A4A] rounded-tr-sm pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#9C7A4A] rounded-bl-sm pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#9C7A4A] rounded-br-sm pointer-events-none"
              aria-hidden="true"
            />
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
