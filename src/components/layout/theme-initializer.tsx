"use client";

import { useLayoutEffect, useRef } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { initializeTheme, themeInitializationScript } from "@/theme/theme";
import type { Locale } from "@/i18n";

export function ThemeInitializer({ locale }: { locale: Locale }) {
  const inserted = useRef(false);
  useLayoutEffect(initializeTheme, [locale]);

  useServerInsertedHTML(() => {
    if (inserted.current) return null;
    inserted.current = true;
    return <script id="portfolio-theme-init" dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />;
  });

  return null;
}
