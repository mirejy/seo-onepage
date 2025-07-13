import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Beauty Secrets JuliaSun — Botox e Cosmetologia a Collemontanino PI',
  description:
    'Specialista in trattamenti di botox (tossina botulinica), ringiovanimento viso e servizi estetici a Collemontanino (PI). Prenota una consulenza personalizzata.',
  openGraph: {
    title: 'Beauty Secrets JuliaSun — Botox e Cosmetologia',
    description:
      'Esperta in botox, filler e trattamenti di cosmetologia naturale a Collemontanino PI. Prenota ora.',
    url: 'https://tuo-dominio.it/',
    siteName: 'Beauty Secrets JuliaSun',
    images: [
      {
        url: 'https://tuo-dominio.it/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beauty Secrets JuliaSun',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Secrets JuliaSun — Botox e Cosmetologia',
    description:
      'Esperta in botox e trattamenti estetici a Collemontanino PI. Prenota la tua consulenza!',
    images: ['https://tuo-dominio.it/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
