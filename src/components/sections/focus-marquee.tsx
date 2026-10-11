import { SparkleIcon } from "@phosphor-icons/react/dist/ssr";
import { focusAreas } from "@/content/marquees";
import { Marquee } from "@/components/ui/marquee";
import type { Dictionary } from "@/i18n";

export function FocusMarquee({ messages }: { messages: Dictionary["motion"] }) {
  return (
    <Marquee id="focus-marquee" label={messages.focus} variant="focus" messages={messages}>
      {focusAreas.map((area) => (
        <li key={area} className="marquee-item">
          <span>{area}</span>
          <SparkleIcon size={12} weight="fill" aria-hidden="true" focusable="false" />
        </li>
      ))}
    </Marquee>
  );
}
