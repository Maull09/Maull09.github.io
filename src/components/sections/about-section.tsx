import { profile } from "@/content/profile";
import { Section } from "@/components/ui/section";
import type { Locale } from "@/i18n";

export function AboutSection({ title, locale }: { title: string; locale: Locale }) {
  return (
    <Section id="about" title={title}>
      <div className="about-copy">
        {profile.about.map((paragraph) => <p key={paragraph.en}>{paragraph[locale]}</p>)}
      </div>
    </Section>
  );
}
