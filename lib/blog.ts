import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  content: string;
};

const blogDir = path.join(process.cwd(), 'content/blog');

export function getPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ''),
        title: data.title ?? file.replace(/\.mdx$/, ''),
        excerpt: data.excerpt ?? '',
        category: data.category ?? 'Bangalore',
        readTime: data.readTime ?? '5 min read',
        content
      };
    });
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}
