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
    title: `${post.title} | AgastyaOne Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      siteName: 'AgastyaOne',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: ['/og-image.png'],
    },
    twitter: { card: 'summary_large_image' },
  };
}

/* ── Custom MDX components ─────────────────────────── */
const mdxComponents = {
  // H2 — section header with orange left bar
  h2: ({ children }: { children: React.ReactNode }) => (
    <div className="mt-10 mb-4 flex items-start gap-3">
      <div className="mt-1 h-6 w-1 shrink-0 rounded-full bg-[#E86C2F]" />
      <h2 className="font-heading text-xl font-bold leading-snug text-[#1A1A2E]">
        {children}
      </h2>
    </div>
  ),

  // H3 — sub-section
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="mt-7 mb-3 font-heading text-lg font-semibold text-[#1A1A2E]">
      {children}
    </h3>
  ),

  // Paragraph — readable line length, good spacing
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-5 text-base leading-8 text-gray-700">{children}</p>
  ),

  // Strong — orange highlight instead of generic bold
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-[#1A1A2E]">{children}</strong>
  ),

  // Blockquote — styled as a pull-quote callout
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <div className="my-8 rounded-2xl border-l-4 border-[#E86C2F] bg-orange-50 px-6 py-5">
      <div className="font-heading text-3xl leading-none text-[#E86C2F] opacity-60 mb-1">"</div>
      <div className="text-base font-medium leading-7 text-orange-900">{children}</div>
    </div>
  ),

  // Unordered list
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="mb-6 mt-3 grid gap-2.5">{children}</ul>
  ),

  // Ordered list
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="mb-6 mt-3 grid gap-2.5 list-none">{children}</ol>
  ),

  // List item — with orange tick
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#E86C2F]" />
      <span className="text-base leading-7 text-gray-700">{children}</span>
    </li>
  ),

  // Horizontal rule — section divider with CTA
  hr: () => (
    <div className="my-10 rounded-2xl bg-[#1A1A2E] px-6 py-7 text-white">
      <p className="font-heading text-lg font-bold">Want this set up for your clinic?</p>
      <p className="mt-2 text-sm text-white/60">
        We implement this for dental clinics in Bengaluru. Book a free call and we will show you exactly how it works.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#E86C2F] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Book a Free Call →
        </Link>
        <a
          href={`https://wa.me/918328443057?text=${encodeURIComponent('Hi Agastya, I read your blog and want to discuss this for my clinic.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  ),

  // Code — styled as WhatsApp message bubble
  code: ({ children }: { children: React.ReactNode }) => (
    <span className="rounded-md bg-orange-50 px-2 py-0.5 font-mono text-sm text-orange-800">
      {children}
    </span>
  ),

  // Pre — full WhatsApp message block
  pre: ({ children }: { children: React.ReactNode }) => (
    <div className="my-6 overflow-hidden rounded-2xl border border-green-100 bg-[#ECF9F1]">
      <div className="flex items-center gap-2 border-b border-green-100 bg-[#25D366] px-4 py-2.5">
        <svg viewBox="0 0 24 24" fill="white" width="14" height="14">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="text-xs font-semibold text-white">WhatsApp Message Example</span>
      </div>
      <div className="px-4 py-4">
        <div className="inline-block max-w-xs rounded-2xl rounded-tl-none bg-white px-4 py-3 shadow-sm">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-6 text-gray-800">{children}</pre>
          <p className="mt-1.5 text-right text-xs text-gray-400">10:24 AM ✓✓</p>
        </div>
      </div>
    </div>
  ),
};

/* ── Stat callout extracted from text ──────────────── */
function StatCallout({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="my-8 flex items-center gap-5 rounded-2xl border border-orange-100 bg-orange-50 px-6 py-5">
      <span className="font-heading text-5xl font-black text-[#E86C2F]">{stat}</span>
      <p className="text-sm font-medium leading-6 text-orange-900">{label}</p>
    </div>
  );
}

/* ── Category emoji map ────────────────────────────── */
const CATEGORY_EMOJI: Record<string, string> = {
  'Dental Clinics': '🦷',
  'SEO': '🔍',
  'Websites': '💻',
  'CRM': '📊',
  'Automation': '⚡',
  'WhatsApp': '💬',
  'Bangalore': '📍',
};

/* ── Page ──────────────────────────────────────────── */
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const allPosts = getPosts();
  const related = allPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="full-bleed bg-warm">

      {/* ── Hero ── */}
      <div className="full-bleed border-b border-gray-100 bg-white">
        <div className="site-container max-w-3xl py-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-[#E86C2F]"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className="mt-5 flex items-center gap-3">
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
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {post.readTime} read
            </span>
            <span className="flex items-center gap-1.5">
              <Tag size={13} /> {post.category}
            </span>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="site-container max-w-3xl py-10">
        <div className="rounded-2xl bg-white px-6 py-8 shadow-card md:px-10 md:py-10">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* ── Key takeaway box ── */}
        <div className="mt-8 rounded-2xl border-2 border-[#E86C2F]/20 bg-white p-7 shadow-card">
          <div className="flex items-center gap-3 mb-4">
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
              href={`https://wa.me/918328443057?text=${encodeURIComponent(`Hi Agastya, I read your article on "${post.title}" and want to discuss this for my clinic.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] px-5 py-2.5 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── Related articles ── */}
        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="font-heading text-xl font-bold text-[#1A1A2E] mb-5">Related Articles</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map(p => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
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
