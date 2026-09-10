"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen } from "lucide-react";
import { event } from "@/config/event";
import { IslamicOrnament } from "@/components/ui/IslamicOrnament";

interface CoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

export function Cover({ isOpen, onOpen }: CoverProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.section
          key="cover-screen"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.85, ease: [0.65, 0, 0.35, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between p-6 sm:p-10 bg-[#FAF8F5] text-[#1E2420] select-none overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Cover Undangan Haul"
        >
          {/* Subtle Islamic Ambient Glow Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9C7A4A]/10 via-transparent to-transparent"
            aria-hidden="true"
          />

          {/* Elegant Outer Border Inset */}
          <div
            className="absolute inset-3 sm:inset-5 border border-[#E2DCD0] rounded-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-5 sm:inset-7 border border-[#9C7A4A]/25 rounded-xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Section: Basmalah */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-6 sm:pt-8 text-center"
          >
            <p className="font-arabic text-2xl sm:text-3xl text-[#2D4030] tracking-wide leading-loose">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
            <p className="text-xs text-[#58635B] tracking-wider mt-1">
              Bismillāhir-raḥmānir-raḥīm
            </p>
          </motion.div>

          {/* Middle Section: Main Focus */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="max-w-md w-full text-center my-auto py-6"
          >
            <div className="inline-flex items-center justify-center space-x-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#9C7A4A]/40 mb-4 shadow-[0_2px_8px_rgba(45,64,48,0.04)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C7A4A]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#9C7A4A] uppercase">
                UNDANGAN HAUL
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C7A4A]" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2D4030] font-bold tracking-tight mb-2">
              {event.deceasedName}
            </h1>

            <p className="text-sm sm:text-base font-medium text-[#536B58] tracking-wide mb-3">
              {event.haulNumber ? `Haul ke-${event.haulNumber}` : "Peringatan Haul"}
            </p>

            <IslamicOrnament variant="divider" className="my-4" />

            <div className="text-sm sm:text-base text-[#1E2420] font-medium tracking-wide">
              {event.displayDate}
            </div>

            <p className="text-xs sm:text-sm text-[#58635B] mt-1">
              {event.location} • {event.address}
            </p>
          </motion.div>

          {/* Bottom Section: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pb-6 sm:pb-8 text-center z-10"
          >
            <p className="text-xs text-[#58635B] mb-3">
              Kepada Yth. Bapak/Ibu/Saudara/i
            </p>
            <button
              onClick={onOpen}
              className="group relative inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full bg-[#2D4030] text-[#FAF8F5] text-sm font-semibold tracking-wide hover:bg-[#1E2B20] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_16px_rgba(45,64,48,0.2)] focus-visible:ring-2 focus-visible:ring-[#9C7A4A] focus-visible:ring-offset-2 cursor-pointer"
              aria-label="Buka Undangan Haul Almarhum H. Muhammad Hasan"
            >
              <MailOpen className="w-4 h-4 text-[#C9AB7E] group-hover:scale-110 transition-transform duration-300" />
              <span>Buka Undangan</span>
            </button>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
