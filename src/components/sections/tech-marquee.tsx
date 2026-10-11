import { featuredTechnologies } from "@/content/marquees";
import { Marquee } from "@/components/ui/marquee";
import type { Dictionary } from "@/i18n";

export function TechMarquee({ messages }: { messages: Dictionary["motion"] }) {
  return (
    <Marquee id="tech-marquee" label={messages.technologies} variant="tech" messages={messages}>
      {featuredTechnologies.map((technology) => (
        <li key={technology.slug} className="marquee-item">
          <span className="tech-logo" aria-hidden="true"
            style={{ maskImage: `url("/images/technologies/${technology.slug}.svg")` }} />
          <span>{technology.name}</span>
        </li>
      ))}
    </Marquee>
  );
}
