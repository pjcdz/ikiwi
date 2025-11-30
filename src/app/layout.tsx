import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/providers/lenis-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Kiwi Argentino | El Sabor del Atlántico Sur",
  description: "iKiwi - La mayor productora de kiwi de Argentina. Kiwis premium cultivados en Mar del Plata con certificación orgánica e Indicación Geográfica. Descubre el sabor auténtico del kiwi argentino.",
  keywords: ["kiwi argentino", "kiwi Mar del Plata", "kiwi orgánico", "iKiwi", "kiwi premium", "frutas Argentina"],
  authors: [{ name: "iKiwi" }],
  openGraph: {
    title: "Kiwi Argentino | El Sabor del Atlántico Sur",
    description: "Descubre el kiwi premium argentino cultivado en Mar del Plata. Calidad certificada con Indicación Geográfica.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <LenisProvider>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
