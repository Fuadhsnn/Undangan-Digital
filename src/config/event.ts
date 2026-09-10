export interface EventConfig {
  deceasedName: string;
  haulNumber: string | number | null;
  date: string; // YYYY-MM-DD
  displayDate: string;
  dayName: string;
  time: string;
  eventTimestamp: string; // ISO 8601 with timezone for accurate countdown
  timezone: string;
  location: string;
  address: string;
  organizer: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  deceasedPhoto: string;
  backgroundMusic: string;
  whatsappGreetingTemplate: string;
}

export const event: EventConfig = {
  deceasedName: "H. Muhammad Hasan",
  haulNumber: null, // [MENYUSUL] -> Rendered gracefully as "Haul Akbar" or "Haul" when null
  date: "2026-09-12",
  displayDate: "Sabtu, 12 September 2026",
  dayName: "Sabtu",
  time: "07.00 WIB – selesai",
  eventTimestamp: "2026-09-12T07:00:00+07:00",
  timezone: "Asia/Jakarta",
  location: "Rumah Almarhum",
  address: "Jl. Abdul Wahab",
  organizer: "Keluarga Besar Almarhum H. Muhammad Hasan",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=-6.3978435,106.758796",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.970186442567!2d106.75879597483066!3d-6.39784349359274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e9007c173109%3A0xb23b4031e250f2fe!2sMajelis%20Taklim%20Darul%20Hikmah%20sawangan!5e0!3m2!1sid!2sid!4v1789043253870!5m2!1sid!2sid",
  deceasedPhoto: "/images/almarhum.jpg",
  backgroundMusic: "/audio/background.mp3",
  whatsappGreetingTemplate:
    "Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nDengan penuh takzim dan mengharap rahmat serta ridha Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk berkenan hadir dalam peringatan:\n\n*Haul Almarhum H. Muhammad Hasan*\n📅 Hari/Tanggal: Sabtu, 12 September 2026\n⏰ Waktu: 07.00 WIB – selesai\n📍 Lokasi: Rumah Almarhum (Jl. Abdul Wahab)\n\nDetail susunan acara dan lokasi dapat dilihat melalui tautan undangan digital berikut:\n",
};
