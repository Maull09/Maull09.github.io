import type { ExperienceEntry } from "@/content/experience";
import type { Locale } from "@/i18n";

export function ExperienceList({ entries, locale }: { entries: ExperienceEntry[]; locale: Locale }) {
  return (
    <ul className="experience-list experience-timeline">
      {entries.map((entry) => (
        <li key={entry.id} className="experience-entry">
          <div className="experience-meta">
            <p className="entry-period">{entry.period[locale]}</p>
            <p className="entry-location">{entry.location[locale]}</p>
          </div>
          <div className="experience-content">
            <h3>{entry.role}</h3>
            <p className="entry-organization">{entry.organization}</p>
            <ul className="entry-bullets">
              {entry.contributions.map((contribution) => <li key={contribution.en}>{contribution[locale]}</li>)}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
