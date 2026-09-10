/**
 * DUMMY DATA GUESTBOOK / TITIP DOA
 * 
 * PERHATIAN: Data di bawah ini merupakan data simulasi/dummy untuk keperluan preview UI.
 * Data ini dapat dihapus atau digantikan dengan data asli dari database/API backend.
 */

export interface PrayerGreeting {
  id: string;
  name: string;
  relationship?: string;
  message: string;
  createdAt: string;
}

export const initialDummyPrayers: PrayerGreeting[] = [
  {
    id: "dummy-1",
    name: "Ustadz H. Ahmad Fauzi",
    relationship: "Keluarga Besar Majlis",
    message:
      "Semoga Allah SWT senantiasa menerangi kubur Almarhum H. Muhammad Hasan, melapangkan peristirahatannya, dan mengumpulkan beliau bersama para shalihin.",
    createdAt: "2 jam yang lalu",
  },
  {
    id: "dummy-2",
    name: "Hj. Siti Mariam & Keluarga",
    relationship: "Kerabat Ciputat",
    message:
      "Al-Fatihah kagem Bapak H. Muhammad Hasan. Beliau sosok teladan yang dermawan dan santun. Semoga husnul khatimah dan keluarga senantiasa diberi ketabahan.",
    createdAt: "5 jam yang lalu",
  },
  {
    id: "dummy-3",
    name: "Bambang Sutrisno",
    relationship: "Sahabat Sejawat",
    message:
      "InsyaAllah kami sekeluarga hadir mendoakan almarhum. Semoga amal jariyah dan segala ilmu kebaikan beliau menjadi penerang jalan menuju jannah-Nya. Aamiin.",
    createdAt: "1 hari yang lalu",
  },
];
