import type { Metadata } from 'next';
import { PageRenderer } from '@/components/PageRenderer';
import { homePage } from '@/lib/site-data';

export const metadata: Metadata = {
  title: homePage.title,
  description: homePage.description,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    siteName: 'AgastyaOne',
    title: homePage.title,
    description: homePage.description,
    url: '/',
    images: ['/og-image.png']
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function Home() {
  return <PageRenderer page={homePage} schema />;
}
