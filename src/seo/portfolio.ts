import type { Metadata, MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { getDictionary, locales } from "@/i18n";
import type { Locale } from "@/i18n";
import { siteConfig } from "./site-config";
import type { SiteConfig } from "./site-config";

export function languageAlternates(url: string) {
  return { id: `${url}/id/`, en: `${url}/en/`, "x-default": `${url}/id/` };
}

export function portfolioMetadata(locale: Locale, config: SiteConfig = siteConfig): Metadata {
  const messages = getDictionary(locale).metadata;
  const title = `${profile.name} | ${profile.role}`;
  const canonical = config.url ? `${config.url}/${locale}/` : undefined;
  const images = config.url ? [{
    url: `${config.url}/${locale}/share-image.png`,
    width: 1200,
    height: 630,
    alt: messages.imageAlt,
    type: "image/png",
  }] : undefined;

  return {
    title,
    description: messages.description,
    applicationName: profile.name,
    icons: { icon: [
      { url: "/favicon.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "16x16 32x32 48x48" },
    ] },
    authors: [{ name: profile.name, url: canonical }],
    creator: profile.name,
    metadataBase: config.url ? new URL(config.url) : undefined,
    alternates: config.url ? { canonical, languages: languageAlternates(config.url) } : undefined,
    openGraph: {
      type: "website",
      title,
      description: messages.description,
      siteName: profile.name,
      locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: locale === "id" ? ["en_US"] : ["id_ID"],
      url: canonical,
      images,
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title,
      description: messages.description,
      images,
    },
    robots: {
      index: config.indexable,
      follow: config.indexable,
      ...(config.indexable ? { googleBot: { index: true, follow: true, "max-image-preview": "large" } } : {}),
    },
  };
}

export function profileStructuredData(locale: Locale, config: SiteConfig = siteConfig) {
  const canonical = config.url ? `${config.url}/${locale}/` : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${profile.name} | ${profile.role}`,
    description: getDictionary(locale).metadata.description,
    inLanguage: locale,
    ...(canonical ? { "@id": `${canonical}#profile`, url: canonical } : {}),
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      alternateName: profile.alternateNames,
      jobTitle: profile.role,
      description: profile.introduction[locale],
      sameAs: [profile.github, profile.linkedin].filter((url) => url !== null),
      ...(config.url ? {
        "@id": `${config.url}/#person`,
        url: canonical,
        image: `${config.url}/images/profile/maulana.webp`,
      } : {}),
    },
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function portfolioSitemap(config: SiteConfig = siteConfig): MetadataRoute.Sitemap {
  if (!config.indexable || !config.url) return [];
  const languages = languageAlternates(config.url);
  return locales.map((locale) => ({ url: `${config.url}/${locale}/`, alternates: { languages } }));
}

export function portfolioRobots(config: SiteConfig = siteConfig): MetadataRoute.Robots {
  // Allow crawlers to read the HTML noindex metadata on preview pages.
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(config.indexable && config.url ? { sitemap: `${config.url}/sitemap.xml` } : {}),
  };
}
