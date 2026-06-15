import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HashScrollHandler from "@/components/HashScrollHandler";
import BackgroundEffects from "@/components/BackgroundEffects";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrainsMono",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plusJakarta",
});

export const metadata: Metadata = {
  title: "Uzair Riasat - Backend Developer & AI Engineer",
  description: "Portfolio of Uzair Riasat, a backend software developer specializing in Python, FastAPI, and AI agent systems. Explore projects, skills, and chat with the AI assistant.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Uzair Riasat - Backend Developer & AI Engineer",
    description: "Portfolio of Uzair Riasat, a backend software developer specializing in Python, FastAPI, and AI agent systems. Explore projects, skills, and chat with the AI assistant.",
    url: "https://uzairriasat.netlify.app",
    siteName: "Uzair Riasat",
    images: [
      {
        url: "https://uzairriasat.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Uzair Riasat - Backend Developer & AI Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzair Riasat - Backend Developer & AI Engineer",
    description: "Portfolio of Uzair Riasat, a backend software developer specializing in Python, FastAPI, and AI agent systems.",
    images: ["https://uzairriasat.netlify.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${jetbrainsMono.variable} ${plusJakarta.variable}`}>
        <BackgroundEffects />
        <Header />
        <HashScrollHandler />
        <main className="relative z-10 pt-[88px] xl:pt-[112px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
