import { ArrowUpRightIcon, FileTextIcon } from "@phosphor-icons/react/dist/ssr";
import { papers } from "@/content/papers";
import { Section } from "@/components/ui/section";
import type { Dictionary, Locale } from "@/i18n";

export function PapersSection({ messages, locale }: { messages: Dictionary; locale: Locale }) {
  if (papers.length === 0) return null;
  return (
    <Section id="papers" title={messages.sections.papers}>
      <div className="experience-list">
        {papers.map((paper) => (
          <article key={paper.id} className="experience-entry paper-entry">
            <div className="paper-marker">
              <span className="paper-icon">
                <FileTextIcon size={20} weight="regular" aria-hidden="true" focusable="false" />
              </span>
              <p className="entry-period">{paper.year ?? messages.papers.undated}</p>
            </div>
            <div className="paper-content">
              <p className="paper-type">{paper.type[locale]}</p>
              <div className="paper-heading">
                <h3>{paper.title}</h3>
                <a className="paper-read-link" href={paper.url} aria-label={`${messages.papers.read}: ${paper.title}`}>
                  {messages.papers.read}
                  <ArrowUpRightIcon size={20} weight="regular" aria-hidden="true" focusable="false" />
                </a>
              </div>
              <p className="entry-organization">{paper.authors.join(", ")}</p>
              <p className="entry-description">{paper.description[locale]}</p>
              <dl className="project-details">
                <div>
                  <dt>{messages.papers.evaluation}</dt>
                  <dd>{paper.evaluation[locale]}</dd>
                </div>
              </dl>
              {paper.codeLinks && (
                <div className="project-links">
                  {paper.codeLinks.map((link) => (
                    <a key={link.href} href={link.href} aria-label={`${messages.projects.repository}: ${link.label}`}>
                      {link.label}
                      <ArrowUpRightIcon size={20} weight="regular" aria-hidden="true" focusable="false" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
