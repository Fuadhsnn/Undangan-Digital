export interface RundownItem {
  id: string;
  order: number;
  title: string;
  description?: string;
  timePlaceholder?: string; // e.g. "Waktu tentatif" or omitted as specified in prompt
}

export const rundownData: RundownItem[] = [
  {
    id: "pembukaan",
    order: 1,
    title: "Pembukaan",
    description: "Mukaddimah dan pembacaan ummul kitab",
  },
  {
    id: "yasin",
    order: 2,
    title: "Pembacaan Surah Yasin",
    description: "Bersama jamaah dan para asatidz",
  },
  {
    id: "tahlil",
    order: 3,
    title: "Tahlil & Doa Bersama",
    description: "Dikhususkan bagi Almarhum H. Muhammad Hasan",
  },
  {
    id: "tausiyah",
    order: 4,
    title: "Tausiyah / Mau'idhoh Hasanah",
    description: "Penyampaian nasihat agama dan hikmah mengingat kematian",
  },
  {
    id: "ramah-tamah",
    order: 5,
    title: "Ramah Tamah & Santap Siang",
    description: "Jamuan makan bersama keluarga dan seluruh tamu undangan",
  },
  {
    id: "penutup",
    order: 6,
    title: "Penutup",
    description: "Doa kafaratul majlis dan mushafahah",
  },
];
