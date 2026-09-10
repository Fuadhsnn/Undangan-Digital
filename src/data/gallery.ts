export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-01",
    src: "/images/gallery/gallery-01.svg",
    alt: "Momen kenangan Almarhum bersama keluarga besar",
    title: "Kebersamaan Keluarga",
    caption: "Kehangatan dan keteladanan Almarhum di tengah sanak famili.",
  },
  {
    id: "gallery-02",
    src: "/images/gallery/gallery-02.svg",
    alt: "Kegiatan pengajian dan silaturahmi",
    title: "Majlis Taklim & Doa",
    caption: "Kecintaan Almarhum menghadiri majlis ilmu dan ibadah bersama jamaah.",
  },
  {
    id: "gallery-03",
    src: "/images/gallery/gallery-03.svg",
    alt: "Suasana kediaman yang teduh dan penuh berkah",
    title: "Kediaman Penuh Berkah",
    caption: "Tempat yang senantiasa terbuka menyambut sanak saudara dan tetangga.",
  },
  {
    id: "gallery-04",
    src: "/images/gallery/gallery-04.svg",
    alt: "Momen ziarah dan silaturahmi sanak kerabat",
    title: "Jalinan Silaturahmi",
    caption: "Senantiasa menjaga tali persaudaraan dengan sesama.",
  },
  {
    id: "gallery-05",
    src: "/images/gallery/gallery-05.svg",
    alt: "Dokumentasi haul dan tahlil tahun sebelumnya",
    title: "Kekhidmatan Doa Bersama",
    caption: "Melantunkan ayat suci Al-Qur'an dan doa bagi ketenangan arwah beliau.",
  },
  {
    id: "gallery-06",
    src: "/images/gallery/gallery-06.svg",
    alt: "Warisan nasehat dan kenangan luhur",
    title: "Nasihat & Teladan",
    caption: "Pesan-pesan kebaikan yang senantiasa hidup di hati anak dan cucu.",
  },
];
