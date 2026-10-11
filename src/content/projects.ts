import type { LocalizedText } from "./localized-text";
import type { DocumentUrl } from "./document-url";

type Project = {
  id: string;
  title: string;
  category: LocalizedText;
  description: LocalizedText;
  contribution: LocalizedText;
  context: LocalizedText;
  technologies: string[];
  featured: boolean;
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
    "featured": true,
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
    "featured": false,
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
    "featured": false,
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
    "featured": true,
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
    "featured": false,
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
    "id": "chatdoctor",
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
      "id": "Mengembangkan ChatDoctor bersama tim untuk Data Science National Tournament, menggunakan Sailor2-1B-Chat melalui Hugging Face Transformers.",
      "en": "Built ChatDoctor with the team for the Data Science National Tournament, using Sailor2-1B-Chat through Hugging Face Transformers."
    },
    "context": {
      "id": "Top 10 Finalist Data Science National Tournament 2024 dengan prototipe percakapan informasi kesehatan berbasis LLM.",
      "en": "A Top 10 Finalist at the Data Science National Tournament 2024 with an LLM health-information conversation prototype."
    },
    "technologies": [
      "Next.js",
      "Python",
      "Hugging Face",
      "Sailor2"
    ],
    "featured": false,
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
    "featured": false,
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
    "featured": false,
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
    "featured": false,
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
    "featured": false,
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
