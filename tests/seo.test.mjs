import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const dictionaries = Object.fromEntries(["id", "en"].map((locale) => [
  locale, JSON.parse(readFileSync(`src/i18n/messages/${locale}.json`, "utf8")),
]));

function evaluate(file, context = {}) {
  const exports = {};
  const code = ts.transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  runInNewContext(code, { exports, URL, ...context });
  return exports;
}

const { profile } = evaluate("src/content/profile.ts");
const configModule = evaluate("src/seo/site-config.ts", { process: { env: {} } });
const dependencies = {
  "@/content/profile": { profile },
  "@/i18n": { locales: ["id", "en"], getDictionary: (locale) => dictionaries[locale] },
  "./site-config": configModule,
};
const seo = evaluate("src/seo/portfolio.ts", { require: (name) => {
  assert(name in dependencies, `Unexpected SEO dependency: ${name}`);
  return dependencies[name];
} });
const published = { url: "https://portfolio.example", indexable: true };

test("indexing requires both a public origin and explicit production opt-in", () => {
  for (const env of [{}, { NODE_ENV: "production" }, { NODE_ENV: "production", SITE_URL: published.url },
    { NODE_ENV: "development", SITE_URL: published.url, SITE_INDEXABLE: "true" }]) {
    assert.equal(configModule.getSiteConfig(env).indexable, false);
  }
  const config = configModule.getSiteConfig({ NODE_ENV: "production", SITE_URL: `${published.url}/`, SITE_INDEXABLE: "true" });
  assert.equal(config.url, published.url);
  assert.equal(config.indexable, true);
  assert.throws(() => configModule.getSiteConfig({ SITE_INDEXABLE: "true" }), /Set SITE_URL/);
  assert.throws(() => configModule.getSiteConfig({ SITE_INDEXABLE: "yes" }), /true or false/);
});

test("invalid origins fail without leaking credentials or creating guessed canonical URLs", () => {
  for (const url of ["invalid", "http://portfolio.example", "https://portfolio.example/id", "https://portfolio.example/?test=1",
    "https://portfolio.example/#contact", "https://localhost", "https://127.0.0.1", "https://[::1]", "https://user:secret@portfolio.example"]) {
    assert.throws(() => configModule.getSiteConfig({ SITE_URL: url }), (error) => {
      assert.match(error.message, /SITE_URL/);
      assert(!error.message.includes("secret"));
      return true;
    });
  }
  for (const locale of ["id", "en"]) {
    const metadata = seo.portfolioMetadata(locale);
    assert.equal(metadata.alternates, undefined);
    assert.equal(metadata.openGraph.url, undefined);
    assert.equal(metadata.openGraph.images, undefined);
    assert.equal(metadata.robots.index, false);
    assert.equal(seo.profileStructuredData(locale).url, undefined);
  }
});

test("published language pages have distinct canonicals and reciprocal language links", () => {
  for (const locale of ["id", "en"]) {
    const metadata = seo.portfolioMetadata(locale, published);
    assert.equal(metadata.alternates.canonical, `${published.url}/${locale}/`);
    assert.equal(metadata.alternates.languages.id, `${published.url}/id/`);
    assert.equal(metadata.alternates.languages.en, `${published.url}/en/`);
    assert.equal(metadata.alternates.languages["x-default"], `${published.url}/id/`);
    assert.equal(metadata.robots.index, true);
    assert.equal(metadata.robots.follow, true);
    assert.equal(metadata.openGraph.locale, locale === "id" ? "id_ID" : "en_US");
    assert.equal(metadata.openGraph.images[0].url, `${published.url}/${locale}/share-image.png`);
    assert.equal(metadata.openGraph.description, dictionaries[locale].metadata.description);
    assert.equal(metadata.twitter.card, "summary_large_image");
    assert.equal(metadata.twitter.description, metadata.description);
    assert.equal(metadata.keywords, undefined);
  }
});

test("sitemap includes only the canonical language pages with matching alternates", () => {
  const entries = seo.portfolioSitemap(published);
  assert.equal(entries.length, 2);
  assert.equal(entries[0].url, `${published.url}/id/`);
  assert.equal(entries[1].url, `${published.url}/en/`);
  for (const entry of entries) {
    assert.equal(entry.alternates.languages["x-default"], `${published.url}/id/`);
    assert.equal(entry.lastModified, undefined);
    assert.equal(entry.priority, undefined);
    assert.equal(entry.changeFrequency, undefined);
    assert(!entry.url.includes("#"));
  }
  assert.equal(seo.portfolioSitemap().length, 0);
  assert.equal(seo.portfolioSitemap({ ...published, indexable: false }).length, 0);
  assert.equal(seo.portfolioRobots(published).sitemap, `${published.url}/sitemap.xml`);
  assert.equal(seo.portfolioRobots().sitemap, undefined);
  assert.equal(seo.portfolioRobots().rules.allow, "/", "Crawlers can read preview noindex directives");
});

test("profile schema uses verified identity, owner-provided aliases, and professional links", () => {
  for (const locale of ["id", "en"]) {
    const data = seo.profileStructuredData(locale, published);
    assert.equal(data["@type"], "ProfilePage");
    assert.equal(data.inLanguage, locale);
    assert.equal(data.mainEntity["@type"], "Person");
    assert.equal(data.mainEntity.name, profile.name);
    assert(Array.isArray(data.mainEntity.alternateName));
    assert.equal(data.mainEntity.alternateName.join("|"), "Mohamad Maulana Firdaus R.|maull04|Maull09");
    assert.equal(data.mainEntity.jobTitle, profile.role);
    assert.equal(data.mainEntity.description, profile.introduction[locale]);
    assert.equal(data.mainEntity.sameAs.join("|"), [profile.github, profile.linkedin].join("|"));
    assert.equal(data.mainEntity["@id"], `${published.url}/#person`);
    assert.equal(data.mainEntity.image, `${published.url}/images/profile/maulana.webp`);
    for (const field of ["email", "telephone", "address", "aggregateRating", "interactionStatistic"]) {
      assert.equal(data.mainEntity[field], undefined);
    }
    assert.equal(data.dateModified, undefined);
  }
});

test("JSON-LD remains valid JSON and cannot close its containing script element", () => {
  const data = { name: "</script><script>alert('test')</script>", description: "AI & ML" };
  const serialized = seo.serializeJsonLd(data);
  assert(!serialized.includes("<"));
  assert.equal(JSON.parse(serialized).name, data.name);
  assert.equal(JSON.parse(serialized).description, data.description);
});
