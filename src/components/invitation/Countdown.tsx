"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { event } from "@/config/event";
import { Clock } from "lucide-react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isElapsed: boolean;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    const targetDate = new Date(event.eventTimestamp).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isElapsed: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isElapsed: false,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="countdown"
      className="py-10 bg-[#FAF8F5]"
      aria-label="Hitung Mundur Acara"
    >
      <Container>
        <ScrollReveal direction="up" distance={20} duration={0.7}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DCD0] shadow-[0_4px_20px_rgba(45,64,48,0.03)] text-center">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#9C7A4A] uppercase mb-4">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Menuju Hari Acara</span>
          </div>

          {!timeLeft ? (
            // SSR Fallback skeleton to prevent layout shift & hydration mismatch
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto animate-pulse">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="p-3 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DCD0] h-20"
                />
              ))}
            </div>
          ) : timeLeft.isElapsed ? (
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#2D6A4F]/20 text-[#2D6A4F] font-medium text-sm sm:text-base">
              Alhamdulillah, acara sedang berlangsung.
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-md mx-auto">
              <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DCD0]">
                <span className="text-xl sm:text-3xl font-serif font-bold text-[#2D4030]">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs text-[#58635B] uppercase tracking-wider font-semibold mt-1">
                  Hari
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DCD0]">
                <span className="text-xl sm:text-3xl font-serif font-bold text-[#2D4030]">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs text-[#58635B] uppercase tracking-wider font-semibold mt-1">
                  Jam
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DCD0]">
                <span className="text-xl sm:text-3xl font-serif font-bold text-[#2D4030]">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs text-[#58635B] uppercase tracking-wider font-semibold mt-1">
                  Menit
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DCD0]">
                <span className="text-xl sm:text-3xl font-serif font-bold text-[#9C7A4A]">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs text-[#58635B] uppercase tracking-wider font-semibold mt-1">
                  Detik
                </span>
              </div>
            </div>
          )}

          <p className="text-xs text-[#58635B] mt-4">
            Waktu Indonesia Barat (WIB) • {event.displayDate}
          </p>
        </div>
      </ScrollReveal>
    </Container>
  </section>
  );
}
