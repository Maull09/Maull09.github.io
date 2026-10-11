"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

export function Marquee({ id, label, variant, children }: {
  id: string;
  label: string;
  variant: "focus" | "tech";
  children: ReactNode;
}) {
  const container = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLUListElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loop, setLoop] = useState({ distance: 0, copies: 1 });

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    let active = true;
    const observer = new IntersectionObserver(([entry]) => {
      if (active && entry) setIsVisible(entry.isIntersecting);
    });
    observer.observe(element);
    return () => {
      active = false;
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const viewportElement = viewport.current;
    const groupElement = group.current;
    if (!viewportElement || !groupElement) return;
    let active = true;
    let distance = 0;
    const observer = new ResizeObserver((entries) => {
      if (!active) return;
      const measurement = entries.find((entry) => entry.target === groupElement);
      if (measurement) distance = measurement.borderBoxSize[0].inlineSize;
      if (distance === 0) return;
      setLoop({ distance, copies: Math.max(1, Math.ceil(viewportElement.clientWidth / distance)) });
    });
    observer.observe(viewportElement);
    observer.observe(groupElement, { box: "border-box" });
    return () => {
      active = false;
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={container} id={id} className={`marquee marquee-${variant}`} role="group"
      aria-label={label} data-visible={isVisible} tabIndex={0}
      style={{ "--marquee-distance": `${loop.distance}px` } as CSSProperties}>
      <div ref={viewport} className="marquee-viewport" id={`${id}-content`}>
        <div className="marquee-track">
          <ul ref={group} className="marquee-group">{children}</ul>
          {Array.from({ length: loop.copies }, (_, index) => (
            <ul key={index} className="marquee-group marquee-copy" aria-hidden="true">{children}</ul>
          ))}
        </div>
      </div>
    </div>
  );
}
