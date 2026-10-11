import type { LocalizedText } from "./localized-text";
import type { DocumentUrl } from "./document-url";

type Paper = {
  id: string;
  title: string;
  authors: string[];
  year: string | null;
  type: LocalizedText;
  description: LocalizedText;
  evaluation: LocalizedText;
  url: DocumentUrl;
};

export const papers: Paper[] = [
  {
    "id": "indonesian-voice-fraud",
    "title": "Deteksi Penipuan Suara Berbahasa Indonesia: Studi Komparatif Antara Arsitektur LALM dan ASR+LLM",
    "authors": [
      "M. Maulana Firdaus R.",
      "Atqiya Haydar Luqman",
      "M. Fauzan Azhim"
    ],
    "year": "2025",
    "type": {
      "id": "Makalah riset · Speech & LLM",
      "en": "Research manuscript · Speech & LLM"
    },
    "description": {
      "id": "Membandingkan Qwen2-Audio-7B dengan pipeline Whisper dan Sailor2-8B untuk deteksi penipuan percakapan berbahasa Indonesia, memakai QLoRA dan dataset audio sintetis.",
      "en": "Compares Qwen2-Audio-7B with a Whisper and Sailor2-8B pipeline for detecting fraud in Indonesian conversations, using QLoRA and synthetic audio."
    },
    "evaluation": {
      "id": "Pada 104 sampel uji sintetis, ASR+LLM mencapai F1 99,03% dan LALM 95,19%. Analisis audio riil mencatat kesalahan transkripsi pada baseline.",
      "en": "On 104 synthetic test samples, ASR+LLM reached F1 99.03% and LALM 95.19%. Real-audio analysis identified a baseline transcription error."
    },
    "url": "/documents/papers/indonesian-voice-fraud.pdf"
  },
  {
    "id": "grpo-legal-reasoning",
    "title": "Penyusunan Amar Putusan Berbasis Reinforcement Learning untuk Meningkatkan Reasoning Hukum Pengadilan Indonesia",
    "authors": [
      "Mohamad Maulana Firdaus Ramadhan",
      "Rizqika Mulia Pratama",
      "Ikhwan Al Hakim",
      "Rinaldi Munir"
    ],
    "year": "2025",
    "type": {
      "id": "Makalah riset · LLM post-training",
      "en": "Research manuscript · LLM post-training"
    },
    "description": {
      "id": "Eksperimen Qwen2.5-14B-Instruct dengan LoRA dan GRPO pada dokumen IndoLaw. Fungsi reward menggabungkan kemiripan teks, kepatuhan format, dan kelengkapan penalaran.",
      "en": "Experiments with Qwen2.5-14B-Instruct, LoRA, and GRPO on IndoLaw documents. The reward combines textual similarity, format compliance, and reasoning completeness."
    },
    "evaluation": {
      "id": "Mengukur BLEU, ROUGE-L, METEOR, dan BERTScore, lalu menganalisis halusinasi serta kelengkapan penalaran pada keluaran model.",
      "en": "Measures BLEU, ROUGE-L, METEOR, and BERTScore, then analyzes hallucinations and reasoning completeness in model outputs."
    },
    "url": "/documents/papers/grpo-legal-reasoning.pdf"
  },
  {
    "id": "legal-verdict-generation",
    "title": "Generasi Amar Putusan Hukum Indonesia dari Dokumen Pengadilan Menggunakan Large Language Model",
    "authors": [
      "Mohamad Maulana Firdaus Ramadhan",
      "Rizqika Mulia Pratama",
      "Ikhwan Al Hakim",
      "Ayu Purwarianti"
    ],
    "year": "2025",
    "type": {
      "id": "Makalah riset · Legal NLP",
      "en": "Research manuscript · Legal NLP"
    },
    "description": {
      "id": "Menghasilkan draf amar putusan dari lima bagian dokumen pengadilan Indonesia menggunakan Sailor2-1B dan QLoRA pada lingkungan komputasi terbatas.",
      "en": "Generates draft legal verdicts from five sections of Indonesian court documents using Sailor2-1B and QLoRA under limited computing resources."
    },
    "evaluation": {
      "id": "Pada 50 dokumen uji, model mencatat ROUGE-L 0,6267 dan BERTScore F1 0,8212 untuk kesamaan teks amar putusan.",
      "en": "On 50 test documents, the model scored ROUGE-L 0.6267 and BERTScore F1 0.8212 for verdict-text similarity."
    },
    "url": "/documents/papers/legal-verdict-generation.pdf"
  },
  {
    "id": "animal-species-classification",
    "title": "Animal Species Classification Using Deep Learning",
    "authors": [
      "Rizqi Andhika Pratama",
      "Khayla Belva Annandira",
      "Mohamad Maulana Firdaus R."
    ],
    "year": "2025",
    "type": {
      "id": "Makalah riset · Computer vision",
      "en": "Research manuscript · Computer vision"
    },
    "description": {
      "id": "Membandingkan VGG16, ResNet50, EfficientNet-B3, ViT-B16, dan YOLOv11-cls pada Animals10, disertai integrasi klasifikasi gambar ke antarmuka EyeNimal.",
      "en": "Compares VGG16, ResNet50, EfficientNet-B3, ViT-B16, and YOLOv11-cls on Animals10, with image-classification integration into EyeNimal."
    },
    "evaluation": {
      "id": "Pada validasi Animals10 dengan pembagian data 80:20, EfficientNet-B3 mencapai akurasi 98,38% dan YOLOv11-cls 97,84%.",
      "en": "On Animals10 validation with an 80:20 data split, EfficientNet-B3 reached 98.38% accuracy and YOLOv11-cls 97.84%."
    },
    "url": "/documents/papers/animal-species-classification.pdf"
  },
  {
    "id": "umkm-investment-prediction",
    "title": "Penerapan Pembelajaran Mesin untuk Prediksi Keputusan Investasi pada UMKM",
    "authors": [
      "Arvyno Pranata Limahardja",
      "David Dewanto",
      "Ricky Wijaya",
      "Nicolaas Heru Dreandachrista",
      "Mohamad Maulana Firdaus Ramadhan"
    ],
    "year": "2025",
    "type": {
      "id": "Makalah riset · Applied machine learning",
      "en": "Research manuscript · Applied machine learning"
    },
    "description": {
      "id": "Studi Shark Tank US yang menggabungkan fitur finansial dan demografi dengan embedding deskripsi bisnis. Membandingkan model klasifikasi, tuning Optuna, serta interpretasi SHAP untuk keputusan deal.",
      "en": "A Shark Tank US study combining financial and demographic features with business-description embeddings. Compares classifiers, Optuna tuning, and SHAP interpretation for deal decisions."
    },
    "evaluation": {
      "id": "LightGBM mencapai akurasi sekitar 74% pada 90 sampel uji dari dataset Shark Tank US.",
      "en": "LightGBM reached about 74% accuracy on 90 test samples from the Shark Tank US dataset."
    },
    "url": "/documents/papers/umkm-investment-prediction.pdf"
  },
  {
    "id": "trash-reporting-yolov8",
    "title": "Pelaporan dan Pendeteksian Adanya Sampah Guna Menjaga Kebersihan Lingkungan Berbasis YOLOv8",
    "authors": [
      "Mohamad Maulana Firdaus Ramadhan",
      "Rizqika Mulia Pratama",
      "Ikhwan Al Hakim",
      "Ayu Purwarianti"
    ],
    "year": "2024",
    "type": {
      "id": "Makalah riset · Computer vision",
      "en": "Research manuscript · Computer vision"
    },
    "description": {
      "id": "Penelitian computer vision untuk deteksi sampah pada gambar menggunakan YOLOv8, ekstraksi lokasi, dan alur pelaporan melalui aplikasi Garbage Report.",
      "en": "Computer vision research on YOLOv8 trash detection in images, location extraction, and a reporting workflow through Garbage Report."
    },
    "evaluation": {
      "id": "YOLOv8 mencapai mAP50 0,92 setelah 100 epoch, dengan 3.669 gambar latih, 260 validasi, dan 258 uji. Analisis kesalahan mencatat false positive pada pohon dan batu serta sampah kecil yang terlewat.",
      "en": "YOLOv8 reached mAP50 0.92 after 100 epochs, with 3,669 training, 260 validation, and 258 test images. Error analysis identified false positives on trees and rocks and missed small trash objects."
    },
    "url": "/documents/papers/trash-reporting-yolov8.pdf"
  },
  {
    "id": "bigru-sentiment-analysis",
    "title": "Pemrosesan Bahasa Alami Untuk Analisis Sentimen Dengan Menggunakan Bidirectional GRU",
    "authors": [
      "Mohamad Maulana Firdaus Ramadhan",
      "Ikhwan Al Hakim",
      "Rizqi Andhika Pratama",
      "Rizqika Mulia Pratama"
    ],
    "year": "2023",
    "type": {
      "id": "Makalah riset · NLP",
      "en": "Research manuscript · NLP"
    },
    "description": {
      "id": "Pemodelan emosi pada teks Twitter berbahasa Indonesia dengan preprocessing teks, embedding FastText, dan Bidirectional GRU untuk lima kelas emosi.",
      "en": "Models emotions in Indonesian Twitter text using preprocessing, FastText embeddings, and a Bidirectional GRU across five emotion classes."
    },
    "evaluation": {
      "id": "Evaluasi klasifikasi lima emosi pada teks Twitter berbahasa Indonesia mencatat akurasi 0,70, precision rata-rata 0,72, dan recall rata-rata 0,71.",
      "en": "Evaluation of five-class emotion classification on Indonesian Twitter text scored accuracy 0.70, average precision 0.72, and average recall 0.71."
    },
    "url": "/documents/papers/bigru-sentiment-analysis.pdf"
  },
  {
    "id": "traffic-accident-yolov8",
    "title": "Monitoring Otomatis Kondisi Lalu Lintas untuk Mendeteksi Adanya Kecelakaan dengan Menggunakan YOLOv8",
    "authors": [
      "Mohamad Maulana Firdaus Ramadhan",
      "Rizqika Mulia Pratama",
      "Ikhwan Al Hakim",
      "Ayu Purwarianti"
    ],
    "year": "2023",
    "type": {
      "id": "Makalah riset · Computer vision",
      "en": "Research manuscript · Computer vision"
    },
    "description": {
      "id": "Penelitian deteksi kecelakaan dari video CCTV menggunakan YOLOv8, dengan rancangan pelaporan otomatis ketika anomali lalu lintas terdeteksi.",
      "en": "Research on detecting accidents in CCTV footage using YOLOv8, with a proposed automatic reporting workflow for detected traffic anomalies."
    },
    "evaluation": {
      "id": "Validasi YOLOv8 mencatat mAP50 0,924430 pada 2.220 gambar, dengan 10.989 gambar untuk pelatihan.",
      "en": "YOLOv8 validation scored mAP50 0.924430 on 2,220 images, with 10,989 images used for training."
    },
    "url": "/documents/papers/traffic-accident-yolov8.pdf"
  }
];
