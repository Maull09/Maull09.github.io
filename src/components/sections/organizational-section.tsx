import { organizational } from "@/content/organizational";
import { ExperienceList } from "@/components/ui/experience-list";
import { Section } from "@/components/ui/section";
import type { Locale } from "@/i18n";

export function OrganizationalSection({ title, locale }: { title: string; locale: Locale }) {
  return <Section id="organizational" title={title}><ExperienceList entries={organizational} locale={locale} /></Section>;
}
