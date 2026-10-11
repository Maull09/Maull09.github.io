# Deployment GitHub Pages

Portofolio memakai static export Next.js. `npm run build` menghasilkan `out/`;
GitHub Pages menyajikan file tersebut tanpa server Node.js. Repository publik
[Maull09/Maull09.github.io](https://github.com/Maull09/Maull09.github.io) sudah dibuat
dan folder lokal terhubung melalui HTTPS. Deployment belum diaktifkan.

## Repository dan aktivasi

1. Gunakan repository **`Maull09.github.io`** pada akun `Maull09`, dengan branch
   default `main`. Perubahan source masuk melalui branch dan pull request ke `main`.
2. Masukkan source proyek beserta `package-lock.json` dan
   `.github/workflows/pages.yml` ke repository. Jangan unggah `node_modules/`,
   `.next/`, `out/`, cache, atau `.env.local`; semuanya sudah diabaikan Git.
3. Buka **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Push ke `main` atau jalankan **Actions → Deploy portfolio to GitHub Pages →
   Run workflow**. Jika push awal terjadi sebelum Source diaktifkan, jalankan ulang
   workflow setelah pengaturan selesai.
5. Tunggu job `build` dan `deploy` selesai. Buka URL pada environment `github-pages`,
   lalu periksa `/id/`, `/en/`, gambar, unduhan CV, tema, dan navigasi bahasa.

GitHub Free memerlukan repository publik. GitHub Pro mendukung repository privat;
website Pages tetap publik. Source dan aset yang diunggah harus boleh dibagikan.

Target awal adalah user site `https://maull09.github.io`, bukan project site di
subpath seperti `/portofolio/`. Workflow menolak subpath agar tautan gambar,
dokumen, dan bahasa tidak rusak. Repository dengan nama lain juga bisa dipakai
jika custom domain yang sudah terverifikasi dipasang terlebih dahulu di Pages.

## Build, preview, dan pemeriksaan

```text
npm ci
npm run lint
npm run build
npm run typecheck
npm test
npm start
```

Di PowerShell yang memblokir `npm.ps1`, gunakan `npm.cmd`. `npm start` menyajikan
`out/` pada `http://127.0.0.1:3000`; hentikan dengan Ctrl+C. Port bisa diatur melalui
`PORT`. `npm run dev` tetap memakai Next.js untuk pengembangan.

Workflow memakai Node.js 22 dan lockfile npm. Sebelum upload, workflow menjalankan
lint, build, TypeScript, serta seluruh tes terhadap export statis. Hanya job deploy
memiliki izin `pages: write` dan `id-token: write`; tidak memerlukan PAT tambahan.

## URL dan indexing

Workflow mengambil `SITE_URL` dari output `actions/configure-pages`, sesuai URL
yang ditetapkan di **Settings → Pages**. Domain belum dimasukkan ke source code.

`SITE_INDEXABLE` memakai repository variable dengan nama yang sama dan default
`false`. Untuk tahap preview, jangan aktifkan variable tersebut. Setelah URL publik
dan konten siap, buka **Settings → Secrets and variables → Actions → Variables**,
isi `SITE_INDEXABLE=true`, lalu jalankan workflow ulang. Metadata, canonical,
hreflang, gambar sosial, robots, dan sitemap dibuat pada build.

Halaman canonical memakai `/id/` dan `/en/` agar sesuai directory index GitHub
Pages. PNG preview tersedia di `/id/share-image.png` dan `/en/share-image.png`.
`/` menyajikan `public/index.html` dengan meta refresh ke `/id/` dan tautan biasa
yang bekerja tanpa JavaScript. Halaman redirect selalu noindex.

GitHub Pages tidak menyediakan konfigurasi response header `X-Robots-Tag`.
Pada preview, noindex berlaku melalui metadata HTML; PDF dan gambar yang
dipublikasikan tetap dapat diakses dan tidak menerima header noindex khusus.

## Gambar dan aset

Foto serta screenshot memakai WebP lokal yang sudah dikompresi. `next/image`
mempertahankan alt text, dimensi, serta lazy loading, dengan `unoptimized: true`
agar tidak memanggil endpoint `/_next/image` yang membutuhkan server.
File asli dilayani langsung; pemilihan varian resolusi otomatis tidak aktif.
Gambar terbesar saat setup sekitar 230 KB. Logo SVG, font, CV, makalah, dan
sertifikat disertakan di hasil export. `public/.nojekyll` ikut disalin ke `out/`.

## Custom domain Name.com atau Namecheap

Kandidat terbaru adalah `maulanafirdaus.app` dari Name.com; `maulanafirdaus.me`
dari Namecheap juga didukung. Lakukan setelah registrasi selesai dan domain
muncul di akun registrar:

1. Verifikasi kepemilikan domain untuk akun GitHub melalui TXT record sesuai
   **Settings akun → Pages** sebelum menghubungkannya ke website.
2. Tambahkan domain di **Settings repository → Pages → Custom domain**.
3. Atur DNS registrar mengikuti panduan GitHub terbaru: record apex menuju Pages
   dan CNAME `www` menuju `maull09.github.io`. Hapus record default yang konflik.
4. Setelah pemeriksaan DNS dan sertifikat selesai, aktifkan **Enforce HTTPS**.
   HTTPS wajib untuk domain `.app`.
5. Jalankan workflow ulang agar canonical, hreflang, dan sitemap memakai domain
   baru yang diberikan pengaturan Pages.

Source belum memasang `CNAME` atau menganggap domain itu sudah dimiliki. Pada
deployment melalui GitHub Actions, custom domain dikelola di Settings → Pages.
Jika domain dilepas, hapus juga record DNS Pages terkait agar tidak menjadi
dangling DNS.

Referensi: [custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages),
[static export Next.js](https://nextjs.org/docs/app/guides/static-exports),
[custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site),
[verifikasi domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages),
dan [HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).
