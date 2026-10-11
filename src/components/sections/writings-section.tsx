import { writings } from "@/content/writings";
import { Section } from "@/components/ui/section";

export function WritingsSection({ title }: { title: string }) {
  if (writings.length === 0) return null;
  return (
    <Section id="writings" title={title}>
      <ul className="writings-list">
        {writings.map((writing) => (
          <li key={writing.id}>
            <article className="writing-entry">
              <p className="entry-period">{writing.date}</p>
              <div>
                <h3>{writing.title}</h3>
                <p>{writing.summary}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
