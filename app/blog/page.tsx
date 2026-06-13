import type { Metadata } from 'next';
import { getPosts } from '@/lib/blog';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog | AgastyaOne — Insights For Dental Clinics in Bangalore',
  description:
    'Practical guides and honest advice for dental clinics in Bangalore. SEO, websites, CRM and automation insights from AgastyaOne.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    siteName: 'AgastyaOne',
    title: 'Blog | AgastyaOne — Insights For Dental Clinics in Bangalore',
    description:
      'Practical guides and honest advice for dental clinics in Bangalore. SEO, websites, CRM and automation insights from AgastyaOne.',
    url: '/blog',
    images: ['/og-image.png'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function BlogPage() {
  const posts = getPosts().map(({ slug, title, excerpt, category, readTime }) => ({
    slug, title, excerpt, category, readTime,
  }));
  return <BlogPageClient posts={posts} />;
}
