import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';
import { GlobalActions } from '@/components/GlobalActions';
import { Header } from '@/components/Header';
import Script from 'next/script';

const GA_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID

export const metadata: Metadata = {
  metadataBase: new URL('https://agastyaone.com'),
  title: {
    default: 'AgastyaOne | Dental & Restaurant Tech in Bengaluru',
    template: '%s'
  },
  description:
    'Websites, CRM, SEO and automation for dental clinics and restaurants in Bengaluru. Built by someone who has run real businesses. Book a free 30 min call.',
  openGraph: {
    type: 'website',
    siteName: 'AgastyaOne',
    title: 'AgastyaOne | Dental & Restaurant Tech in Bengaluru',
    description:
      'Websites, CRM, SEO and automation for dental clinics and restaurants in Bengaluru. Built by someone who has run real businesses.',
    url: 'https://agastyaone.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AgastyaOne — Dental & Restaurant Tech in Bengaluru'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgastyaOne | Dental & Restaurant Tech in Bengaluru',
    description:
      'Websites, CRM, SEO and automation for dental clinics and restaurants in Bengaluru.',
    images: ['/og-image.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="W05c83XlGJch8hKnLcEltxSbYEgYAcSBtuE29jGqjNs" />
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
              description: 'Dental and restaurant digital solutions in Bengaluru — websites, CRM, SEO and automation',
              url: 'https://agastyaone.com',
              email: 'hello@agastyaone.com',
              telephone: '+91-8328443057',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Nayak Layout, 8th Phase, J. P. Nagar',
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                postalCode: '560076',
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
                'J. P. Nagar',
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

        {/* Google Analytics GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
