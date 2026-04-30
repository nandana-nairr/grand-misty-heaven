import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { SITE } from '@/lib/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: `${SITE.name} | Boutique Homestay in Madikeri, Coorg`,
  description: `${SITE.tagline}. Family-run boutique homestay on the Madikeri-Virajpet Road. Panoramic balconies, Coorg coffee, on-site Indian restaurant. Book direct: ${SITE.phone}.`,
  keywords: [
    'Grand Misty Heaven',
    'Madikeri hotel',
    'Coorg homestay',
    'boutique hotel Coorg',
    'Madikeri-Virajpet Road',
    'Mekeri stay',
    'Karnataka hill resort',
  ],
  openGraph: {
    title: `${SITE.name} | Boutique Homestay in Madikeri, Coorg`,
    description: SITE.tagline,
    type: 'website',
    locale: 'en_IN',
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Madikeri, Coorg`,
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org structured data — helps Google understand this is a hotel
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: SITE.name,
    description: SITE.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${SITE.addressLine1}, ${SITE.addressLine2}`,
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      postalCode: SITE.pincode,
      addressCountry: SITE.country,
    },
    telephone: SITE.phone,
    email: SITE.email,
    starRating: { '@type': 'Rating', ratingValue: '2' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
    },
    priceRange: '₹₹',
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-cream text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
