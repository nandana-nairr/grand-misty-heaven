import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Grand Misty Heaven · Boutique Hotel in Madikeri, Coorg',
  description:
    'A boutique homestay on the Madikeri-Virajpet Road. Mountain views, on-site Indian restaurant, free parking, 24-hour reception.',
  keywords: [
    'hotel madikeri',
    'coorg homestay',
    'boutique hotel coorg',
    'madikeri stay',
    'grand misty heaven',
  ],
  openGraph: {
    title: 'Grand Misty Heaven · Boutique Hotel in Madikeri, Coorg',
    description: 'Wake up above the clouds in a boutique homestay in Coorg.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grand Misty Heaven · Boutique Hotel in Madikeri, Coorg',
    description: 'Wake up above the clouds in a boutique homestay in Coorg.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
