import Link from 'next/link';
import type { CSSProperties } from 'react';
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle,
  Clock,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
  Zap,
  type LucideIcon
} from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';

export type LinkItem = { label: string; href: string };
export type TextBlock = { title?: string; body?: string; items?: string[]; links?: LinkItem[] };

const serviceIcons: Record<string, string> = {
  Website: '🌐',
  CRM: '📊',
  SEO: '🔍',
  WhatsApp: '💬',
  Loyalty: '⭐',
  Automation: '⚡'
};

function pillForTitle(title?: string, eyebrow?: string) {
  if (eyebrow) return eyebrow;
  if (!title) return '✨ AgastyaOne';
  if (title.includes('Restaurant')) return '🍽️ For Restaurants';
  if (title.includes('Dental') || title.includes('Clinic')) return '🦷 For Dental Clinics';
  if (title.includes('Offer') || title.includes('Need')) return '✨ Services';
  if (title.includes('Simple') || title.includes('Started')) return '⚡ How It Works';
  if (title.includes('FAQ')) return '💬 Questions';
  if (title.includes('Person') || title.includes('Entrepreneur')) return '✨ Our Story';
  return '✨ AgastyaOne';
}

export function Section({
  eyebrow,
  title,
  body,
  children,
  tint = false,
  dark = false
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  children?: React.ReactNode;
  tint?: boolean;
  dark?: boolean;
}) {
  const sectionBg = dark ? 'dark-pattern text-white' : tint ? 'bg-[#F8F6F3]' : 'bg-white';

  return (
    <section className={`full-bleed ${sectionBg}`}>
      <div className="site-container py-20 md:py-28">
        {(eyebrow || title || body) && (
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className={`mb-4 inline-flex items-center rounded-full px-4 py-1 text-sm font-medium ${dark ? 'bg-white/10 text-white' : 'bg-orange-100 text-orange-700'}`}>
              {pillForTitle(title, eyebrow)}
            </p>
            {title && <h2 className={`font-heading text-3xl font-bold md:text-5xl ${dark ? 'text-white' : 'text-[#1A1A2E]'}`}>{title}</h2>}
            {body && <p className={`mt-4 text-base leading-7 ${dark ? 'text-white/70' : 'text-gray-600'}`}>{body}</p>}
          </Reveal>
        )}
        {children && <Reveal delay={120}>{children}</Reveal>}
      </div>
    </section>
  );
}

