import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';
import { GlobalActions } from '@/components/GlobalActions';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  metadataBase: new URL('https://agastyaone.com'),
  title: {
    default: 'AgastyaOne | Restaurant and Dental Digital Solutions in Bangalore',
    template: '%s'
  },
  description:
    'Websites, CRM, SEO and automation for restaurants and dental clinics in Bangalore.',
  openGraph: {
    type: 'website',
    siteName: 'AgastyaOne',
    images: ['/og-image.png']
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'AgastyaOne',
              description: 'Restaurant and dental digital solutions in Bengaluru — websites, CRM, SEO and automation',
              url: 'https://agastyaone.com',
              email: 'hello@agastyaone.com',
              telephone: '+91-XXXXXXXXXX',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Kumaraswamy Layout',
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                postalCode: '560078',
                addressCountry: 'IN'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '12.9082',
                longitude: '77.5717'
              },
              areaServed: [
                'Koramangala',
                'Indiranagar',
                'Jayanagar',
                'HSR Layout',
                'Whitefield',
                'Bengaluru'
              ],
              sameAs: ['https://agastyaone.com']
            })
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <GlobalActions />
      </body>
    </html>
  );
}
