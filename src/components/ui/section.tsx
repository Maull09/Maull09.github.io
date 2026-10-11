import type { ReactNode } from "react";
import {
  BriefcaseIcon, CameraIcon, CertificateIcon, CodeIcon, EnvelopeSimpleIcon,
  FileTextIcon, MicrophoneStageIcon, PenNibIcon, StackIcon, TrophyIcon,
  UserCircleIcon, UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";

const sectionIcons = {
  about: UserCircleIcon,
  skills: CodeIcon,
  projects: StackIcon,
  experience: BriefcaseIcon,
  organizational: UsersThreeIcon,
  speakers: MicrophoneStageIcon,
  papers: FileTextIcon,
  writings: PenNibIcon,
  awards: TrophyIcon,
  certifications: CertificateIcon,
  moments: CameraIcon,
  contact: EnvelopeSimpleIcon,
};

type SectionProps = {
  id: keyof typeof sectionIcons;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  const Icon = sectionIcons[id];
  return (
    <section id={id} className="portfolio-section" aria-labelledby={`${id}-heading`}>
      <div className="site-container">
        <h2 id={`${id}-heading`} className="section-heading">
          <span className="section-heading-icon"><Icon size={22} weight="regular" aria-hidden="true" focusable="false" /></span>
          <span>{title}</span>
        </h2>
        {children}
      </div>
    </section>
  );
}
