import type { LocalizedText } from "./localized-text";
import type { DocumentUrl } from "./document-url";

type SpeakingSession = {
  id: string;
  title: string;
  event: string;
  year: string;
  description: LocalizedText;
  certificate?: DocumentUrl;
};

export const speakers: SpeakingSession[] = [
  {
    "id": "symphony-of-data",
    "title": "Symphony of Data: The Key to Brilliant Decision Making",
    "event": "KAT ITB",
    "year": "2024",
    "description": {
      "id": "Membahas penggunaan data analytics untuk pengambilan keputusan dalam acara pelatihan terpusat.",
      "en": "Presented how data analytics supports decision-making at a centralized training event."
    },
    "certificate": "/documents/certificates/speaker-kat-2024.pdf"
  },
  {
    "id": "data-competition-strategies",
    "title": "Data Competition Strategies",
    "event": "Kaderisasi Wilayah STEI-K ITB 2023",
    "year": "2024",
    "description": {
      "id": "Berbagi strategi analisis data dan pengembangan machine learning untuk kompetisi mahasiswa.",
      "en": "Shared data-analysis and machine-learning strategies for student competitions."
    },
    "certificate": "/documents/certificates/speaker-kadwil-2024.pdf"
  },
  {
    "id": "introduction-to-data-science",
    "title": "Introduction to Data Science",
    "event": "SPARTA HMIF 2023",
    "year": "2024",
    "description": {
      "id": "Menyampaikan sesi pengantar konsep data science dan jalur karier kepada mahasiswa baru.",
      "en": "Delivered an introductory session on data science concepts and career paths for new students."
    },
    "certificate": "/documents/certificates/speaker-sparta-2024.png"
  }
];
