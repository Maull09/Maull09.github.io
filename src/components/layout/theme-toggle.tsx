"use client";

import { useSyncExternalStore } from "react";
import { getServerTheme, getTheme, subscribeToTheme, toggleTheme } from "@/theme/theme";
import type { Dictionary } from "@/i18n";

export function ThemeToggle({ messages }: { messages: Dictionary["theme"] }) {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);
  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={theme === "dark" ? messages.switchToLight : messages.switchToDark}>
      <span className="theme-action-dark">{messages.dark}</span>
      <span className="theme-action-light">{messages.light}</span>
    </button>
  );
}
