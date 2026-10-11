import type { LocalizedText } from "./localized-text";

type Moment = {
  id: string;
  image: { src: string; width: number; height: number; alt: LocalizedText };
  caption: LocalizedText;
  year: string | null;
};

export const moments: Moment[] = [
  {
    id: "hology-winning-team",
    image: {
      src: "/images/moments/hology-winning-team.webp",
      width: 1600,
      height: 1067,
      alt: {
        id: "Foto di panggung bersama penerima penghargaan, memegang plakat juara pertama Data Mining dan piala",
        en: "On stage with award recipients, holding the first-place Data Mining placard and a trophy",
      },
    },
    caption: {
      id: "Juara 1 Data Mining · Hology 7.0",
      en: "1st place in Data Mining · Hology 7.0",
    },
    year: "2024",
  },
  {
    id: "hology-award",
    image: {
      src: "/images/moments/hology-award.webp",
      width: 1108,
      height: 1477,
      alt: {
        id: "Dua penerima penghargaan membawa plakat dan piala di depan backdrop Hology 7.0",
        en: "Two award recipients holding a placard and trophy in front of the Hology 7.0 backdrop",
      },
    },
    caption: {
      id: "Momen penghargaan · Hology 7.0",
      en: "Award ceremony moment · Hology 7.0",
    },
    year: "2024",
  },
  {
    id: "gemastik-presentation",
    image: {
      src: "/images/moments/gemastik-presentation.webp",
      width: 1600,
      height: 720,
      alt: {
        id: "Tim mempresentasikan hasil kompetisi di depan juri dalam dokumentasi GEMASTIK XVII",
        en: "A team presenting its competition work to judges in GEMASTIK XVII documentation",
      },
    },
    caption: {
      id: "Presentasi finalis · GEMASTIK XVII",
      en: "Finalist presentation · GEMASTIK XVII",
    },
    year: "2024",
  },
  {
    id: "objective-quest-presentation",
    image: {
      src: "/images/moments/objective-quest-presentation.webp",
      width: 1600,
      height: 900,
      alt: {
        id: "Tim mempresentasikan feature engineering untuk klasifikasi traffic jaringan",
        en: "A team presenting feature engineering for network traffic classification",
      },
    },
    caption: {
      id: "Presentasi tim Hustler · Objective Quest, Airnology 3.0",
      en: "Hustler team presentation · Objective Quest, Airnology 3.0",
    },
    year: "2024",
  },
  {
    id: "data-competition-speaking",
    image: {
      src: "/images/moments/data-competition-speaking.webp",
      width: 1200,
      height: 1600,
      alt: {
        id: "Sesi pembicara di ruang kelas dengan slide strategi kompetisi data",
        en: "A classroom speaking session with slides about data competition strategies",
      },
    },
    caption: {
      id: "Berbagi strategi kompetisi data · Kaderisasi Wilayah STEI-K",
      en: "Sharing data competition strategies · STEI-K regional training",
    },
    year: "2024",
  },
  {
    id: "data-competition-appreciation",
    image: {
      src: "/images/moments/data-competition-appreciation.webp",
      width: 1600,
      height: 900,
      alt: {
        id: "Berfoto bersama penyelenggara sambil memegang sertifikat apresiasi pembicara kompetisi data mining",
        en: "Posing with an organizer while holding an appreciation certificate for a data mining competition speaker",
      },
    },
    caption: {
      id: "Apresiasi pembicara · Kaderisasi Wilayah STEI-K",
      en: "Speaker appreciation · STEI-K regional training",
    },
    year: "2024",
  },
  {
    id: "miq-data-mining",
    image: {
      src: "/images/moments/miq-data-mining.webp",
      width: 1567,
      height: 1045,
      alt: {
        id: "Tiga anggota tim MIQ dari Institut Teknologi Bandung bekerja bersama dengan komputer dan laptop di meja kompetisi",
        en: "Three MIQ team members from Institut Teknologi Bandung working together with computers and laptops at a competition desk",
      },
    },
    caption: {
      id: "Di meja kompetisi · Tim MIQ, ITB",
      en: "At the competition desk · MIQ team, ITB",
    },
    year: null,
  },
  {
    id: "best-staff-recognition",
    image: {
      src: "/images/moments/best-staff-recognition.webp",
      width: 858,
      height: 1527,
      alt: {
        id: "Dokumentasi Best Staff Award untuk Mohamad Maulana Firdaus pada bidang IT Database, dengan potret di kampus ITB",
        en: "Best Staff Award documentation for Mohamad Maulana Firdaus in IT Database, with a portrait at the ITB campus",
      },
    },
    caption: {
      id: "Best Staff Award · IT Database, Februari",
      en: "Best Staff Award · IT Database, February",
    },
    year: null,
  },
];
