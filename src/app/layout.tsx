import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/layout/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neasx.com"),
  title: {
    default: "NEASX — AI Products for Real Work",
    template: "%s | NEASX",
  },
  description:
    "NEASX builds intelligent AI products that automate repetitive work, accelerate ideas, and help people and businesses accomplish more. One ecosystem for writing, chat, agents, creative, voice and vision.",
  keywords: [
    "NEASX",
    "AI products",
    "AI writing",
    "AI chat",
    "AI agents",
    "AI ecosystem",
    "Artificial Intelligence",
    "AI tools",
    "Productivity",
    "Automation",
  ],
  authors: [
    {
      name: "NEASX",
    },
  ],
  creator: "NEASX",
  openGraph: {
    title: "NEASX — AI Products for Real Work",
    description:
      "One ecosystem for writing, chat, agents, creative, voice and vision. AI that gets work done.",
    url: "https://neasx.com",
    siteName: "NEASX",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEASX — AI Products for Real Work",
    description:
      "One ecosystem for writing, chat, agents, creative, voice and vision. AI that gets work done.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>

      <Background />

      {children}

    </body>
    </html>
  );
}