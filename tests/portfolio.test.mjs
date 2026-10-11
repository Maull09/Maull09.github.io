import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout } from "node:timers/promises";
import { after, before, test } from "node:test";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const origin = "http://127.0.0.1:3101";
const siteUrl = process.env.SITE_URL?.replace(/\/$/, "") || null;
const indexable = siteUrl !== null && process.env.SITE_INDEXABLE === "true";
let server;
const pages = {};
const messages = {
  id: JSON.parse(readFileSync("src/i18n/messages/id.json", "utf8")),
  en: JSON.parse(readFileSync("src/i18n/messages/en.json", "utf8")),
};
const documents = JSON.parse(readFileSync("tests/fixtures/documents.json", "utf8"));
const galleryImages = JSON.parse(readFileSync("tests/fixtures/gallery-images.json", "utf8"));
const cvContent = JSON.parse(readFileSync("tests/fixtures/cv-content.json", "utf8"));
const themeCode = ts.transpileModule(readFileSync("src/theme/theme.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
let serverOutput = "";

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

before(async () => {
  server = spawn(process.execPath, [
    "scripts/serve-export.mjs",
  ], {
    env: { ...process.env, PORT: "3101" },
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true,
  });
  server.stdout.on("data", (chunk) => { serverOutput += chunk; });
  server.stderr.on("data", (chunk) => { serverOutput += chunk; });

  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    assert.equal(server.exitCode, null, serverOutput);
    try {
      const response = await fetch(`${origin}/id/`, { signal: AbortSignal.timeout(1000) });
      if (response.ok) {
        pages.id = await response.text();
        const english = await fetch(`${origin}/en/`, { signal: AbortSignal.timeout(5000) });
        assert.equal(english.status, 200);
        pages.en = await english.text();
        return;
      }
    } catch {
      // Wait for the static preview server to accept connections.
    }
    await setTimeout(200);
  }
  assert.fail(`Static preview server did not become ready: ${serverOutput}`);
});

after(() => server?.kill());

for (const locale of ["id", "en"]) {
  test(`${locale}: localized sections, controls, and metadata are available without JavaScript`, () => {
    const html = pages[locale];
    const dictionary = messages[locale];
    const sectionIds = [...html.matchAll(/<section\b[^>]*\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.deepEqual(sectionIds, [
      "home", "about", "skills", "projects", "experience", "organizational",
      "speakers", "papers",
      "awards", "certifications", "moments", "contact",
    ]);
    assert.match(html, new RegExp(`<html[^>]*lang="${locale}"`));
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
    for (const [section, title] of Object.entries(dictionary.sections)) {
      if (section === "writings") continue;
      const heading = html.match(new RegExp(`<h2 id="${section}-heading" class="section-heading">([\\s\\S]*?)<\\/h2>`))[1];
      const icon = heading.match(/<svg\b[^>]*>/)[0];
      assert.match(icon, /aria-hidden="true"/);
      assert.match(icon, /focusable="false"/);
      assert.equal(heading.replace(/<svg\b[\s\S]*?<\/svg>/g, "").replace(/<[^>]*>/g, ""), escapeHtml(title));
    }
    assert(html.includes(dictionary.controls.viewProjects));
    assert(html.includes(dictionary.controls.skipNavigation));
    assert(html.includes(dictionary.controls.backToTop));
    assert(html.includes(`name="description" content="${dictionary.metadata.description}"`));
    assert.match(html, /Mohamad Maulana Firdaus Ramadhan/);
    assert.match(html, /AI Engineer/);
    assert.match(html, /Neuram/);
    assert.match(html, /AI Center ITB/);
    assert.doesNotMatch(html, /Legali|based in Bandung|berbasis di Bandung/);
    assert.doesNotMatch(html, /lorem ipsum|20XX|consectetur adipiscing/i);
    assert.doesNotMatch(html, /href="#writings"/);
    for (const title of [
      "EyeNimal", "BattleTalk", "Agrotech", "FlightOps Sentinel", "Finance Tracker",
      "ChatDoctor", "RoadEye", "Marketplace Recommender System", "Trash Reporting System",
      "GRPO Indonesian Legal Reasoning",
      "Fraud Call Detector", "FraudSense", "DoNation", "EngLearn",
    ]) {
      assert(html.includes(`<h3>${title}</h3>`));
    }
    assert(html.includes(locale === "id" ? "Sekarang" : "Present"));
    assert(html.includes(locale === "id" ? "Saya membangun Voice AI" : "I build Voice AI"));
  });

  test(`${locale}: navigation anchors and language links point to valid destinations`, () => {
    const html = pages[locale];
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, "Duplicate IDs break anchor navigation");
    const links = [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((match) => match[1]);
    assert(links.includes("/id/"));
    assert(links.includes("/en/"));
    for (const destination of links) {
      if (destination === "/id/" || destination === "/en/") continue;
      if (destination.startsWith("#")) {
        assert(ids.includes(destination.slice(1)), `Missing anchor: ${destination}`);
      } else if (destination === "/documents/cv.pdf") {
        continue;
      } else if (destination.startsWith("/documents/")) {
        assert(documents.some((document) => document.url === destination), `Unknown document: ${destination}`);
      } else if (destination.startsWith("mailto:")) {
        assert.equal(destination, "mailto:maulanafirdaus63@gmail.com");
      } else {
        const url = new URL(destination);
        assert.equal(url.protocol, "https:");
        assert(["github.com", "www.linkedin.com", "drive.google.com", "docs.google.com", "www.datacamp.com", "www.freecodecamp.org"].includes(url.hostname));
      }
    }
    const activeLanguages = [...html.matchAll(/<a\b[^>]*aria-current="page"[^>]*>/g)];
    assert.equal(activeLanguages.length, 2, "Desktop and mobile must show the active language");
    for (const active of activeLanguages) assert(active[0].includes(`href="/${locale}/"`));
  });

  test(`${locale}: original CV and professional contacts are active`, () => {
    const html = pages[locale];
    const dictionary = messages[locale];
    assert.match(html, new RegExp(`<a[^>]*href="/documents/cv.pdf"[^>]*download[^>]*>${dictionary.controls.downloadCv}</a>`));
    assert(html.includes('href="https://github.com/Maull09"'));
    assert(html.includes('href="https://www.linkedin.com/in/mohamad-maulana-firdaus-ramadhan"'));
    assert(html.includes('href="mailto:maulanafirdaus63@gmail.com"'));
    assert.doesNotMatch(html, /contact-link-unavailable/);
  });

  test(`${locale}: native mobile controls and draft accessibility remain intact`, () => {
    const html = pages[locale];
    assert.match(html, /<details\b/);
    assert.match(html, /<summary\b[^>]*>Menu<\/summary>/);
    assert(html.includes(`aria-label="${messages[locale].controls.mobileNavigation}"`));
    const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
    assert.equal(images.length, 17);
    for (const image of images) {
      assert.match(image, /alt="[^"]+"/);
      assert.match(image, /width="\d+"/);
      assert.match(image, /height="\d+"/);
      assert.doesNotMatch(image, /\/_next\/image/);
    }
    assert(html.includes(`name="robots" content="${indexable ? "index, follow" : "noindex, nofollow"}"`));
  });

  test(`${locale}: search and social metadata reflect the configured domain and language`, () => {
    const html = pages[locale];
    const head = html.slice(0, html.indexOf("</head>"));
    const description = messages[locale].metadata.description;
    assert.match(head, /<title>Mohamad Maulana Firdaus Ramadhan \| AI Engineer<\/title>/);
    assert(head.includes(`property="og:description" content="${description}"`));
    assert(head.includes(`name="twitter:description" content="${description}"`));
    assert(head.includes(`property="og:locale" content="${locale === "id" ? "id_ID" : "en_US"}"`));
    assert.match(head, /rel="icon"[^>]*href="\/favicon.png/);
    if (siteUrl) {
      assert(head.includes(`rel="canonical" href="${siteUrl}/${locale}/"`));
      for (const [language, path] of [["id", "id"], ["en", "en"], ["x-default", "id"]]) {
        assert(head.includes(`hrefLang="${language}" href="${siteUrl}/${path}/"`));
      }
      assert(head.includes(`property="og:image" content="${siteUrl}/${locale}/share-image.png"`));
      assert.match(head, /name="twitter:card" content="summary_large_image"/);
    } else {
      assert.doesNotMatch(head, /rel="canonical"|hrefLang=|property="og:image"/);
    }
    const schema = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    assert(schema);
    const data = JSON.parse(schema[1]);
    assert.equal(data["@type"], "ProfilePage");
    assert.equal(data.mainEntity.name, "Mohamad Maulana Firdaus Ramadhan");
    assert.deepEqual(data.mainEntity.alternateName, ["Mohamad Maulana Firdaus R.", "maull04", "Maull09"]);
    assert.equal(data.mainEntity.jobTitle, "AI Engineer");
    assert.equal(data.inLanguage, locale);
    assert.equal(data.url, siteUrl ? `${siteUrl}/${locale}/` : undefined);
  });

  test(`${locale}: speaking sessions and research have separate, sourced sections`, () => {
    const html = pages[locale];
    const speaking = html.match(/<section id="speakers"[\s\S]*?<\/section>/)[0];
    const organizational = html.match(/<section id="organizational"[\s\S]*?<\/section>/)[0];
    const research = html.match(/<section id="papers"[\s\S]*?<\/section>/)[0];
    assert.equal([...speaking.matchAll(/<h3>/g)].length, 3);
    const activities = [...speaking.matchAll(/<article\b[\s\S]*?<\/article>/g)].map((match) => match[0]);
    assert.equal(activities.length, 3);
    for (const activity of activities) {
      assert.match(activity, /class="speaker-icon"/);
      const icons = [...activity.matchAll(/<svg\b[^>]*>/g)].map((match) => match[0]);
      assert.equal(icons.length, 1);
      assert.match(icons[0], /aria-hidden="true"/);
      assert.match(icons[0], /focusable="false"/);
    }
    assert.equal([...speaking.matchAll(/href="\/documents\/certificates\//g)].length, 3);
    assert.match(speaking, /Symphony of Data: The Key to Brilliant Decision Making/);
    assert.match(speaking, /Data Competition Strategies/);
    assert.match(speaking, /Introduction to Data Science/);
    assert.doesNotMatch(organizational, /Guest Speaker|Symphony of Data|Introduction to Data Science/);
    assert.match(research, /Monitoring Otomatis Kondisi Lalu Lintas/);
    assert.match(research, /Ayu Purwarianti/);
    assert(research.includes(messages[locale].papers.read));
    assert(research.includes(locale === "id" ? "Makalah riset" : "Research manuscript"));
    assert.equal([...research.matchAll(/<h3>/g)].length, 8);
    assert.match(research, /Animal Species Classification Using Deep Learning/);
    assert.match(research, /Deteksi Penipuan Suara Berbahasa Indonesia/);
    assert.match(research, /Penerapan Pembelajaran Mesin untuk Prediksi Keputusan Investasi/);
    assert(!research.includes(messages[locale].papers.undated));
    assert.match(research, /href="\/documents\/papers\/traffic-accident-yolov8.pdf"/);
    const trash = html.match(/<article[^>]*id="project-trash-reporting"[\s\S]*?<\/article>/)[0];
    assert.match(trash, /href="\/documents\/papers\/trash-reporting-yolov8.pdf"/);
    assert.doesNotMatch(trash, /traffic-accident-yolov8.pdf/);
  });

  test(`${locale}: papers use the owner's years in descending order and omit removed entries`, () => {
    const research = pages[locale].match(/<section id="papers"[\s\S]*?<\/section>/)[0];
    const articles = [...research.matchAll(/<article\b[\s\S]*?<\/article>/g)].map((match) => match[0]);
    const entries = articles.map((article) => ({
      document: article.match(/href="\/documents\/papers\/([^"]+)\.pdf"/)[1],
      year: article.match(/class="entry-period">(\d{4})<\/p>/)[1],
    }));
    assert.deepEqual(entries, [
      { document: "indonesian-voice-fraud", year: "2025" },
      { document: "grpo-legal-reasoning", year: "2025" },
      { document: "legal-verdict-generation", year: "2025" },
      { document: "animal-species-classification", year: "2025" },
      { document: "umkm-investment-prediction", year: "2025" },
      { document: "trash-reporting-yolov8", year: "2024" },
      { document: "bigru-sentiment-analysis", year: "2023" },
      { document: "traffic-accident-yolov8", year: "2023" },
    ]);
    assert.doesNotMatch(research, /Indonesian Legal Verdict Generation from Court Documents Using Instruction-Tuned Language Models|Hustler/);
    assert.doesNotMatch(pages[locale], /instruction-tuned-verdicts\.pdf|objective-quest-network-traffic\.pdf/);
  });

  test(`${locale}: every project explains contribution and context with available evidence`, () => {
    const projectSection = pages[locale].match(/<section id="projects"[\s\S]*?<\/section>/)[0];
    const articles = [...projectSection.matchAll(/<article\b[\s\S]*?<\/article>/g)].map((match) => match[0]);
    assert.equal(articles.length, 14);
    for (const article of articles) {
      assert(article.includes(`<dt>${escapeHtml(messages[locale].projects.contribution)}</dt>`));
      assert(article.includes(`<dt>${escapeHtml(messages[locale].projects.context)}</dt>`));
      assert.match(article, /href="(?:https:\/\/|\/documents\/)/);
      assert.doesNotMatch(article, /href=""|image-placeholder/);
    }
    assert.match(projectSection, /docs.google.com\/presentation/);
  });

  test(`${locale}: documentation photos and local certificate links have real content`, () => {
    const html = pages[locale];
    const gallery = html.match(/<section id="moments"[\s\S]*?<\/section>/)[0];
    const figures = [...gallery.matchAll(/<figure\b[\s\S]*?<\/figure>/g)].map((match) => match[0]);
    assert.equal(figures.length, 8);
    const momentOrder = [
      "hology-winning-team", "hology-award", "gemastik-presentation",
      "objective-quest-presentation", "data-competition-speaking",
      "data-competition-appreciation", "miq-data-mining", "best-staff-recognition",
    ];
    for (const [index, id] of momentOrder.entries()) {
      assert(figures[index].includes(`/images/moments/${id}.webp`), `Unexpected Moments order at ${id}`);
    }
    assert.equal([...gallery.matchAll(/<figcaption>/g)].length, 8);
    for (const image of galleryImages) {
      const figure = figures.find((entry) => entry.includes(image.url));
      assert(figure, `Missing gallery image: ${image.url}`);
      assert(figure.includes(`width="${image.width}" height="${image.height}"`));
      assert.match(figure, /alt="[^"]+"/);
      assert.match(figure, /loading="lazy"/);
      assert.match(figure, /<span class="moment-caption">[^<]+<\/span>/);
      const caption = figure.match(/<figcaption>[\s\S]*?<\/figcaption>/)[0];
      if (image.url.includes("miq-data-mining") || image.url.includes("best-staff-recognition")) {
        assert.match(caption, /<figcaption><span class="moment-year">2023<\/span><span class="moment-caption">/);
      } else {
        assert.match(caption, /<figcaption><span class="moment-year">2024<\/span><span class="moment-caption">/);
      }
    }
    assert.match(gallery, /loading="lazy"/);
    assert.match(gallery, /Objective Quest/);
    assert.match(gallery, /Hology 7.0/);
    assert.match(gallery, /GEMASTIK XVII/);
    const miq = figures.find((figure) => figure.includes("miq-data-mining.webp"));
    assert(miq.includes(locale === "id" ? "GEMASTIK XVI · Tim MIQ, ITB" : "GEMASTIK XVI · MIQ team, ITB"));
    assert.doesNotMatch(miq, /Di meja kompetisi|At the competition desk/);
    assert.match(gallery, /Best Staff Award/);
    assert.match(gallery, locale === "id" ? /Apresiasi pembicara/ : /Speaker appreciation/);
    assert.doesNotMatch(gallery, /image-placeholder/);
    assert.match(html, /href="\/documents\/certificates\/hology-2024.pdf"/);
    assert.match(html, /href="\/documents\/certificates\/ristek-datathon-team-2025.png"/);
    assert.match(html, /href="\/documents\/certificates\/speaker-sparta-2024.png"/);
    assert.match(html, /Internnet Wave 6/);
  });

  test(`${locale}: project and paper details are visible without JavaScript or expansion`, () => {
    const html = pages[locale];
    for (const id of ["projects", "papers"]) {
      const section = html.match(new RegExp(`<section id="${id}"[\\s\\S]*?<\\/section>`))[0];
      assert.doesNotMatch(section, /<details\b|\shidden(?:[=\s>])|content-disclosure/);
      const articles = [...section.matchAll(/<article\b[\s\S]*?<\/article>/g)].map((match) => match[0]);
      assert.equal(articles.length, id === "projects" ? 14 : 8);
      for (const article of articles) {
        assert.match(article, /<dd>[^<]+<\/dd>/);
        assert.match(article, /href="(?:https:\/\/|\/documents\/)/);
      }
    }
    const projectIds = [...html.matchAll(/<article\b[^>]*id="project-([^"]+)"/g)].map((match) => match[1]);
    assert.deepEqual(projectIds.slice(0, 2), ["finance-tracker", "flightops-sentinel"]);
  });

  test(`${locale}: the complete name, skills, and CV contribution lists are rendered`, () => {
    const html = pages[locale];
    assert.match(html, /<h1 id="hero-heading">Mohamad Maulana Firdaus Ramadhan<\/h1>/);
    assert.match(html, /href="#skills"/);
    const skills = html.match(/<section id="skills"[\s\S]*?<\/section>/)[0];
    assert.equal([...skills.matchAll(/<dt>/g)].length, 8);
    for (const technology of ["Shell Scripting", "Transformer Architecture", "LoRA", "Quantization (GPTQ)", "Kubernetes (K8s)", "Hugging Face", "NumPy", "OpenCV", "FAISS", "Chroma", "Redis (Queues)", "FastAPI", "REST APIs", "Webhooks", "SIP", "Twilio", "ElevenLabs", "GEPA", "BM25", "Langfuse", "MLflow", "Airflow", "QLoRA", "GRPO"]) {
      assert(skills.includes(technology), `Missing CV skill: ${technology}`);
    }
    for (const [id, expected] of [["experience", 28], ["organizational", 8], ["speakers", 3], ["awards", 9], ["certifications", 6]]) {
      const section = html.match(new RegExp(`<section id="${id}"[\\s\\S]*?<\\/section>`))[0];
      const bullets = [...section.matchAll(/<ul class="entry-bullets">([\s\S]*?)<\/ul>/g)]
        .flatMap((list) => [...list[1].matchAll(/<li>/g)]);
      assert.equal(bullets.length, expected, `${id}: incomplete CV contribution list`);
      assert.doesNotMatch(section, /<details\b/);
    }
    const projects = html.match(/<section id="projects"[\s\S]*?<\/section>/)[0];
    for (const article of projects.matchAll(/<article\b[\s\S]*?<\/article>/g)) {
      if (article[0].includes("<img")) assert(article[0].indexOf("<h3>") < article[0].indexOf("<img"));
    }
    assert.doesNotMatch(html, /href="tel:|\+62-877-2899-7015/);
  });

  test(`${locale}: committee roles and the fraud research, prototype, and competition stay connected`, () => {
    const html = pages[locale];
    const organization = html.match(/<section id="organizational"[\s\S]*?<\/section>/)[0];
    const entries = [...organization.matchAll(/<li class="experience-entry">([\s\S]*?)<\/div><\/li>/g)]
      .map((match) => match[1]);
    assert.equal(entries.length, 6);
    assert.match(entries[0], /Head of Datavidia/);
    assert.match(entries[0], /ARKAVIDIA 9.0/);
    assert.match(entries[0], /class="entry-period">2025<\/p>/);
    assert.match(entries[0], /600/);
    assert.doesNotMatch(entries[0], /Present|Sekarang/);
    assert.match(organization, /Tour Division Staff/);
    assert.match(organization, /Aku Masuk ITB \(AMI\) 2023/);
    assert.match(organization, /Parade Wisuda Oktober ITB 2022/);

    const projectSection = html.match(/<section id="projects"[\s\S]*?<\/section>/)[0];
    assert.equal([...projectSection.matchAll(/<article\b/g)].length, 14);
    assert.equal([...projectSection.matchAll(/id="project-chatdoctor"/g)].length, 1);
    const research = html.match(/<section id="papers"[\s\S]*?<\/section>/)[0];
    for (const [id, repository] of [["fraud-detection", "Fraud-Detection"], ["fraudsense", "FraudSense"]]) {
      const project = html.match(new RegExp(`<article[^>]*id="project-${id}"[\\s\\S]*?<\\/article>`))[0];
      assert(project.includes(`href="https://github.com/ashhforrd/${repository}"`));
      assert(project.includes('href="/documents/papers/indonesian-voice-fraud.pdf"'));
      assert(research.includes(`href="https://github.com/ashhforrd/${repository}"`));
    }
    const fraudProject = html.match(/<article[^>]*id="project-fraud-detection"[\s\S]*?<\/article>/)[0];
    assert.match(fraudProject, /104/);
    assert(fraudProject.includes(locale === "id" ? "sampel uji sintetis" : "synthetic test samples"));
    const fraudSense = html.match(/<article[^>]*id="project-fraudsense"[\s\S]*?<\/article>/)[0];
    assert(fraudSense.includes('href="/documents/certificates/ristek-datathon-team-2025.png"'));
    const awardSection = html.match(/<section id="awards"[\s\S]*?<\/section>/)[0];
    assert.match(awardSection, /eyay enjinir/);
    assert.match(awardSection, /FraudSense/);
    assert.match(awardSection, /ChatDoctor/);
    const englearn = html.match(/<article[^>]*id="project-englearn"[\s\S]*?<\/article>/)[0];
    for (const repository of ["englearn-web", "englearn-mobile", "englearn-api"]) {
      assert(englearn.includes(`href="https://github.com/Maull09/${repository}"`));
    }
  });

  test(`${locale}: current AI Center research and all five selected experience entries stay distinct`, () => {
    const section = pages[locale].match(/<section id="experience"[\s\S]*?<\/section>/)[0];
    const entries = [...section.matchAll(/<li class="experience-entry">([\s\S]*?)<\/div><\/li>/g)]
      .map((match) => match[1]);
    assert.equal(entries.length, 5);
    assert.deepEqual(entries.map((entry) => [...entry.matchAll(/<ul class="entry-bullets">([\s\S]*?)<\/ul>/g)]
      .flatMap((list) => [...list[1].matchAll(/<li>/g)]).length), [6, 8, 5, 5, 4]);
    assert(entries[0].includes(locale === "id" ? "Apr 2026 — Sekarang" : "Apr 2026 — Present"));
    assert.match(entries[0], /<h3>AI Research Assistant<\/h3>/);
    assert.match(entries[0], /AI Center ITB/);
    for (const technology of ["GEPA", "BM25", "Langfuse", "Ollama"]) assert(entries[0].includes(technology));
    assert(entries[1].includes(locale === "id" ? "Feb 2026 — Sekarang" : "Feb 2026 — Present"));
    assert.match(entries[1], /Neuram/);
    for (const metric of ["60%", "80%", "96%", "88%"]) assert(entries[1].includes(metric));
    assert.match(entries[2], /RAISA Project – SKK Migas/);
    for (const detail of ["103", "Evaluator Agent", "Excel"]) assert(entries[2].includes(detail));
    assert.match(entries[3], /SPUN/);
    assert.match(entries[3], /85%/);
    assert.match(entries[4], /partial.discharge/i);
    assert.match(entries[4], /100%|LSTM-Attention/);
  });

  test(`${locale}: corrected community tenure and document and contact links are accessible`, () => {
    const html = pages[locale];
    const organization = html.match(/<section id="organizational"[\s\S]*?<\/section>/)[0];
    const firstEntry = [...organization.matchAll(/<li class="experience-entry">([\s\S]*?)<\/div><\/li>/g)]
      .map((match) => match[1]).find((entry) => entry.includes("<h3>Head of Community</h3>"));
    assert(firstEntry.includes(locale === "id" ? "Jun 2024 — Mei 2025" : "Jun 2024 — May 2025"));
    assert.match(firstEntry, /Head of Community/);
    assert.doesNotMatch(firstEntry, /Sekarang|Present/);
    const about = html.match(/<section id="about"[\s\S]*?<\/section>/)[0];
    assert(about.includes(locale === "id" ? "pernah memimpin Data Community" : "I led Data Community"));
    for (const id of ["papers", "contact"]) {
      const section = html.match(new RegExp('<section id="' + id + '"[\\s\\S]*?<\\/section>'))[0];
      const content = section.replace(/<h2\b[\s\S]*?<\/h2>/, "");
      const icons = [...content.matchAll(/<svg\b[^>]*>/g)];
      assert.equal(icons.length, id === "papers" ? 18 : 3);
      for (const [svg] of icons) {
        assert.match(svg, /aria-hidden="true"/);
        assert.match(svg, /focusable="false"/);
        assert.doesNotMatch(svg, /tabindex=/i);
      }
      for (const link of section.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)) {
        assert(link[1].replace(/<svg\b[\s\S]*?<\/svg>/g, "").replace(/<[^>]*>/g, "").trim(),
          "Links retain visible text alongside their icons");
      }
    }
  });

  test(`${locale}: marquees preserve accessible content without pause buttons`, () => {
    const html = pages[locale];
    const heroEnd = html.indexOf("</section>", html.indexOf('<section id="home"'));
    const focusStart = html.indexOf('id="focus-marquee"');
    assert(focusStart > heroEnd && focusStart < html.indexOf('<section id="about"'));
    const skills = html.match(/<section id="skills"[\s\S]*?<\/section>/)[0];
    assert(skills.indexOf('id="tech-marquee"') < skills.indexOf('<dl class="skills-list">'));
    for (const [id, count, label] of [
      ["focus-marquee", 5, messages[locale].motion.focus],
      ["tech-marquee", 12, messages[locale].motion.technologies],
    ]) {
      const region = html.match(new RegExp('<div[^>]*id="' + id + '"[\\s\\S]*?</ul></div></div></div>'))[0];
      assert(region.includes('role="group" aria-label="' + label + '"'));
      const groups = [...region.matchAll(/<ul class="marquee-group(?: marquee-copy)?"[^>]*>([\s\S]*?)<\/ul>/g)];
      assert.equal(groups.length, 2);
      assert.equal([...groups[0][1].matchAll(/<li\b/g)].length, count);
      assert.equal(groups[0][1], groups[1][1], "Repeated groups preserve loop content and spacing");
      assert.match(groups[1][0], /aria-hidden="true"/);
      assert.doesNotMatch(groups[0][0].slice(0, groups[0][0].indexOf(">")), /aria-hidden/);
      assert.match(region, /tabindex="0"/);
      assert.doesNotMatch(region, /<button\b|marquee-toggle|aria-pressed|data-paused/);
    }
    const head = html.slice(0, html.indexOf("<body"));
    assert.match(head, /<noscript><style>[^<]*\.marquee/);
    assert.match(head, /marquee-copy[^<]*display: none/);
  });

  test(`${locale}: awards and certifications keep evidence links beside decorative icons`, () => {
    for (const [id, count] of [["awards", 9], ["certifications", 6]]) {
      const section = pages[locale].match(new RegExp('<section id="' + id + '"[\\s\\S]*?</section>'))[0];
      const content = section.replace(/<h2\b[\s\S]*?<\/h2>/, "");
      const icons = [...content.matchAll(/<svg\b[^>]*>/g)];
      assert.equal(icons.length, count);
      for (const [icon] of icons) {
        assert.match(icon, /aria-hidden="true"/);
        assert.match(icon, /focusable="false"/);
      }
      assert.equal([...section.matchAll(/<h3><a href="(?:\/documents\/|https:\/\/)/g)].length, count);
      const entries = section.split('<li class="credential-entry">').slice(1);
      assert.equal(entries.length, count);
      assert.equal([...section.matchAll(/<p class="entry-period">/g)].length, id === "awards" ? 9 : 1);
      for (const entry of entries) {
        const marker = entry.match(/<div class="credential-marker">[\s\S]*?<\/div>/)[0];
        const period = entry.match(/<p class="entry-period">20\d{2}<\/p>/);
        if (period) assert(marker.includes(period[0]), "Known years belong in the left marker beside their credential");
        assert(entry.indexOf(marker) < entry.indexOf('<div class="credential-content">'));
      }
    }
  });

  test(`${locale}: public copy describes work directly and preserves evaluation scope`, () => {
    for (const id of ["home", "about", "projects", "experience", "organizational", "papers", "awards", "certifications", "speakers"]) {
      const section = pages[locale].match(new RegExp(`<section id="${id}"[\\s\\S]*?<\\/section>`))[0];
      const visibleText = section.replace(/<[^>]*>/g, " ");
      assert.doesNotMatch(visibleText, /README|menurut CV|dilaporkan dalam CV|reported in the CV|not asserted|not specified|has not yet|bukan deployment|the document records|\b(?:leverage|leveraging|facilitate|robust|streamlined|comprehensive|harness)\b/i);
    }
    const roadeye = pages[locale].match(/<article[^>]*id="project-roadeye"[\s\S]*?<\/article>/)[0];
    assert.match(roadeye, /M2VR/);
    assert.match(roadeye, /GDSC Hackfest Indonesia/);
    assert.doesNotMatch(roadeye, /Hustler/);
    const research = pages[locale].match(/<section id="papers"[\s\S]*?<\/section>/)[0];
    assert.match(research, /104/);
    assert.match(research, /Animals10/);
    assert.match(research, /Shark Tank US/);
    assert.match(research, /80:20/);
    assert(research.includes(locale === "id" ? "sampel uji sintetis" : "synthetic test samples"));
  });

  test(`${locale}: awards and speaking sessions follow the owner's corrected chronology`, () => {
    const awards = pages[locale].match(/<section id="awards"[\s\S]*?<\/section>/)[0];
    const years = [...awards.matchAll(/class="entry-period">(\d{4})<\/p>/g)].map((match) => match[1]);
    assert.deepEqual(years, ["2025", "2025", "2024", "2024", "2024", "2024", "2024", "2024", "2023"]);
    assert(awards.indexOf("ristek-datathon-team-2025.png") < awards.indexOf("findit-hackathon-2025.pdf"));
    const speakers = pages[locale].match(/<section id="speakers"[\s\S]*?<\/section>/)[0];
    const dates = [...speakers.matchAll(/<time dateTime="([^"]+)">([^<]+)<\/time>/g)];
    assert.deepEqual(dates.map((match) => match[1]), ["2024-08-03", "2024", "2024-07-20"]);
    assert.match(dates[0][2], locale === "id" ? /3 Agu 2024/ : /Aug 3, 2024/);
    assert.match(dates[2][2], locale === "id" ? /20 Jul 2024/ : /Jul 20, 2024/);
    assert(speakers.indexOf("Introduction to Data Science") < speakers.indexOf("Symphony of Data"));
    assert(speakers.indexOf("Data Competition Strategies") < speakers.indexOf("Symphony of Data"));
    assert(awards.indexOf("tsdn-2024.pdf") < awards.indexOf("hology-2024.pdf"));
    assert(awards.indexOf("hology-2024.pdf") < awards.indexOf("gemastik-xvii-2024.pdf"));
    const organization = pages[locale].match(/<section id="organizational"[\s\S]*?<\/section>/)[0];
    assert.deepEqual([...organization.matchAll(/<h3>([^<]+)<\/h3>/g)].map((match) => match[1]), [
      "Head of Datavidia", "Head of Community", "Curriculum Developer", "Tour Division Staff", "Database Division Staff", "IT Staff",
    ]);
    const certifications = pages[locale].match(/<section id="certifications"[\s\S]*?<\/section>/)[0];
    const certificates = certifications.split('<li class="credential-entry">').slice(1);
    assert.match(certificates[0], /class="entry-period">2023<\/p>/);
    for (const entry of certificates.slice(1)) assert.doesNotMatch(entry, /class="entry-period"/);
  });

  test(`${locale}: projects form one list ordered by their latest repository commits`, () => {
    const section = pages[locale].match(/<section id="projects"[\s\S]*?<\/section>/)[0];
    assert.doesNotMatch(section, /projects-featured|projects-other|project-group|project-featured/);
    const articles = [...section.matchAll(/<article\b[\s\S]*?<\/article>/g)].map((match) => match[0]);
    const ids = articles.map((article) => article.match(/id="project-([^"]+)"/)[1]);
    assert.deepEqual(ids, [
      "finance-tracker", "flightops-sentinel", "fraudsense", "grpo-legal-reasoning",
      "fraud-detection", "eyenimal", "agrotech", "battletalk", "englearn", "do-nation",
      "chatdoctor", "roadeye", "marketplace-recommender", "trash-reporting",
    ]);
    assert.equal(new Set(ids).size, 14);
    const timestamps = articles.slice(0, 12).map((article) => article.match(/<time dateTime="([^"]+)"/)[1]);
    assert.equal(timestamps.length, 12);
    assert.deepEqual(timestamps, [...timestamps].sort().reverse());
    assert.equal(timestamps[0], "2026-10-11T13:24:25Z");
    assert.equal(timestamps[8], "2025-01-17T15:06:32Z", "EngLearn uses the newest commit across its three repositories");
    for (const article of articles.slice(0, 12)) assert(article.includes(messages[locale].projects.updated));
    for (const article of articles.slice(12)) {
      assert.match(article, /class="project-year" dateTime="2024">2024<\/time>/);
      assert(!article.includes(messages[locale].projects.updated), "Document years are not labeled as repository updates");
    }
  });

  test(`${locale}: the localized theme control and pre-paint initialization are rendered`, () => {
    const html = pages[locale];
    assert.match(html, new RegExp(`<button[^>]*class="theme-toggle"[^>]*aria-label="${messages[locale].theme.switchToDark}"`));
    const head = html.slice(0, html.indexOf("<body"));
    assert.match(head, /localStorage\.getItem\("portfolio-theme"\)/);
    assert.match(head, /prefers-color-scheme: dark/);
    assert.equal([...head.matchAll(/<script id="portfolio-theme-init"/g)].length, 1);
    assert.match(head, /<noscript><style>\.theme-toggle \{ display: none; \}<\/style><\/noscript>/);
    const button = html.match(/<button[^>]*class="theme-toggle"[\s\S]*?<\/button>/)[0];
    assert(button.includes(`title="${messages[locale].theme.switchToDark}"`));
    const icons = [...button.matchAll(/<svg\b[^>]*>/g)].map((match) => match[0]);
    assert.equal(icons.length, 2);
    for (const icon of icons) {
      assert.match(icon, /aria-hidden="true"/);
      assert.match(icon, /focusable="false"/);
    }
    assert.equal(button.replace(/<[^>]+>/g, ""), "", "The theme button uses icons with an accessible action label");
  });
}

test("edited English copy preserves each CV contribution and its concrete facts", () => {
  function normalize(value) {
    return value.replaceAll("&amp;", "&").replaceAll("&quot;", '"')
      .replace(/&#(?:x27|39);/g, "'").replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
      .replace(/\s+/g, " ").replace(/\s+:/g, ":").trim();
  }
  for (const sectionId of ["experience", "organizational"]) {
    const section = pages.en.match(new RegExp(`<section id="${sectionId}"[\\s\\S]*?<\\/section>`))[0];
    const entryContents = [...section.matchAll(/<li class="experience-entry">([\s\S]*?)<\/div><\/li>/g)]
      .map((match) => match[1]);
    const sourceEntries = sectionId === "organizational"
      ? ["Head of Community", "Curriculum Developer", "Database Division Staff"].map((role) => {
        const entry = entryContents.find((content) => content.includes(`<h3>${role}</h3>`));
        assert(entry, `Missing CV role: ${role}`);
        return entry;
      })
      : entryContents;
    const entries = sourceEntries.map((entry) => [...entry.matchAll(/<ul class="entry-bullets">([\s\S]*?)<\/ul>/g)]
        .flatMap((list) => [...list[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((bullet) => normalize(bullet[1]))));
    const ids = sectionId === "experience"
      ? ["ai-center-agentic-platform", "neuram", "raisa", "spun", "partial-discharge"]
      : ["data-community", "gdsc", "steik"];
    for (const [index, id] of ids.entries()) {
      const source = sectionId === "experience" ? cvContent.experienceByEntry[id] : [cvContent.organizational[index]];
      assert.equal(entries[index].length, source.length, `${id}: missing CV contribution`);
      for (const [bulletIndex, bullet] of source.entries()) {
        const facts = sectionId === "experience"
          ? cvContent.wordingIndependentFacts[id]?.[bulletIndex]
          : cvContent.wordingIndependentFacts.organizational[index];
        for (const fact of facts ?? [bullet]) {
          assert(entries[index][bulletIndex].includes(normalize(fact)), `${id}: incomplete contribution: ${fact}`);
        }
      }
    }
  }
});

function createThemeEnvironment({ savedTheme = null, systemDark = false, blockedStorage = false } = {}) {
  const observers = new Set();
  const mediaListeners = new Set();
  const root = { dataset: new Proxy({}, {
    set(target, key, value) {
      target[key] = value;
      if (key === "theme") for (const callback of observers) callback();
      return true;
    },
  }) };
  const media = {
    matches: systemDark,
    addEventListener: (_, callback) => mediaListeners.add(callback),
    removeEventListener: (_, callback) => mediaListeners.delete(callback),
  };
  const api = {};
  const context = {
    exports: api,
    document: { documentElement: root },
    matchMedia: () => media,
    localStorage: {
      getItem() {
        if (blockedStorage) throw new Error("Storage unavailable");
        return savedTheme;
      },
      setItem(_, value) {
        if (blockedStorage) throw new Error("Storage unavailable");
        savedTheme = value;
      },
    },
    MutationObserver: class {
      constructor(callback) { this.callback = callback; }
      observe() { observers.add(this.callback); }
      disconnect() { observers.delete(this.callback); }
    },
  };
  runInNewContext(themeCode, context);
  runInNewContext(api.themeInitializationScript, context);
  return {
    api,
    root,
    savedTheme: () => savedTheme,
    listenerCount: () => mediaListeners.size + observers.size,
    setSystemDark(value) {
      media.matches = value;
      for (const listener of mediaListeners) listener();
    },
  };
}

test("theme initialization respects saved choices and follows the system for missing or invalid choices", () => {
  for (const [savedTheme, systemDark, expected] of [
    [null, false, "light"], [null, true, "dark"],
    ["light", true, "light"], ["dark", false, "dark"], ["invalid", true, "dark"],
  ]) {
    const { api } = createThemeEnvironment({ savedTheme, systemDark });
    assert.equal(api.getTheme(), expected);
  }
});

test("manual theme choices persist across reloads and take priority over system changes", () => {
  const environment = createThemeEnvironment();
  let notifications = 0;
  const unsubscribe = environment.api.subscribeToTheme(() => { notifications++; });
  environment.api.toggleTheme();
  assert.equal(environment.api.getTheme(), "dark");
  assert.equal(environment.savedTheme(), "dark");
  environment.setSystemDark(false);
  assert.equal(environment.api.getTheme(), "dark");
  assert.equal(createThemeEnvironment({ savedTheme: environment.savedTheme() }).api.getTheme(), "dark");
  environment.api.toggleTheme();
  assert.equal(environment.api.getTheme(), "light");
  assert.equal(environment.savedTheme(), "light");
  assert.equal(notifications, 2);
  unsubscribe();
  assert.equal(environment.listenerCount(), 0);
});

test("theme tracks system changes until a visitor makes a manual choice", () => {
  const environment = createThemeEnvironment();
  const unsubscribe = environment.api.subscribeToTheme(() => {});
  environment.setSystemDark(true);
  assert.equal(environment.api.getTheme(), "dark");
  environment.setSystemDark(false);
  assert.equal(environment.api.getTheme(), "light");
  unsubscribe();
});

test("theme initialization and switching work when local storage is blocked", () => {
  const environment = createThemeEnvironment({ blockedStorage: true, systemDark: true });
  assert.equal(environment.api.getTheme(), "dark");
  environment.api.toggleTheme();
  assert.equal(environment.api.getTheme(), "light");
});

test("manual light and dark themes survive repeated locale layout remounts", () => {
  for (const blockedStorage of [false, true]) {
    for (const systemDark of [false, true]) {
      const environment = createThemeEnvironment({ blockedStorage, systemDark });
      environment.api.initializeTheme();
      for (const theme of [systemDark ? "light" : "dark", systemDark ? "dark" : "light"]) {
        environment.api.toggleTheme();
        assert.equal(environment.api.getTheme(), theme);
        for (const locale of ["en", "id", "en", "id"]) {
          delete environment.root.dataset.theme;
          delete environment.root.dataset.themePreference;
          environment.root.lang = locale;
          environment.api.initializeTheme();
          assert.equal(environment.root.dataset.theme, theme, `${locale}: manual theme survives remount`);
          assert.equal(environment.root.dataset.themePreference, theme);
        }
      }
    }
  }
});

test("system theme remains responsive after a locale layout remount", () => {
  const environment = createThemeEnvironment();
  environment.api.initializeTheme();
  delete environment.root.dataset.theme;
  delete environment.root.dataset.themePreference;
  environment.setSystemDark(true);
  environment.api.initializeTheme();
  assert.equal(environment.api.getTheme(), "dark");
  assert.equal(environment.root.dataset.themePreference, "system");
  const unsubscribe = environment.api.subscribeToTheme(() => {});
  environment.setSystemDark(false);
  assert.equal(environment.api.getTheme(), "light");
  unsubscribe();
  assert.equal(environment.listenerCount(), 0);
});

test("CV download serves the exact local PDF", async () => {
  const response = await fetch(`${origin}/documents/cv.pdf`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /application\/pdf/);
  const content = Buffer.from(await response.arrayBuffer());
  assert.equal(content.subarray(0, 5).toString(), "%PDF-");
  assert.deepEqual(content, readFileSync("public/documents/cv.pdf"));
  assert.equal(createHash("sha256").update(content).digest("hex"), "2fd0a5f3a1dc5899f2e419592f79764fb1accf6eacc6618636c8a62247455837");
});

test("all original images are served locally without a runtime image optimizer", async () => {
  for (const path of [
    "profile/maulana", "projects/eyenimal-banner", "projects/battletalk-banner", "projects/agrotech-banner",
    "projects/finance-tracker-dashboard", "projects/chatdoctor-logo", "projects/roadeye-dashboard", "projects/marketplace-dashboard",
    "projects/do-nation-banner",
    "moments/data-competition-speaking", "moments/objective-quest-presentation",
  ]) {
    const response = await fetch(`${origin}/images/${path}.webp`);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type"), /image\/webp/);
    const content = Buffer.from(await response.arrayBuffer());
    assert.deepEqual(content, readFileSync(`public/images/${path}.webp`));
  }
  const optimized = await fetch(`${origin}/_next/image?url=%2Fimages%2Fprojects%2Feyenimal-banner.webp&w=640&q=75`);
  assert.equal(optimized.status, 404);
  for (const locale of ["id", "en"]) {
    const sources = [...pages[locale].matchAll(/<img\b[^>]*src="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(sources.length, 17);
    for (const source of sources) {
      assert.match(source, /^\/images\/.*\.webp$/);
      const response = await fetch(origin + source);
      assert.equal(response.status, 200, source);
    }
  }
});

test("new gallery images serve the reviewed WebP assets", async () => {
  for (const image of galleryImages) {
    const response = await fetch(`${origin}${image.url}`);
    assert.equal(response.status, 200, image.url);
    assert.match(response.headers.get("content-type"), /image\/webp/);
    const content = Buffer.from(await response.arrayBuffer());
    assert.equal(createHash("sha256").update(content).digest("hex"), image.sha256, image.url);
    assert.deepEqual(content, readFileSync(`public${image.url}`));
  }
});

test("the page serves both fonts and themes, preserves photo colors, and disables marquee motion when requested", async () => {
  const stylesheets = [...pages.id.matchAll(/<link\b[^>]*>/g)]
    .map((match) => match[0])
    .filter((link) => /rel="stylesheet"/.test(link))
    .map((link) => link.match(/href="([^"]+)"/)[1].replaceAll("&amp;", "&"));
  assert(stylesheets.length > 0);
  const styles = await Promise.all(stylesheets.map(async (path) => {
    const response = await fetch(new URL(path, origin));
    assert.equal(response.status, 200);
    const css = await response.text();
    const fonts = [...css.matchAll(/url\(([^)]+\.woff2)\)/g)].map((match) => match[1].replaceAll('"', ""));
    assert(fonts.length > 0);
    for (const font of new Set(fonts)) {
      const response = await fetch(new URL(font, `${origin}${path}`));
      assert.equal(response.status, 200, font);
      assert.match(response.headers.get("content-type"), /font\/woff2/);
    }
    return css;
  }));
  const css = styles.join("\n");
  assert.match(css, /font-family\s*:\s*Lora/);
  assert.match(css, /font-family\s*:\s*Manrope/);
  assert.match(css, /data-theme[^}]*dark/);
  assert.match(css, /prefers-color-scheme\s*:\s*dark/);
  assert.doesNotMatch(css, /font-family\s*:\s*Archivo|filter\s*:\s*grayscale/);
  assert.match(css, /prefers-reduced-motion\s*:\s*reduce/);
  assert.match(css, /\.marquee \.marquee-track\s*\{[^}]*animation\s*:\s*none/);
  assert.match(css, /\.marquee \.marquee-copy[^}]*display\s*:\s*none/);
  assert.match(css, /@keyframes marquee-scroll[^}]*transform[^}]*var\(--marquee-distance\)/);
  assert.match(css, /\.moments-grid\s*\{[^}]*display\s*:\s*grid/);
  assert.doesNotMatch(css, /\.moments-grid\s*\{[^}]*column-count/);
  assert.match(css, /\.moment-frame\s*\{[^}]*aspect-ratio\s*:\s*4\s*\/\s*3/);
  assert.match(css, /\.moment-photo\s*\{[^}]*object-fit\s*:\s*contain/);
});

test("every curated paper and certificate serves the verified local asset", async () => {
  for (const document of documents) {
    const response = await fetch(`${origin}${document.url}`);
    assert.equal(response.status, 200, document.url);
    assert.match(response.headers.get("content-type"), document.url.endsWith(".pdf") ? /application\/pdf/ : /image\/png/);
    const content = Buffer.from(await response.arrayBuffer());
    assert.equal(createHash("sha256").update(content).digest("hex"), document.sha256, document.url);
    assert(pages.id.includes(`href="${document.url}"`), `Unlinked public document: ${document.url}`);
    assert(pages.en.includes(`href="${document.url}"`), `Unlinked English document: ${document.url}`);
  }
});

test("removed paper PDFs are no longer publicly served", async () => {
  for (const document of ["instruction-tuned-verdicts", "objective-quest-network-traffic"]) {
    const response = await fetch(`${origin}/documents/papers/${document}.pdf`);
    assert.equal(response.status, 404, document);
  }
});

test("the original home URL redirects to Indonesian", async () => {
  const response = await fetch(origin, { redirect: "manual", signal: AbortSignal.timeout(5000) });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /http-equiv="refresh" content="0; url=\/id\/"/);
  assert.match(html, /<a href="\/id\/">/);
  assert.match(html, /name="robots" content="noindex, follow"/);
});

test("robots and sitemap advertise only an explicitly indexable production site", async () => {
  const robots = await fetch(`${origin}/robots.txt`);
  assert.equal(robots.status, 200);
  const text = await robots.text();
  assert.match(text, /User-Agent: \*\nAllow: \//);
  const response = await fetch(`${origin}/sitemap.xml`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /xml/);
  const sitemap = await response.text();
  if (indexable) {
    assert(text.includes(`Sitemap: ${siteUrl}/sitemap.xml`));
    assert.equal([...sitemap.matchAll(/<loc>/g)].length, 2);
    for (const locale of ["id", "en"]) assert(sitemap.includes(`<loc>${siteUrl}/${locale}/</loc>`));
    assert.equal([...sitemap.matchAll(/hreflang="x-default"/g)].length, 2);
    assert.equal(response.headers.get("x-robots-tag"), null);
  } else {
    assert.doesNotMatch(text, /Sitemap:/);
    assert.doesNotMatch(sitemap, /<loc>/);
    for (const path of ["/id", "/en", "/documents/cv.pdf", "/sitemap.xml"]) {
      const resource = await fetch(`${origin}${path}`);
      assert.equal(resource.headers.get("x-robots-tag"), null, "GitHub Pages cannot serve custom response headers");
      await resource.arrayBuffer();
    }
  }
  assert.doesNotMatch(sitemap, /<lastmod>|<priority>|<changefreq>|#projects/);
});

test("static hosting serves deep links, exported client assets, and blocks private paths", async () => {
  const response = await fetch(`${origin}/en`, { redirect: "manual" });
  assert.equal(response.status, 301);
  assert.equal(response.headers.get("location"), "/en/");
  assert.equal((await fetch(`${origin}/en/`, { method: "HEAD" })).status, 200);
  assert.equal((await fetch(`${origin}/en/`, { method: "POST" })).status, 405);
  for (const path of ["/%2e%2e%2fpackage.json", "/.env.local", "/%5c..%5cpackage.json", "/%00", "/%ZZ"]) {
    const response = await fetch(origin + path);
    assert([400, 404].includes(response.status), path);
  }
  for (const locale of ["id", "en"]) {
    const scripts = [...pages[locale].matchAll(/<script\b[^>]*src="([^"]+)"/g)].map((match) => match[1]);
    assert(scripts.length > 0);
    for (const path of scripts) {
      const response = await fetch(origin + path);
      assert.equal(response.status, 200, path);
      assert.match(response.headers.get("content-type"), /javascript/);
    }
    assert.equal((await fetch(`${origin}/${locale}/index.txt`)).status, 200, "Exported navigation payload is available");
  }
  assert.equal((await fetch(`${origin}/.nojekyll`)).status, 404);
  assert.equal(readFileSync("out/.nojekyll", "utf8"), "");
});

test("home and localized pages declare a crawlable square PNG favicon", async () => {
  const home = await fetch(`${origin}/`);
  assert.equal(home.status, 200);
  for (const html of [await home.text(), pages.id, pages.en]) {
    const head = html.slice(0, html.indexOf("</head>"));
    const links = [...head.matchAll(/<link\b[^>]*>/g)].map((match) => match[0]);
    const icon = links.find((link) => /rel="icon"/.test(link) && /href="\/favicon.png"/.test(link));
    assert(icon, "Every home page must identify a favicon in a Google-supported format");
    assert.match(icon, /type="image\/png"/);
    assert.match(icon, /sizes="96x96"/);
    assert(links.some((link) => /rel="icon"/.test(link) && /href="\/favicon.ico"/.test(link)),
      "Each page also provides a browser icon with tab-sized frames");
  }
  const response = await fetch(`${origin}/favicon.png`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /image\/png/);
  const png = Buffer.from(await response.arrayBuffer());
  assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  assert.equal(png.readUInt32BE(16), 96);
  assert.equal(png.readUInt32BE(20), 96);
  assert.deepEqual(png, readFileSync("public/favicon.png"));
  const browserIcon = await fetch(`${origin}/favicon.ico`);
  assert.equal(browserIcon.status, 200);
  assert.match(browserIcon.headers.get("content-type"), /image\/x-icon/);
  const ico = Buffer.from(await browserIcon.arrayBuffer());
  assert.equal(ico.readUInt16LE(0), 0);
  assert.equal(ico.readUInt16LE(2), 1);
  assert.equal(ico.readUInt16LE(4), 3);
  for (const [index, size] of [16, 32, 48].entries()) {
    const entry = 6 + index * 16;
    assert.equal(ico[entry], size);
    assert.equal(ico[entry + 1], size);
    const offset = ico.readUInt32LE(entry + 12);
    assert.equal(ico.subarray(offset, offset + 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(ico.readUInt32BE(offset + 16), size);
    assert.equal(ico.readUInt32BE(offset + 20), size);
  }
  assert.deepEqual(ico, readFileSync("public/favicon.ico"));
});

test("localized social previews serve 1200 by 630 PNGs and the favicon is available", async () => {
  const images = [];
  for (const locale of ["id", "en"]) {
    const response = await fetch(`${origin}/${locale}/share-image.png`);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type"), /image\/png/);
    const image = Buffer.from(await response.arrayBuffer());
    assert.equal(image.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(image.readUInt32BE(16), 1200);
    assert.equal(image.readUInt32BE(20), 630);
    images.push(image);
  }
  assert(!images[0].equals(images[1]), "Each language has its own social preview");
  const unknown = await fetch(`${origin}/fr/share-image.png`);
  assert.equal(unknown.status, 404);
  const icon = await fetch(`${origin}/icon.svg`);
  assert.equal(icon.status, 200);
  assert.match(icon.headers.get("content-type"), /image\/svg\+xml/);
  assert.match(await icon.text(), />MF<\/text>/);
});

test("unsupported locales and unknown pages return an HTTP 404", async () => {
  for (const route of ["/fr", "/constructor", "/__proto__", "/missing-page", "/en/missing-page"]) {
    const response = await fetch(`${origin}${route}`, { signal: AbortSignal.timeout(5000) });
    assert.equal(response.status, 404, route);
  }
});

test("translation dictionaries have matching, nonempty keys", () => {
  function getKeys(value, prefix = "") {
    return Object.entries(value).flatMap(([key, entry]) => {
      const entryKey = `${prefix}${key}`;
      if (typeof entry === "object") return getKeys(entry, `${entryKey}.`);
      assert.equal(typeof entry, "string", entryKey);
      assert(entry.trim().length > 0, entryKey);
      return entryKey;
    }).sort();
  }
  assert.deepEqual(getKeys(messages.id), getKeys(messages.en));
});

test("tech logos serve the original, reviewed local SVG assets", async () => {
  const logos = JSON.parse(readFileSync("tests/fixtures/tech-logos.json", "utf8"));
  for (const logo of logos) {
    const response = await fetch(origin + logo.url);
    assert.equal(response.status, 200, logo.name);
    assert.match(response.headers.get("content-type"), /image\/svg\+xml/);
    const svg = Buffer.from(await response.arrayBuffer());
    assert.equal(createHash("sha256").update(svg).digest("hex"), logo.sha256);
    assert.match(svg.toString("utf8"), /viewBox="0 0 24 24"/);
    assert.doesNotMatch(svg.toString("utf8"), /<script|<foreignObject|\bon\w+\s*=|\b(?:href|xlink:href)\s*=/i);
    for (const locale of ["id", "en"]) assert(pages[locale].includes(logo.url), logo.name);
  }
});
