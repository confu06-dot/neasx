import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEASX",
  description:
    "AI products for real work. One ecosystem for writing, chat, agents, creative, voice and vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}