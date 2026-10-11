import { MicrophoneStageIcon } from "@phosphor-icons/react/dist/ssr";
import { speakers } from "@/content/speakers";
import { Section } from "@/components/ui/section";
import type { Dictionary, Locale } from "@/i18n";

export function SpeakersSection({ messages, locale }: { messages: Dictionary; locale: Locale }) {
  if (speakers.length === 0) return null;
  return (
    <Section id="speakers" title={messages.sections.speakers}>
      <div className="experience-list">
        {speakers.map((session) => (
          <article key={session.id} className="experience-entry speaker-entry">
            <div className="speaker-marker">
              <span className="speaker-icon">
                <MicrophoneStageIcon size={20} weight="regular" aria-hidden="true" focusable="false" />
              </span>
              <p className="entry-period">{session.year}</p>
            </div>
            <div className="speaker-content">
              <h3>{session.title}</h3>
              <p className="entry-organization">{session.event} · {messages.speakers.role}</p>
              <ul className="entry-bullets">
                <li>{session.description[locale]}</li>
              </ul>
              {session.certificate && (
                <div className="project-links">
                  <a href={session.certificate} aria-label={`${messages.speakers.certificate}: ${session.title}`}>{messages.speakers.certificate}</a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
