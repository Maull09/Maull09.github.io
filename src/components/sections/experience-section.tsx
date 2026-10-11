import { experience } from "@/content/experience";
import { ExperienceList } from "@/components/ui/experience-list";
import { Section } from "@/components/ui/section";
import type { Locale } from "@/i18n";

export function ExperienceSection({ title, locale }: { title: string; locale: Locale }) {
  return <Section id="experience" title={title}><ExperienceList entries={experience} locale={locale} /></Section>;
}
