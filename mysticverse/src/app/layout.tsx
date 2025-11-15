import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/navigation";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: "MysticVerse - Your Portal to the Mystical",
  description: "Unlock the secrets of your destiny with MysticVerse, your trusted source for psychic readings, tarot, and astrology.",
  keywords: "tarot, astrology, psychic readings, fortune telling, divination, horoscope",
  authors: [{ name: "MysticVerse" }],
  openGraph: {
    title: "MysticVerse - Your Portal to the Mystical",
    description: "Experience world-class divination services and unlock your cosmic potential",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-cosmic-deep text-text-primary">
        <ErrorBoundary>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
          <ToastProvider />
        </ErrorBoundary>
      </body>
    </html>
  );
}
