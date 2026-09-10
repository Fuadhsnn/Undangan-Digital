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
  deceasedName: "H. Muhammad Hasan bin H. Idi",
  haulNumber: 8, // Haul ke-8 (8 tahun peringatan)
  date: "2026-09-12",
  displayDate: "Sabtu, 12 September 2026",
  dayName: "Sabtu",
  time: "08.00 WIB – selesai",
  eventTimestamp: "2026-09-12T08:00:00+07:00",
  timezone: "Asia/Jakarta",
  location: "Rumah Almarhum",
  address: "Jl Abdul Wahab RT03/09 No 21 Sawangan, Depok",
  organizer: "Keluarga Besar Almarhum H. Muhammad Hasan bin H. Idi",
  mapsUrl: "https://maps.app.goo.gl/odmw3LCmqnqiF3UR7",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.970186442567!2d106.75879597483066!3d-6.39784349359274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e9007c173109%3A0xb23b4031e250f2fe!2sMajelis%20Taklim%20Darul%20Hikmah%20sawangan!5e0!3m2!1sid!2sid!4v1789043253870!5m2!1sid!2sid",
  deceasedPhoto: "/images/Foto Bapak.png",
  backgroundMusic: "/audio/background.mp3",
  whatsappGreetingTemplate:
    "Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nDengan penuh takzim dan mengharap rahmat serta ridha Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk berkenan hadir dalam peringatan:\n\n*Haul ke-8 Almarhum H. Muhammad Hasan bin H. Idi*\n📅 Hari/Tanggal: Sabtu, 12 September 2026\n⏰ Waktu: 08.00 WIB – selesai\n📍 Lokasi: Rumah Almarhum (Jl Abdul Wahab RT03/09 No 21 Sawangan, Depok)\n\nDetail susunan acara dan lokasi dapat dilihat melalui tautan undangan digital berikut:\n",
};
