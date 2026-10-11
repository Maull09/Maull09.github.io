export type Theme = "light" | "dark";

let themePreference: Theme | "system" | null = null;

export const themeInitializationScript = `(() => {
  const root = document.documentElement;
  let saved;
  try { saved = localStorage.getItem("portfolio-theme"); } catch {}
  const manual = saved === "light" || saved === "dark";
  root.dataset.themePreference = manual ? saved : "system";
  root.dataset.theme = manual ? saved : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
})();`;

export function initializeTheme() {
  const root = document.documentElement;
  if (themePreference === null) {
    let saved = root.dataset.themePreference;
    if (!saved) {
      try { saved = localStorage.getItem("portfolio-theme") ?? undefined; } catch {}
    }
    themePreference = saved === "light" || saved === "dark" ? saved : "system";
  }
  root.dataset.themePreference = themePreference;
  root.dataset.theme = themePreference === "system"
    ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : themePreference;
}

export function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function getServerTheme(): Theme {
  return "light";
}

export function toggleTheme() {
  const theme = getTheme() === "dark" ? "light" : "dark";
  themePreference = theme;
  document.documentElement.dataset.themePreference = theme;
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem("portfolio-theme", theme); } catch {}
}

export function subscribeToTheme(onChange: () => void) {
  initializeTheme();
  const root = document.documentElement;
  const media = matchMedia("(prefers-color-scheme: dark)");
  const observer = new MutationObserver(onChange);
  observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

  function followSystemTheme() {
    if (themePreference === "system") {
      root.dataset.theme = media.matches ? "dark" : "light";
    }
  }

  media.addEventListener("change", followSystemTheme);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", followSystemTheme);
  };
}
