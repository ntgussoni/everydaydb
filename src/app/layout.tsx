import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Inter as FontSans, Source_Code_Pro } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/lib/utils";
import { Navbar } from "./Navbar";
import type { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  icons: [{ rel: "icon", url: "/favicon.svg" }],
  title: "everydayDB - Easy data store API for everyone",
  description: "Data store API for makers, developers, or anyone.",
  openGraph: {
    title: "everydayDB - Easy data store API for everyone",
    description: "Data store API for makers, developers, or anyone.",
    type: "article",
    url: "https://everydaydb.com/",
    images: [
      {
        url: "https://everydaydb.com/api/og?title=everydayDB - Easy data store API for everyone&description=Data store API for makers, developers, or anyone.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "everydayDB - Easy data store API for everyone",
    description: "Data store API for makers, developers, or anyone.",
    images: [
      "https://everydaydb.com/api/og?title=everydayDB - Easy data store API for everyone&description=Data store API for makers, developers, or anyone.",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <TRPCReactProvider>
          {children}
          <Analytics />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
