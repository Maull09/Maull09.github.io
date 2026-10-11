import type { LocalizedText } from "./localized-text";
import type { DocumentUrl } from "./document-url";

type Project = {
  id: string;
  title: string;
  year: string | null;
  lastCommit: { date: string; url: string } | null;
  category: LocalizedText;
  description: LocalizedText;
  contribution: LocalizedText;
  context: LocalizedText;
  technologies: string[];
  links: { label: LocalizedText; href: DocumentUrl }[];
  image?: {
    src: string;
    width: number;
    height: number;
    alt: LocalizedText;
    kind?: "logo";
  };
  architecture?: string[];
};

export const projects: Project[] = [
  {
    "id": "eyenimal",
    lastCommit: {"date":"2025-06-04T00:34:58Z","url":"https://github.com/Maull09/eyenimal/commit/d8007b969446699cf7cec2187f8f00734f7561b0"},
    year: "2025",
    "title": "EyeNimal",
    "category": {
      "id": "Computer vision · Proyek tim",
      "en": "Computer vision · Team project"
    },
    "description": {
      "id": "Aplikasi klasifikasi hewan dari foto yang diunggah. Antarmuka Next.js terhubung ke FastAPI untuk inferensi model YOLO, lalu menampilkan kelas prediksi, confidence, dan lima kandidat teratas.",
      "en": "An animal-classification app for uploaded photos. A Next.js interface connects to FastAPI for YOLO model inference, displaying the predicted class, confidence, and five leading candidates."
    },
    "context": {
      "id": "EfficientNet-B3 mencapai akurasi validasi 98,38% pada eksperimen Animals10. Aplikasi memakai model YOLO untuk menampilkan kelas, confidence, dan lima prediksi teratas.",
      "en": "EfficientNet-B3 reached 98.38% validation accuracy in the Animals10 experiment. The app uses a YOLO model to show the class, confidence, and top five predictions."
    },
    "technologies": [
      "Next.js",
      "FastAPI",
      "YOLO",
      "Python"
    ],
    "image": {
      "src": "/images/projects/eyenimal-banner.webp",
      "width": 1600,
      "height": 470,
      "alt": {
        "id": "Banner asli EyeNimal dengan tampilan unggah foto dan hasil klasifikasi hewan",
        "en": "Original EyeNimal banner showing photo upload and animal-classification screens"
      }
    },
    "contribution": {
      "id": "Berkolaborasi dalam tim tiga anggota untuk aplikasi klasifikasi hewan. Sistem menghubungkan antarmuka unggah foto, notebook pelatihan, dan layanan inferensi Python.",
      "en": "Collaborated in a three-member team on an animal-classification app. The system connects a photo-upload interface, training notebooks, and a Python inference service."
    },
    "links": [
      {
        "label": {
          "id": "Lihat kode",
          "en": "View code"
        },
        "href": "https://github.com/Maull09/eyenimal"
      },
      {
        "label": {
          "id": "Baca makalah",
          "en": "Read paper"
        },
        "href": "/documents/papers/animal-species-classification.pdf"
      }
    ]
  },
  {
    "id": "battletalk",
    lastCommit: {"date":"2025-05-14T15:55:48Z","url":"https://github.com/Maull09/battletalk/commit/d11410ef17a6a166fbc5ee22d04e86584e59d281"},
    year: "2025",
    "title": "BattleTalk",
    "category": {
      "id": "Voice & LLM · Proyek tim",
      "en": "Voice & LLM · Team project"
    },
    "description": {
      "id": "Platform latihan berbicara bahasa Inggris dengan mode battle 1v1, gamifikasi, dan feedback AI. Layanan Python memakai Whisper untuk transkripsi serta Qwen2.5 melalui Ollama untuk feedback dan penilaian percakapan.",
      "en": "An English-speaking practice platform with 1v1 battles, gamification, and AI feedback. Its Python service uses Whisper for transcription and Qwen2.5 through Ollama for conversational feedback and scoring."
    },
    "context": {
      "id": "Tim AIce Cream meraih Top 10 Finalist FindIT UGM Hackathon 2025 dengan BattleTalk.",
      "en": "The AIce Cream team reached the Top 10 at the FindIT UGM Hackathon 2025 with BattleTalk."
    },
    "technologies": [
      "React",
      "FastAPI",
      "Whisper",
      "Qwen2.5",
      "Supabase"
    ],
    "image": {
      "src": "/images/projects/battletalk-banner.webp",
      "width": 1500,
      "height": 844,
      "alt": {
        "id": "Banner asli BattleTalk dengan layar latihan speaking berbasis AI",
        "en": "Original BattleTalk banner showing its AI speaking-practice interface"
      }
    },
    "contribution": {
      "id": "Membangun BattleTalk bersama tim AIce Cream untuk FindIT UGM Hackathon. Menggabungkan latihan speaking, transkripsi suara, dan feedback LLM dalam alur aplikasi.",
      "en": "Built BattleTalk with the AIce Cream team for the FindIT UGM Hackathon. The application combines speaking practice, speech transcription, and LLM feedback."
    },
    "links": [
      {
        "label": {
          "id": "Lihat kode",
          "en": "View code"
        },
        "href": "https://github.com/Maull09/battletalk"
      },
      {
        "label": {
          "id": "Lihat dokumentasi",
          "en": "View documentation"
        },
        "href": "https://github.com/Maull09/battletalk/blob/main/docs/user_flow.png"
      }
    ]
  },
  {
    "id": "agrotech",
    lastCommit: {"date":"2025-06-03T02:26:43Z","url":"https://github.com/Maull09/agrotech/commit/7e25d33022cd86f50a581e4df0cf9cb5012323b5"},
    year: null,
    "title": "Agrotech",
    "category": {
      "id": "Applied AI & IoT · Proyek tim",
      "en": "Applied AI & IoT · Team project"
    },
    "description": {
      "id": "PWA untuk pemantauan pertanian yang menggabungkan data sensor lahan, klasifikasi penyakit tanaman dari gambar, dan konsultasi AI. Backend FastAPI memuat inferensi PyTorch serta endpoint sensor dan data komoditas.",
      "en": "A farm-monitoring PWA combining field-sensor data, image-based plant-disease classification, and AI consultation. Its FastAPI backend includes PyTorch inference and endpoints for sensor and commodity data."
    },
    "context": {
      "id": "Prototipe AI dan IoT yang menghubungkan klasifikasi penyakit tanaman, data sensor lahan, dan konsultasi dalam satu aplikasi.",
      "en": "An AI and IoT prototype connecting plant-disease classification, field-sensor data, and consultation in one app."
    },
    "technologies": [
      "Next.js",
      "FastAPI",
      "PyTorch",
      "IoT"
    ],
    "image": {
      "src": "/images/projects/agrotech-banner.webp",
      "width": 1600,
      "height": 470,
      "alt": {
        "id": "Banner asli Agrotech dengan layar pemantauan lahan dan diagnosis penyakit tanaman",
        "en": "Original Agrotech banner showing field-monitoring and plant-disease diagnosis screens"
      }
    },
    "contribution": {
      "id": "Berkolaborasi dalam tim empat anggota untuk menyatukan monitoring lahan, diagnosis tanaman, dan konsultasi dalam aplikasi web.",
      "en": "Collaborated in a four-member team to combine field monitoring, plant diagnosis, and consultation in a web app."
    },
    "links": [
      {
        "label": {
          "id": "Lihat kode",
          "en": "View code"
        },
        "href": "https://github.com/Maull09/agrotech"
      }
    ]
  },
  {
    "id": "flightops-sentinel",
    lastCommit: {"date":"2026-10-02T03:34:12Z","url":"https://github.com/Maull09/flightops-sentinel/commit/64d0da7af355ec2433141740cd90e833fa537f85"},
    year: null,
    "title": "FlightOps Sentinel",
    "category": {
      "id": "ML systems · Platform lokal",
      "en": "ML systems · Local platform"
    },
    "description": {
      "id": "Sistem ML end-to-end untuk memprediksi risiko keberangkatan terlambat lebih dari 15 menit, pada T−24 jam. Pipeline memakai feature mart PostgreSQL, evaluasi kronologis, MLflow, Airflow, dan layanan prediksi FastAPI.",
      "en": "An end-to-end ML system predicting departure delays over 15 minutes at T−24 hours. The pipeline uses a PostgreSQL feature mart, chronological evaluation, MLflow, Airflow, and a FastAPI prediction service."
    },
    "context": {
      "id": "Pada holdout 2.206 penerbangan, logistic regression mencatat ROC-AUC 0,4836 dan historical route delay rate 0,5437. Platform berjalan lokal dengan pelacakan eksperimen, lineage, dan persetujuan model.",
      "en": "On a 2,206-flight holdout, logistic regression scored ROC-AUC 0.4836 and historical route delay rate scored 0.5437. The platform runs locally with experiment tracking, lineage, and model approval."
    },
    "technologies": [
      "Python",
      "PostgreSQL",
      "MLflow",
      "Airflow",
      "FastAPI",
      "Docker"
    ],
    "architecture": [
      "PostgreSQL",
      "T−24h features",
      "Training & evaluation",
      "MLflow registry",
      "Batch / FastAPI"
    ],
    "contribution": {
      "id": "Mengembangkan pipeline data dan layanan prediksi dengan batas waktu fitur untuk mencegah leakage, lineage eksperimen, approval model, dan deployment lokal berbasis Docker.",
      "en": "Developed the data pipeline and prediction service with feature cutoffs to prevent leakage, experiment lineage, model approval, and Docker-based local deployment."
    },
    "links": [
      {
        "label": {
          "id": "Lihat kode",
          "en": "View code"
        },
        "href": "https://github.com/Maull09/flightops-sentinel"
      },
      {
        "label": {
          "id": "Lihat dokumentasi",
          "en": "View documentation"
        },
        "href": "https://github.com/Maull09/flightops-sentinel/blob/main/docs/baseline-results.md"
      }
    ]
  },
  {
    "id": "finance-tracker",
    lastCommit: {"date":"2026-10-11T13:24:25Z","url":"https://github.com/Maull09/finance-tracker/commit/fe37c355464257de764e2740d04dfe09cf3b9b1a"},
    year: null,
    "title": "Finance Tracker",
    "category": {
      "id": "AI product engineering · Proyek pribadi",
      "en": "AI product engineering · Personal project"
    },
    "description": {
      "id": "Aplikasi keuangan pribadi untuk akun, transaksi, anggaran, dan tujuan finansial, dengan asisten AI serta ekstraksi struk menjadi draf transaksi.",
      "en": "A personal-finance app for accounts, transactions, budgets, and financial goals, with an AI assistant and receipt extraction into transaction drafts."
    },
    "contribution": {
      "id": "Mengembangkan aplikasi Next.js dengan PostgreSQL dan Drizzle, serta orkestrasi LangChain dan LangGraph melalui Ollama. Asisten membaca data pengguna, menyiapkan draf, dan menyimpan transaksi setelah pengguna mengonfirmasi.",
      "en": "Built a Next.js app with PostgreSQL and Drizzle, plus LangChain and LangGraph orchestration through Ollama. The assistant reads user data, prepares drafts, and saves transactions after user confirmation."
    },
    "context": {
      "id": "Menyimpan riwayat percakapan, memvalidasi kepemilikan data, dan mengonfirmasi transaksi secara atomik. Screenshot menampilkan akun serta transaksi demo.",
      "en": "Saves conversation history, validates data ownership, and confirms transactions atomically. The screenshot shows demo accounts and transactions."
    },
    "technologies": [
      "Next.js",
      "TypeScript",
      "LangGraph",
      "Ollama",
      "PostgreSQL",
      "Supabase"
    ],
    "links": [
      {
        "label": {
          "id": "Lihat kode",
          "en": "View code"
        },
        "href": "https://github.com/Maull09/finance-tracker"
      },
      {
        "label": {
          "id": "Alur asisten AI",
          "en": "AI assistant workflow"
        },
        "href": "https://github.com/Maull09/finance-tracker/blob/main/docs/ai-assistant.md"
      }
    ],
    "image": {
      "src": "/images/projects/finance-tracker-dashboard.webp",
      "width": 1600,
      "height": 1000,
      "alt": {
        "id": "Dashboard Finance Tracker dengan ringkasan keuangan dari data demo",
        "en": "Finance Tracker dashboard displaying financial summaries from demo data"
      }
    }
  },
  {
    id: "fraud-detection",
    lastCommit: {"date":"2025-07-10T16:39:57Z","url":"https://github.com/ashhforrd/Fraud-Detection/commit/f333256e03a93f64a22c502f86076a1eaacfa193"},
    year: "2025",
    title: "Fraud Call Detector",
    category: { id: "Speech & LLM · Riset tim", en: "Speech & LLM · Team research" },
    description: {
      id: "Sistem deteksi penipuan suara berbahasa Indonesia dengan dua pendekatan: Qwen2-Audio yang menganalisis audio langsung, dan Whisper–Sailor2 yang mengklasifikasikan transkrip. Aplikasi Streamlit menampilkan transkripsi dan prediksi kedua model untuk audio yang diunggah.",
      en: "An Indonesian voice-fraud detector comparing two approaches: Qwen2-Audio analyzes audio directly, while Whisper–Sailor2 classifies its transcript. A Streamlit app displays the transcription and both models' predictions for uploaded audio."
    },
    contribution: {
      id: "Mengembangkan sistem bersama tim eyay enjinir dan menulis studi komparatif LALM versus ASR+LLM. Pipeline mencakup dialog sintetis, audio Azure TTS, preprocessing, serta fine-tuning QLoRA.",
      en: "Developed the system with the eyay enjinir team and co-authored the LALM versus ASR+LLM study. The pipeline covers synthetic dialogues, Azure TTS audio, preprocessing, and QLoRA fine-tuning."
    },
    context: {
      id: "Pada 104 sampel uji sintetis, Whisper–Sailor2 mencapai F1 99,03% dan Qwen2-Audio 95,19%. Penelitian menggunakan 1.034 percakapan sintetis; hasil pengujian audio riil dianalisis terpisah dalam makalah.",
      en: "On 104 synthetic test samples, Whisper–Sailor2 reached F1 99.03% and Qwen2-Audio 95.19%. The study uses 1,034 synthetic conversations; real-audio results are analyzed separately in the manuscript."
    },
    technologies: ["Python", "Streamlit", "Qwen2-Audio", "Whisper", "Sailor2", "QLoRA", "Azure TTS"],
    links: [
      { label: { id: "Lihat kode", en: "View code" }, href: "https://github.com/ashhforrd/Fraud-Detection" },
      { label: { id: "Baca makalah", en: "Read paper" }, href: "/documents/papers/indonesian-voice-fraud.pdf" },
      { label: { id: "Prototipe FraudSense", en: "FraudSense prototype" }, href: "https://github.com/ashhforrd/FraudSense" }
    ]
  },
  {
    id: "fraudsense",
    lastCommit: {"date":"2025-08-08T04:07:17Z","url":"https://github.com/ashhforrd/FraudSense/commit/4f18286579667c83888a38b577c6684c5a60a57e"},
    year: "2025",
    title: "FraudSense",
    category: { id: "AI product engineering · Prototipe tim", en: "AI product engineering · Team prototype" },
    description: {
      id: "Prototipe chat dan panggilan video dengan analisis risiko penipuan pada pesan serta audio. React menyediakan antarmuka percakapan; Express dan Socket.IO menangani komunikasi, sementara WebRTC menghubungkan panggilan antar pengguna.",
      en: "A chat and video-call prototype with fraud-risk analysis for messages and audio. React provides the conversation interface, Express and Socket.IO handle communication, and WebRTC connects user calls."
    },
    contribution: {
      id: "Mengembangkan FraudSense bersama tim eyay enjinir untuk membawa eksperimen deteksi penipuan ke alur percakapan. Layanan analisis menghubungkan model Sailor2 dan Qwen2-Audio melalui endpoint vLLM, lalu menyimpan hasil analisis di MongoDB.",
      en: "Developed FraudSense with the eyay enjinir team to bring fraud-detection experiments into a conversation workflow. Its analysis service connects Sailor2 and Qwen2-Audio through vLLM endpoints and stores analysis results in MongoDB."
    },
    context: {
      id: "Tim eyay enjinir menjadi Top 10 Finalist RISTEK Datathon UI 2025. Prototipe memuat analisis teks dengan debounce, unggahan audio, skor risiko, dan notifikasi hasil melalui Socket.IO.",
      en: "The eyay enjinir team reached the Top 10 at RISTEK Datathon UI 2025. The prototype includes debounced text analysis, audio uploads, risk scores, and result notifications through Socket.IO."
    },
    technologies: ["React", "Express", "Socket.IO", "WebRTC", "MongoDB", "vLLM", "Sailor2", "Qwen2-Audio"],
    links: [
      { label: { id: "Lihat kode", en: "View code" }, href: "https://github.com/ashhforrd/FraudSense" },
      { label: { id: "Baca makalah", en: "Read paper" }, href: "/documents/papers/indonesian-voice-fraud.pdf" },
      { label: { id: "Bukti finalis", en: "Finalist certificate" }, href: "/documents/certificates/ristek-datathon-team-2025.png" }
    ]
  },
  {
    id: "do-nation",
    lastCommit: {"date":"2024-12-20T14:39:26Z","url":"https://github.com/Maull09/do-nation/commit/c94bfc92a10290363499736d1984d31ef9802356"},
    year: null,
    title: "DoNation",
    category: { id: "Web engineering · Proyek tim", en: "Web engineering · Team project" },
    description: {
      id: "Prototipe crowdfunding yang menggabungkan kampanye donasi dan aksi sosial. Pengguna dapat melihat kampanye, membuka halaman donasi, mengikuti aksi, serta melihat riwayat dan leaderboard.",
      en: "A crowdfunding prototype combining donation campaigns and social initiatives. Users can explore campaigns, open donation pages, join initiatives, and view their history and leaderboards."
    },
    contribution: {
      id: "Berkolaborasi dalam tim empat anggota untuk membangun prototipe layanan crowdfunding pada mata kuliah II3120 Layanan Sistem Teknologi Informasi. Aplikasi memakai Next.js dan TypeScript, dengan Prisma serta PostgreSQL untuk data kampanye dan aktivitas.",
      en: "Collaborated in a four-member team on a crowdfunding service prototype for the II3120 Information Technology Services course. The app uses Next.js and TypeScript, with Prisma and PostgreSQL for campaign and activity data."
    },
    context: {
      id: "Proyek kuliah yang mengeksplorasi proses bisnis crowdfunding melalui kampanye donasi, dokumentasi aksi sosial, dan leaderboard partisipasi.",
      en: "A course project exploring crowdfunding business processes through donation campaigns, social-initiative documentation, and participation leaderboards."
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    image: {
      src: "/images/projects/do-nation-banner.webp", width: 1600, height: 470,
      alt: { id: "Banner asli DoNation dengan halaman kampanye, donasi, aksi sosial, dan leaderboard", en: "Original DoNation banner showing campaign, donation, social-initiative, and leaderboard pages" }
    },
    links: [
      { label: { id: "Lihat kode", en: "View code" }, href: "https://github.com/Maull09/do-nation" }
    ]
  },
  {
    id: "englearn",
    lastCommit: {"date":"2025-01-17T15:06:32Z","url":"https://github.com/Maull09/englearn-mobile/commit/076ae58db21552e0dab6a467828f7a6503c389f3"},
    year: null,
    title: "EngLearn",
    category: { id: "Web & mobile engineering · Pembelajaran bahasa", en: "Web & mobile engineering · Language learning" },
    description: {
      id: "Platform belajar bahasa Inggris dengan unit materi, pelajaran video, kuis pilihan ganda, dan progres belajar. Tersedia antarmuka web Next.js serta aplikasi mobile React Native dan Expo.",
      en: "An English-learning platform with study units, video lessons, multiple-choice quizzes, and learning progress. It includes a Next.js web interface and a React Native and Expo mobile app."
    },
    contribution: {
      id: "Mengembangkan antarmuka web, aplikasi mobile, dan API Express untuk unit, pelajaran, autentikasi, serta progres pengguna. Skema PostgreSQL dengan Drizzle menghubungkan materi, pilihan jawaban, dan status penyelesaian latihan.",
      en: "Developed the web interface, mobile app, and Express API for units, lessons, authentication, and user progress. A PostgreSQL schema built with Drizzle connects lessons, answer options, and exercise-completion status."
    },
    context: {
      id: "Tiga repository membentuk satu produk: web, mobile, dan API. Kuis memberi feedback jawaban, melanjutkan latihan yang belum selesai, dan menyimpan progres pelajaran.",
      en: "Three repositories form one product: web, mobile, and API. Quizzes provide answer feedback, resume unfinished exercises, and save lesson progress."
    },
    technologies: ["Next.js", "React Native", "Expo", "Express", "TypeScript", "Drizzle", "PostgreSQL"],
    links: [
      { label: { id: "Kode web", en: "Web code" }, href: "https://github.com/Maull09/englearn-web" },
      { label: { id: "Kode mobile", en: "Mobile code" }, href: "https://github.com/Maull09/englearn-mobile" },
      { label: { id: "Kode API", en: "API code" }, href: "https://github.com/Maull09/englearn-api" }
    ]
  },
  {
    "id": "chatdoctor",
    lastCommit: {"date":"2024-12-09T09:45:18Z","url":"https://github.com/ValentinoTriadi/STEIKedokteran/commit/8fa0cb439e1f966f900775f068d7e8be9381db82"},
    year: "2024",
    "title": "ChatDoctor",
    "category": {
      "id": "LLM application · Proyek tim",
      "en": "LLM application · Team project"
    },
    "description": {
      "id": "Prototipe chatbot informasi kesehatan berbahasa Indonesia dengan antarmuka chat dan layanan inferensi Python.",
      "en": "An Indonesian-language health-information chatbot prototype with a chat interface and Python inference service."
    },
    "contribution": {
      "id": "Mengembangkan ChatDoctor bersama Tim STEI Kedokteran untuk Data Science National Tournament 2024. Antarmuka Next.js mengirim percakapan ke API FastAPI; Sailor2-1B-Chat menghasilkan respons melalui Hugging Face Transformers untuk percakapan informasi kesehatan berbahasa Indonesia.",
      "en": "Built ChatDoctor with Tim STEI Kedokteran for the Data Science National Tournament 2024. The Next.js interface sends conversations to a FastAPI endpoint; Sailor2-1B-Chat generates Indonesian health-information responses through Hugging Face Transformers."
    },
    "context": {
      "id": "Top 10 Finalist Data Science National Tournament 2024 dengan prototipe percakapan informasi kesehatan berbasis LLM.",
      "en": "A Top 10 Finalist at the Data Science National Tournament 2024 with an LLM health-information conversation prototype."
    },
    "technologies": [
      "Next.js",
      "Python",
      "Hugging Face",
      "Sailor2",
      "FastAPI"
    ],
    "links": [
      {
        "label": {
          "id": "Lihat kode",
          "en": "View code"
        },
        "href": "https://github.com/ValentinoTriadi/STEIKedokteran"
      }
    ],
    "image": {
      "src": "/images/projects/chatdoctor-logo.webp",
      "width": 500,
      "height": 500,
      "alt": {
        "id": "Logo asli ChatDoctor berbentuk hati dan stetoskop",
        "en": "Original ChatDoctor heart and stethoscope logo"
      },
      "kind": "logo"
    }
  },
  {
    "id": "roadeye",
    lastCommit: {"date":"2024-01-18T16:40:07Z","url":"https://github.com/ValentinoTriadi/RoadEye/commit/dd11eaff31cb5fe4576179b7ce97ecb4d2dd6bca"},
    year: "2024",
    "title": "RoadEye",
    "category": {
      "id": "Computer vision · Prototipe tim",
      "en": "Computer vision · Team prototype"
    },
    "description": {
      "id": "Prototipe pemantauan lalu lintas yang menggabungkan tampilan CCTV, peta, dan laporan kecelakaan. Rancangannya mencakup pendeteksian anomali serta analisis kepadatan lalu lintas.",
      "en": "A traffic-monitoring prototype combining CCTV views, a map, and accident reports. Its design includes anomaly detection and traffic-density analysis."
    },
    "contribution": {
      "id": "Membangun RoadEye bersama tim M2VR untuk GDSC Hackfest Indonesia. Aplikasi menggabungkan antarmuka Next.js dengan backend Python dan FastAPI.",
      "en": "Built RoadEye with the M2VR team for GDSC Hackfest Indonesia. The app combines a Next.js interface with a Python and FastAPI backend."
    },
    "context": {
      "id": "Top 20 Teams GDSC Hackfest Indonesia 2024 dengan prototipe pemantauan lalu lintas.",
      "en": "A Top 20 team at GDSC Hackfest Indonesia 2024 with a traffic-monitoring prototype."
    },
    "technologies": [
      "Next.js",
      "FastAPI",
      "Python",
      "PostgreSQL"
    ],
    "links": [
      {
        "label": {
          "id": "Lihat kode",
          "en": "View code"
        },
        "href": "https://github.com/ValentinoTriadi/RoadEye"
      }
    ],
    "image": {
      "src": "/images/projects/roadeye-dashboard.webp",
      "width": 1600,
      "height": 1000,
      "alt": {
        "id": "Screenshot asli RoadEye menampilkan pemantauan CCTV dan peta lalu lintas",
        "en": "Original RoadEye screenshot showing CCTV monitoring and a traffic map"
      }
    }
  },
  {
    "id": "marketplace-recommender",
    lastCommit: null,
    year: "2024",
    "title": "Marketplace Recommender System",
    "category": {
      "id": "Data mining · Proyek tim",
      "en": "Data mining · Team project"
    },
    "description": {
      "id": "Solusi untuk TokoGenZ yang mengelompokkan produk, merekomendasikan barang serupa, dan membantu penjual membaca kategori, harga, penjualan, serta rating melalui dashboard Tableau.",
      "en": "A TokoGenZ solution that groups products, recommends similar items, and helps sellers explore categories, prices, sales, and ratings through a Tableau dashboard."
    },
    "contribution": {
      "id": "Bersama tim SySendiri, mengolah data produk menggunakan lexicon dan TF-IDF, melakukan K-Means clustering, serta memakai NearestNeighbors untuk rekomendasi berbasis kemiripan nama produk.",
      "en": "Worked with the SySendiri team on product data using a lexicon and TF-IDF, K-Means clustering, and NearestNeighbors recommendations based on product-name similarity."
    },
    "context": {
      "id": "Juara 1 Hology 7.0 Data Mining. Model membagi produk ke dalam 11 cluster dan merekomendasikan barang berdasarkan kemiripan konten.",
      "en": "1st place at Hology 7.0 Data Mining. The model groups products into 11 clusters and recommends items by content similarity."
    },
    "technologies": [
      "Python",
      "K-Means",
      "TF-IDF",
      "NearestNeighbors",
      "Tableau"
    ],
    "links": [
      {
        "label": {
          "id": "Lihat presentasi",
          "en": "View presentation"
        },
        "href": "https://docs.google.com/presentation/d/1ytNsnRySfWdhcN3w8hJwXMW3rFJkNK4U3xe-07YOniA/edit?usp=sharing"
      }
    ],
    "image": {
      "src": "/images/projects/marketplace-dashboard.webp",
      "width": 1440,
      "height": 810,
      "alt": {
        "id": "Slide asli presentasi TokoGenZ dengan dashboard analitik penjual dan penjelasan grafik",
        "en": "Original TokoGenZ presentation slide containing the seller analytics dashboard and chart explanations"
      }
    }
  },
  {
    "id": "trash-reporting",
    lastCommit: null,
    year: "2024",
    "title": "Trash Reporting System",
    "category": {
      "id": "Computer vision · Proyek tim",
      "en": "Computer vision · Team project"
    },
    "description": {
      "id": "Prototipe Garbage Report untuk mendeteksi sampah dari gambar yang diunggah, mengekstrak lokasi, dan menyiapkan laporan kepada petugas kebersihan.",
      "en": "A Garbage Report prototype for detecting trash in uploaded images, extracting locations, and preparing reports for sanitation staff."
    },
    "contribution": {
      "id": "Mengembangkan solusi bersama tim untuk GEMASTIK XVII, termasuk pelatihan model YOLOv8 khusus untuk deteksi sampah.",
      "en": "Developed the solution with a team for GEMASTIK XVII, including custom YOLOv8 training for trash detection."
    },
    "context": {
      "id": "Finalis nasional Top 20 GEMASTIK XVII 2024. Evaluasi YOLOv8 mencatat mAP50 0,92 pada dataset 3.669 gambar latih, 260 validasi, dan 258 uji.",
      "en": "A national Top 20 Finalist at GEMASTIK XVII 2024. YOLOv8 evaluation scored mAP50 0.92 on a dataset of 3,669 training, 260 validation, and 258 test images."
    },
    "technologies": [
      "Python",
      "YOLOv8",
      "Computer vision"
    ],
    "links": [
      {
        "label": {
          "id": "Baca makalah",
          "en": "Read paper"
        },
        "href": "/documents/papers/trash-reporting-yolov8.pdf"
      },
      {
        "label": {
          "id": "Bukti finalis",
          "en": "Finalist certificate"
        },
        "href": "/documents/certificates/gemastik-xvii-2024.pdf"
      }
    ]
  },
  {
    "id": "grpo-legal-reasoning",
    lastCommit: {"date":"2025-07-31T14:46:37Z","url":"https://github.com/Maull09/grpo-indonesian-legal-reasoning/commit/e00dfa679f57da0d012fe3fbbdfe7bf724cd678b"},
    year: "2025",
    "title": "GRPO Indonesian Legal Reasoning",
    "category": {
      "id": "LLM post-training · Eksperimen",
      "en": "LLM post-training · Experiment"
    },
    "description": {
      "id": "Eksperimen post-training untuk penalaran hukum bahasa Indonesia dengan Qwen2.5-14B-Instruct, LoRA, dan Group Relative Policy Optimization.",
      "en": "A post-training experiment for Indonesian legal reasoning using Qwen2.5-14B-Instruct, LoRA, and Group Relative Policy Optimization."
    },
    "contribution": {
      "id": "Menyiapkan notebook pelatihan GRPO, fungsi reward, pemisahan dataset, dan skrip pembuatan data penalaran.",
      "en": "Prepared the GRPO training notebook, reward function, dataset splits, and reasoning-data generation script."
    },
    "context": {
      "id": "Mengevaluasi keluaran model dengan BLEU, ROUGE-L, METEOR, dan BERTScore, serta menganalisis halusinasi dan kelengkapan penalaran pada dokumen IndoLaw.",
      "en": "Evaluates model outputs with BLEU, ROUGE-L, METEOR, and BERTScore, and analyzes hallucinations and reasoning completeness on IndoLaw documents."
    },
    "technologies": [
      "Qwen2.5",
      "LoRA",
      "TRL",
      "GRPO",
      "Python"
    ],
    "links": [
      {
        "label": {
          "id": "Lihat kode",
          "en": "View code"
        },
        "href": "https://github.com/Maull09/grpo-indonesian-legal-reasoning"
      },
      {
        "label": {
          "id": "Notebook pelatihan",
          "en": "Training notebook"
        },
        "href": "https://github.com/Maull09/grpo-indonesian-legal-reasoning/blob/main/final_notebook.ipynb"
      },
      {
        "label": {
          "id": "Baca makalah",
          "en": "Read paper"
        },
        "href": "/documents/papers/grpo-legal-reasoning.pdf"
      }
    ]
  }
];
