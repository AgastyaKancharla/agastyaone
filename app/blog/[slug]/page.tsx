import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPost, getPosts } from '@/lib/blog';
import { Reveal } from '@/components/Reveal';

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      type: 'website',
      siteName: 'AgastyaOne',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: ['/og-image.png']
    },
    twitter: {
      card: 'summary_large_image'
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="full-bleed bg-warm">
      <div className="site-container max-w-3xl py-12 lg:py-20">
        <Reveal>
          <p className="font-heading text-sm font-semibold uppercase text-saffron">{post.category}</p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-charcoal">{post.title}</h1>
          <p className="mt-4 text-charcoal/60">{post.readTime}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="motion-card prose prose-lg mt-10 max-w-none rounded-brand bg-white p-7 shadow-card prose-headings:font-heading prose-headings:text-charcoal prose-a:text-saffron">
            <MDXRemote source={post.content} />
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div className="motion-card mt-8 rounded-brand bg-charcoal p-7 text-white">
            <h2 className="font-heading text-2xl font-bold">Need help implementing this?</h2>
            <p className="mt-3 text-white/75">Book a free 30 minute call with AgastyaOne.</p>
            <Link href="/contact" className="mt-5 inline-flex rounded-brand bg-yellow px-6 py-3 font-semibold text-charcoal">
              Book Free Call
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
