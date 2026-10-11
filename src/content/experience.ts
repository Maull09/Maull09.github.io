import type { LocalizedText } from "./localized-text";

export type ExperienceEntry = {
  id: string;
  period: LocalizedText;
  role: string;
  organization: string;
  location: LocalizedText;
  contributions: LocalizedText[];
};

export const experience: ExperienceEntry[] = [
  {
    "id": "ai-center-agentic-platform",
    "period": {
      "id": "Apr 2026 — Sekarang",
      "en": "Apr 2026 — Present"
    },
    "role": "AI Research Assistant",
    "organization": "AI Center ITB",
    "location": {
      "id": "Bandung, Indonesia",
      "en": "Bandung, Indonesia"
    },
    "contributions": [
      {
        "id": "Membangun platform agentic AI menggunakan LangChain dan LangGraph untuk orkestrasi LLM multi-langkah.",
        "en": "Built an agentic AI platform using LangChain and LangGraph for multi-step LLM orchestration."
      },
      {
        "id": "Mengembangkan pipeline hybrid RAG dengan Qdrant, dense embeddings, retrieval BM25, dan kontrol grounding sitasi.",
        "en": "Developed a hybrid RAG pipeline with Qdrant, dense embeddings, BM25 retrieval, and citation-grounding controls."
      },
      {
        "id": "Menerapkan versioning prompt serta alur tuning prompt berbasis GEPA secara offline untuk mengevaluasi dan mengoptimalkan template prompt LLM lengkap pada kasus evaluasi yang dibekukan.",
        "en": "Implemented prompt versioning and an offline GEPA-based prompt-tuning workflow to evaluate and optimize complete LLM prompt templates on frozen evaluation cases."
      },
      {
        "id": "Mengintegrasikan penyedia LLM lokal dan hosted, termasuk Ollama serta API yang kompatibel dengan OpenAI, melalui layanan Python yang dapat dikonfigurasi.",
        "en": "Integrated local and hosted LLM providers, including Ollama and OpenAI-compatible APIs, through configurable Python services."
      },
      {
        "id": "Menambahkan tracing Langfuse, metadata reproduksibilitas, dan artefak yang disimpan untuk debugging, monitoring, serta audit eksperimen.",
        "en": "Added Langfuse tracing, reproducibility metadata, and persisted artifacts for debugging, monitoring, and experiment audits."
      },
      {
        "id": "Membangun alur evaluasi LLM-as-a-Judge dan penilaian manusia secara blind menggunakan paket evaluasi yang dibekukan dan dipseudonimkan untuk menilai faithfulness, actionability, coherence, completeness, serta kesepakatan antarpenilai.",
        "en": "Built an LLM-as-a-Judge and blind human-review evaluation workflow using frozen, pseudonymized evaluation packets to assess output faithfulness, actionability, coherence, completeness, and inter-rater agreement."
      }
    ]
  },
  {
    "id": "neuram",
    "period": {
      "id": "Feb 2026 — Sekarang",
      "en": "Feb 2026 — Present"
    },
    "role": "AI Software Engineer",
    "organization": "Neuram",
    "location": {
      "id": "Jakarta, Indonesia",
      "en": "Jakarta, Indonesia"
    },
    "contributions": [
      {
        "id": "Menskalakan sistem Voice AI di lingkungan produksi untuk mendukung lebih dari 40.000 percakapan dan lebih dari 1.500 jam traffic suara aktif melalui integrasi telepon, agen AI, serta alur backend berbasis event. Alur janji temu mengintegrasikan protokol SIP INVITE dari domain klien dengan infrastruktur Twilio Neuram dan webhook ElevenLabs.",
        "en": "Scaled production Voice AI systems to support over 40,000 conversations and 1,500+ hours of active voice traffic by integrating telephony, AI agents, and event-driven backend workflows. The appointment workflow integrates SIP INVITE protocols from client domains with Neuram's Twilio infrastructure and ElevenLabs webhooks."
      },
      {
        "id": "Mengurangi latensi percakapan yang dirasakan sebesar 60% melalui optimasi streaming audio real-time dan penanganan respons agar pemutaran awal lebih cepat.",
        "en": "Reduced perceived conversational latency by 60% by optimizing real-time audio streaming and response handling for faster initial playback."
      },
      {
        "id": "Mengurangi latensi penerimaan panggilan masuk yang dirasakan lebih dari 80% dengan memparalelkan inisialisasi panggilan dan provisioning backend, sekaligus memicu audio pembuka segera.",
        "en": "Reduced perceived inbound pickup latency by over 80% by parallelizing call initialization and backend provisioning while triggering immediate pre-opening audio."
      },
      {
        "id": "Mengurangi latensi respons database sebesar 96% dan ukuran payload API lebih dari 96% melalui optimasi kueri SQL, parsing data, serta struktur payload.",
        "en": "Reduced database response latency by 96% and API payload sizes by over 96% by optimizing SQL queries, data parsing, and payload structures."
      },
      {
        "id": "Mengintegrasikan API eksternal untuk mengambil profil pelanggan dan slot tersedia, lalu menyuntikkannya sebagai variabel dinamis ke agen ElevenLabs untuk percakapan personal secara real-time.",
        "en": "Integrated external APIs to retrieve customer profiles and available slots, then injected them as dynamic variables into ElevenLabs agents for personalized real-time conversations."
      },
      {
        "id": "Menghilangkan penundaan pelaporan manual setelah panggilan dengan mengotomatisasi pemrosesan percakapan, pembuatan analytics terstruktur, serta pengiriman hasil ke sistem klien. Callback API setelah panggilan mengirim hasil panggilan dan insight data ke sistem klien segera setelah sesi berakhir.",
        "en": "Eliminated manual post-call reporting delays by automating conversation processing, structured analytics generation, and delivery of results to client systems. Post-call API callbacks deliver call outcomes and data insights to client systems immediately after session termination."
      },
      {
        "id": "Menerapkan server-side tools ElevenLabs untuk eksekusi logika bisnis dan interaksi dengan sistem eksternal selama percakapan suara berlangsung.",
        "en": "Implemented ElevenLabs server-side tools to execute business logic and interact with external systems during live voice conversations."
      },
      {
        "id": "Mengurangi biaya operasional LLM lebih dari 88% sambil mempertahankan performa tingkat produksi melalui optimasi deployment model dan arsitektur serving di lingkungan staging maupun produksi.",
        "en": "Reduced LLM operational costs by over 88% while maintaining production-level performance by optimizing model deployment and serving architecture across staging and production environments."
      }
    ]
  },
  {
    "id": "raisa",
    "period": {
      "id": "Okt — Des 2025",
      "en": "Oct — Dec 2025"
    },
    "role": "AI Research Assistant (RAISA Project – SKK Migas)",
    "organization": "AI Center ITB",
    "location": {
      "id": "Bandung, Indonesia",
      "en": "Bandung, Indonesia"
    },
    "contributions": [
      {
        "id": "Meningkatkan akurasi kueri data manual dari 28–33% menjadi 82,7% dengan menerapkan lapisan respons deterministik menggunakan semantic retrieval Qdrant dan template kueri terstruktur. Implementasi retrieval juga menggunakan Qdrant Hybrid Search dengan pendekatan dense dan sparse.",
        "en": "Increased manual data-query accuracy from 28–33% to 82.7% by implementing a deterministic response layer using Qdrant semantic retrieval and structured query templates. The retrieval implementation also uses Qdrant Hybrid Search with dense and sparse approaches."
      },
      {
        "id": "Meningkatkan precision penolakan permintaan di luar cakupan dari 88,3% menjadi 99,0% pada 103 kasus uji negatif melalui validasi intent dengan pencocokan ketat dan pengamanan retrieval. Evaluasi model tambahan menggunakan alur evaluasi LLM-as-a-Judge otomatis pada lebih dari 1.000 sampel.",
        "en": "Increased out-of-scope rejection precision from 88.3% to 99.0% across 103 negative test cases by implementing strict-match intent validation and retrieval safeguards. Additional model evaluation used an automated LLM-as-a-Judge workflow across 1,000+ samples."
      },
      {
        "id": "Meningkatkan keandalan kueri berulang dengan mengembangkan routing template SQL deterministik yang melewati eksekusi generatif dan langsung mengikat variabel pengguna ke template kueri tervalidasi. Alur Text-to-SQL diorkestrasi menggunakan LangGraph.",
        "en": "Improved recurring-query reliability by developing deterministic SQL template routing that bypassed generative execution and directly bound user variables to validated query templates. The Text-to-SQL workflow is orchestrated with LangGraph."
      },
      {
        "id": "Memperkuat keandalan keluaran SQL dengan mengintegrasikan Evaluator Agent independen untuk memvalidasi hasil yang dihasilkan terhadap intent pengguna sebelum respons dikirim. Sistem Agentic RAG untuk kebutuhan enterprise mendukung tanya jawab kompleks dan ekstraksi data berpresisi tinggi dari dokumentasi minyak dan gas yang tidak terstruktur.",
        "en": "Strengthened SQL output reliability by integrating an independent Evaluator Agent to validate generated results against user intent before response delivery. The enterprise Agentic RAG system supports complex QnA and high-precision data extraction from unstructured Oil & Gas documentation."
      },
      {
        "id": "Membangun pipeline ingestion Excel asinkron untuk unggahan batch, penimpaan, dan pembaruan pasangan template pertanyaan-respons pada knowledge base.",
        "en": "Built an asynchronous Excel ingestion pipeline for batch uploads, overrides, and updates to template question-response pairs in the knowledge base."
      }
    ]
  },
  {
    "id": "spun",
    "period": {
      "id": "Jul — Sep 2025",
      "en": "Jul — Sep 2025"
    },
    "role": "AI Engineer Intern",
    "organization": "PT. Solutopia Untuk Nusantara (SPUN)",
    "location": {
      "id": "Jakarta, Indonesia",
      "en": "Jakarta, Indonesia"
    },
    "contributions": [
      {
        "id": "Mengotomatisasi 85% pertanyaan pelanggan yang berulang dengan merancang dan men-deploy asisten AI produksi untuk layanan visa global. Optimasi model mendukung inferensi yang efisien.",
        "en": "Automated 85% of repetitive customer inquiries by architecting and deploying a production AI assistant for global visa services. Model optimization supports efficient inference."
      },
      {
        "id": "Mengurangi waktu respons pelanggan dari baseline manual 30 menit menjadi kurang dari 5 detik melalui otomatisasi interaksi dukungan pelanggan multi-turn.",
        "en": "Reduced customer response time from a 30-minute manual baseline to under 5 seconds by automating multi-turn customer-support interactions."
      },
      {
        "id": "Mendukung lonjakan 10 kali lipat pada permintaan bersamaan dengan merancang arsitektur AWS asinkron menggunakan ECS, SQS, dan EventBridge. Infrastruktur juga memakai EC2, Amazon S3 untuk penyimpanan dokumen, dan Secrets Manager untuk pengelolaan kredensial.",
        "en": "Supported a 10x surge in concurrent requests by designing an asynchronous AWS architecture using ECS, SQS, and EventBridge. The infrastructure also uses EC2, Amazon S3 for document storage, and Secrets Manager for credential management."
      },
      {
        "id": "Meningkatkan grounding respons terhadap regulasi visa yang dinamis dengan membangun pipeline retrieval multi-sumber menggunakan Pinecone dan PostgreSQL.",
        "en": "Improved response grounding for dynamic visa regulations by engineering a multi-source retrieval pipeline using Pinecone and PostgreSQL."
      },
      {
        "id": "Menurunkan siklus deployment hingga hitungan menit melalui otomatisasi alur build dan rilis menggunakan AWS CodePipeline.",
        "en": "Reduced deployment cycles to minutes by automating build and release workflows through AWS CodePipeline."
      }
    ]
  },
  {
    "id": "partial-discharge",
    "period": {
      "id": "Mar — Des 2025",
      "en": "Mar — Dec 2025"
    },
    "role": "AI Research Assistant",
    "organization": "Bandung Institute of Technology",
    "location": {
      "id": "Bandung, Indonesia",
      "en": "Bandung, Indonesia"
    },
    "contributions": [
      {
        "id": "Mencapai akurasi deteksi cacat 100% untuk sinyal partial discharge dengan mengembangkan sistem klasifikasi LSTM-Attention real-time bersama peneliti dari kalangan dosen. Arsitektur juga menggunakan Dense Concatenation.",
        "en": "Achieved 100% defect detection accuracy for partial-discharge signals by developing a real-time LSTM-Attention classification system with faculty researchers. The architecture also uses Dense Concatenation."
      },
      {
        "id": "Menurunkan latensi inferensi lokal hingga hitungan milidetik melalui optimasi dan deployment model pemrosesan sinyal pada FPGA serta Raspberry Pi 5 untuk monitoring industri secara real-time.",
        "en": "Reduced local inference latency to milliseconds by optimizing and deploying signal-processing models on FPGA and Raspberry Pi 5 for real-time industrial monitoring."
      },
      {
        "id": "Membangun dataset sinyal partial discharge berisi 2.312 sampel melalui rekayasa pipeline akuisisi, pembersihan, serta preprocessing menggunakan Analog Discovery 2.",
        "en": "Built a 2,312-sample partial-discharge signal dataset by engineering the acquisition, cleaning, and preprocessing pipeline using Analog Discovery 2."
      },
      {
        "id": "Memungkinkan monitoring kesehatan peralatan secara real-time dengan men-deploy dashboard end-to-end untuk status prediktif dan visualisasi sinyal.",
        "en": "Enabled real-time equipment-health monitoring by deploying an end-to-end dashboard for predictive status and signal visualization."
      }
    ]
  }
];
