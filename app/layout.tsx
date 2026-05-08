import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Gulf Digital Solutions",
    template: "%s | Gulf Digital Solutions",
  },
  description:
    "Modern digital solutions that help local businesses grow online.",
  keywords: [
    "web design UAE",
    "digital agency UAE",
    "business websites",
    "SEO services",
    "website development UAE",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}