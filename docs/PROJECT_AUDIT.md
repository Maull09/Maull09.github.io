# Audit kurasi proyek GitHub

Tanggal tinjauan: 11 Oktober 2026.
Profil yang dicocokkan dengan CV: [Maull09](https://github.com/Maull09).
Sumber CV: Resume_Mohamad_Maulana_Firdaus_Ramadhan.pdf, tiga halaman, diberikan pemilik.

## Lingkup dan metode

Tinjauan ini memilih karya untuk personal branding AI engineer, bukan audit keamanan.
GitHub REST API mengembalikan 36 repositori publik pada saat tinjauan, termasuk 9 fork.
Semua metadata dan README root yang tersedia dibaca. Struktur file diperiksa pada
EyeNimal, BattleTalk, Agrotech, FlightOps Sentinel, GRPO Indonesian Legal Reasoning,
Accivision, Accivision API, Finance Tracker, dan portofolio lama. Pemeriksaan sampel
kode mencakup inferensi EyeNimal, layanan AI BattleTalk, backend Agrotech,
evaluasi FlightOps, dan generator serta notebook GRPO. Kode proyek sumber tidak dijalankan.

Kriteria: relevansi terhadap AI engineering, penjelasan masalah, bukti kontribusi,
kelengkapan sistem, evaluasi yang dapat dijelaskan, dan aset visual asli. Fork tidak
otomatis ditolak, tetapi tidak dianggap bukti kontribusi pribadi. Nama pemilik
tercantum di README tiga proyek kolaborasi yang dipilih; pembagian tugas individu
belum terdokumentasi, sehingga website memakai label proyek tim.

## Kurasi awal: empat proyek

| Proyek | Mengapa dipilih | Batas klaim |
| --- | --- | --- |
| [EyeNimal](https://github.com/Maull09/eyenimal) | Next.js, FastAPI, inferensi YOLO, top-5 kelas; notebook pelatihan dan banner asli | Kolaborasi tiga anggota; tanpa klaim akurasi atau tugas pribadi yang belum dibuktikan |
| [BattleTalk](https://github.com/Maull09/battletalk) | Whisper, Qwen2.5/Ollama, latihan speaking 1v1 dan feedback; banner dan user flow tersedia | Hasil Top 10 FindIT Hackathon 2025 bersumber dari CV dan merupakan hasil tim |
| [Agrotech](https://github.com/Maull09/agrotech) | Sensor IoT, inferensi PyTorch, konsultasi AI dan web PWA; pemilik tercantum di tim | Prototipe integrasi, tanpa klaim dampak pertanian atau model accuracy |
| [FlightOps Sentinel](https://github.com/Maull09/flightops-sentinel) | Feature mart, evaluasi kronologis, MLflow, Airflow, FastAPI dan observability | Platform lokal; bukan deployment produksi atau bukti model berhasil |

[Hasil baseline FlightOps](https://github.com/Maull09/flightops-sentinel/blob/main/docs/baseline-results.md)
mencatat holdout 2.206 penerbangan: logistic regression ROC-AUC 0,4836 dan PR-AUC
0,0503, di bawah historical route delay rate (0,5437 dan 0,0642). Kandidat baseline
itu tidak dipromosikan. Website menjelaskan keterbatasan tersebut; hasil baseline
awal tidak dianggap hasil semua model berikutnya.

Demo yang tercantum dalam README tidak dijadikan tautan live di website karena
ketersediaan UI dan backend belum diuji end-to-end. Tautan kode dan dokumentasi
tetap menuju sumber publik yang telah dibaca.

## Kandidat pada tinjauan awal

[Finance Tracker](https://github.com/Maull09/finance-tracker) adalah cadangan paling
siap untuk AI product engineering: README lengkap, layanan AI, dan screenshot
dengan data demo. Empat proyek awal dipilih untuk variasi computer vision,
Voice/LLM, IoT, dan MLOps; ini keputusan kurasi, bukan penilaian kualitas absolut.

[GRPO Indonesian Legal Reasoning](https://github.com/Maull09/grpo-indonesian-legal-reasoning)
layak dikembangkan menjadi studi kasus riset. Notebook memakai Qwen2.5-14B,
LoRA, dan GRPOTrainer, tetapi belum memiliki README serta penjelasan hasil yang
mudah dinilai. Perlu menjelaskan dataset, split, reward, pembanding, evaluasi dan
batas generalisasi sebelum menampilkan metrik.

CV juga menunjuk [ChatDoctor](https://github.com/ValentinoTriadi/STEIKedokteran)
dan [RoadEye](https://github.com/ValentinoTriadi/RoadEye), milik rekan tim.
Metadata kedua repo publik sudah dicocokkan. Keduanya bisa menjadi gelombang
kurasi berikutnya setelah kontribusi, aset, dan hasilnya ditinjau lebih jauh.
Jangan memetakan ChatDoctor ke medical-chatbot atau RoadEye ke Accivision
hanya karena deskripsinya mirip.

## Inventaris semua repositori pada tinjauan awal

| Repository | Keputusan / catatan |
| --- | --- |
| [finance-tracker](https://github.com/Maull09/finance-tracker) | Cadangan terkuat: aplikasi lengkap, asisten LLM, dokumentasi dan screenshot dengan data demo. Bisa menggantikan Agrotech jika fokus branding bergeser ke AI product engineering. |
| [maulana-profile-card](https://github.com/Maull09/maulana-profile-card) | Profil berbasis template HTML5 UP; bukan showcase AI. |
| [trash-map](https://github.com/Maull09/trash-map) | Aplikasi pemetaan sampah; jangan menyamakannya dengan Trash Reporting System GEMASTIK tanpa bukti hubungan. Belum ada README. |
| [maulana-portfolio](https://github.com/Maull09/maulana-portfolio) | Sumber foto profil asli, bukan proyek AI unggulan. Tidak ada README. |
| [retail-customer-analytics](https://github.com/Maull09/retail-customer-analytics) | Cadangan data science: SQL, clustering/regression; perlu README, visual dan hubungan yang terbukti dengan proyek lomba. |
| [itb-thesis-proposal-template](https://github.com/Maull09/itb-thesis-proposal-template) | Template LaTeX dari institusi; bukan bukti proyek AI milik pemilik. |
| [bluu-churn-analysis](https://github.com/Maull09/bluu-churn-analysis) | Cadangan data science: churn dan segmentasi; perlu README, konteks bisnis dan evaluasi. |
| [rock-paper-scissors](https://github.com/Maull09/rock-paper-scissors) | Latihan CNN yang lebih dasar dibanding kandidat CV terpilih; belum ada README. |
| [nlp-bigru](https://github.com/Maull09/nlp-bigru) | Kandidat fondasi NLP: deskripsi menyebut FastText/BiGRU, tetapi belum ada README atau evaluasi yang mudah dibaca. |
| [xgboost-time-series-forecasting](https://github.com/Maull09/xgboost-time-series-forecasting) | Kandidat forecasting/Ristek 2023; belum ada README, baseline, holdout, dan visual evaluasi terkurasi. |
| [battletalk](https://github.com/Maull09/battletalk) | Dipilih: Voice/LLM, feedback speaking, bukti tim dan kompetisi dari CV, banner asli. |
| [eyenimal](https://github.com/Maull09/eyenimal) | Dipilih: klasifikasi gambar + layanan inferensi, banner asli, nama pemilik dalam tim. |
| [englearn-mobile](https://github.com/Maull09/englearn-mobile) | README masih bawaan Expo. Perlu cerita produk, kontribusi, screenshot dan hubungan dengan web/API. |
| [englearn-web](https://github.com/Maull09/englearn-web) | Kandidat produk belajar bahasa; belum ada README proyek. Kurasi sebagai satu studi kasus bersama API/mobile. |
| [accivision](https://github.com/Maull09/accivision) | Kandidat CV: web pelaporan kecelakaan, tetapi belum ada README dan screenshot produk terkurasi. Pasangkan dengan accivision-api. |
| [magic-cube-solver](https://github.com/Maull09/magic-cube-solver) | Tugas local search dengan dokumentasi; bagus sebagai proyek pendukung algoritma, prioritas di bawah sistem AI. |
| [ship-combat-game](https://github.com/Maull09/ship-combat-game) | Tugas/game C++; fondasi pemrograman, prioritas rendah untuk branding AI. |
| [mark-attendance](https://github.com/Maull09/mark-attendance) | Prototipe Tkinter dengan README satu judul; belum siap sebagai showcase. |
| [michael-vs-lalapan](https://github.com/Maull09/michael-vs-lalapan) | Tugas OOP Java dengan dokumentasi; proyek pendukung, bukan fokus AI. |
| [bandung-bondowoso-simulation](https://github.com/Maull09/bandung-bondowoso-simulation) | Tugas dasar Python dengan README satu judul; bukan unggulan AI. |
| [wayangwave](https://github.com/Maull09/wayangwave) | Tugas struktur data C; berguna sebagai fondasi, tetapi tidak prioritas. |
| [speech-dtw-system](https://github.com/Maull09/speech-dtw-system) | Starter DTW dengan README satu judul; belum cukup untuk showcase. |
| [phishing-url-classification](https://github.com/Maull09/phishing-url-classification) | README menjelaskan KNN/GNB from scratch dan perbandingan scikit-learn. Fork; perlu memastikan kontribusi pribadi dan hasil evaluasi sebelum dijadikan unggulan. |
| [explainable-news-helper](https://github.com/Maull09/explainable-news-helper) | README hanya judul; perlu narasi metode NER, dataset dan kontribusi. Fork belum cukup sebagai bukti kepemilikan. |
| [grpo-indonesian-legal-reasoning](https://github.com/Maull09/grpo-indonesian-legal-reasoning) | Kandidat riset kuat: notebook memuat Qwen2.5-14B, LoRA dan GRPOTrainer. Belum ada README, penjelasan dataset/reward, evaluasi terkurasi, atau visual; siapkan studi kasus dahulu. |
| [flightops-sentinel](https://github.com/Maull09/flightops-sentinel) | Dipilih: pipeline ML/MLOps lengkap, model approval dan evaluasi jujur. Platform lokal; baseline awal kalah dari pembanding sederhana. |
| [englearn-api](https://github.com/Maull09/englearn-api) | Satukan dengan englearn-web/mobile; belum ada README atau bukti dampak AI terkurasi. |
| [medical-chatbot](https://github.com/Maull09/medical-chatbot) | Prototipe Streamlit; README hanya instruksi dependensi. Jangan otomatis menyamakannya dengan ChatDoctor di CV, yang menunjuk repo berbeda. |
| [accivision-api](https://github.com/Maull09/accivision-api) | Backend pasangan accivision, bukan proyek terpisah untuk menduplikasi satu produk. Ada deteksi YOLO dan layanan laporan; perlu dokumentasi serta hasil evaluasi. |
| [do-nation](https://github.com/Maull09/do-nation) | Proyek web tim dengan banner, tetapi fokus crowdfunding lebih jauh dari branding AI engineer. |
| [agrotech](https://github.com/Maull09/agrotech) | Dipilih: integrasi computer vision, sensor IoT, dan layanan AI; kontributor tercantum. |
| [Maull09](https://github.com/Maull09/Maull09) | README profil, sumber identitas dan konteks; bukan proyek. |
| [Misi2_Modul2_Programming](https://github.com/Maull09/Misi2_Modul2_Programming) | Latihan pemrograman SEKURO; bukan showcase AI. |
| [Misi1-Modul2-SEKURO_Programming-2023](https://github.com/Maull09/Misi1-Modul2-SEKURO_Programming-2023) | Fork tugas latihan SEKURO; bukan showcase AI. |
| [Misi1-Modul1-SEKURO_Programming-2023-19622267](https://github.com/Maull09/Misi1-Modul1-SEKURO_Programming-2023-19622267) | Latihan SEKURO tanpa README; bukan showcase AI. |
| [Misi2-Modul1-SEKURO_Programming-2023](https://github.com/Maull09/Misi2-Modul1-SEKURO_Programming-2023) | Fork tugas pengenalan SEKURO; bukan showcase AI. |

## Provenance aset

| File lokal | Sumber asli | Perlakuan |
| --- | --- | --- |
| public/images/projects/eyenimal-banner.webp | [Banner README EyeNimal](https://github.com/user-attachments/assets/7946f81e-2b4d-4cdd-ad3c-f7243871c822) | 1800×529 menjadi 1600×470, konversi WebP |
| public/images/projects/battletalk-banner.webp | [Banner BattleTalk](https://github.com/Maull09/battletalk/blob/main/docs/battletalk_banner.jpg) | 1500×844, konversi WebP |
| public/images/projects/agrotech-banner.webp | [Banner README Agrotech](https://github.com/user-attachments/assets/01d2a42c-2ec0-4705-a546-5fc84f8c076e) | 1800×529 menjadi 1600×470, konversi WebP |
| public/images/profile/maulana.webp | [Foto portofolio lama](https://github.com/Maull09/maulana-portfolio/blob/master/src/images/profile.jpeg) | 800×800, konversi WebP |
| public/documents/cv.pdf | File CV yang diberikan pemilik | Salinan byte-identik; SHA-256 2fd0a5f3a1dc5899f2e419592f79764fb1accf6eacc6618636c8a62247455837 |
| Alur FlightOps di komponen Projects | [Diagram README](https://github.com/Maull09/flightops-sentinel#what-the-system-does) | Ringkasan arsitektur berupa teks/HTML, bukan screenshot |

Keempat gambar telah diperiksa secara visual: foto pemilik dan banner produk,
tanpa email anggota tim, token, atau data pengguna pribadi yang tampak. Tidak
ada foto stok atau screenshot buatan. Banner asli berbahasa sumber tetap dipakai
pada ID/EN dengan alt text dan uraian yang dilokalkan.

CV disalin utuh sesuai permintaan, termasuk nomor telepon yang ada di file asli.
Halaman menampilkan email dan profil profesional; nomor telepon dan NIM tidak
ditambahkan ke bio. Writings dan Moments belum memiliki sumber asli yang
terverifikasi, sehingga daftar kosong dan section tidak dirender. Foto profil
tidak diberi caption seolah-olah foto lomba.

## Akurasi konten CV

- Periode Present/Sekarang mengikuti CV; tidak menebak tanggal akhir pekerjaan.
- Pendidikan disebut sebagai latar bidang di ITB. CV mencantumkan kelulusan
  yang diharapkan tahun 2026, sedangkan README profil menyebut graduate; website
  tidak mengasumsikan status kelulusan final.
- Metrik pengalaman adalah laporan pemilik dalam CV, bukan benchmark independen.
  Klaim 100% deteksi sinyal tidak ditampilkan tanpa konteks split dan pengujian.
- Tahun sertifikat dan penghargaan yang tidak diberikan dibiarkan null.
  Tahun 2025 untuk FindIT Hackathon dan Ristek berasal dari CV; tahun 2023
  untuk GEMASTIK XVI juga tercantum pada profil GitHub yang dibaca.
- Sembilan penghargaan dan lima sertifikasi memakai URL bukti dari anotasi CV.
  Tautan tersebut bukan hasil verifikasi independen atas keaslian sertifikat;
  akses penyedia eksternal dapat memerlukan sesi atau izin.

## Kurasi lanjutan berdasarkan CV referensi

Pemilik meminta proyek yang lebih lengkap, section Speakers tersendiri, dan Papers.
Sumber terbaru: `Resume___Mohamad_Maulana_Firdaus_Ramadhan.pdf` (tiga halaman).
File unduhan diganti byte-identik dengan sumber ini; SHA-256:
`4f97821dbadfcf9ffd8babd41824154c92d3b9e40c5d97b7553754eebbd25980`.
Bio kini menyebut Bandung dan pengalaman di Neuram, Legali, serta AI Center ITB.
Periode Neuram mengikuti Februari–April 2026; Legali ditambahkan pada Februari 2026.
Entri AI Center ITB April 2026–sekarang dari CV sebelumnya digantikan sesuai
referensi yang baru diberikan. Angka hasil pada CV lama tidak dicampur dengan
uraian baru. Data lama di bagian tinjauan awal dokumen ini dipertahankan sebagai
catatan kurasi awal; daftar aktif berisi sepuluh proyek di `src/content/projects.ts`.

Empat proyek awal tetap dipakai. Enam tambahan:

| Proyek | Sumber dan materi | Batas klaim |
| --- | --- | --- |
| [Finance Tracker](https://github.com/Maull09/finance-tracker) | README, source tree, [alur asisten AI](https://github.com/Maull09/finance-tracker/blob/main/docs/ai-assistant.md), screenshot data demo | LangGraph/Ollama menyiapkan draf; transaksi memerlukan konfirmasi. Tidak mengklaim adopsi atau dampak finansial |
| [ChatDoctor](https://github.com/ValentinoTriadi/STEIKedokteran) | CV, source tree, `app/api/chatbot.py`, `app/api/main.py`, logo asli | Sailor2-1B-Chat/Transformers/FastAPI; prototipe informasi kesehatan tanpa evaluasi klinis; Top 10 dari CV |
| [RoadEye](https://github.com/ValentinoTriadi/RoadEye) | CV, README tim M2VR, source tree, kode deteksi, screenshot README | Pemilik tercantum sebagai Hustler. Jalur deteksi masih memiliki return sementara; bukan sistem produksi lengkap |
| [Marketplace Recommender System](https://docs.google.com/presentation/d/1ytNsnRySfWdhcN3w8hJwXMW3rFJkNK4U3xe-07YOniA/edit?usp=sharing) | CV dan 31 slide presentasi tim SySendiri; pemilik tercantum bersama Anindita Widya | TF-IDF, K-Means, NearestNeighbors, Tableau; 11 cluster bukan bukti optimal global. Rekomendasi berbasis konten; personalisasi riwayat masih rencana |
| Trash Reporting System | Deskripsi CV dan [sertifikat finalis GEMASTIK XVII](https://drive.google.com/file/d/1DLk3bwuQnGoS9iJhRUmlKULWnfUMpdwa/view?usp=sharing) | Tidak dipetakan ke trash-map; kode, gambar, metrik, dan makalah yang sesuai belum ditemukan |
| [GRPO Indonesian Legal Reasoning](https://github.com/Maull09/grpo-indonesian-legal-reasoning) | Notebook `final_notebook.ipynb`, skrip generasi penalaran dan split dataset | Eksperimen Qwen2.5-14B-Instruct/LoRA/GRPO; tidak mengklaim peningkatan kualitas, nasihat hukum, atau publikasi |

### Speakers

Tiga sesi berasal dari bagian Invited Speaker CV: Symphony of Data (KAT ITB,
2024), Data Competition Strategies (Kaderisasi Wilayah STEI-K ITB 2023, tahun sesi
2024), dan Introduction to Data Science (SPARTA HMIF 2023, tahun sesi 2024).
Dua sesi pertama memiliki anotasi tautan sertifikat. Sesi ketiga tidak diberi
tautan fiktif. Entri pembicara agregat di Organizational dihapus untuk menghindari
duplikasi.

### Papers dan ketidaksesuaian tautan CV

Tautan berlabel Paper pada Trash Reporting System membuka PDF lima halaman:
[Monitoring Otomatis Kondisi Lalu Lintas untuk Mendeteksi Adanya Kecelakaan dengan
Menggunakan YOLOv8](https://drive.google.com/file/d/1xuhjBb4eR45A_qtXMkHqu35xDufx0tSO/view?usp=sharing).
Dokumen mencantumkan Mohamad Maulana Firdaus Ramadhan, Rizqika Mulia Pratama,
Ikhwan Al Hakim, dan Ayu Purwarianti; header September 2023. Topiknya kecelakaan
lalu lintas, bukan sampah. Judul, penulis, dan tahun yang ditampilkan mengikuti
dokumen. Status publikasi independen/DOI belum diverifikasi; label website adalah
makalah riset, tanpa klaim peer review.

Evaluasi dokumen: mAP50 0,924430; data latih 10.989 dan validasi 2.220 gambar.
Metrik tidak disamakan dengan akurasi, hasil test independen, atau bukti generalisasi.
Tautan ini hanya masuk Papers, tidak dipakai sebagai bukti untuk proyek sampah.
Pemilik sudah dimintai tautan yang sesuai untuk makalah sampah atau karya lain.
PDF riset tidak disalin ke aset website; daftar penulis tanpa NIM/email berasal
dari isi dokumen, bukan metadata Author template PDF.

### Aset tambahan

Aset dikonversi ke WebP dari materi asli, dengan warna dipertahankan. UI tetap
monochrome dan memakai Archivo. Tidak dibuat screenshot, logo, atau foto sintetis.

| File lokal | Asal | Jenis |
| --- | --- | --- |
| `public/images/projects/finance-tracker-dashboard.webp` | [Screenshot repository](https://raw.githubusercontent.com/Maull09/finance-tracker/main/docs/images/product/dashboard.webp) | Screenshot dengan data demo |
| `public/images/projects/chatdoctor-logo.webp` | [LogoColor.png](https://raw.githubusercontent.com/ValentinoTriadi/STEIKedokteran/main/public/LogoColor.png) | Logo, bukan screenshot; ditampilkan lebih kecil |
| `public/images/projects/roadeye-dashboard.webp` | [img/1.png](https://raw.githubusercontent.com/ValentinoTriadi/RoadEye/main/img/1.png) | Screenshot asli dari README |
| `public/images/projects/marketplace-dashboard.webp` | Slide 19 presentasi TokoGenZ yang ditautkan di atas | Slide dashboard beserta anotasi; alt text menyebut slide |

Proyek tanpa gambar tetap memiliki uraian dan bukti yang tersedia. FlightOps
mempertahankan diagram HTML dari dokumentasinya. Writings dan Moments tetap
menunggu materi asli dan tidak diisi dengan makalah atau banner proyek.

## Materi lokal pemilik: sertifikat, makalah, dan foto

Sumber: C:/Users/Maull/Documents/cv_maul, diperiksa atas permintaan pemilik.
Inventaris terkait mencakup 12 PDF dalam papers, 23 PDF dalam sertif beserta
subfolder maul, dua PDF dan empat gambar dalam speaker, serta tiga gambar di sertif.
Bundle Certifications di root berisi sepuluh halaman sertifikat yang mengulang
sebagian dokumen individu. Nama file bukan instruksi; uraian dan penulis dicocokkan
dengan isi dokumen. Dokumen akademik pribadi di root tidak dijadikan aset website.

### Dokumen yang ditampilkan

- Deteksi Penipuan Suara Berbahasa Indonesia: Studi Komparatif Antara Arsitektur LALM dan ASR+LLM — Makalah riset · Speech & LLM.
- Penyusunan Amar Putusan Berbasis Reinforcement Learning untuk Meningkatkan Reasoning Hukum Pengadilan Indonesia — Makalah riset · LLM post-training.
- Generasi Amar Putusan Hukum Indonesia dari Dokumen Pengadilan Menggunakan Large Language Model — Makalah riset · Legal NLP.
- Indonesian Legal Verdict Generation from Court Documents Using Instruction-Tuned Language Models — Makalah riset · Eksperimen individu.
- Animal Species Classification Using Deep Learning — Makalah riset · Computer vision.
- Pelaporan dan Pendeteksian Adanya Sampah Guna Menjaga Kebersihan Lingkungan Berbasis YOLOv8 — Makalah riset · Computer vision.
- Penerapan Pembelajaran Mesin untuk Prediksi Keputusan Investasi pada UMKM — Makalah riset · Applied machine learning.
- Pemrosesan Bahasa Alami Untuk Analisis Sentimen Dengan Menggunakan Bidirectional GRU — Makalah riset · NLP.
- Hustler — Laporan Objective Quest 2024 — Laporan kompetisi · Network traffic classification.
- Monitoring Otomatis Kondisi Lalu Lintas untuk Mendeteksi Adanya Kecelakaan dengan Menggunakan YOLOv8 — Makalah riset · Computer vision.

Dua slide, Hustler_DataQuest dan PPT_Hustler, dicatat sebagai presentasi dan tidak
dimasukkan sebagai makalah tambahan. SFT versi tim dan eksperimen individu mempunyai
judul, penulis, serta hasil berbeda; keduanya diberi entri tersendiri tanpa menyatukan
metrik atau mengklaim dua publikasi jurnal. Semua makalah ditandai sebagai makalah
riset; status peer review/DOI belum diverifikasi. Tahun yang tidak eksplisit atau
konflik dengan isi dokumen ditampilkan Tanpa tanggal. Header 2023 pada makalah sampah
bertentangan dengan sitasi 2024; header 2024 pada dokumen GEMASTIK XVIII juga masih
memuat ISSN xxxxxx dan referensi 2025. Header tersebut tidak digunakan sebagai tahun.

### Hasil dan batasan sumber

- Trash Reporting: makalah yang benar kini tersedia. mAP50 0,92, 100 epoch; 3.669
  latih, 260 validasi, 258 uji. Kesalahan termasuk pohon/batu sebagai sampah dan
  objek kecil terlewat. Tidak membandingkan accuracy 0,89 dengan mAP50 secara langsung.
- EyeNimal: tabel melaporkan validation accuracy EfficientNet-B3 98,38% dan
  YOLOv11-cls 97,84%. Tabel split memakai label train/test 80:20 sedangkan tabel
  hasil memakai validation; website mempertahankan label validation tanpa
  mengklaim test set independen. Angka bukan benchmark layanan web yang dijalankan.
- Deteksi penipuan suara: 1.034 data sintetis (827 latih, 103 validasi, 104 uji).
  F1 ASR+LLM 99,03% dan LALM 95,19% pada data sintetis. Kasus audio riil tunggal
  menunjukkan kegagalan ASR; tidak dijadikan klaim generalisasi pada panggilan nyata.
- SFT versi tim: 50 dokumen uji, ROUGE-L 0,6267, BERTScore F1 0,8212. Versi individu
  melaporkan 0,7912 dan 0,9065. Jumlah total 661 tidak sama dengan penjumlahan split
  488+50+50; total itu tidak dicantumkan pada website.
- GRPO: metode Qwen2.5-14B/LoRA/reward dan analisis keluaran tersedia pada makalah.
  Halusinasi, salah pasal, dan penalaran tidak lengkap tetap disebut. Tidak
  mengklaim peningkatan ketepatan hukum yang telah divalidasi ahli.
- UMKM: klasifikasi LightGBM pada 90 sampel uji; sekitar 74% akurasi. Konteks
  Shark Tank US dipertahankan dan tidak digeneralisasi ke keputusan investasi lokal.
- BiGRU: dokumen memodelkan lima emosi dengan FastText, akurasi 0,70, precision
  0,72, recall 0,71; tidak disebut sebagai prediksi seluruh percakapan sosial.
- Objective Quest: laporan mengenai klasifikasi traffic jaringan, bukan kualitas
  udara. Skor 0,872 tidak disebut accuracy karena dokumen menyebutnya scoring.

### Sertifikat dan bukti

Sembilan award kini mempunyai file sertifikat lokal dan tahun yang jelas: Hology,
GEMASTIK XVII, TSDN, Objective Quest, FindIT DAC, dan Hackfest pada 2024; FindIT
Hackathon dan Ristek Datathon pada 2025; GEMASTIK XVI pada 2023. Rangking yang
tidak tertulis pada sertifikat tetap berasal dari CV, bukan hasil pembacaan sertifikat.
Ristek menggunakan sertifikat finalis tim eyay enjinir; PDF individu hanya menunjukkan
partisipasi sehingga tidak dijadikan bukti finalis yang utama.

DataCamp DS bertanggal 13 Juni 2023 dan nomor sesuai tautan CV. Mentoring Internnet
Wave 6 ditambahkan dengan label Mentee. Sertifikat panitia GDSC, AMI, Wisuda Oktober,
CDT trainee, dan surat Ketua Divisi Datavidia dicatat untuk organisasi/pelatihan,
bukan disebut sertifikasi teknis atau award kompetisi baru. Surat pengumuman dan
daftar finalis universitas tidak disalin: sertifikat individual sudah memadai dan
daftar tersebut memuat kontak peserta lain. Bundle root tidak diduplikasi.

Ketiga speaker kini mempunyai file bukti: KAT ITB (20 Juli 2024), kadwil (2024),
dan SPARTA (3 Agustus 2024). Template Sertifikat Narasumber.png ternyata sudah
terisi nama dan peran pemilik; bukan blank template.

### Dokumen publik dan provenance

| Sumber relatif terhadap cv_maul | Path website |
| --- | --- |
| papers/Laporan_eyay enjinir.pdf | /documents/papers/indonesian-voice-fraud.pdf |
| papers/GEMASTIK XVIII Karya Tulis Ilmiah TIK - Risercer - Karya Tulis Ilmiah TIK.pdf | /documents/papers/grpo-legal-reasoning.pdf |
| papers/GEMASTIK XVIII Penambangan Data - 250020011859474 - Budabibako - Generasi Amar Putusan Hukum Indonesia dari Dokumen Pengadilan Menggunakan Large Language Model.pdf | /documents/papers/legal-verdict-generation.pdf |
| papers/Indonesian_Legal_Verdict_Generation_from_Court_Documents_Using_Instruction_Tuned_Language_Models.pdf | /documents/papers/instruction-tuned-verdicts.pdf |
| papers/Animal_Species_Classification_Using_Deep_Learning.pdf | /documents/papers/animal-species-classification.pdf |
| papers/Revisi_MIQ_Pelaporan dan Pendeteksian Adanya Sampah Guna Menjaga Kebersihan Lingkungan Berbasis YOLOv8 - 18222140 Mohamad Maulana Firdaus R.pdf | /documents/papers/trash-reporting-yolov8.pdf |
| papers/Analisis_Keputusan_Investasi_untuk_UMKM_Berdasarkan_Data_Shark_Tank_US_untuk_Mendukung_SDG_9 (1).pdf | /documents/papers/umkm-investment-prediction.pdf |
| papers/Makalah_DAC2023_Bluu.pdf | /documents/papers/bigru-sentiment-analysis.pdf |
| papers/Hustler_Laporan Objective Quest 2024.pdf | /documents/papers/objective-quest-network-traffic.pdf |
| papers/GEMASTIK XVI - Penambangan Data - GEMASTIK23-639338070 - MIQ - Monitoring Otomatis Kondisi Lalu Lintas Untuk Mendeteksi Adanya Kecelakaan dengan Menggunakan YOLOv8.pdf | /documents/papers/traffic-accident-yolov8.pdf |
| sertif/maul/1st PLACE DATA MINING - Mohamad Maulana Firdaus Ramadhan.pdf | /documents/certificates/hology-2024.pdf |
| sertif/maul/Gemastik 17 2024 - Mohamad Maulana Firdaus Ramadhan.pdf | /documents/certificates/gemastik-xvii-2024.pdf |
| sertif/maul/Sertifikat Finalis Mohamad Maulana Firdaus Ramadhan tim Tim STEI Kedokteran.pdf | /documents/certificates/tsdn-2024.pdf |
| sertif/maul/Dataquest - Muhammad Maulana Firdaus.pdf | /documents/certificates/objective-quest-2024.pdf |
| sertif/maul/Mohammad Maulana Firdaus Ramadhan_Hustler_Sertifikat Finalis Data Analytics Competition.pdf | /documents/certificates/findit-data-2024.pdf |
| sertif/maul/E-Sertifikat Finalis Hackathon FIND IT! 2025 Mohamad Maulana Firdaus Ramadhan.pdf | /documents/certificates/findit-hackathon-2025.pdf |
| sertif/maul/Gemastik 16 2023 - Mohamad Maulana Firdaus Ramadhan.pdf | /documents/certificates/gemastik-xvi-2023.pdf |
| sertif/maul/M2VR_MUHAMMAD MAULANA FIRDAUS_GDSC Institut Teknologi Bandung - Bandung.pdf | /documents/certificates/hackfest-2024.pdf |
| sertif/maul/Datacamp DS - Maulana.pdf | /documents/certificates/datacamp-ds-2023.pdf |
| sertif/maul/Sertif Mentee Internnet_Mohamad Maulana Firdaus Ramadhan.pdf | /documents/certificates/internnet-wave-6.pdf |
| speaker/Pembicara Dikpus-32.pdf | /documents/certificates/speaker-kat-2024.pdf |
| speaker/Sertifikat Kadwil_20240616_121459_0000.pdf | /documents/certificates/speaker-kadwil-2024.pdf |
| speaker/Template Sertifikat Narasumber.png | /documents/certificates/speaker-sparta-2024.png |
| sertif/eyay enjinir.png | /documents/certificates/ristek-datathon-team-2025.png |

Makalah sampah mengambil lima halaman utama dari tujuh halaman sumber; dua halaman
originality report tidak disertakan. Isi makalah tidak diedit. PDF/PNG lain disalin
byte-identik. Checksum file terpilih disimpan di tests/fixtures/documents.json untuk
memverifikasi file yang dilayani aplikasi.

### Foto Dokumentasi

- speaker/IMG_1348.png.png: sesi strategi kompetisi data, cocok dengan materi dan
  sertifikat kadwil 2024. Disimpan sebagai images/moments/data-competition-speaking.webp.
- sertif/DSC09949.JPG: presentasi klasifikasi traffic jaringan dengan materi feature
  engineering yang cocok dengan laporan tim Hustler Objective Quest 2024. Disimpan
  sebagai images/moments/objective-quest-presentation.webp.

Foto dikonversi ke WebP untuk ukuran responsif tanpa mengubah warna. Metadata kamera
tidak disalin ke file keluaran. Foto penyerahan sertifikat dan foto grup tetap
tersedia sebagai kandidat; foto grup belum diberi caption acara/tahun karena konteks
belum pasti. Screenshot rapat KAT tidak dipakai sebagai foto galeri karena menampilkan
identitas peserta rapat yang tidak dibutuhkan untuk portofolio.

## Kelengkapan CV dan Technical Skills

Referensi aktif tetap Resume___Mohamad_Maulana_Firdaus_Ramadhan.pdf di cv_maul.
Pengalaman kini mempertahankan 21 butir CV: Neuram 4, Legali 4, AI Center ITB 4,
SPUN 5, dan riset partial discharge ITB 4. Tiga butir organisasi, uraian sesi
pembicara, penghargaan, dan kompetensi sertifikasi juga ditampilkan penuh dalam ID/EN.
Fixture tests/fixtures/cv-content.json berasal dari teks sumber CV untuk menguji
kelengkapan butir EN, tanpa menyalin kontak pribadi dari header CV.

CV melaporkan akurasi 100% untuk klasifikasi sinyal partial discharge. Angka ini
ditampilkan bersama keterangan bahwa split evaluasi dan pengujian independen belum
dijelaskan; bukan klaim generalisasi pada seluruh kondisi lapangan.
Uraian Objective Quest mengikuti laporan klasifikasi traffic jaringan yang sudah
diperiksa, karena deskripsi kualitas udara di CV tidak sesuai isi laporan tersebut.

Technical Skills memakai lima kategori Skills Summary: Languages, AI & GenAI,
Cloud, Libraries, dan Databases. Soft Skills tidak dikategorikan sebagai kemampuan
teknis. Tidak ada level, persentase kemahiran, atau teknologi baru yang dikarang.

## Koreksi kurasi dan tahun makalah — 11 Oktober 2026

Atas permintaan pemilik, dua entri dihapus dari Papers beserta salinan PDF publik:
Indonesian Legal Verdict Generation from Court Documents Using Instruction-Tuned
Language Models dan Hustler — Laporan Objective Quest 2024. Daftar serta tabel
provenance di bagian audit sebelumnya mencatat keadaan sebelum koreksi ini;
berkas sumber di direktori cv_maul tidak diubah.

Delapan makalah yang tersisa diurutkan dari tahun terbaru:

| Tahun | Makalah |
| --- | --- |
| 2025 | Deteksi Penipuan Suara Berbahasa Indonesia: Studi Komparatif Antara Arsitektur LALM dan ASR+LLM |
| 2025 | Penyusunan Amar Putusan Berbasis Reinforcement Learning untuk Meningkatkan Reasoning Hukum Pengadilan Indonesia |
| 2025 | Generasi Amar Putusan Hukum Indonesia dari Dokumen Pengadilan Menggunakan Large Language Model |
| 2025 | Animal Species Classification Using Deep Learning |
| 2025 | Penerapan Pembelajaran Mesin untuk Prediksi Keputusan Investasi pada UMKM |
| 2024 | Pelaporan dan Pendeteksian Adanya Sampah Guna Menjaga Kebersihan Lingkungan Berbasis YOLOv8 |
| 2023 | Pemrosesan Bahasa Alami Untuk Analisis Sentimen Dengan Menggunakan Bidirectional GRU |
| 2023 | Monitoring Otomatis Kondisi Lalu Lintas untuk Mendeteksi Adanya Kecelakaan dengan Menggunakan YOLOv8 |

Tahun 2024 dan 2025 mengikuti koreksi pemilik; Animal Species Classification
dipakai sebagai 2025 mengikuti konteks daftar pemilik. Dua tahun 2023 tetap
mengikuti sumber yang telah diaudit. Koreksi tahun ini menggantikan status
Tanpa tanggal pada audit sebelumnya, tanpa mengubah isi PDF atau status publikasi.

## Tambahan galeri — 11 Oktober 2026

Pemilik meminta foto dari cv_maul/galery dimasukkan ke Moments. Enam gambar
ditambahkan ke dua gambar yang sudah tampil; foto, plakat, sertifikat, dan logo
acara diperiksa untuk caption. Galeri ditujukan agar pengunjung portofolio dapat
mengenali kegiatan nyata melalui gambar dan caption tanpa interaksi tambahan.

| Sumber di galery | Aset di public/images/moments | Konteks dan batas informasi |
| --- | --- | --- |
| 304751.jpg | data-competition-appreciation.webp | Penyerahan sertifikat speaker Competition – Data Mining, Kaderisasi Wilayah STEI-K; tahun sesi 2024 mengikuti sertifikat yang telah diaudit |
| [50D] IMG_8442.JPG | hology-winning-team.webp | Plakat Juara 1 Divisi Data Mining dan piala Hology 7.0 terlihat; tahun 2024 sesuai sertifikat Hology |
| 590102_0.jpg | gemastik-presentation.webp | Dokumentasi presentasi berlogo GEMASTIK XVII; tahun 2024 sesuai penyelenggaraan yang telah diaudit |
| 367321.jpg | hology-award.webp | Momen penghargaan dengan backdrop Hology 7.0; tahun 2024 sesuai sertifikat Hology |
| 590100_0.jpg | miq-data-mining.webp | Tim MIQ, Institut Teknologi Bandung, di meja kompetisi; nama acara dan tahun tidak ditebak dari pakaian atau nama file |
| 590099_0.jpg | best-staff-recognition.webp | Grafis Best Staff Award bidang IT Database untuk Februari; tahun tidak disebutkan pada gambar sehingga tetap null |

IMG_1348.png.png adalah foto sesi pembicara yang sudah ditampilkan, sehingga tidak
ditambahkan dua kali. 367337.jpg merupakan dokumentasi Hology berbingkai story
yang serupa dengan materi terpilih; 2612847.jpg terlalu gelap dan konteks kegiatannya
belum jelas. IMG-20240707-WA0001(1).jpg tidak dipakai karena memperlihatkan panel
peserta rapat beserta identitas yang tidak diperlukan untuk galeri publik.

Gambar diperkecil hingga maksimal 1.600 px tanpa upscaling, dikonversi ke WebP,
dan metadata EXIF/XMP/IPTC dibuang. Warna tetap asli dan rasio foto dipertahankan
di halaman; grafis Best Staff Award dipotong hanya untuk membuang status bar,
filmstrip foto lain, dan tombol ponsel (area x=0, y=109, 858×1527 pada sumber).
Berkas asli tetap utuh. Checksum serta dimensi keluaran dicatat dalam
tests/fixtures/gallery-images.json untuk memeriksa aset yang dilayani website.

## Kelengkapan Experience dari CV Downloads — 11 Oktober 2026

Pemilik memberikan Resume_Mohamad_Maulana_Firdaus_Ramadhan.pdf di Downloads untuk
memeriksa pengalaman yang belum lengkap. Perbandingan menemukan satu peran baru
serta rincian hasil yang berbeda dari Resume___Mohamad_Maulana_Firdaus_Ramadhan.pdf.

| Entri | Periode aktif | Butir | Perubahan |
| --- | --- | --- | --- |
| AI Center ITB — AI Research Assistant | Apr 2026–Present | 6 | Entri baru: platform agentic AI, hybrid RAG/BM25, GEPA, penyedia LLM, Langfuse, dan evaluasi blind oleh manusia |
| Neuram | Feb 2026–Present | 8 | Mengganti akhir Apr 2026 mengikuti CV yang baru diberikan; volume 40.000+ percakapan/1.500+ jam, latensi percakapan 60%, pickup >80%, database 96%, payload >96%, serta biaya LLM >88% |
| Legali | Feb 2026 | 4 | Tetap berasal dari CV sebelumnya; tidak dicantumkan pada CV Downloads dan tidak ada permintaan menghapus |
| AI Center ITB — RAISA Project–SKK Migas | Okt–Des 2025 | 5 | Akurasi 28–33% menjadi 82,7%, rejection precision 88,3% menjadi 99,0% pada 103 kasus negatif, routing SQL, Evaluator Agent, dan ingestion Excel |
| SPUN | Jul–Sep 2025 | 5 | Otomasi 85%, respons 30 menit menjadi <5 detik, lonjakan konkurensi 10×, grounding visa, dan deployment hingga hitungan menit |
| ITB — partial discharge | Mar–Des 2025 | 4 | Akurasi 100% menurut CV, inferensi milidetik, dataset 2.312 sampel, serta dashboard kesehatan peralatan |

Total 32 butir ditampilkan penuh dalam ID/EN. Detail terdahulu yang tidak bertentangan
tetap disertakan pada butir terkait: SIP/Twilio/ElevenLabs, LangGraph, Qdrant
dense+sparse, evaluasi 1.000+ sampel, Dense Concatenation, serta EC2/S3/Secrets Manager.
Evaluasi 1.000+ sampel pada CV sebelumnya berbeda cakupan dengan 103 kasus negatif;
keduanya tidak diperlakukan sebagai satu benchmark. Angka performa merupakan laporan
pemilik dalam CV, tanpa verifikasi independen. Batas evaluasi akurasi 100% tetap dijelaskan.

Fixture tests/fixtures/cv-content.json menyimpan 28 butir pengalaman dari teks PDF
Downloads, empat butir Legali, dan tiga butir organisasi dari CV sebelumnya.
Pengujian memeriksa kelengkapan dan penempatan tiap butir pada pengalaman yang tepat.
Header kontak dan pengenal pribadi tidak disalin ke fixture atau konten website.
File unduhan public/documents/cv.pdf tidak diganti pada pekerjaan ini; permintaan
pemilik berfokus pada melengkapi section Experience. Entri audit sebelumnya mencatat
keadaan sebelum pembaruan ini.

## Technical Skills dan penyuntingan copy — 11 Oktober 2026

Pemilik meminta Technical Skills dilengkapi dan kalimat ditulis langsung tanpa
framing defensif, menggunakan skill no-ai-slop. Delapan kategori kini mencakup
bahasa, AI/GenAI, framework AI, backend/API, cloud/MLOps, database, data/vision,
dan evaluasi AI. Teknologi tambahan berasal dari bukti berikut.

| Sumber | Tambahan |
| --- | --- |
| Skills Summary CV Downloads | AI Frameworks, REST API, webhook, SIP, pemrosesan asinkron, dan sistem berbasis event |
| AI Center ITB Apr 2026–Present | BM25, hybrid retrieval, GEPA, Ollama, Langfuse, LLM-as-a-Judge, dan blind human review |
| Neuram dan SPUN | Twilio, ElevenLabs, Secrets Manager, serta AWS CodePipeline |
| Finance Tracker | TypeScript, Drizzle ORM, serta teknologi aplikasi JavaScript |
| FlightOps Sentinel | MLflow, Airflow, dan GitHub Actions |
| Proyek dan makalah terkurasi | FastAPI, TRL, QLoRA, GRPO, YOLOv8, Whisper, K-Means, TF-IDF, Tableau, BLEU, ROUGE-L, METEOR, dan BERTScore |

Copy ID/EN kini menyebut tindakan, hasil, kerja tim, dan cakupan evaluasi langsung.
Kalimat RoadEye menyebut pengembangan bersama tim M2VR, tanpa menjadikan label
Hustler dalam README sebagai uraian kontribusi. Tautan bukti tetap tersedia.
Status prototipe, hasil kompetisi, model yang dipakai aplikasi, model dalam
eksperimen, dataset, serta ukuran sampel tetap dibedakan dalam konteks kalimat.

Catatan defensif dan komentar proses audit di halaman dihapus atas permintaan
pemilik. Batas bukti yang telah ditemukan tetap tercatat pada entri audit terdahulu,
termasuk sumber metrik CV, evaluasi klinis ChatDoctor, integrasi deteksi RoadEye,
dan hasil holdout FlightOps. Ini tidak menambah klaim deployment atau hasil evaluasi.

Semua 32 butir pengalaman dan tiga butir organisasi dipertahankan. Fixture CV
tetap menyimpan teks sumber. Fakta konkret pada butir yang ditulis ulang diuji
melalui wordingIndependentFacts, sehingga penyuntingan tidak menghilangkan detail
atau memindahkan kontribusi ke pengalaman lain.

## Koreksi pemilik dan timeline — 11 Oktober 2026

Head of Community Data Community HMIF ITB berakhir pada Mei 2025, sesuai
koreksi pemilik. Bio memakai bentuk lampau untuk peran tersebut. Frasa lokasi
pada bio serta Legali dihapus dari halaman ID/EN atas permintaan pemilik.
Lima pengalaman lainnya tetap memuat seluruh 28 butir kontribusi. Dokumen CV
asli dan fixture sumber historis tetap utuh.

Referensi gambar Qika dari pemilik digunakan untuk garis timeline dan ikon
dokumen. Ikon Phosphor regular dipakai untuk dokumen, panah tautan, email,
GitHub, serta LinkedIn. Foto dan materi proyek tetap memakai aset asli.

## Logo teknologi — 11 Oktober 2026

Dua belas logo di public/images/technologies berasal dari paket npm simple-icons
16.35.0, disalin tanpa mengubah SVG. Sumber: https://github.com/simple-icons/simple-icons.
Nama teknologi sesuai Technical Skills: Python, PyTorch, Hugging Face, LangChain,
FastAPI, Docker, PostgreSQL, Redis, Qdrant, NumPy, Pandas, dan TypeScript.
Library memakai CC0; lisensi library serta disclaimer merek disimpan bersama aset.
Logo digunakan sebagai identitas teknologi, tanpa klaim afiliasi atau dukungan.

## Penggantian CV unduhan — 11 Oktober 2026

Atas permintaan pemilik, `public/documents/cv.pdf` diganti dengan
`Resume_Mohamad_Maulana_Firdaus_Ramadhan.pdf` dari Downloads. PDF disalin
byte-identik tanpa penyuntingan, berukuran 159.538 byte, dengan SHA-256
`2fd0a5f3a1dc5899f2e419592f79764fb1accf6eacc6618636c8a62247455837`.
Tautan `/documents/cv.pdf` tetap dipakai pada kedua bahasa. Tes unduhan
memastikan respons berisi PDF yang sama dengan file tersebut. Penggantian ini
hanya memperbarui dokumen unduhan; konten halaman tetap mengikuti sumber dan
koreksi pemilik yang telah dicatat sebelumnya.

## Preview lokal: kepanitiaan dan proyek tambahan — 11 Oktober 2026

Perubahan disiapkan di workspace lokal tanpa commit, push, PR, perubahan variable,
atau deployment GitHub. Enam peran organisasi/kepanitiaan memakai timeline yang
sama. Asumsi pembaca: perekrut dan kolaborator membandingkan kontribusi lalu
membuka kode, makalah, atau bukti kompetisi. Tautan kode paper memakai nama
proyek, area klik 44 px, dan pembungkusan pada mobile seperti tautan Projects.

### Kepanitiaan

- Head of Datavidia ARKAVIDIA 9.0 (2025): jabatan dan sekitar 800 peserta berasal
  dari keterangan pemilik. Surat Keterangan Ketua Datavidia mengonfirmasi Ketua
  Divisi pada ARKAVIDIA 9.0, dengan kegiatan Februari–Mei 2025; surat tidak menetapkan
  awal masa jabatan, sehingga timeline memakai 2025. Uraian koordinasi panitia,
  komunikasi peserta, dan kesiapan operasional adalah draf tanggung jawab ketua
  untuk ditinjau pemilik, tanpa klaim penyusunan dataset atau metrik hasil baru.
- [Penyisihan Datavidia 9 di Kaggle](https://www.kaggle.com/competitions/comodity-price-prediction-penyisihan-arkavidia-9)
  mencatat prediksi harga komoditas pangan di 34 provinsi. Angka entrants,
  participants aktif, dan teams pada Kaggle berbeda definisi; tidak dipakai untuk
  mengganti estimasi peserta yang diberikan pemilik. Babak penyisihan daring dan
  final di ITB sesuai guidebook serta dokumentasi kompetisi.
- Tour Division Staff AMI 2023: nama dan peran diperiksa pada sertifikat
  `Sektour AMI - Mohamad Maulana Firdaus Ramadhan.pdf`. Tahun 2023 tercetak pada
  sertifikat; tidak mengarang tugas atau tanggal mulai/selesai.
- IT Staff Parade Wisuda Oktober ITB 2022: sertifikat `IT Wisokto - Maul.pdf`
  mencantumkan nama pemilik, Staff IT, dan periode Agustus–Oktober 2022.
  Sertifikat kepanitiaan tidak ditambahkan sebagai sertifikasi teknis atau award.
  Surat dan sertifikat baru ini tidak disalin ke public; menghindari NIM panitia lain.

### Proyek, makalah, dan kompetisi

| Entri | Sumber yang diperiksa | Batas klaim |
| --- | --- | --- |
| [Fraud Call Detector](https://github.com/ashhforrd/Fraud-Detection) | README, app.py, makalah lokal Laporan_eyay enjinir.pdf | Streamlit membandingkan Qwen2-Audio dan Whisper–Sailor2; QLoRA serta 1.034 dialog dari makalah. F1 99,03%/95,19% pada 104 sampel sintetis, bukan performa produksi |
| [FraudSense](https://github.com/ashhforrd/FraudSense) | README, backend/services/fraudDetection.js, backend/routes/ai-analysis.js | Prototipe React/Express/Socket.IO/WebRTC, analisis teks dan audio melalui vLLM, hasil di MongoDB; tidak mengklaim jumlah pengguna atau akurasi aplikasi |
| [ChatDoctor](https://github.com/ValentinoTriadi/STEIKedokteran) | app/page.tsx, app/api/chatbot.py, bukti TSDN yang sudah dikurasi | Melengkapi entri yang sudah ada; Sailor2-1B-Chat/Transformers/FastAPI, prototipe informasi kesehatan; tidak menambahkan paper yang belum tersedia |
| [DoNation](https://github.com/Maull09/do-nation) | README, package.json, struktur source | Proyek kuliah II3120 tim empat anggota, bukan produk AI atau integrasi pembayaran produksi |
| EngLearn | [web](https://github.com/Maull09/englearn-web), [mobile](https://github.com/Maull09/englearn-mobile), [API](https://github.com/Maull09/englearn-api); quiz.tsx, lesson.ts, schema.ts | Satu produk web/mobile/API; kuis, video, dan progres terbukti di source. Tidak mengklaim fitur AI atau peningkatan hasil belajar |

Paper deteksi penipuan suara tetap satu entri tahun 2025, dengan tautan ke kedua
repository fraud. Sertifikat finalis tim eyay enjinir yang sudah dipublikasikan
menghubungkan konteks RISTEK Datathon UI 2025; Top 10 dan 200+ peserta tetap
bersumber dari CV. Detail tugas pemilik di masing-masing komponen proyek tim
belum terpisah dari kontribusi tim; deskripsi tidak mengklaim pengerjaan sendiri.
DoNation dan EngLearn ditambahkan atas permintaan pemilik setelah audit awal.

Banner `public/images/projects/do-nation-banner.webp` berasal dari
[banner README DoNation](https://github.com/user-attachments/assets/e1ccf870-e486-4a87-83a5-7100bdec82b5),
1800×529 menjadi 1600×470, dikonversi WebP. Aset telah dilihat: mockup kampanye,
aksi, dan leaderboard; tidak memuat token atau kontak pribadi yang terlihat.
Logo atau screenshot baru untuk proyek lain belum ditambahkan karena tidak ada
aset produk terkurasi yang telah diperiksa.

## Audit kronologi dan perpindahan bahasa — 11 Oktober 2026

Perubahan tetap di lokal. Experience sudah mengikuti waktu mulai terbaru
(Apr 2026, Feb 2026, Okt 2025, Jul 2025, Mar 2025); masa kerja yang tumpang tindih
tetap utuh. Organisasi dan kepanitiaan mengikuti pola sama dengan ketelitian tahun
untuk jabatan tanpa bulan. Papers sudah berurutan 2025, 2024, 2023.
Jumlah peserta Datavidia pada source lokal saat pemeriksaan akhir adalah sekitar
600; nilai lokal ini dipertahankan dan tes diselaraskan. Catatan sekitar 800 pada
audit sebelumnya merekam keterangan awal pemilik, bukan jumlah yang kini ditampilkan.
Awards sekarang menempatkan RISTEK dan FindIT Hackathon 2025 sebelum award 2024
dan GEMASTIK XVI 2023. RISTEK mendahului FindIT berdasarkan sertifikat 20 September
2025 dan 17 Mei 2025. Di dalam tahun yang sama, urutan kurasi dipertahankan jika
bulan tidak diketahui. Sertifikasi tanpa tahun tetap berada setelah DataCamp DS 2023.

Sertifikat speaker SPARTA menampilkan 3 Agustus 2024; KAT menampilkan 20 Juli 2024.
Kadwil hanya menampilkan 2024, sehingga tanggal tidak ditebak dari nama file.
Speakers sekarang berurutan SPARTA, KAT, kadwil; tanggal lengkap dua sesi pertama
ditampilkan di penanda kiri dalam kedua bahasa.

Tahun proyek 2025: EyeNimal (paper Animal Species, koreksi pemilik), BattleTalk
(FindIT Hackathon), Fraud Call Detector/FraudSense (paper dan RISTEK), dan GRPO
Legal Reasoning (paper, koreksi pemilik). Tahun proyek 2024: ChatDoctor (TSDN),
RoadEye (Hackfest), Marketplace Recommender (Hology), Trash Reporting (GEMASTIK XVII).
FlightOps, Agrotech, Finance Tracker, DoNation, dan EngLearn tetap tanpa tahun;
waktu pembuatan repository atau screenshot tidak dipakai sebagai bukti periode proyek.
Dua karya unggulan tetap menjadi pembuka berlabel; proyek lainnya diurutkan
berdasarkan tahun dengan entri tanpa tahun terakhir, tanpa duplikasi proyek.

Tahun Best Staff pada foto dicocokkan dengan CV: penghargaan IT Database pada
Februari dan satu-satunya Februari dalam periode STEI-K Nov 2022–Okt 2023 adalah
Februari 2023. Ini merupakan pencocokan konteks foto dan CV, bukan pembacaan tahun
pada gambar. Foto MIQ tetap tanpa tahun. Galeri memakai grid dalam urutan baca
kiri ke kanan agar urutan visual dan DOM sama; bingkai 4:3 menampilkan foto utuh.

Script tema memakai `ThemeInitializer` dan `useServerInsertedHTML` agar hanya
disisipkan satu kali ke HTML server. Komponen mengembalikan null pada render client,
menghindari script yang tidak dieksekusi saat navigasi ID/EN. Observer marquee
menangkap elemen ketika dipasang, dilepas saat cleanup, dan mengabaikan callback
yang terlambat setelah cleanup. Ini menangani ref yang menjadi null saat unmount.

## Koreksi urutan pemilik dan commit proyek — 11 Oktober 2026

Award 2024 sekarang dimulai TSDN, Hology, GEMASTIK XVII sesuai urutan yang
diberikan pemilik. Perkiraan Desember, Oktober/November, dan Agustus/September
tidak dimasukkan sebagai tanggal pasti. Speakers mengikuti SPARTA, kadwil, KAT;
tanggal kadwil tetap belum diketahui. Foto MIQ dikonfirmasi pemilik sebagai
GEMASTIK XVI 2023, sehingga caption dan tahun diperbarui. Foto itu ditempatkan
sebelum Best Staff Februari 2023.

Pemilik meminta seluruh proyek diurutkan berdasarkan commit terakhir, sehingga
kelompok Karya unggulan/Proyek lainnya dihapus. GitHub REST API `commits?per_page=1`
dibaca untuk branch default setiap repository; tanggal memakai `commit.committer.date`.
Metadata disimpan sebagai `lastCommit` pada konten lokal; website tidak memanggil
GitHub saat dibuka. Ini adalah tanggal update kode, bukan tanggal pencapaian atau
publikasi paper. EngLearn memakai commit terbaru di antara web, mobile, dan API.

| Proyek | Commit terakhir (UTC) | Bukti |
| --- | --- | --- |
| Finance Tracker | 2026-10-11 13:24:25 | [commit](https://github.com/Maull09/finance-tracker/commit/fe37c355464257de764e2740d04dfe09cf3b9b1a) |
| FlightOps Sentinel | 2026-10-02 03:34:12 | [commit](https://github.com/Maull09/flightops-sentinel/commit/64d0da7af355ec2433141740cd90e833fa537f85) |
| FraudSense | 2025-08-08 04:07:17 | [commit](https://github.com/ashhforrd/FraudSense/commit/4f18286579667c83888a38b577c6684c5a60a57e) |
| GRPO Legal Reasoning | 2025-07-31 14:46:37 | [commit](https://github.com/Maull09/grpo-indonesian-legal-reasoning/commit/e00dfa679f57da0d012fe3fbbdfe7bf724cd678b) |
| Fraud Call Detector | 2025-07-10 16:39:57 | [commit](https://github.com/ashhforrd/Fraud-Detection/commit/f333256e03a93f64a22c502f86076a1eaacfa193) |
| EyeNimal | 2025-06-04 00:34:58 | [commit](https://github.com/Maull09/eyenimal/commit/d8007b969446699cf7cec2187f8f00734f7561b0) |
| Agrotech | 2025-06-03 02:26:43 | [commit](https://github.com/Maull09/agrotech/commit/7e25d33022cd86f50a581e4df0cf9cb5012323b5) |
| BattleTalk | 2025-05-14 15:55:48 | [commit](https://github.com/Maull09/battletalk/commit/d11410ef17a6a166fbc5ee22d04e86584e59d281) |
| EngLearn | 2025-01-17 15:06:32 | [mobile commit](https://github.com/Maull09/englearn-mobile/commit/076ae58db21552e0dab6a467828f7a6503c389f3) |
| DoNation | 2024-12-20 14:39:26 | [commit](https://github.com/Maull09/do-nation/commit/c94bfc92a10290363499736d1984d31ef9802356) |
| ChatDoctor | 2024-12-09 09:45:18 | [commit](https://github.com/ValentinoTriadi/STEIKedokteran/commit/8fa0cb439e1f966f900775f068d7e8be9381db82) |
| RoadEye | 2024-01-18 16:40:07 | [commit](https://github.com/ValentinoTriadi/RoadEye/commit/dd11eaff31cb5fe4576179b7ce97ecb4d2dd6bca) |

EngLearn web: 2024-11-14 17:40:47 UTC; API: 2025-01-17 11:46:03 UTC.
Marketplace Recommender dan Trash Reporting belum mempunyai repository yang
terverifikasi terkait; tahun dokumen 2024 dipakai untuk penempatan pada akhir
kelompok 2024. Kedua entri tidak diberi label tanggal update kode.

Tombol pause dihapus dari kedua marquee beserta state, ikon, dan kolom kontrol.
Hover/fokus keyboard dan reduced motion tetap bekerja. Lebar kelompok diambil
dari `ResizeObserverEntry.borderBoxSize`, sehingga callback tidak lagi memanggil
`getBoundingClientRect()` pada ref. Lebar terakhir dipertahankan saat hanya
viewport yang berubah, dan observer mengabaikan callback setelah cleanup.
