"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { IslamicOrnament } from "@/components/ui/IslamicOrnament";
import { event } from "@/config/event";
import { cn } from "@/lib/utils";

export function Greeting() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.35 });

  // Auto-open once when 35% scrolled into viewport
  useEffect(() => {
    if (isInView && !isOpen) {
      const t = setTimeout(() => setIsOpen(true), 350);
      return () => clearTimeout(t);
    }
  }, [isInView, isOpen]);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const letterContent = (
    <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 border border-[#E2DCD0] shadow-[0_10px_40px_rgba(45,64,48,0.06)] relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-25 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#9C7A4A] to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none opacity-15 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#9C7A4A] to-transparent"
        aria-hidden="true"
      />

      <p
        id="greeting-heading"
        className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#2D4030] leading-relaxed mb-2"
      >
        السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
      </p>
      <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#9C7A4A] uppercase mb-4">
        Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
      </p>

      <IslamicOrnament variant="divider" className="my-3" />

      <p className="text-sm sm:text-base text-[#1E2420] leading-relaxed max-w-xl mx-auto mt-4 font-normal">
        Dengan memohon rahmat dan ridha Allah SWT, kami sekeluarga mengundang
        Bapak/Ibu/Saudara/i untuk berkenan hadir dalam acara{" "}
        <span className="font-semibold text-[#2D4030]">
          Haul Almarhum {event.deceasedName}
        </span>
        .
      </p>

      <p className="text-xs sm:text-sm text-[#58635B] max-w-md mx-auto mt-3 leading-relaxed">
        Kehadiran serta doa tulus dari Bapak/Ibu/Saudara/i sekalian merupakan
        kehormatan dan kebahagiaan yang sangat berarti bagi kami sekeluarga.
      </p>
    </div>
  );

  return (
    <section
      id="greeting"
      className="py-14 sm:py-20 text-center"
      aria-labelledby="greeting-heading"
    >
      <Container className="max-w-2xl">
        <div
          ref={wrapperRef}
          onClick={handleToggle}
          className="group relative cursor-pointer select-none [perspective:1400px] focus:outline-none"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleToggle();
            }
          }}
          aria-expanded={isOpen}
          aria-label="Buka atau tutup surat undangan ucapan salam"
        >
          {/* Shadow pool */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-4 w-2/3 h-4 rounded-full bg-[#2D4030]/10 blur-xl"
            animate={{
              opacity: isOpen ? 0.6 : 0.3,
              scale: isOpen ? 1.1 : 0.9,
              y: isOpen ? 0 : -6,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />

          {/* ⬇ MAIN STACK: envelope body (flow height) + letter (absolute overlay on top) */}
          <div className="relative flex flex-col">
            {/* 1) THE LETTER — occupies space in DOM flow to prevent overlap with next section */}
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { y: 120, scale: 0.92, opacity: 0.2 },
                open: {
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 22,
                    mass: 0.95,
                    delay: isOpen ? 0.2 : 0,
                  },
                },
              }}
              style={{ zIndex: 20 }}
              className="relative"
            >
              <div
                className={cn(
                  "transition-[pointer-events] duration-300",
                  isOpen ? "pointer-events-auto" : "pointer-events-none"
                )}
                onClick={(e) => isOpen && e.stopPropagation()}
              >
                {letterContent}
              </div>
            </motion.div>

            {/* 2) ENVELOPE BODY — anchored below letter (or behind when closed) */}
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { y: 0, opacity: 1 },
                open: {
                  y: 16,
                  opacity: 0.55,
                  transition: { duration: 0.45, delay: isOpen ? 0.05 : 0.15 },
                },
              }}
              style={{ zIndex: 10, marginTop: isOpen ? -90 : -180 }}
              className="relative mx-auto w-[88%] sm:w-[82%] md:w-[78%]"
            >
              {/* Envelope box (shape) */}
              <div className="relative rounded-b-2xl rounded-t-lg overflow-hidden border border-[#D9CDB7] bg-gradient-to-br from-[#F4EDE1] via-[#F8F2E6] to-[#EDE4D2] shadow-[0_8px_24px_rgba(45,64,48,0.07)]">
                {/* Envelope fold SVG inner lines */}
                <svg
                  viewBox="0 0 400 200"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
                  aria-hidden="true"
                >
                  <path
                    d="M0 200 L200 90 L400 200 Z"
                    fill="none"
                    stroke="#B9A37C"
                    strokeWidth="1"
                  />
                </svg>
                {/* Envelope pocket height */}
                <div className="h-[85px] sm:h-[100px] md:h-[115px] w-full" aria-hidden="true" />
              </div>

              {/* FLAP on top of envelope */}
              <motion.div
                variants={{
                  closed: { rotateX: 0 },
                  open: {
                    rotateX: -178,
                    transition: {
                      duration: 0.85,
                      ease: [0.65, 0, 0.35, 1],
                      delay: isOpen ? 0 : 0.1,
                    },
                  },
                }}
                style={{
                  transformOrigin: "top center",
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                  zIndex: 30,
                }}
                className="absolute inset-x-0 -top-[1px] origin-top"
                aria-hidden="true"
              >
                <div className="relative rounded-t-2xl overflow-hidden">
                  <svg
                    viewBox="0 0 400 180"
                    preserveAspectRatio="none"
                    className="w-full h-[90px] sm:h-[105px] md:h-[120px] drop-shadow-[0_6px_8px_rgba(45,64,48,0.10)]"
                  >
                    <defs>
                      <linearGradient id="flapGrad2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#D7B988" />
                        <stop offset="55%" stopColor="#BF9D66" />
                        <stop offset="100%" stopColor="#A5834E" />
                      </linearGradient>
                      <linearGradient id="flapInner2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F6ECD9" />
                        <stop offset="100%" stopColor="#EADFC7" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="0,0 400,0 200,175"
                      fill="url(#flapGrad2)"
                      stroke="#8A6B3E"
                      strokeWidth="1"
                    />
                    <polygon
                      points="14,10 386,10 200,165"
                      fill="url(#flapInner2)"
                      opacity="0.25"
                    />
                  </svg>

                  {/* Wax seal */}
                  <motion.div
                    variants={{
                      closed: { y: 0, scale: 1, opacity: 1 },
                      open: {
                        y: -8,
                        scale: 0.8,
                        opacity: 0,
                        transition: { duration: 0.25 },
                      },
                    }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6 w-12 h-12 sm:w-14 sm:h-14"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8A2A2B] via-[#A43435] to-[#6B1E1F] shadow-[0_4px_12px_rgba(138,42,43,0.45)] border border-[#5A1818]/60" />
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 via-transparent to-black/20 pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center text-[#F6E7C7]">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-sm" strokeWidth={2.2} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Hint caption */}
          <motion.p
            animate={{
              opacity: isOpen ? 0 : 1,
              y: isOpen ? 8 : 0,
              pointerEvents: isOpen ? "none" : "auto",
            }}
            transition={{ duration: 0.4 }}
            className="mx-auto mt-4 text-[11px] sm:text-xs font-medium tracking-wider text-[#9C7A4A] flex items-center justify-center gap-2"
          >
            <span className="inline-block w-1 h-1 rounded-full bg-[#9C7A4A]" />
            Klik atau scroll untuk membuka surat
            <span className="inline-block w-1 h-1 rounded-full bg-[#9C7A4A]" />
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
