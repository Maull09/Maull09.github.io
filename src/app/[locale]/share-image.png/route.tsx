import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { getDictionary, hasLocale, locales } from "@/i18n";
import type { LocaleRouteProps } from "@/i18n";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: LocaleRouteProps) {
  const { locale } = await params;
  if (!hasLocale(locale)) return new Response(null, { status: 404 });

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: 64, backgroundColor: "#fafafa", color: "#1a1a1a" }}>
      <div style={{ display: "flex", fontSize: 24, color: "#525252", marginBottom: 36 }}>
        {getDictionary(locale).metadata.portfolioLabel}
      </div>
      <div style={{ display: "flex", fontSize: 66, fontWeight: 700, lineHeight: 1.15, maxWidth: 1040 }}>
        {profile.name}
      </div>
      <div style={{ display: "flex", fontSize: 32, marginTop: 24 }}>{profile.role}</div>
      <div style={{ display: "flex", fontSize: 25, lineHeight: 1.5, color: "#525252", marginTop: 28, paddingTop: 28, borderTop: "1px solid #e0e0e0" }}>
        {profile.introduction[locale]}
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
