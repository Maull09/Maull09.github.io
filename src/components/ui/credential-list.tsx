import { CertificateIcon, TrophyIcon } from "@phosphor-icons/react/dist/ssr";
import type { Credential } from "@/content/credential";
import type { Locale } from "@/i18n";

export function CredentialList({ entries, locale, kind }: { entries: Credential[]; locale: Locale; kind: "award" | "certificate" }) {
  const Icon = kind === "award" ? TrophyIcon : CertificateIcon;
  return (
    <ul className="credential-list">
      {entries.map((entry) => (
        <li key={entry.id} className="credential-entry">
          <div className="credential-marker">
            <span className="credential-icon">
              <Icon size={20} weight="regular" aria-hidden="true" focusable="false" />
            </span>
            {entry.year && <p className="entry-period">{entry.year}</p>}
          </div>
          <div className="credential-content">
            <h3><a href={entry.url}>{entry.title[locale]}</a></h3>
            <p className="entry-organization">{entry.issuer}</p>
            <ul className="entry-bullets">
              <li>{entry.description[locale]}</li>
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
