import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getPosts } from '@/lib/blog';
import { Hero, Section } from '@/components/Sections';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Blog | AgastyaOne — Insights For Dental Clinics in Bangalore',
  description:
    'Practical guides and honest advice for dental clinics in Bangalore. SEO, websites, CRM and automation insights from AgastyaOne.',
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    type: 'website',
    siteName: 'AgastyaOne',
    title: 'Blog | AgastyaOne — Insights For Dental Clinics in Bangalore',
    description:
      'Practical guides and honest advice for dental clinics in Bangalore. SEO, websites, CRM and automation insights from AgastyaOne.',
    url: '/blog',
    images: ['/og-image.png']
  },
  twitter: {
    card: 'summary_large_image'
  }
};

const filters = ['All', 'Dental Clinics', 'SEO', 'Websites', 'CRM', 'Automation', 'WhatsApp', 'Bangalore'];

export default function BlogPage() {
  const posts = getPosts();
  const featured = posts[0];
  const remaining = posts.slice(1);

  return (
    <>
      <Hero
        title="Insights For Dental Clinics in Bangalore That Want to Grow With Technology"
        subtitle="Practical guides, honest advice and real experience — no generic content, no fluff"
        ctas={[{ label: 'Book a Free Call', href: '/contact' }, { label: 'Browse Articles', href: '#articles' }]}
        imageAlt="AgastyaOne blog placeholder image"
      />
      <Section tint>
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter, index) => (
            <Reveal key={filter} delay={index * 45}>
              <button className="motion-card rounded-brand border border-charcoal bg-white px-6 py-3 text-sm font-semibold">
                {filter}
              </button>
            </Reveal>
          ))}
        </div>
      </Section>
      <section id="articles" className="full-bleed bg-warm">
        <div className="site-container grid gap-8 py-12 lg:grid-cols-[1fr_320px] lg:py-20">
          <div>
            {featured ? (
              <Reveal>
                <ArticleCard post={featured} featured />
              </Reveal>
            ) : (
              <Reveal>
                <div className="motion-card rounded-brand bg-white p-8 shadow-card">
                <p className="font-heading text-sm font-semibold uppercase text-saffron">MDX Ready</p>
                <h2 className="mt-3 font-heading text-3xl font-bold">No articles published yet</h2>
                <p className="mt-4 leading-7 text-charcoal/75">
                  Add `.mdx` files to `content/blog` with frontmatter for title, excerpt, category and readTime.
                </p>
                </div>
              </Reveal>
            )}
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {remaining.map((post, index) => (
                <Reveal key={post.slug} delay={index * 80}>
                  <ArticleCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-24 grid gap-5">
              <Reveal delay={120}>
                <div className="motion-card rounded-brand bg-white p-6 shadow-card">
                <h3 className="font-heading text-xl font-bold">Book a Free Call</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal/75">Get honest advice for your dental clinic in Bangalore.</p>
                <Link href="/contact" className="mt-5 inline-flex rounded-brand bg-saffron px-6 py-3 text-sm font-semibold text-white">
                  Book Now
                </Link>
                </div>
              </Reveal>
              <Reveal delay={220}>
                <div className="motion-card rounded-brand bg-white p-6 shadow-card">
                <h3 className="font-heading text-xl font-bold">Browse by Category</h3>
                <div className="mt-4 grid gap-2 text-sm">
                  {filters.slice(1).map((filter) => (
                    <span key={filter}>{filter}</span>
                  ))}
                </div>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function ArticleCard({ post, featured = false }: { post: ReturnType<typeof getPosts>[number]; featured?: boolean }) {
  return (
    <article className={`motion-card h-full rounded-brand bg-white p-6 shadow-card ${featured ? 'mb-0' : ''}`}>
      <p className="font-heading text-xs font-semibold uppercase text-saffron">{post.category}</p>
      <h2 className={`mt-3 font-heading font-bold text-charcoal ${featured ? 'text-3xl' : 'text-xl'}`}>{post.title}</h2>
      <p className="mt-3 line-clamp-2 leading-7 text-charcoal/75">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between text-sm">
        <span className="text-charcoal/60">{post.readTime}</span>
        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-semibold text-saffron">
          Read Article <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
