import { CpuIcon } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";
import Image from "next/image";
import type { Dictionary, Locale } from "@/i18n";

export function HeroSection({ controls, locale }: { controls: Dictionary["controls"]; locale: Locale }) {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-heading">{profile.name}</h1>
          <p className="hero-role">
            <CpuIcon size={20} weight="regular" aria-hidden="true" focusable="false" />
            {profile.role}
          </p>
          <p className="hero-description">{profile.introduction[locale]}</p>
          <div className="hero-actions">
            <a href="#projects" className="primary-action">{controls.viewProjects}</a>
            {profile.cvFile ? (
              <a href={profile.cvFile} download className="secondary-action">{controls.downloadCv}</a>
            ) : (
              <button type="button" disabled className="secondary-action">{controls.cvUnavailable}</button>
            )}
          </div>
        </div>
        <Image
          src="/images/profile/maulana.webp"
          alt={profile.name}
          width={800}
          height={800}
          sizes="(min-width: 768px) 208px, 160px"
          loading="eager"
          className="hero-portrait"
        />
      </div>
    </section>
  );
}
