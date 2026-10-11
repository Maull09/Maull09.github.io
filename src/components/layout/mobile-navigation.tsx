"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

type MobileNavigationProps = {
  items: { label: string; href: string }[];
  menuLabel: string;
  navigationLabel: string;
  children: ReactNode;
};

export function MobileNavigation({ items, menuLabel, navigationLabel, children }: MobileNavigationProps) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  function closeMenu() {
    if (menuRef.current) menuRef.current.open = false;
  }

  return (
    <details
      ref={menuRef}
      className="mobile-navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
          triggerRef.current?.focus();
        }
      }}
    >
      <summary ref={triggerRef} className="menu-trigger">{menuLabel}</summary>
      <nav aria-label={navigationLabel} className="mobile-links">
        {items.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
        ))}
      </nav>
      <div className="mobile-language-controls">{children}</div>
    </details>
  );
}
