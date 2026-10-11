# Design System — Personal Portfolio

Status: preview lokal dengan konten CV, proyek GitHub terkurasi, dan aset asli.
Tanggal: 11 Oktober 2026.

Dokumen ini menjadi sumber utama keputusan visual. Susunan halaman, wireframe,
struktur konten, dan arsitektur teknis ada di [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## 1. Brief dan tujuan

Website ini membangun personal branding pemilik sebagai AI engineer. Pengunjung
perlu memahami identitas, fokus, karya, cara berpikir, dan cara terhubung dengannya.

Arah yang sudah disepakati: **clean, sederhana, editorial, technical, dan monochrome**,
dengan tema terang dan gelap. Referensi terbaru adalah Razi dan Fathur: Lora
untuk nama dan judul section, Manrope untuk isi dan navigasi. Penekanan visual
dipusatkan pada nama dan karya unggulan, sementara bagian lain lebih tenang.

- Clean: hierarki jelas, ruang lega, dan elemen yang punya fungsi.
- Terang: latar putih keabu-abuan dengan teks berkontras kuat.
- Technical: detail teknologi, diagram, dan hasil evaluasi berasal dari karya nyata.
- Bold: nama dan proyek unggulan mempunyai hierarki jelas melalui ukuran dan ruang.
- Personal: cerita, tulisan, dan foto dokumentasi memperlihatkan perjalanan pemilik.

Asumsi audiens: orang yang ingin mengenal pemilik dan karyanya, termasuk komunitas
teknologi. Profil audiens yang lebih spesifik belum divalidasi.

Target pengalaman: profesional, mudah dipahami, dan terasa personal. Pengunjung
bisa memahami fokus pemilik dari Hero, menemukan proyek melalui navigasi,
membaca kontribusinya, dan membuka kanal kontak.

## 2. Prinsip visual

1. Jadikan tipografi Hero dan proyek unggulan sebagai pusat perhatian.
2. Gunakan foto asli, screenshot, dan diagram proyek yang relevan.
3. Sajikan metrik AI bersama konteks evaluasinya; angka harus bisa dipertanggungjawabkan.
4. Tampilkan daftar pengalaman dan tulisan dengan struktur yang mudah dipindai.
5. Pertahankan ritme ruang dan konsistensi komponen sepanjang halaman.
6. Gunakan kontras hitam-putih, bobot huruf, dan garis bawah untuk menandai tindakan.

## 3. Token warna

Token berikut adalah spesifikasi awal yang diturunkan dari arah visual yang disepakati.
Jika token berubah secara permanen, perbarui dokumen ini sebelum implementasi.

| Token | Nilai | Penggunaan |
| --- | --- | --- |
| `background` | `#FAFAFA` | Latar halaman |
| `surface` | `#FFFFFF` | Permukaan proyek dan area gambar |
| `text-primary` | `#1A1A1A` | Judul dan teks utama |
| `text-secondary` | `#525252` | Ringkasan, tanggal, dan caption |
| `accent` | `#000000` | Tombol utama, tautan, dan fokus |
| `accent-hover` | `#525252` | Hover tautan dan kontrol |
| `border` | `#E0E0E0` | Pemisah dan batas non-esensial |

Tema gelap memakai background `#161616`, surface `#222222`, text-primary
`#EEEEEE`, text-secondary `#B3B3B3`, accent `#FFFFFF`, accent-hover `#CCCCCC`,
dan border `#383838`. Permukaan untuk banner dan logo proyek tetap putih agar
aset asli terbaca. Pemisah bersifat dekoratif; outline fokus memakai accent.

Tindakan Hero memakai tautan teks bergaris bawah, tanpa tombol berisi warna.
Kontrol tema memakai border text-secondary dan outline accent. Tautan dalam paragraf
memiliki garis bawah agar bisa dikenali tanpa mengandalkan warna.
`border` merupakan pemisah dekoratif; batas kontrol yang esensial harus memenuhi
kontras non-teks minimal 3:1.

Tema pertama mengikuti preferensi perangkat; pilihan manual disimpan di
`localStorage` dan berlaku pada kedua bahasa. Tombol tema berlabel selalu terlihat
di header. Terapkan preferensi sebelum halaman dicat untuk menghindari kilatan
tema terang. Jika penyimpanan tidak tersedia, pilihan tetap bekerja pada halaman
aktif. Tanpa JavaScript, CSS mengikuti tema perangkat dan kontrol tema disembunyikan.
Foto, banner, logo, dan screenshot mempertahankan warna asli. Palet monochrome
berlaku pada antarmuka: latar, teks, tombol, label, dan garis pemisah.

## 4. Tipografi

| Peran | Font | Bobot dan karakter |
| --- | --- | --- |
| Nama dan judul section | Lora | 400–500; editorial, tanpa bobot berlebihan |
| Isi, navigasi, judul entri | Manrope | 400–600; isi 400, judul entri 600 |
| Diagram arsitektur | Monospace sistem | Hanya untuk langkah teknis yang relevan |

Teknologi ditampilkan sebagai daftar teks tanpa chips berbingkai. Nama Hero
memakai tracking `-0.035em`, bobot 400; judul section bobot 400 dan judul proyek
bobot 600. Hierarki dibangun lewat ukuran, ruang, dan keterkaitan konten.

| Elemen | Mobile | Desktop | Line height |
| --- | --- | --- | --- |
| Nama di Hero | 36–42 px | 48–56 px | 1.15 |
| Peran di Hero | 16 px | 18 px | 1.5 |
| Judul section | 26 px | 30 px | 1.3 |
| Judul proyek | 19 px | 22 px | 1.4 |
| Isi | 16 px | 16 px | 1.75 |
| Caption dan metadata | 13–14 px | 13–14 px | 1.5–1.75 |

Ukuran di antara mobile dan desktop mengikuti lebar viewport secara fluid.
Nama panjang boleh turun baris; tinggi Hero mengikuti konten.
Lebar paragraf biasanya dibatasi sekitar 60–70 karakter per baris. About memakai
lebar penuh container atas permintaan pemilik. Gunakan sentence case.

## 5. Grid, ruang, dan bentuk

- Lebar maksimum konten: 1040 px, berada di tengah viewport; isi paragraf 65–70ch.
- Gutter: 20 px pada mobile, 32 px pada tablet dan desktop.
- Skala ruang: 4, 8, 12, 16, 24, 32, 48, 64, dan 96 px.
- Jarak vertikal antarseksi: 56–64 px pada mobile, 80–96 px pada desktop.
- Gap kolom utama: 24–32 px; gambar dan judul terkait ditempatkan lebih dekat.
- Hero desktop memakai kolom teks fleksibel dan foto 208 px; foto mobile 160 px.
- Semua proyek memakai daftar satu kolom dengan gambar 420 px di kanan pada desktop.
  Teks selalu berada di kiri, termasuk proyek yang tidak mempunyai gambar.
  Pada mobile, gambar mengikuti teks dalam urutan DOM.
- Border radius: 4 px untuk kontrol dan 6 px untuk foto atau gambar proyek.
- Bayangan hanya digunakan jika dibutuhkan untuk menjelaskan elevasi.

Breakpoint acuan: mobile di bawah 768 px, tablet 768–1023 px, desktop mulai 1024 px.
Hero menjadi dua kolom mulai tablet, sedangkan entri proyek mulai desktop 1024 px,
dengan urutan DOM tetap.
Tinggi Hero mengikuti konten dan viewport; tombol utama harus mudah ditemukan.

## 6. Aturan komponen

### Ikon judul dan latar section

Semua judul section memakai ikon Phosphor regular 22 px di kiri teks, dengan
jarak 12 px dan warna text-secondary. Ikon mewakili isi: profil, kode, proyek,
pekerjaan, komunitas, mikrofon, dokumen, tulisan, trofi, sertifikat, kamera,
dan email. Hero memakai ikon CPU 20 px di samping AI Engineer.
Judul tetap berupa teks semantik; ikon dekoratif diberi aria-hidden dan focusable=false.

Hero dan semua section memakai tekstur CSS statis. Tiga pola berulang mengikuti
urutan section: diagonal 1 px setiap 8 px, titik kecil setiap 12 px, dan garis
horizontal 1 px setiap 24 px. Semua memakai text-primary pada opacity 4 persen.
Latar bergantian antara background dan surface dalam tema yang sedang aktif.
Urutan dihitung dari section yang benar-benar dirender, sehingga section tersembunyi
tidak meninggalkan celah. Baris fokus di bawah Hero juga memakai tekstur diagonal
dengan latar surface.
Dasar kontrol marquee dan lingkaran titik timeline mengikuti latar section masing-masing.
Tekstur ditempatkan sebagai background agar tidak menutupi foto, screenshot,
teks, atau kontrol. Tidak ada animasi tekstur atau aset baru yang perlu dimuat.
Asumsi: variasi latar membantu pengunjung membedakan setiap bagian saat scrolling
tanpa mengubah palet monochrome, hierarki konten, atau susunan halaman.

### Header dan navigasi

Nama ringkas pemilik berada di kiri; tautan About, Skills, Projects, Experience, Speakers,
Papers, dan Contact di kanan.
Hero, About, metadata, dan footer memakai nama lengkap. Navigasi hanya menuju section
yang mempunyai konten; Writings masuk navigasi setelah tulisan asli tersedia.
Navigasi desktop tampil mulai 1024 px; tujuh tautan dan kontrol bahasa/tema harus muat.
Header desktop cukup satu baris, sekitar 72 px. Pemilih tema tetap terlihat di semua
ukuran layar. Pada mobile dan tablet gunakan tombol menu
berlabel dan daftar tautan yang bisa dibuka dengan keyboard.

Header sticky menggunakan permukaan solid. Tujuan anchor memiliki jarak terhadap
header agar judul tetap terlihat setelah navigasi. Sediakan tautan lewati navigasi.

Pilihan bahasa Indonesia (ID) dan Inggris (EN) berada di header desktop dan di
dalam menu mobile. Bahasa aktif ditandai secara visual dan dengan `aria-current`.
Tautan bahasa memiliki nama yang jelas dan target sentuh minimal 44 × 44 px.

### Hero

Urutan teks: nama lengkap, AI Engineer, deskripsi fokus, lalu tautan "Lihat proyek"
dan "Unduh CV" dalam satu kelompok sederhana. CV berupa file PDF lokal.
Saat file belum tersedia, gunakan tombol nonaktif berlabel "CV belum tersedia".
Foto pemilik berada di kanan pada desktop dan setelah teks pada mobile.
Foto dipilih dengan crop yang tetap menjaga wajah atau konteks kegiatan.

Nama besar menjadi elemen paling berani. Deskripsi harus konkret dan ditulis
berdasarkan fokus pemilik yang sebenarnya.

### Proyek

Semua proyek langsung menampilkan judul, deskripsi, kontribusi, konteks evaluasi,
diagram arsitektur jika tersedia, teknologi, dan tautan. Detail tidak dilipat.
Gambar proyek memakai kolom kanan selebar 420 px pada desktop, termasuk proyek
non-unggulan agar screenshot terbaca. Pada mobile/tablet, gambar tampil setelah
teks, rata kanan, dengan lebar mengikuti ruang yang tersedia hingga 640 px.
Logo ditampilkan 144 px di tengah permukaan gambar. Label teknologi bersifat pendukung.
Tautan kode, demo, atau studi kasus memiliki
label jelas dan hanya ditampilkan jika tujuannya tersedia.

Banner asli ditampilkan utuh dengan `object-fit: contain`, tanpa memotong nama atau
tampilan produk. Logo memakai ukuran lebih kecil di tengah permukaan gambar;
slide presentasi diberi alt text sebagai slide, bukan screenshot aplikasi.
Rasio gambar mengikuti aset sumber. EyeNimal menjadi proyek
unggulan visual. FlightOps memakai alur arsitektur responsif yang merangkum
dokumentasi repository, berlabel arsitektur. Jelaskan status platform lokal dan
batas hasil evaluasinya. Proyek kolaborasi diberi label tim; pembagian tugas pribadi
yang tidak terdokumentasi tidak diklaim. Section tanpa materi asli tidak dirender.

Diagram arsitektur wajib berasal dari proyek yang bersangkutan dan tetap terbaca
di mobile. Penjelasan teks menyertai diagram yang menyampaikan informasi penting.

Kurasi diperluas menjadi sepuluh proyek. Setiap entri memuat masalah, peran dan
kontribusi, hasil atau konteks evaluasi, teknologi, dan tautan sumber yang tersedia.
Prototipe dan eksperimen dinyatakan sesuai tahapnya. Jangan menambahkan repository,
gambar, demo, atau hasil evaluasi yang tidak tersedia.

### Pengalaman dan organisasi

Gunakan daftar kronologis dengan periode, peran, organisasi, dan kontribusi.
Tampilkan seluruh butir kontribusi dari CV sebagai bullet points, termasuk
judul topik dan detail implementasi. Lokasi tersedia bersama periode.
Jangan merangkum beberapa butir menjadi satu paragraf atau menyembunyikannya.
Metrik menyebut dataset, sampel, atau konteks pengukurannya dalam kalimat langsung.
Catat sumber serta batas bukti di dokumen audit. Lengkapi
konten dari beberapa versi CV; entri yang tidak dicantumkan pada versi lain tidak
otomatis dihapus. Periode dan hasil yang dikoreksi pemilik memakai referensi terbaru.
Kolom tanggal di kiri dan isi di kanan pada desktop; susun vertikal pada mobile.
Experience dan Organizational Experience memakai satu garis timeline vertikal
setebal 1 px dalam warna border, dengan titik kecil di awal setiap periode.
Garis membantu mengikuti urutan pengalaman dan tidak menggantikan label tanggal.
Pertahankan ruang baca pada mobile; garis dan titik tetap berada di sisi kiri.

### Technical Skills

Section setelah About memuat delapan kategori dari CV dan proyek terkurasi:
Bahasa pemrograman, AI & GenAI, AI Frameworks, Backend & APIs, Cloud & MLOps,
Database, Data & Vision, serta AI Evaluation. Gunakan daftar
teks tanpa badges atau progress bar; jangan mengarang persentase kemahiran.
Kategori dan label aksesibilitas tersedia dalam ID/EN, nama teknologi dibagikan.

### Baris teks dan teknologi bergerak

Di bawah Hero, tampilkan baris fokus kerja: Voice AI, Agentic AI, Machine Learning,
Data Engineering, dan Computer Vision. Baris ini mengikuti referensi pemilik:
dua garis pembatas, teks Manrope dengan beberapa istilah Lora italic, serta
pemisah empat sudut kecil. Gunakan warna text-secondary. Jarak fokus ke pemisah
dan antaritem masing-masing 16 px; jangan merenggangkan item untuk memenuhi viewport.
Ini adalah ringkasan fokus; identitas dan deskripsi Hero tetap menjadi hierarki utama.

Di awal Technical Skills, tampilkan logo serta nama teknologi yang sudah tercatat
dalam konten. Logo SVG asli Simple Icons disimpan lokal dan ditampilkan monochrome
melalui CSS mask; foto serta screenshot tetap berwarna. Daftar delapan kategori
keahlian tetap terlihat lengkap setelah baris logo.

Kedua baris bergerak linear dari kanan ke kiri menggunakan transform CSS, dengan
salinan identik untuk sambungan loop. Jumlah salinan mengikuti lebar viewport,
dan jarak transform mengikuti lebar satu kelompok agar loop tetap tersambung.
Salinan visual disembunyikan dari screen reader.
Kecepatan dibuat tenang: 38 detik untuk fokus, 70 detik untuk teknologi.
Sediakan tombol ikon jeda/lanjutkan dengan label aksesibilitas ID/EN dan target 44 px,
tanpa tulisan terlihat atau tooltip teks.
Hover, fokus keyboard, dan posisi di luar viewport menjeda gerakan.
Tanpa JavaScript atau saat reduced motion aktif, tampilkan satu daftar statis
yang membungkus sesuai ruang; sembunyikan salinan dan kontrol animasi.
Asumsi: pengunjung ingin mengenali fokus dan stack dengan cepat. Kemampuan menjeda
dan daftar keahlian lengkap menjaga keterbacaan pada ponsel maupun desktop.

### Gaya tulisan

Gunakan kalimat aktif dan langsung tentang pekerjaan, kontribusi, serta hasil.
Hindari pembuka generik, pujian abstrak, kontras defensif, dan komentar proses audit
seperti "README mencantumkan" atau "menurut CV". Sebut kerja tim secara langsung.
Tulis status prototipe dan cakupan evaluasi sebagai fakta positif yang singkat.
Pertahankan angka, nama teknologi, serta seluruh butir pengalaman ketika menyunting.
Provenance dan rincian keterbatasan bukti disimpan di docs/PROJECT_AUDIT.md.

### Speakers dan Papers

Speakers merupakan section tersendiri, terpisah dari pengalaman organisasi.
Gunakan judul sesi sebagai H3, diikuti acara, tahun, ringkasan topik, dan tautan
sertifikat jika tersedia. Tahun angkatan pada nama acara berbeda dari tahun sesi.
Setiap aktivitas memakai ikon MicrophoneStage regular 20 px dalam lingkaran
berbingkai 44 px di kiri, dengan tahun di bawah ikon. Isi sesi memakai kolom
fleksibel pada desktop maupun mobile. Ikon dekoratif memakai aria-hidden dan
tidak menerima fokus keyboard.

Papers memakai daftar bibliografis: judul asli, penulis, tahun, jenis dokumen,
dan tautan membaca. Ringkasan penelitian dan konteks evaluasi langsung terlihat
di setiap entri. Urutkan makalah dari tahun terbaru ke terlama; entri tanpa tahun
diletakkan terakhir. Bedakan makalah riset
dengan artikel yang status publikasi atau DOI-nya sudah diverifikasi. Jangan
mengaitkan dokumen dengan proyek berbeda hanya karena tautan CV menyebutnya demikian.

Gunakan ikon dokumen dalam lingkaran berbingkai 44 px di sisi kiri setiap makalah,
diikuti tahun. Judul dan tautan membaca berada dalam satu baris pada desktop;
susun vertikal saat ruang sempit. Ikon panah mendampingi tautan membaca.
Ikon Contact mengikuti tujuan tautan: email, GitHub, dan LinkedIn.
Semua ikon memakai Phosphor regular 20 px dan warna teks yang sama dengan label.
Ikon yang didampingi label diberi aria-hidden dan tidak menerima fokus keyboard.

Dokumen PDF lokal dapat dibaca melalui tautan langsung. Pisahkan label makalah
riset, laporan kompetisi, dan presentasi sesuai isi sumber; jangan mengklaim status
publikasi dari template jurnal. Tahun yang belum jelas ditampilkan sebagai
"Tanpa tanggal". Versi eksperimen yang berbeda mempertahankan judul, penulis,
dan hasil masing-masing. Sertifikat pembicara boleh berupa PDF atau PNG asli.

### Writings

Tampilkan daftar judul, ringkasan singkat, tanggal, dan platform tujuan bila eksternal.
Prioritaskan keterbacaan judul. Thumbnail hanya dipakai jika relevan dengan tulisan.

### Awards dan Certifications

Nama penghargaan atau sertifikasi menjadi informasi utama, diikuti penyelenggara,
tahun, uraian lengkap dari CV, dan tautan bukti jika tersedia. Jika CV berbeda
dengan makalah atau dokumen proyek, utamakan sumber proyek yang sudah diperiksa.
Keduanya tetap menjadi section terpisah
sesuai susunan yang disepakati.

Setiap penghargaan memakai ikon Trophy dan setiap sertifikasi memakai ikon
Certificate dari Phosphor regular, 20 px dalam lingkaran berbingkai 44 px.
Ikon ditempatkan di kiri judul serta uraian, dengan tahun di bawah ikon.
Kolom penanda selebar 44 px mengikuti Speakers dan Papers. Semua tahun rata kiri,
termasuk metadata pengalaman dan caption Moments; jangan pindahkan tahun ke kanan
pada breakpoint desktop. Tanggal Writings juga berada sebelum isi di sisi kiri.
Ikon dekoratif tidak menerima fokus dan disembunyikan dari screen reader.

### Moments

Gunakan 6–8 foto pilihan sebagai target kurasi awal, disesuaikan dengan aset nyata.
Galeri memakai masonry CSS columns: dua kolom mulai 768 px dan satu kolom pada
mobile, dengan jarak 24 px. Setiap foto dan caption menjadi satu unit yang tidak
terbelah antarkolom. Urutan baca mengikuti DOM, dari atas ke bawah di kolom kiri,
lalu kolom kanan. Foto portrait dan landscape mempertahankan rasio aslinya dan
mengisi kolom tanpa celah yang disebabkan tinggi baris grid.
Caption memuat kegiatan, tahun, dan konteks singkat. Nama tampilan section: Moments.
Tahun berada di kiri caption dalam kolom 44 px; caption tanpa tahun memakai lebar penuh.
Tahun hanya ditampilkan jika terverifikasi. Pertahankan rasio asli gambar agar
wajah, sertifikat, dan konteks kegiatan terlihat utuh; jangan paksa crop 4:3.

Kurasi saat ini memuat delapan gambar: sesi dan apresiasi pembicara, presentasi
Objective Quest dan GEMASTIK, penghargaan Hology, kegiatan tim MIQ, dan Best Staff Award.
Kelompokkan foto dari acara yang sama dalam urutan baca. Untuk dokumentasi 2024,
urutan kurasi dimulai dari pasangan foto Hology, GEMASTIK, Objective Quest, lalu
pasangan foto pembicara. Foto MIQ dan Best Staff Award tanpa tahun berada di akhir.
Gunakan gambar responsif dengan alt text dan caption ID/EN. Warna foto tetap asli;
jumlah gambar mengikuti materi nyata. Buang elemen antarmuka ponsel dari screenshot
penghargaan tanpa mengubah isi dokumentasinya.

### Contact

Gunakan ajakan terhubung yang singkat, email, dan profil profesional yang tersedia.
Sediakan tiga entri: Email, GitHub, dan LinkedIn. Entri yang belum diisi tampil
dengan status "Belum tersedia" dan tidak menjadi tautan aktif. Data asli mengaktifkan
tautan profil serta `mailto:` untuk email; jangan gunakan alamat contoh.
Email berupa tautan yang membuka aplikasi email. Footer menutup halaman dengan
nama pemilik dan informasi hak cipta yang akurat.

### Preview sosial

Gambar saat tautan dibagikan memakai kanvas 1200 × 630 px dengan background,
text-primary, text-secondary, dan border dari tema terang. Susun rata kiri:
label Portofolio/Portfolio, nama lengkap, AI Engineer, lalu pengantar ID/EN.
Ruang tepi 64 px menjaga teks dari potongan preview. Gunakan tipografi sans serif
yang tersedia pada renderer gambar; font utama halaman tetap Lora dan Manrope.
Favicon berupa monogram MF hitam-putih dalam bidang persegi. Keduanya tidak
menambah elemen pada tata letak halaman.

## 7. Interaksi dan state

| State | Aturan |
| --- | --- |
| Default | Tindakan terlihat dan label menjelaskan tujuan |
| Hover | Perubahan warna atau garis bawah yang ringan |
| Focus | Outline aksen 2 px dengan offset; selalu terlihat |
| Active | Umpan balik tekan singkat pada kontrol |
| Menu terbuka | Status terbuka terbaca oleh teknologi bantu; dapat ditutup |
| Konten belum tersedia | Pada versi publik, jangan tampilkan entri placeholder atau tautan kosong |
| Halaman tidak ditemukan | Jika ada route detail, tampilkan penjelasan dan tautan kembali |

Versi awal mengutamakan konten lokal. Loading dan error jaringan baru dirancang
jika implementasi menambahkan fitur yang memerlukannya.

### Preview dengan konten sementara

Untuk tahap eksplorasi desain, pemilik meminta Lorem ipsum dan area gambar kosong.
Gunakan placeholder untuk nama, deskripsi, entri daftar, dan caption; pertahankan
label section serta navigasi yang jelas. Area gambar memakai permukaan netral
dengan proporsi foto atau screenshot, tanpa foto stok, gambar AI, atau gambar rusak.
Jangan mengisi angka pencapaian, kredensial, alamat email, atau URL fiktif.
Tautan konten yang belum tersedia tidak ditampilkan sebagai tindakan aktif.
Preview ini harus diganti dengan konten nyata sebelum publikasi.

## 8. Motion dan aksesibilitas

- Halaman ini tidak memakai animasi pembuka; interaksi disclosure menggunakan kontrol native.
- Motion menggunakan opacity atau transform dan tidak menggeser layout.
- Isi tetap terlihat tanpa JavaScript dan tanpa animasi.
- Hormati `prefers-reduced-motion`, termasuk pada smooth scrolling.
- Teks normal memenuhi kontras minimal 4.5:1; teks besar minimal 3:1.
- Target sentuh utama minimal 44 × 44 px.
- Gunakan satu H1, H2 untuk section, dan H3 untuk judul entri bila diperlukan.
- Foto informatif memiliki alt text; foto dalam galeri memakai caption yang terlihat.
- Tindakan tersedia lewat keyboard dan tidak bergantung pada hover.
- Hindari scroll horizontal pada halaman, termasuk saat zoom dan nama panjang.

## 9. Suara dan konten

Gunakan bahasa yang personal, spesifik, dan mudah dipahami. Ceritakan apa yang
dikerjakan, kontribusi pemilik, dan hal yang dipelajari. Bedakan kontribusi individu
dengan hasil tim. Sertifikasi, penghargaan, pengalaman, dan metrik harus akurat.

Dokumen perencanaan memakai bahasa Indonesia. Website mendukung bahasa Indonesia
dan Inggris melalui `/id` serta `/en`; URL `/` mengarah ke `/id`.
Terjemahkan navigasi, judul section, tindakan, status, label aksesibilitas, dan
deskripsi metadata. Nama pemilik, GitHub, LinkedIn, istilah AI Engineer, serta
nama teknologi tetap sama. Bio, uraian proyek, kontribusi, periode, dan ajakan kontak
disediakan dalam kedua bahasa. Pertahankan anchor section yang sama pada setiap bahasa.

## 10. Verifikasi desain saat implementasi

- Uji layout minimal pada lebar 320, 390, 768, 1024, dan 1440 px.
- Pastikan nama, judul panjang, tombol, dan caption tetap terbaca tanpa overflow.
- Verifikasi navigasi anchor, menu mobile, keyboard, dan fokus.
- Periksa kontras aktual, reduced motion, zoom 200%, dan struktur heading.
- Periksa crop, ketajaman gambar, caption, dan ruang yang disediakan sebelum gambar dimuat.
- Pastikan pengunjung dapat menemukan proyek, tulisan, dan kontak.
- Bandingkan tampilan akhir dengan arah clean, sederhana, editorial, dan technical
  pada tema terang serta gelap.
