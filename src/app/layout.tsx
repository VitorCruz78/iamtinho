import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/content/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const description =
  "Vitor Luiz da Cruz (Tinho) é desenvolvedor Full Stack com 4 anos de experiência em aplicações web modernas, APIs e produtos em produção, com TypeScript, React, Next.js, Node.js e PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "Tinho — Full Stack Developer",
    template: "%s | Tinho",
  },
  description,
  applicationName: "Tinho",
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    "Vitor Luiz da Cruz",
    "Tinho",
    "Full Stack Developer",
    "Desenvolvedor Full Stack",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: profile.siteUrl,
    siteName: "Tinho",
    title: "Tinho — Full Stack Developer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinho — Full Stack Developer",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
        >
          Ir para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
