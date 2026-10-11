"use client";

import Link from "next/link";
import { useLayoutEffect } from "react";
import type { Locale } from "@/i18n";
import { locales } from "@/i18n";

const readingBlocks = "h1, h2, h3, p, li, dd, figure";

type ReadingPosition = {
  locale: Locale;
  sectionId: string;
  blockIndex: number;
  offset: number;
  progress: number;
};

// Both header controls share the position across a locale layout remount.
let pendingPosition: ReadingPosition | null = null;

function readingLine() {
  return (document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 0) + 24;
}

function rememberPosition(locale: Locale) {
  const line = readingLine();
  const section = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"))
    .find((element) => element.getBoundingClientRect().bottom > line);
  if (!section) return;

  const blocks = Array.from(section.querySelectorAll<HTMLElement>(readingBlocks));
  const blockIndex = blocks.findIndex((element) => element.getBoundingClientRect().bottom > line);
  const rect = (blocks[blockIndex] ?? section).getBoundingClientRect();
  pendingPosition = {
    locale,
    sectionId: section.id,
    blockIndex,
    offset: rect.top - line,
    progress: rect.height > 0 ? Math.max(0, (line - rect.top) / rect.height) : 0,
  };
}

function restorePosition(locale: Locale) {
  if (!pendingPosition || pendingPosition.locale !== locale) return;
  const position = pendingPosition;
  pendingPosition = null;
  const section = document.getElementById(position.sectionId);
  if (!section) return;

  const block = section.querySelectorAll<HTMLElement>(readingBlocks)[position.blockIndex] ?? section;
  const rect = block.getBoundingClientRect();
  const offset = position.offset >= 0 ? -position.offset : position.progress * rect.height;
  window.scrollTo({ top: Math.max(0, window.scrollY + rect.top - readingLine() + offset), behavior: "instant" });
}

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  useLayoutEffect(() => restorePosition(locale), [locale]);

  return (
    <nav aria-label={label} className="language-switcher">
      {locales.map((language) => (
        <Link
          key={language}
          href={`/${language}/`}
          scroll={false}
          onNavigate={() => { if (language !== locale) rememberPosition(language); }}
          hrefLang={language}
          lang={language}
          aria-label={language === "id" ? "Bahasa Indonesia" : "English"}
          aria-current={language === locale ? "page" : undefined}
        >
          {language.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
