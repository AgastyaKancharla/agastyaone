import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageRenderer } from '@/components/PageRenderer';
import { getPage, pages } from '@/lib/site-data';

export function generateStaticParams() {
  return pages
    .filter((page) => page.slug !== 'contact')
    .map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getPage(params.slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`
    },
    openGraph: {
      type: 'website',
      siteName: 'AgastyaOne',
      title: page.title,
      description: page.description,
      url: `/${page.slug}`,
      images: ['/og-image.png']
    },
    twitter: {
      card: 'summary_large_image'
    }
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const page = getPage(params.slug);
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
