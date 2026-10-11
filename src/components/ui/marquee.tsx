"use client";

import { useEffect, useRef, useState } from "react";
import { PauseIcon } from "@phosphor-icons/react/dist/csr/Pause";
import { PlayIcon } from "@phosphor-icons/react/dist/csr/Play";
import type { CSSProperties, ReactNode } from "react";
import type { Dictionary } from "@/i18n";

export function Marquee({ id, label, variant, messages, children }: {
  id: string;
  label: string;
  variant: "focus" | "tech";
  messages: Dictionary["motion"];
  children: ReactNode;
}) {
  const container = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLUListElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [loop, setLoop] = useState({ distance: 0, copies: 1 });
  const action = `${isPaused ? messages.resume : messages.pause}: ${label}`;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
    observer.observe(container.current!);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const distance = group.current!.getBoundingClientRect().width;
      if (distance === 0) return;
      setLoop({ distance, copies: Math.max(1, Math.ceil(viewport.current!.clientWidth / distance)) });
    });
    observer.observe(viewport.current!);
    observer.observe(group.current!);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={container} id={id} className={`marquee marquee-${variant}`} role="group"
      aria-label={label} data-visible={isVisible} data-paused={isPaused}
      style={{ "--marquee-distance": `${loop.distance}px` } as CSSProperties}>
      <div ref={viewport} className="marquee-viewport" id={`${id}-content`}>
        <div className="marquee-track">
          <ul ref={group} className="marquee-group">{children}</ul>
          {Array.from({ length: loop.copies }, (_, index) => (
            <ul key={index} className="marquee-group marquee-copy" aria-hidden="true">{children}</ul>
          ))}
        </div>
      </div>
      <button type="button" className="marquee-toggle" aria-controls={`${id}-content`}
        aria-label={action}
        aria-pressed={isPaused} onClick={() => setIsPaused((paused) => !paused)}>
        {isPaused
          ? <PlayIcon size={20} weight="regular" aria-hidden="true" focusable="false" />
          : <PauseIcon size={20} weight="regular" aria-hidden="true" focusable="false" />}
      </button>
    </div>
  );
}
