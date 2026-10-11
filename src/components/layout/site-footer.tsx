import { profile } from "@/content/profile";

export function SiteFooter({ backToTopLabel }: { backToTopLabel: string }) {
  return (
    <footer className="site-footer">
      <div className="site-container footer-content">
        <p>{profile.name}</p>
        <a href="#home">{backToTopLabel}</a>
      </div>
    </footer>
  );
}
