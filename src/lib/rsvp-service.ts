/**
 * RSVP Service Layer
 * 
 * Tahap saat ini: Frontend Mock Service (Local In-Memory / LocalStorage).
 * 
 * TODO [Backend Integration]:
 * Hubungkan fungsi `submitRSVP` ke REST API Endpoint atau Server Action
 * (misalnya: POST /api/rsvp atau Supabase / Firebase / Google Sheets API)
 * saat backend database sudah siap.
 */

export type AttendanceStatus = "hadir" | "ragu" | "tidak_hadir";

export interface RSVPPayload {
  name: string;
  guestCount: number;
  status: AttendanceStatus;
  notes?: string;
}

export interface RSVPResponse {
  success: boolean;
  message: string;
  data?: RSVPPayload & { submittedAt: string; id: string };
}

// In-memory cache for local frontend session demonstration
const mockRSVPStore: Array<RSVPPayload & { submittedAt: string; id: string }> = [];

export async function submitRSVP(payload: RSVPPayload): Promise<RSVPResponse> {
  // Simulate network latency (400ms) for realistic UX and loading states
  await new Promise((resolve) => setTimeout(resolve, 400));

  // Basic client-side validation
  if (!payload.name || payload.name.trim().length === 0) {
    return {
      success: false,
      message: "Mohon cantumkan nama lengkap Anda.",
    };
  }

  if (payload.guestCount < 1 || payload.guestCount > 20) {
    return {
      success: false,
      message: "Jumlah tamu yang diisi harus antara 1 sampai 20 orang.",
    };
  }

  const record = {
    ...payload,
    name: payload.name.trim(),
    notes: payload.notes?.trim() || "",
    id: `rsvp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    submittedAt: new Date().toISOString(),
  };

  mockRSVPStore.push(record);

  // Optional: preserve in localStorage for seamless preview experience
  if (typeof window !== "undefined") {
    try {
      const existing = JSON.parse(localStorage.getItem("haul_rsvp_records") || "[]");
      existing.push(record);
      localStorage.setItem("haul_rsvp_records", JSON.stringify(existing));
    } catch {
      // Ignore localStorage errors (e.g. private browsing quota)
    }
  }

  return {
    success: true,
    message: "Konfirmasi kehadiran Anda telah tercatat pada sesi penjelajahan ini (Mock Mode).",
    data: record,
  };
}
