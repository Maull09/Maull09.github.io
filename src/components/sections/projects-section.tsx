import { projects } from "@/content/projects";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import type { Dictionary, Locale } from "@/i18n";

const orderedProjects = [...projects].sort((a, b) =>
  (b.lastCommit?.date ?? b.year ?? "").localeCompare(a.lastCommit?.date ?? a.year ?? ""));

export function ProjectsSection({ messages, locale }: { messages: Dictionary; locale: Locale }) {
  return (
    <Section id="projects" title={messages.sections.projects}>
      <div className="projects-grid">
        {orderedProjects.map((project) => (
          <article key={project.id} id={`project-${project.id}`} className={`project ${project.image ? "project-with-image" : ""}`}>
            <div className="project-content">
              <p className="project-category">
                {project.lastCommit ? (
                  <span className="project-year">
                    {messages.projects.updated}{" "}
                    <time dateTime={project.lastCommit.date}>
                      {new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Jakarta" }).format(new Date(project.lastCommit.date))}
                    </time>
                  </span>
                ) : project.year && <time className="project-year" dateTime={project.year}>{project.year}</time>}
                {" "}
                {project.category[locale]}
              </p>
              <h3>{project.title}</h3>
              <p>{project.description[locale]}</p>
              <dl className="project-details">
                <div>
                  <dt>{messages.projects.contribution}</dt>
                  <dd>{project.contribution[locale]}</dd>
                </div>
                <div>
                  <dt>{messages.projects.context}</dt>
                  <dd>{project.context[locale]}</dd>
                </div>
              </dl>
              {project.architecture && (
                <div className="project-architecture">
                  <p className="architecture-label">{messages.projects.architecture}</p>
                  <ol className="architecture-flow" aria-label={messages.projects.architecture}>
                    {project.architecture.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                  <p>{messages.projects.architectureSource}</p>
                </div>
              )}
              <ul aria-label={messages.controls.technologies} className="technology-list">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <div className="project-links">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} aria-label={`${link.label[locale]}: ${project.title}`}>{link.label[locale]}</a>
                ))}
              </div>
            </div>
            {project.image && (
              <div className={`project-cover ${project.image.kind === "logo" ? "project-cover-logo" : ""}`}>
                <Image
                  src={project.image.src}
                  alt={project.image.alt[locale]}
                  width={project.image.width}
                  height={project.image.height}
                  sizes={project.image.kind === "logo" ? "144px" : "(min-width: 1024px) 420px, (min-width: 680px) 640px, calc(100vw - 40px)"}
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
