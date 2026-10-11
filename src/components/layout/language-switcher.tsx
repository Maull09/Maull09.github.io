import Link from "next/link";
import type { Locale } from "@/i18n";
import { locales } from "@/i18n";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  return (
    <nav aria-label={label} className="language-switcher">
      {locales.map((language) => (
        <Link
          key={language}
          href={`/${language}/`}
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
