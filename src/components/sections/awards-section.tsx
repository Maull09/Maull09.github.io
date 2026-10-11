import { awards } from "@/content/awards";
import { CredentialList } from "@/components/ui/credential-list";
import { Section } from "@/components/ui/section";
import type { Locale } from "@/i18n";

export function AwardsSection({ title, locale }: { title: string; locale: Locale }) {
  return <Section id="awards" title={title}><CredentialList entries={awards} locale={locale} kind="award" /></Section>;
}
