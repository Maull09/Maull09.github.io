import indonesian from "./messages/id.json";
import english from "./messages/en.json";

export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export type Dictionary = typeof indonesian;
export type LocaleRouteProps = { params: Promise<{ locale: string }> };

const dictionaries: Record<Locale, Dictionary> = {
  id: indonesian,
  en: english,
};

export function hasLocale(value: string): value is Locale {
  return value === "id" || value === "en";
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
