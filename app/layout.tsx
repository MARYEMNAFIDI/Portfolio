import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Maryem Nafidi — Data, software & idées",
    template: "%s — Maryem Nafidi",
  },
  description:
    "Maryem Nafidi, ingénieure en informatique, Data Scientist et développeuse IA. Agents LLM, chatbots métiers et expériences digitales sectorielles.",
  openGraph: {
    title: "Maryem Nafidi — Data, software & idées",
    description:
      "Ingénieure en informatique et développeuse IA : agents LLM, chatbots métiers, data science et produits digitaux.",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#111a2b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
