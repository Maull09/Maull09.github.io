import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";
import { Section } from "@/components/ui/section";
import type { Dictionary, Locale } from "@/i18n";

export function ContactSection({ messages, locale }: { messages: Dictionary; locale: Locale }) {
  const contacts = [
    { label: messages.contact.email, href: profile.email ? `mailto:${profile.email}` : null, Icon: EnvelopeSimpleIcon },
    { label: "GitHub", href: profile.github, Icon: GithubLogoIcon },
    { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinLogoIcon },
  ];

  return (
    <Section id="contact" title={messages.sections.contact}>
      <div className="contact-content">
        <p className="contact-headline">{messages.contact.headline}</p>
        <p>{profile.contact[locale]}</p>
      </div>
      <ul className="contact-links">
        {contacts.map((contact) => (
          <li key={contact.label}>
            {contact.href ? (
              <a href={contact.href} className="contact-link">
                <contact.Icon size={20} weight="regular" aria-hidden="true" focusable="false" />
                {contact.label}
              </a>
            ) : (
              <div className="contact-link-unavailable">
                <h3>{contact.label}</h3>
                <p>{messages.contact.unavailable}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
