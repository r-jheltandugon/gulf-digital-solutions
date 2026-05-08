"use client";

import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Analytics />
    </ThemeProvider>
  );
}