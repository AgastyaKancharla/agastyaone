import type { MetadataRoute } from 'next';
import { allPages } from '@/lib/site-data';
import { getPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://agastyaone.vercel.app';
  const pageUrls = allPages.map((page) => ({
    url: `${base}/${page.slug}`.replace(/\/$/, ''),
    lastModified: new Date()
  }));
  const blogUrls = getPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date()
  }));
  return [...pageUrls, { url: `${base}/contact`, lastModified: new Date() }, { url: `${base}/blog`, lastModified: new Date() }, ...blogUrls];
}
