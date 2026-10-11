import { navigation, profile } from "@/content/profile";
import { MobileNavigation } from "./mobile-navigation";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import type { Dictionary, Locale } from "@/i18n";

export function SiteHeader({ locale, messages }: { locale: Locale; messages: Dictionary }) {
  const items = navigation.map((item) => ({ href: item.href, label: messages.navigation[item.key] }));
  return (
    <header className="site-header">
      <div className="site-container header-content">
        <a href="#home" className="brand" aria-label={profile.name}>{profile.shortName}</a>
        <div className="header-actions">
          <nav aria-label={messages.controls.mainNavigation} className="desktop-navigation">
            {items.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <LanguageSwitcher locale={locale} label={messages.controls.language} />
        </div>
        <ThemeToggle messages={messages.theme} />
        <MobileNavigation
          items={items}
          menuLabel={messages.controls.menu}
          navigationLabel={messages.controls.mobileNavigation}
        >
          <LanguageSwitcher locale={locale} label={messages.controls.language} />
        </MobileNavigation>
      </div>
    </header>
  );
}
