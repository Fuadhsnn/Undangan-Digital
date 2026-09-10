"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Users, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { submitRSVP, AttendanceStatus } from "@/lib/rsvp-service";

export function RSVP() {
  const [name, setName] = useState("");
  const [guestCount, setGuestCount] = useState<number>(1);
  const [status, setStatus] = useState<AttendanceStatus>("hadir");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    status: AttendanceStatus;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim()) {
      setErrorMessage("Silakan masukkan nama Anda.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitRSVP({
        name,
        guestCount: Number(guestCount),
        status,
        notes,
      });

      if (res.success && res.data) {
        setSubmittedData({
          name: res.data.name,
          status: res.data.status,
        });
      } else {
        setErrorMessage(res.message || "Gagal memproses konfirmasi.");
      }
    } catch {
      setErrorMessage("Terjadi kesalahan saat memproses konfirmasi kehadiran.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusLabel = {
    hadir: "InsyaAllah Hadir",
    ragu: "Belum Dapat Memastikan",
    tidak_hadir: "Tidak Dapat Hadir",
  };

  return (
    <section
      id="rsvp"
      className="py-14 sm:py-20 bg-[#F5F1E9]/30 border-y border-[#E2DCD0]"
      aria-labelledby="rsvp-heading"
    >
      <Container>
        <SectionHeader
          badge="Konfirmasi Kehadiran"
          title="RSVP Kehadiran"
          subtitle="Mohon konfirmasikan rencana kehadiran Bapak/Ibu/Saudara/i guna kenyamanan persiapan majlis"
        />

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DCD0] shadow-[0_4px_24px_rgba(45,64,48,0.03)]">
          {submittedData ? (
            <div className="text-center py-6 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#2D6A4F]/30 flex items-center justify-center mx-auto mb-3 text-[#2D6A4F]">
                <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-serif font-bold text-[#2D4030] mb-1">
                Jazakumullah Khairan
              </h3>

              <p className="text-sm text-[#1E2420] max-w-sm mx-auto mb-2">
                Terima kasih <span className="font-semibold">{submittedData.name}</span>. Konfirmasi kehadiran Anda status:{" "}
                <span className="font-semibold text-[#9C7A4A]">
                  {statusLabel[submittedData.status]}
                </span>{" "}
                telah kami catat pada sesi penjelajahan ini.
              </p>

              <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E2DCD0] text-[11px] text-[#58635B] max-w-xs mx-auto mb-5">
                Mode Simulasi Frontend: Data tersimpan secara lokal pada peramban Anda.
              </div>

              <button
                onClick={() => setSubmittedData(null)}
                className="text-xs font-semibold text-[#2D4030] hover:underline cursor-pointer"
              >
                Ubah Konfirmasi Kehadiran
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div
                  className="p-3 rounded-xl bg-[#FAF0F0] border border-[#9E2A2B]/30 text-xs text-[#9E2A2B] flex items-center gap-2"
                  role="alert"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Input: Nama */}
              <div>
                <label
                  htmlFor="rsvp-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#58635B] mb-1.5"
                >
                  Nama Lengkap *
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Fulan bin Fulan"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E2DCD0] bg-[#FAF8F5] text-sm text-[#1E2420] focus:bg-white focus:border-[#9C7A4A] focus:outline-none transition-colors"
                />
              </div>

              {/* Input: Jumlah Tamu */}
              <div>
                <label
                  htmlFor="rsvp-guest-count"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#58635B] mb-1.5"
                >
                  Jumlah Tamu Hadir
                </label>
                <div className="relative">
                  <input
                    id="rsvp-guest-count"
                    type="number"
                    min={1}
                    max={10}
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E2DCD0] bg-[#FAF8F5] text-sm text-[#1E2420] focus:bg-white focus:border-[#9C7A4A] focus:outline-none transition-colors pl-10"
                  />
                  <Users className="w-4 h-4 text-[#7B877F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Status Kehadiran Radio Group */}
              <fieldset>
                <legend className="block text-xs font-semibold uppercase tracking-wider text-[#58635B] mb-2">
                  Konfirmasi Kehadiran *
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <label
                    className={`flex items-center space-x-2.5 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                      status === "hadir"
                        ? "bg-[#FAF8F5] border-[#2D4030] text-[#2D4030] shadow-xs"
                        : "bg-white border-[#E2DCD0] text-[#58635B] hover:border-[#9C7A4A]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="hadir"
                      checked={status === "hadir"}
                      onChange={() => setStatus("hadir")}
                      className="accent-[#2D4030]"
                    />
                    <span>InsyaAllah hadir</span>
                  </label>

                  <label
                    className={`flex items-center space-x-2.5 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                      status === "ragu"
                        ? "bg-[#FAF8F5] border-[#2D4030] text-[#2D4030] shadow-xs"
                        : "bg-white border-[#E2DCD0] text-[#58635B] hover:border-[#9C7A4A]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="ragu"
                      checked={status === "ragu"}
                      onChange={() => setStatus("ragu")}
                      className="accent-[#2D4030]"
                    />
                    <span>Belum pasti</span>
                  </label>

                  <label
                    className={`flex items-center space-x-2.5 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                      status === "tidak_hadir"
                        ? "bg-[#FAF8F5] border-[#2D4030] text-[#2D4030] shadow-xs"
                        : "bg-white border-[#E2DCD0] text-[#58635B] hover:border-[#9C7A4A]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="tidak_hadir"
                      checked={status === "tidak_hadir"}
                      onChange={() => setStatus("tidak_hadir")}
                      className="accent-[#2D4030]"
                    />
                    <span>Tidak dapat hadir</span>
                  </label>
                </div>
              </fieldset>

              {/* Input: Catatan Tambahan (Opsional) */}
              <div>
                <label
                  htmlFor="rsvp-notes"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#58635B] mb-1.5"
                >
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  id="rsvp-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Pesan atau catatan khusus bagi keluarga"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E2DCD0] bg-[#FAF8F5] text-sm text-[#1E2420] focus:bg-white focus:border-[#9C7A4A] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-full bg-[#2D4030] text-[#FAF8F5] text-sm font-semibold tracking-wide hover:bg-[#1E2B20] disabled:opacity-60 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-[#9C7A4A] cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Mengirim Konfirmasi...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#C9AB7E]" />
                    <span>Kirim Konfirmasi</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-[#7B877F] text-center">
                * Konfirmasi kehadiran ini digunakan keluarga untuk estimasi konsumsi dan tempat.
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
