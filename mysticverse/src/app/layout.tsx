import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MysticVerse - Your Portal to the Mystical",
  description: "Unlock the secrets of your destiny with MysticVerse, your trusted source for psychic readings, tarot, and astrology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
