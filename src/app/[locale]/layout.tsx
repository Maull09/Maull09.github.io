import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Lora, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, locales } from "@/i18n";
import type { LocaleRouteProps } from "@/i18n";
import { portfolioMetadata } from "@/seo/portfolio";
import { themeInitializationScript } from "@/theme/theme";
import "../globals.css";

const lora = Lora({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--font-lora", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-manrope", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleRouteProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  return portfolioMetadata(locale);
}

export default async function RootLayout({ children, params }: LocaleRouteProps & { children: ReactNode }) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  return (
    <html lang={locale} className={`${lora.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
        <noscript><style>{".theme-toggle { display: none; }"}</style></noscript>
        <noscript><style>{".marquee { grid-template-columns: minmax(0, 1fr); } .marquee .marquee-track { animation: none; width: auto; } .marquee .marquee-track > .marquee-group { flex-wrap: wrap; width: 100%; min-width: 0; } .marquee .marquee-copy, .marquee .marquee-toggle { display: none; }"}</style></noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
