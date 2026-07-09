import type { MetadataRoute } from 'next';
import { allPages } from '@/lib/site-data';
import { getPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://agastyaone.com';

  const pageUrls = allPages.map((page) => ({
    url: page.slug === '' ? base : `${base}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page.slug === '' ? 1.0 : page.slug === 'dental-solutions' ? 0.9 : 0.8,
  }));

  const staticUrls = [
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/blog`,    lastModified: new Date(), changeFrequency: 'weekly'  as const, priority: 0.6 },
    { url: `${base}/about`,   lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ];

  const blogUrls = getPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...pageUrls, ...staticUrls, ...blogUrls];
}