export function Hero({
  title,
  subtitle,
  ctas,
  imageAlt
}: {
  title: string;
  subtitle: string;
  ctas: LinkItem[];
  imageAlt: string;
}) {
  const highlightedTitle = title.split('Restaurants and Dental Clinics');

  return (
    <section className="full-bleed overflow-hidden bg-gradient-to-br from-[#F8F6F3] to-white">
      <div className="dot-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="site-container relative grid items-center gap-10 py-20 md:py-24 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
        <Reveal>
          <p className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700">
            ✨ Bengaluru growth systems
          </p>
          <h1 className="font-heading text-5xl font-black leading-tight tracking-tight text-[#1A1A2E] md:text-7xl">
            {highlightedTitle.length > 1 ? (
              <>
                {highlightedTitle[0]}
                <span className="bg-gradient-to-r from-[#E86C2F] to-[#f59e0b] bg-clip-text text-transparent">
                  Restaurants and Dental Clinics
                </span>
                {highlightedTitle[1]}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">{subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {ctas.map((cta, index) => (
              <Button key={cta.href + cta.label} href={cta.href} variant={index === 0 ? 'primary' : 'secondary'}>
                {cta.label}
              </Button>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160}>
          <DashboardHeroPanel alt={imageAlt} />
        </Reveal>
      </div>
    </section>
  );
}

function DashboardHeroPanel({ alt }: { alt: string }) {
  const stats: Array<[string, string, LucideIcon]> = [
    ['500+', 'Patients Managed', CheckCircle],
    ['47', 'Google Reviews', Star],
    ['3x', 'More Bookings', Zap]
  ];

  return (
    <div
      role="img"
      aria-label={alt}
      className="rounded-2xl border border-white/20 bg-white/70 p-5 shadow-2xl backdrop-blur-sm"
    >
      <div className="rounded-2xl border border-white/40 bg-[linear-gradient(135deg,#1A1A2E_0%,#242442_58%,#11111f_100%)] p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="font-heading text-sm font-semibold text-saffron">AgastyaOne Growth OS</p>
            <p className="mt-1 text-xs text-white/55">Live pipeline dashboard</p>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-saffron" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#25D366]" />
          </div>
        </div>
        <svg viewBox="0 0 620 330" className="h-auto w-full" aria-hidden="true">
          <rect x="0" y="0" width="620" height="330" rx="22" fill="#ffffff" opacity=".08" />
          <rect x="26" y="28" width="130" height="274" rx="14" fill="#ffffff" opacity=".1" />
          <rect x="48" y="54" width="72" height="12" rx="6" fill="#E86C2F" />
          <rect x="48" y="92" width="84" height="10" rx="5" fill="#ffffff" opacity=".52" />
          <rect x="48" y="124" width="68" height="10" rx="5" fill="#ffffff" opacity=".34" />
          <rect x="48" y="156" width="92" height="10" rx="5" fill="#ffffff" opacity=".34" />
          <rect x="48" y="188" width="74" height="10" rx="5" fill="#ffffff" opacity=".34" />
          <rect x="186" y="28" width="184" height="108" rx="16" fill="#ffffff" opacity=".12" />
          <rect x="398" y="28" width="196" height="108" rx="16" fill="#ffffff" opacity=".12" />
          <rect x="186" y="166" width="408" height="136" rx="18" fill="#ffffff" opacity=".1" />
          <path className="dashboard-line dashboard-line-primary" d="M218 254 L276 214 L334 236 L392 188 L450 205 L542 178" fill="none" stroke="#E86C2F" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <path className="dashboard-line dashboard-line-secondary" d="M218 274 L276 246 L334 256 L392 232 L450 242 L542 226" fill="none" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity=".85" />
          <rect x="216" y="58" width="72" height="12" rx="6" fill="#ffffff" opacity=".55" />
          <rect x="216" y="86" width="118" height="18" rx="9" fill="#E86C2F" />
          <circle cx="442" cy="82" r="30" fill="#25D366" opacity=".9" />
          <path d="M430 82 l9 9 l18 -21" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="490" y="58" width="70" height="10" rx="5" fill="#ffffff" opacity=".48" />
          <rect x="490" y="86" width="54" height="10" rx="5" fill="#ffffff" opacity=".28" />
        </svg>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {stats.map(([number, label, Icon], index) => (
            <div key={label} className="motion-card rounded-2xl border border-white/10 bg-white/10 p-4 text-center text-white" style={{ '--card-index': index } as CSSProperties}>
              <Icon className="mx-auto mb-2 text-saffron" size={20} />
              <div className="font-heading text-2xl font-black">{number}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-widest text-white/60">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TrustBar({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div className="full-bleed bg-white">
      <div className="site-container grid gap-3 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <Reveal key={item} delay={index * 70}>
            <div className="flex items-center gap-3 text-sm font-medium text-charcoal">
              <CheckCircle className="shrink-0 text-saffron" size={18} />
              {item}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function iconForCard(title?: string) {
  const key = Object.keys(serviceIcons).find((item) => title?.includes(item));
  return key ? serviceIcons[key] : '✨';
}

export function CardGrid({ cards }: { cards: TextBlock[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <Reveal key={`${card.title}-${index}`} delay={index * 70}>
          <article className="motion-card flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-card hover:border-orange-100">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl text-orange-500">
              {iconForCard(card.title)}
            </div>
            {card.title && <h3 className="font-heading text-lg font-bold text-[#1A1A2E]">{card.title}</h3>}
            {card.body && <p className="mt-2 text-sm leading-6 text-gray-500">{card.body}</p>}
            {card.items && (
              <ul className="mt-5 grid gap-3">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-gray-600">
                    <CheckCircle className="mt-0.5 shrink-0 text-saffron" size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto pt-5">
              {card.links ? (
                card.links.map((link) => (
                  <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 text-sm font-semibold text-saffron">
                    {link.label} <ArrowRight size={16} />
                  </Link>
                ))
              ) : (
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-saffron" aria-label={card.title ? `Learn more about ${card.title}` : 'Learn more'}>
                  Learn More <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function TextSections({ sections }: { sections: TextBlock[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {sections.map((section, index) => {
        const isAudienceCard = section.title === 'Restaurants & Food Businesses' || section.title === 'Dental Clinics';
        return (
          <Reveal key={`${section.title}-${index}`} delay={index * 90}>
            <article className={`motion-card h-full rounded-2xl p-8 ${isAudienceCard ? 'border border-white/20 bg-white/10 text-white backdrop-blur' : 'border border-gray-100 bg-white shadow-card'}`}>
              {isAudienceCard && <div className="mb-5 text-5xl">{section.title?.includes('Dental') ? '🦷' : '🍽️'}</div>}
              {section.title && <h2 className={`font-heading text-xl font-semibold ${isAudienceCard ? 'text-white' : 'text-[#1A1A2E]'}`}>{section.title}</h2>}
              {section.body && <p className={`mt-4 whitespace-pre-line text-base leading-7 ${isAudienceCard ? 'text-white/70' : 'text-gray-600'}`}>{section.body}</p>}
              {section.items && (
                <ul className="mt-5 grid gap-3">
                  {section.items.map((item) => (
                    <li key={item} className={`flex gap-3 leading-7 ${isAudienceCard ? 'text-white/75' : 'text-gray-600'}`}>
                      <CheckCircle className="mt-1 shrink-0 text-saffron" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.links && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${isAudienceCard ? 'border border-white text-white hover:bg-white hover:text-[#1A1A2E]' : 'border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white'}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function Steps({ steps }: { steps: string[] }) {
  return (
    <div className="relative grid gap-8 md:grid-cols-4">
      <div className="absolute left-6 top-0 hidden h-full border-l-2 border-dashed border-orange-300 md:left-0 md:right-0 md:top-6 md:block md:h-0 md:border-l-0 md:border-t-2" />
      {steps.map((step, index) => {
        const [title, body] = step.split(' — ');
        return (
          <Reveal key={step} delay={index * 80}>
            <article className="relative h-full pl-16 md:pl-0 md:text-center">
              <div className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#E86C2F] font-heading text-lg font-bold text-white md:relative md:mx-auto">
                {index + 1}
              </div>
              <h3 className="mt-1 font-heading text-xl font-semibold text-[#1A1A2E] md:mt-6">{title}</h3>
              {body && <p className="mt-3 text-sm leading-6 text-gray-600">{body}</p>}
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item, index) => (
        <Reveal key={item.q} delay={index * 60}>
          <details className="motion-card mb-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
            <summary className="cursor-pointer font-heading font-semibold text-charcoal">{item.q}</summary>
            <p className="mt-3 leading-7 text-gray-600">{item.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

export function ContactStrip() {
  return (
    <section className="full-bleed gradient-pattern text-white">
      <div className="site-container flex flex-col gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-28">
        <Reveal>
          <p className="mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white">
            ✨ Ready when you are
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">Ready to Grow Your Business?</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
            Book a free 30 minute call. No pressure. No jargon. Just an honest conversation about what is possible.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="yellow">
              Book Your Free Call
            </Button>
            <Link href="/blog" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#E86C2F]">
              Read The Blog
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function InfoPills() {
  const items: Array<[string, string, LucideIcon]> = [
    ['WhatsApp', 'Message us directly', MessageCircle],
    ['Email', 'hello@agastyaone.com', Clock],
    ['Location', 'Kumaraswamy Layout, Bengaluru', MapPin]
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map(([title, text, Icon], index) => (
        <Reveal key={title} delay={index * 70}>
          <div className="motion-card h-full rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
            <Icon className="text-saffron" size={22} />
            <h3 className="mt-3 font-heading text-xl font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">{text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function CheckpointList({ items }: { items: string[] }) {
  return (
    <div className="mt-8 grid gap-3">
      {items.map((item) => (
        <div key={item} className="flex items-center rounded-2xl bg-white p-4 shadow-card">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <Check size={18} />
          </span>
          <span className="ml-3 font-heading font-bold text-[#1A1A2E]">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function WhyVisualCard() {
  return (
    <div className="rounded-2xl border border-white bg-white p-6 shadow-2xl">
      <div className="rounded-2xl bg-[#1A1A2E] p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-white/50">Growth signals</p>
            <h3 className="mt-2 font-heading text-2xl font-bold">Built from real operations</h3>
          </div>
          <BarChart3 className="text-saffron" size={34} />
        </div>
        <div className="mt-8 grid gap-4">
          {[
            ['5', 'Bengaluru neighbourhoods'],
            ['1', 'CRM built before selling'],
            ['100%', 'Operator-led strategy']
          ].map(([value, label]) => (
            <div key={label} className="flex items-center justify-between rounded-xl bg-white/10 p-4">
              <span className="text-sm text-white/65">{label}</span>
              <span className="font-heading text-2xl font-black text-saffron">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FounderCard() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-col gap-6 rounded-2xl border border-white/20 bg-white/10 p-8 text-white backdrop-blur md:flex-row">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-orange-500 font-heading text-3xl font-black text-white">
          A
        </div>
        <div>
          <div className="font-heading text-6xl font-black leading-none text-saffron">&quot;</div>
          <p className="whitespace-pre-line text-base leading-7 text-white/80">
            I am Agastya. I have run a cloud kitchen, built WeValue - a restaurant CRM - and sold digital solutions to clinics and restaurants across Bengaluru.

            I started AgastyaOne because every agency I encountered either did not understand operations or did not care about results after the invoice was paid.

            At AgastyaOne, we only build what we would stake our own business on.
          </p>
          <p className="mt-6 font-heading text-lg font-semibold italic text-saffron">Agastya, Founder AgastyaOne</p>
        </div>
      </div>
    </div>
  );
}
