import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FocusMarquee } from "@/components/sections/focus-marquee";
import { AboutSection } from "@/components/sections/about-section";
import { TechnicalSkillsSection } from "@/components/sections/technical-skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { OrganizationalSection } from "@/components/sections/organizational-section";
import { SpeakersSection } from "@/components/sections/speakers-section";
import { PapersSection } from "@/components/sections/papers-section";
import { WritingsSection } from "@/components/sections/writings-section";
import { AwardsSection } from "@/components/sections/awards-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { MomentsSection } from "@/components/sections/moments-section";
import { ContactSection } from "@/components/sections/contact-section";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n";
import type { LocaleRouteProps } from "@/i18n";
import { profileStructuredData, serializeJsonLd } from "@/seo/portfolio";

export default async function HomePage({ params }: LocaleRouteProps) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const messages = getDictionary(locale);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(profileStructuredData(locale)) }} />
      <a href="#main-content" className="skip-link">{messages.controls.skipNavigation}</a>
      <SiteHeader locale={locale} messages={messages} />
      <main id="main-content">
        <HeroSection controls={messages.controls} locale={locale} />
        <FocusMarquee messages={messages.motion} />
        <AboutSection title={messages.sections.about} locale={locale} />
        <TechnicalSkillsSection title={messages.sections.skills} locale={locale} motion={messages.motion} />
        <ProjectsSection messages={messages} locale={locale} />
        <ExperienceSection title={messages.sections.experience} locale={locale} />
        <OrganizationalSection title={messages.sections.organizational} locale={locale} />
        <SpeakersSection messages={messages} locale={locale} />
        <PapersSection messages={messages} locale={locale} />
        <WritingsSection title={messages.sections.writings} />
        <AwardsSection title={messages.sections.awards} locale={locale} />
        <CertificationsSection title={messages.sections.certifications} locale={locale} />
        <MomentsSection title={messages.sections.moments} locale={locale} />
        <ContactSection messages={messages} locale={locale} />
      </main>
      <SiteFooter backToTopLabel={messages.controls.backToTop} />
    </>
  );
}
