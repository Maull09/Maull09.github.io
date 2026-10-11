import { technicalSkills } from "@/content/technical-skills";
import { Section } from "@/components/ui/section";
import { TechMarquee } from "@/components/sections/tech-marquee";
import type { Dictionary, Locale } from "@/i18n";

export function TechnicalSkillsSection({ title, locale, motion }: { title: string; locale: Locale; motion: Dictionary["motion"] }) {
  return (
    <Section id="skills" title={title}>
      <TechMarquee messages={motion} />
      <dl className="skills-list">
        {technicalSkills.map((group) => (
          <div key={group.id} className="skill-group">
            <dt>{group.title[locale]}</dt>
            <dd>{group.technologies.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
