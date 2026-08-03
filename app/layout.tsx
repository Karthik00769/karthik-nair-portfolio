import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { personal } from "@/lib/data";
import "./globals.css";

const siteUrl = "https://karthiknair.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} — Software Engineer`,
    template: `%s — ${personal.name}`,
  },
  description: personal.summary,
  keywords: [
    "Karthik Nair",
    "Software Engineer",
    "Backend Developer",
    "Cloud Computing",
    "Next.js Developer",
    "AI SaaS",
    "Portfolio",
  ],
  authors: [{ name: personal.name, url: siteUrl }],
  creator: personal.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personal.name} — Software Engineer`,
    description: personal.summary,
    siteName: `${personal.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — Software Engineer`,
    description: personal.summary,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-white font-sans text-ink-950 antialiased">
        {children}
      </body>
    </html>
  );
}
