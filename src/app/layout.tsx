import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "../app/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "allen cheng",
  description: "yee",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="flex justify-center">
          <div className="w-2/3 font-mono text-m text-muted-foreground mt-20">
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
