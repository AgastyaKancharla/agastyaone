import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';
import { GlobalActions } from '@/components/GlobalActions';
import { Header } from '@/components/Header';
import Script from 'next/script';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const GA_ID = 'G-541227762';

export const metadata: Metadata = {
  metadataBase: new URL('https://agastyaone.com'),
  title: {
    default: 'AgastyaOne | Dental Digital Solutions in Bengaluru',
    template: '%s'
  },
  description:
    'Websites, CRM, SEO and automation for dental clinics in Bengaluru. Built by someone who has built real dental systems. Book a free 30 min call.',
  openGraph: {
    type: 'website',
    siteName: 'AgastyaOne',
    title: 'AgastyaOne | Dental Digital Solutions in Bengaluru',
    description:
      'Websites, CRM, SEO and automation for dental clinics in Bengaluru. Built by someone who has built real dental systems.',
    url: 'https://agastyaone.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AgastyaOne — Dental Digital Solutions in Bengaluru'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgastyaOne | Dental Digital Solutions in Bengaluru',
    description:
      'Websites, CRM, SEO and automation for dental clinics in Bengaluru.',
    images: ['/og-image.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="google-site-verification" content="W05c83XlGJch8hKnLcEltxSbYEgYAcSBtuE29jGqjNs" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'AgastyaOne',
              description: 'Dental digital solutions in Bengaluru — websites, CRM, SEO and automation for dental clinics',
              url: 'https://agastyaone.com',
              email: 'hello@agastyaone.com',
              telephone: '+91-8328444057',
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

        {/* Google Analytics GA4 — deferred until browser is idle, doesn't compete with rendering */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
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
