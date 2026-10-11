"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { getServerTheme, getTheme, subscribeToTheme, toggleTheme } from "@/theme/theme";
import type { Dictionary } from "@/i18n";

export function ThemeToggle({ messages }: { messages: Dictionary["theme"] }) {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);
  const label = theme === "dark" ? messages.switchToLight : messages.switchToDark;
  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={label} title={label}>
      <span className="theme-action-dark"><MoonIcon size={20} weight="regular" aria-hidden="true" focusable="false" /></span>
      <span className="theme-action-light"><SunIcon size={20} weight="regular" aria-hidden="true" focusable="false" /></span>
    </button>
  );
}
