import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/theme-provider";
import { siteConfig } from "@/lib/seo";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  applicationName: "Gulf Digital Solutions",

  title: {
    default: "Gulf Digital Solutions",
    template: "%s | Gulf Digital Solutions",
  },

  icons: {
    icon: "/favicon.ico",
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: "Gulf Digital Solutions",
    },
  ],

  creator: "Gulf Digital Solutions",

  openGraph: {
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Gulf Digital Solutions",
      },
    ],
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Gulf Digital Solutions",
    description: siteConfig.description,
    siteName: "Gulf Digital Solutions",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gulf Digital Solutions",
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}