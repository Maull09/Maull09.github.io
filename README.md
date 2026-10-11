# Mohamad Maulana Firdaus Ramadhan — AI Engineer

Portofolio personal dengan pengalaman, proyek, makalah, penghargaan, sertifikasi,
dan dokumentasi kegiatan. Tersedia dalam bahasa Indonesia dan Inggris, dengan
tema terang/gelap serta CV PDF lokal.

Website memakai Next.js App Router, React, TypeScript, dan Tailwind CSS. Production
build menghasilkan static export di `out/` untuk GitHub Pages.

## Pengembangan

Gunakan Node.js 22 dan npm:

```sh
npm ci
npm run dev
```

Buka `http://127.0.0.1:3000/id/` atau `/en/`. Konten berada di `src/content/`,
terjemahan di `src/i18n/messages/`, dan aset lokal di `public/`.

## Pemeriksaan dan preview hasil build

```sh
npm run lint
npm run build
npm run typecheck
npm test
npm start
```

Di PowerShell yang memblokir `npm.ps1`, gunakan `npm.cmd`. Tes dijalankan setelah
build dan menyajikan hasil export pada port 3101. `npm start` menyajikan `out/`
pada `http://127.0.0.1:3000`; hentikan server development terlebih dahulu bila
port tersebut sedang dipakai.

## Deployment

Repository: [Maull09.github.io](https://github.com/Maull09/Maull09.github.io).
Workflow `.github/workflows/pages.yml` memeriksa aplikasi sebelum deployment.
Aktifkan **Settings → Pages → Source → GitHub Actions** sebelum menjalankannya.
Indexing default nonaktif selama preview.

Panduan setup, konfigurasi SEO, dan custom domain ada di
[docs/GITHUB_PAGES.md](docs/GITHUB_PAGES.md). Aturan visual ada di
[DESIGN.md](DESIGN.md), susunan halaman dan arsitektur di
[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md), serta sumber konten di
[docs/PROJECT_AUDIT.md](docs/PROJECT_AUDIT.md).
