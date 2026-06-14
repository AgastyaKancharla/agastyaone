import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { getPost, getPosts } from '@/lib/blog';

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title + ' | AgastyaOne Blog',
    description: post.excerpt,
    alternates: { canonical: '/blog/' + post.slug },
    openGraph: {
      type: 'article',
      siteName: 'AgastyaOne',
      title: post.title,
      description: post.excerpt,
      url: '/blog/' + post.slug,
      images: ['/og-image.png'],
    },
    twitter: { card: 'summary_large_image' },
  };
}

const CATEGORY_EMOJI: Record<string, string> = {
  'Dental Clinics': '🦷',
  'SEO': '🔍',
  'Websites': '💻',
  'CRM': '📊',
  'Automation': '⚡',
  'WhatsApp': '💬',
  'Bangalore': '📍',
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const allPosts = getPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const waText = encodeURIComponent(
    'Hi Agastya, I read your article on ' + post.title + ' and want to discuss this for my clinic.'
  );

  return (
    <div className="full-bleed bg-warm">

      {/* Header */}
      <div className="full-bleed border-b border-gray-100 bg-white">
        <div className="site-container max-w-3xl py-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 transition hover:text-[#E86C2F]"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <div className="mt-5 flex items-center gap-2">
            <span className="text-lg">{CATEGORY_EMOJI[post.category] ?? '📌'}</span>
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#E86C2F]">
              {post.category}
            </span>
          </div>
          <h1 className="mt-3 font-heading text-3xl font-black leading-tight text-[#1A1A2E] md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-500">{post.excerpt}</p>
          <div className="mt-5 flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime} read</span>
            <span className="flex items-center gap-1.5"><Tag size={13} /> {post.category}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="site-container max-w-3xl py-10">
        <div className="rounded-2xl bg-white px-6 py-8 shadow-card md:px-10 md:py-10 article-body">
          <MDXRemote source={post.content} />
        </div>

        {/* CTA box */}
        <div className="mt-8 rounded-2xl border-2 border-[#E86C2F]/20 bg-white p-7 shadow-card">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-2xl">💡</span>
            <h3 className="font-heading text-lg font-bold text-[#1A1A2E]">Key Takeaway</h3>
          </div>
          <p className="text-base leading-7 text-gray-600">{post.excerpt}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E86C2F] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600"
            >
              Book a Free Call →
            </Link>
            <a
              href={'https://wa.me/918328444057?text=' + waText}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] px-5 py-2.5 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-5 font-heading text-xl font-bold text-[#1A1A2E]">Related Articles</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={'/blog/' + p.slug}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-card transition hover:border-orange-100 hover:shadow-md"
                >
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#E86C2F]">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-heading text-base font-bold leading-snug text-[#1A1A2E] transition group-hover:text-[#E86C2F]">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-400">{p.readTime} read</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
