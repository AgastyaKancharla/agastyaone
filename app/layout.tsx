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
  preload: true,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
});

const GA_ID = 'G-541227762';

export const metadata: Metadata = {
  metadataBase: new URL('https://agastyaone.vercel.app'),
  title: {
    default: 'AgastyaOne | Practice Growth Systems for Dental Clinics in Bengaluru',
    template: '%s'
  },
  description:
    'AgastyaOne builds the booking system, Google visibility, and WhatsApp follow-up that fills a dental chair — built exclusively for dental clinics in Bengaluru (Bangalore). Proven on a real clinic.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    siteName: 'AgastyaOne',
    title: 'AgastyaOne | Practice Growth Systems for Dental Clinics in Bengaluru',
    description:
      'AgastyaOne builds the booking system, Google visibility, and WhatsApp follow-up that fills a dental chair — built exclusively for dental clinics in Bengaluru (Bangalore).',
    url: 'https://agastyaone.vercel.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AgastyaOne — Practice Growth Systems for Dental Clinics in Bengaluru'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgastyaOne | Practice Growth Systems for Dental Clinics in Bengaluru',
    description:
      'Practice growth systems built exclusively for dental clinics in Bengaluru. Get Found. Get Booked. Get Them Back.',
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
              description: 'Practice growth systems for dental clinics in Bengaluru — booking systems, Google visibility, and WhatsApp follow-up built exclusively for dentists',
              url: 'https://agastyaone.vercel.app',
              email: 'kancharlaagastya@gmail.com',
              telephone: '+91-8951553531',
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
              sameAs: ['https://agastyaone.vercel.app']
            })
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <GlobalActions />

        {/* Google Analytics GA4 — loaded only after first user interaction or 4s idle,
            whichever comes first, so it never competes with LCP/initial render */}
        <Script id="ga4-delayed-load" strategy="afterInteractive">
          {`
            (function() {
              var loaded = false;
              function loadGA() {
                if (loaded) return;
                loaded = true;
                var s = document.createElement('script');
                s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
                s.async = true;
                document.head.appendChild(s);
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              }
              var events = ['scroll', 'mousemove', 'touchstart', 'keydown', 'click'];
              events.forEach(function(e) {
                window.addEventListener(e, loadGA, { once: true, passive: true });
              });
              setTimeout(loadGA, 4000);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
