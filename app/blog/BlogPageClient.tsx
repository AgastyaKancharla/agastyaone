'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

// Category emoji map
const CATEGORY_EMOJI: Record<string, string> = {
  'All': '📚',
  'Dental Clinics': '🦷',
  'SEO': '🔍',
  'Websites': '💻',
  'CRM': '📊',
  'Automation': '⚡',
  'WhatsApp': '💬',
  'Bangalore': '📍',
};

const filters = ['All', 'Dental Clinics', 'SEO', 'Websites', 'CRM', 'Automation', 'WhatsApp', 'Bangalore'];

// We fetch posts client-side via a server component wrapper
// Since this is now client, we accept posts as props
export default function BlogPageClient({ posts }: { posts: { slug: string; title: string; excerpt: string; category: string; readTime: string }[] }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? posts
    : posts.filter(p => p.category === activeFilter);

  const featured = filtered[0];
  const remaining = filtered.slice(1);

  return (
    <div className="full-bleed">

      {/* ── Hero ── */}
      <section className="full-bleed bg-warm">
        <div className="site-container py-14 md:py-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#E86C2F]">
              ✦ Bengaluru growth systems
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-4 font-heading text-4xl font-black leading-tight text-[#1A1A2E] md:text-5xl">
              Insights For{' '}
              <span className="text-[#E86C2F]">Dental Clinics</span>{' '}
              in Bangalore
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-500">
              Practical guides, honest advice and real experience — no generic content, no fluff.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="#articles"
                className="inline-flex items-center gap-2 rounded-full bg-[#E86C2F] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600"
              >
                <BookOpen size={15} /> Browse Articles
              </Link>
              <a
                href={`https://wa.me/918951553531?text=${encodeURIComponent('Hi Agastya, I read your blog and want to discuss growing my dental clinic.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-500 underline-offset-4 transition hover:text-[#E86C2F] hover:underline"
              >
                Discuss your clinic growth →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Filter pills — horizontal scroll ── */}
      <div className="full-bleed border-b border-gray-100 bg-white">
        <div
          className="site-container flex gap-2 overflow-x-auto py-4"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? 'border-[#E86C2F] bg-[#E86C2F] text-white shadow-sm'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-orange-200 hover:text-[#E86C2F]'
              }`}
            >
              <span>{CATEGORY_EMOJI[filter] ?? '📌'}</span>
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* ── Articles ── */}
      <section id="articles" className="full-bleed bg-warm">
        <div className="site-container grid gap-8 py-10 lg:grid-cols-[1fr_300px] lg:py-16">

          <div>
            {filtered.length === 0 ? (
              <Reveal>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-card">
                  <p className="text-2xl">📭</p>
                  <h2 className="mt-3 font-heading text-xl font-bold text-[#1A1A2E]">No articles in this category yet</h2>
                  <p className="mt-2 text-sm text-gray-500">Try selecting a different filter above.</p>
                </div>
              </Reveal>
            ) : (
              <>
                {/* Featured */}
                {featured && (
                  <Reveal>
                    <ArticleCard post={featured} featured />
                  </Reveal>
                )}

                {/* Grid */}
                {remaining.length > 0 && (
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {remaining.map((post, index) => (
                      <Reveal key={post.slug} delay={index * 80}>
                        <ArticleCard post={post} />
                      </Reveal>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 grid gap-5">

              {/* WhatsApp CTA */}
              <Reveal delay={100}>
                <div className="overflow-hidden rounded-2xl bg-[#1A1A2E] p-6 shadow-xl">
                  <div className="mb-3 text-2xl">💬</div>
                  <h3 className="font-heading text-lg font-bold text-white">Talk to Agastya</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Get honest, specific advice for your dental clinic in Bengaluru — not a sales pitch.
                  </p>
                  <a
                    href={`https://wa.me/918951553531?text=${encodeURIComponent('Hi Agastya, I read your blog and want to discuss growing my dental clinic.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-500"
                  >
                    WhatsApp →
                  </a>
                  <Link
                    href="/contact"
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
                  >
                    Book a Call
                  </Link>
                </div>
              </Reveal>

              {/* Categories */}
              <Reveal delay={200}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                  <h3 className="font-heading text-base font-bold text-[#1A1A2E]">Browse by Topic</h3>
                  <div className="mt-4 grid gap-2">
                    {filters.slice(1).map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${
                          activeFilter === filter
                            ? 'bg-orange-50 text-[#E86C2F]'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-[#E86C2F]'
                        }`}
                      >
                        <span>{CATEGORY_EMOJI[filter]}</span>
                        {filter}
                        <span className="ml-auto text-xs text-gray-400">
                          {posts.filter(p => p.category === filter).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>

            </div>
          </aside>
        </div>
      </section>

    </div>
  );
}

function ArticleCard({ post, featured = false }: {
  post: { slug: string; title: string; excerpt: string; category: string; readTime: string };
  featured?: boolean;
}) {
  return (
    <article className={`group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition hover:border-orange-100 hover:shadow-md ${featured ? 'md:p-8' : ''}`}>
      <div className="flex items-center gap-2">
        <span className="text-sm">{CATEGORY_EMOJI[post.category] ?? '📌'}</span>
        <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#E86C2F]">
          {post.category}
        </span>
      </div>
      <h2 className={`mt-3 font-heading font-bold text-[#1A1A2E] transition group-hover:text-[#E86C2F] ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
        {post.title}
      </h2>
      <p className="mt-3 line-clamp-2 flex-1 text-sm leading-7 text-gray-500">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between text-sm">
        <span className="text-gray-400">{post.readTime} read</span>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 font-semibold text-[#E86C2F] transition hover:gap-2.5"
        >
          Read Article <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

