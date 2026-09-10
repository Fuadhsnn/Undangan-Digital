"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { galleryItems, GalleryItem } from "@/data/gallery";

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activeItem: GalleryItem | null =
    selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryItems.length : 0
    );
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : 0
    );
  }, [selectedIndex]);

  // Keyboard accessibility: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleClose, handleNext, handlePrev]);

  return (
    <section
      id="galeri"
      className="py-14 sm:py-20 bg-[#F5F1E9]/30 border-y border-[#E2DCD0]"
      aria-labelledby="gallery-heading"
    >
      <Container>
        <ScrollReveal direction="up" distance={20} duration={0.6}>
          <SectionHeader
            badge="Dokumentasi & Kenangan"
            title="Galeri Kenangan"
            subtitle="Jejak langkah kebaikan dan momen penuh kehangatan bersama Almarhum"
          />
        </ScrollReveal>

        {/* Responsive Grid: 2 columns mobile, 3 columns on tablet/desktop */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
          role="region"
          aria-label="Daftar Foto Galeri"
        >
          {galleryItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              distance={16}
              duration={0.5}
              delay={index * 0.07}
            >
              <button
                onClick={() => setSelectedIndex(index)}
                className="w-full group relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#E2DCD0] shadow-sm hover:shadow-md hover:border-[#9C7A4A] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#9C7A4A] cursor-pointer text-left"
                aria-label={`Lihat foto ${item.title}: ${item.caption}`}
              >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 bg-[#2D4030]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="p-2 rounded-full bg-white/90 text-[#2D4030] shadow-sm transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

        <p className="text-center text-xs text-[#58635B] mt-5">
          Klik pada gambar untuk memperbesar foto
        </p>
      </Container>

      {/* Lightbox Modal */}
      {activeItem !== null && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E2420]/85 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto: ${activeItem.title}`}
          onClick={handleClose}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E2DCD0]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar: Title, counter, close button */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E2DCD0] bg-[#FAF8F5]">
              <div>
                <p className="text-xs font-semibold text-[#9C7A4A] uppercase tracking-wider">
                  Foto {selectedIndex + 1} dari {galleryItems.length}
                </p>
                <h4 className="text-sm sm:text-base font-semibold text-[#2D4030]">
                  {activeItem.title}
                </h4>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-full text-[#58635B] hover:text-[#1E2420] hover:bg-[#E2DCD0]/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#9C7A4A] cursor-pointer"
                aria-label="Tutup penampil foto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container with navigation buttons */}
            <div className="relative aspect-[4/3] w-full bg-[#EDE6D8]">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 672px"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-[#2D4030] shadow-md border border-[#E2DCD0] transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#9C7A4A] cursor-pointer"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-[#2D4030] shadow-md border border-[#E2DCD0] transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#9C7A4A] cursor-pointer"
                aria-label="Foto selanjutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption */}
            <div className="p-4 bg-white border-t border-[#E2DCD0]">
              <p className="text-xs sm:text-sm text-[#58635B] leading-relaxed">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
