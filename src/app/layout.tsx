import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  variable: "--font-jetbrainsMono"
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
