import type { LocalizedText } from "./localized-text";

type PublicProfile = {
  name: string;
  shortName: string;
  role: string;
  introduction: LocalizedText;
  about: LocalizedText[];
  contact: LocalizedText;
  cvFile: `/documents/${string}.pdf` | null;
  github: `https://github.com/${string}` | null;
  linkedin: `https://www.linkedin.com/${string}` | null;
  email: string | null;
};

export const profile: PublicProfile = {
  "name": "Mohamad Maulana Firdaus Ramadhan",
  "shortName": "Maulana Firdaus",
  "role": "AI Engineer",
  "introduction": {
    "id": "Saya membangun Voice AI, sistem agentic RAG, dan aplikasi machine learning. Pekerjaan saya mencakup integrasi model, backend, dan deployment di AWS.",
    "en": "I build Voice AI, agentic RAG systems, and machine-learning applications. I work on model integration, backends, and deployment on AWS."
  },
  "about": [
    {
      "id": "Saya Mohamad Maulana Firdaus Ramadhan, AI Engineer dengan pengalaman di Neuram dan AI Center ITB. Latar pendidikan saya adalah Sistem dan Teknologi Informasi di Institut Teknologi Bandung.",
      "en": "I'm Mohamad Maulana Firdaus Ramadhan, an AI Engineer with experience at Neuram and AI Center ITB. My academic background is in Information Systems and Technology at Institut Teknologi Bandung."
    },
    {
      "id": "Pekerjaan saya mencakup orkestrasi LLM dengan LangChain dan LangGraph, hybrid retrieval dengan Qdrant, evaluasi keluaran AI, serta backend asinkron di AWS. Saya juga mengerjakan computer vision dan klasifikasi sinyal pada perangkat edge.",
      "en": "My work covers LLM orchestration with LangChain and LangGraph, hybrid retrieval with Qdrant, AI output evaluation, and asynchronous backends on AWS. I also work on computer vision and signal classification on edge devices."
    },
    {
      "id": "Saya pernah memimpin Data Community HMIF ITB. Saya berbagi tentang data science melalui workshop serta sesi pembicara. Saya juga mengikuti Hology, GEMASTIK, dan FindIT bersama tim.",
      "en": "I led Data Community HMIF ITB. I share data science through workshops and speaking sessions. I also compete in Hology, GEMASTIK, and FindIT with teams."
    }
  ],
  "contact": {
    "id": "Hubungi saya untuk berdiskusi tentang AI engineering, sistem ML, riset, atau kolaborasi. Anda juga bisa melihat kode dan eksperimen saya di GitHub.",
    "en": "Get in touch to discuss AI engineering, ML systems, research, or collaboration. You can also explore my code and experiments on GitHub."
  },
  "cvFile": "/documents/cv.pdf",
  "github": "https://github.com/Maull09",
  "linkedin": "https://www.linkedin.com/in/mohamad-maulana-firdaus-ramadhan",
  "email": "maulanafirdaus63@gmail.com"
};

export const navigation = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "speakers", href: "#speakers" },
  { key: "papers", href: "#papers" },
  { key: "contact", href: "#contact" },
] as const;
