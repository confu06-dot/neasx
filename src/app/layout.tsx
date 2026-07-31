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
  title: "NEASX Labs",
  description:
    "Building modern software for startups and businesses.",
  keywords: [
    "Software Development",
    "Web Development",
    "AI",
    "Automation",
    "Python",
    "FastAPI",
    "Next.js",
    "NEASX Labs",
  ],
  authors: [
    {
      name: "NEASX Labs",
    },
  ],
  creator: "NEASX Labs",
  openGraph: {
    title: "NEASX Labs",
    description:
      "Building modern software for startups and businesses.",
    siteName: "NEASX Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEASX Labs",
    description:
      "Building modern software for startups and businesses.",
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