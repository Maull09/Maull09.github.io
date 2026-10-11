import { moments } from "@/content/moments";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import type { Locale } from "@/i18n";

export function MomentsSection({ title, locale }: { title: string; locale: Locale }) {
  if (moments.length === 0) return null;
  return (
    <Section id="moments" title={title}>
      <div className="moments-grid">
        {moments.map((moment) => (
          <figure key={moment.id} className="moment">
            <div className="moment-frame">
              <Image
                className="moment-photo"
                src={moment.image.src}
                alt={moment.image.alt[locale]}
                width={moment.image.width}
                height={moment.image.height}
                sizes="(min-width: 1104px) 508px, (min-width: 768px) calc((100vw - 88px) / 2), calc(100vw - 40px)"
              />
            </div>
            <figcaption>
              {moment.year && <span className="moment-year">{moment.year}</span>}
              <span className="moment-caption">{moment.caption[locale]}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
