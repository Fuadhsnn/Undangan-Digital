"use client";

import React, { useState } from "react";
import { Heart, Send, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { initialDummyPrayers, PrayerGreeting } from "@/data/guestbook";

export function Guestbook() {
  const [prayers, setPrayers] = useState<PrayerGreeting[]>(initialDummyPrayers);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      const newEntry: PrayerGreeting = {
        id: `prayer-${Date.now()}`,
        name: name.trim(),
        message: message.trim(),
        createdAt: "Baru saja",
      };

      setPrayers([newEntry, ...prayers]);
      setName("");
      setMessage("");
      setIsSubmitting(false);
      setSuccessNotice(true);

      setTimeout(() => setSuccessNotice(false), 5000);
    }, 300);
  };

  return (
    <section
      id="titip-doa"
      className="py-14 sm:py-20"
      aria-labelledby="guestbook-heading"
    >
      <Container>
        <ScrollReveal direction="up" distance={20} duration={0.6}>
          <SectionHeader
            badge="Untaian Doa & Harapan"
            title="Titip Doa"
            subtitle="Sampaikan doa tulus dan untaian kenangan baik bagi Almarhum H. Muhammad Hasan"
          />
        </ScrollReveal>

        {/* Input Form Card */}
        <ScrollReveal direction="up" distance={25} duration={0.7} delay={0.1}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DCD0] shadow-[0_4px_24px_rgba(45,64,48,0.03)] mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {successNotice && (
              <div
                className="p-3 rounded-xl bg-[#FAF8F5] border border-[#2D6A4F]/30 text-xs text-[#2D6A4F] flex items-center gap-2 animate-in fade-in"
                role="status"
              >
                <Heart className="w-4 h-4 text-[#2D6A4F] fill-current" />
                <span>Doa Anda telah terkirim dan ditampilkan pada daftar di bawah.</span>
              </div>
            )}

            <div>
              <label
                htmlFor="guestbook-name"
                className="block text-xs font-semibold uppercase tracking-wider text-[#58635B] mb-1.5"
              >
                Nama Anda *
              </label>
              <input
                id="guestbook-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tuliskan nama Anda"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E2DCD0] bg-[#FAF8F5] text-sm text-[#1E2420] focus:bg-white focus:border-[#9C7A4A] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="guestbook-message"
                className="block text-xs font-semibold uppercase tracking-wider text-[#58635B] mb-1.5"
              >
                Untaian Doa / Ucapan *
              </label>
              <textarea
                id="guestbook-message"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan doa kebaikan bagi Almarhum..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#E2DCD0] bg-[#FAF8F5] text-sm text-[#1E2420] focus:bg-white focus:border-[#9C7A4A] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full bg-[#2D4030] text-[#FAF8F5] text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#1E2B20] disabled:opacity-50 transition-all cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-[#9C7A4A]"
            >
              <Send className="w-3.5 h-3.5 text-[#C9AB7E]" />
              <span>{isSubmitting ? "Mengirim Doa..." : "Kirim Doa"}</span>
            </button>
          </form>
        </div>
      </ScrollReveal>

      {/* List of Prayers */}
      <ScrollReveal direction="up" distance={20} duration={0.7} delay={0.2}>
        <div className="space-y-3.5">
          <div className="flex items-center justify-between px-1 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#58635B] flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#9C7A4A]" />
              <span>Daftar Doa ({prayers.length})</span>
            </span>
            <span className="text-[11px] text-[#7B877F]">
              Preview Data Terpilih
            </span>
          </div>

          <div
            className="space-y-3 max-h-96 overflow-y-auto pr-1"
            role="feed"
            aria-label="Untaian Doa yang Terkirim"
          >
            {prayers.map((item) => (
              <article
                key={item.id}
                className="p-4 rounded-xl bg-white border border-[#E2DCD0] shadow-xs text-left"
              >
                <div className="flex items-baseline justify-between mb-1.5">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2D4030]">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-[#7B877F]">
                    {item.createdAt}
                  </span>
                </div>
                {item.relationship && (
                  <p className="text-[11px] text-[#9C7A4A] font-medium mb-1.5">
                    {item.relationship}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-[#1E2420] leading-relaxed">
                  {item.message}
                </p>
              </article>
            ))}
          </div>
        </div>
      </ScrollReveal>
      </Container>
    </section>
  );
}
