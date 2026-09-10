export interface QuranVerse {
  surahName: string;
  surahNumber: number;
  ayahNumber: string;
  arabic: string;
  translation: string;
}

export interface PrayerItem {
  id: string;
  title: string;
  arabic: string;
  latin?: string;
  translation: string;
  source: string;
}

export const quranVerse: QuranVerse = {
  surahName: "Al-Fajr",
  surahNumber: 89,
  ayahNumber: "27–30",
  arabic:
    "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ۝ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَرْضِيَّةً ۝ فَادْخُلِي فِي عِبَادِي ۝ وَادْخُلِي جَنَّتِي",
  translation:
    "“Wahai jiwa yang tenang! Kembalilah kepada Tuhanmu dengan hati yang ridha dan diridhai-Nya. Maka masuklah ke dalam golongan hamba-hamba-Ku, dan masuklah ke dalam surga-Ku.”",
};

export const memorialPrayer: PrayerItem = {
  id: "doa-almarhum",
  title: "Doa untuk Almarhum",
  arabic:
    "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ، وَأَكْرِمْ نُزُلَهُ، وَوَسِّعْ مَدْخَلَهُ، وَاجْعَلِ الْجَنَّةَ مَثْوَاهُ",
  latin:
    "Allāhummaghfir lahu warhamhu wa 'āfihi wa'fu 'anhu, wa akrim nuzulahu, wa wassi' madkhalahu, waj'alil jannata matswāh.",
  translation:
    "“Ya Allah, ampunilah dia, limpahkanlah rahmat kepadanya, berikanlah keselamatan, dan maafkanlah kesalahannya. Muliakanlah tempat persinggahannya, lapangkanlah kuburnya, dan jadikanlah surga sebagai tempat kembalinya.”",
  source: "Hadits Riwayat Muslim",
};
