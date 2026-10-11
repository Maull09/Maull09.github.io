import { certifications } from "@/content/certifications";
import { CredentialList } from "@/components/ui/credential-list";
import { Section } from "@/components/ui/section";
import type { Locale } from "@/i18n";

export function CertificationsSection({ title, locale }: { title: string; locale: Locale }) {
  return <Section id="certifications" title={title}><CredentialList entries={certifications} locale={locale} kind="certificate" /></Section>;
}
