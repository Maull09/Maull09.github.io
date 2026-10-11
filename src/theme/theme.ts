export type Theme = "light" | "dark";

export const themeInitializationScript = `(() => {
  const root = document.documentElement;
  let saved;
  try { saved = localStorage.getItem("portfolio-theme"); } catch {}
  const manual = saved === "light" || saved === "dark";
  root.dataset.themePreference = manual ? saved : "system";
  root.dataset.theme = manual ? saved : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
})();`;

export function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function getServerTheme(): Theme {
  return "light";
}

export function toggleTheme() {
  const theme = getTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.themePreference = theme;
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem("portfolio-theme", theme); } catch {}
}

export function subscribeToTheme(onChange: () => void) {
  const root = document.documentElement;
  const media = matchMedia("(prefers-color-scheme: dark)");
  const observer = new MutationObserver(onChange);
  observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

  function followSystemTheme() {
    if (root.dataset.themePreference === "system") {
      root.dataset.theme = media.matches ? "dark" : "light";
    }
  }

  media.addEventListener("change", followSystemTheme);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", followSystemTheme);
  };
}
