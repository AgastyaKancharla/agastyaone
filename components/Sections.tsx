'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import type { CSSProperties } from 'react';
import { PANEL_SUBTITLES } from './HeroCRMPanel';

const HeroCRMPanelClient = dynamic(
  () => import('./HeroCRMPanel').then(m => m.HeroCRMPanel),
  { ssr: false }
);
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
  imageAlt,
  showCRM = false,
}: {
  title: string;
  subtitle: string;
  ctas: LinkItem[];
  imageAlt: string;
  showCRM?: boolean;
}) {
  const highlightedTitle = title.split('Dental Clinics');
  const [panelIdx, setPanelIdx] = React.useState(0);
  const displaySubtitle = showCRM ? PANEL_SUBTITLES[panelIdx] : subtitle;

  return (
    <section className="full-bleed overflow-hidden bg-gradient-to-br from-[#F8F6F3] to-white">
      <div className="dot-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className={"site-container relative grid items-center gap-10 py-14 md:py-20 lg:py-24 " + (showCRM ? "lg:grid-cols-[1fr_.95fr]" : "lg:grid-cols-[1.05fr_.95fr]")}>
        <Reveal>
          <p className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700">
            ✨ Bengaluru growth systems
          </p>
          <h1 className="font-heading text-5xl font-black leading-tight tracking-tight text-[#1A1A2E] md:text-7xl">
            {highlightedTitle.length > 1 ? (
              <>
                {highlightedTitle[0]}
                <span className="bg-gradient-to-r from-[#E86C2F] to-[#f59e0b] bg-clip-text text-transparent">
                  Dental Clinics
                </span>
                {highlightedTitle[1]}
              </>
            ) : (
              title
            )}
          </h1>
          <p key={panelIdx} className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg md:leading-8" style={{ animation: showCRM ? 'subtitleFade 0.4s ease' : undefined }}>
            {displaySubtitle}
          </p>

          {showCRM && (
            <div className="my-8 lg:hidden">
              <HeroCRMPanelClient onPanelChange={setPanelIdx} />
            </div>
          )}

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href={ctas[0].href} variant="primary">
              {ctas[0].label}
            </Button>
            {ctas[1] && (
              <a
                href={ctas[1].href}
                className="text-sm font-semibold text-gray-500 underline-offset-4 transition hover:text-[#E86C2F] hover:underline"
              >
                {ctas[1].label} →
              </a>
            )}
          </div>
        </Reveal>

        {showCRM && (
          <Reveal delay={160} className="hidden lg:block">
            <HeroCRMPanelClient onPanelChange={setPanelIdx} />
          </Reveal>
        )}

        {!showCRM && (
          <Reveal delay={160}>
            <DashboardHeroPanel alt={imageAlt} />
          </Reveal>
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: '@keyframes subtitleFade { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:none; } }' }} />
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
    <div className="full-bleed bg-white" id="testimonials">
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
        const isAudienceCard = section.title === 'Dental Clinics';
        return (
          <Reveal key={`${section.title}-${index}`} delay={index * 90}>
            <article className={`motion-card h-full rounded-2xl p-8 ${isAudienceCard ? 'border border-white/20 bg-white/10 text-white backdrop-blur' : 'border border-gray-100 bg-white shadow-card'}`}>
              {isAudienceCard && <div className="mb-5 text-5xl">🦷</div>}
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
  const stepExtras = [
    { emoji: '📞', tag: '30 minutes', tagColor: '#E86C2F' },
    { emoji: '🔍', tag: 'Before the call', tagColor: '#f59e0b' },
    { emoji: '⚡', tag: '7 – 14 days', tagColor: '#10B981' },
    { emoji: '📈', tag: 'Every month', tagColor: '#6366f1' },
  ];

  return (
    <div>
      {/* Steps grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const [title, body] = step.split(' — ');
          const extra = stepExtras[index] ?? { emoji: '✨', tag: '', tagColor: '#E86C2F' };
          return (
            <Reveal key={step} delay={index * 90}>
              <article className="relative flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-card transition hover:shadow-md hover:border-orange-100">
                {/* Step number badge */}
                <div className="absolute -top-3 -left-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#1A1A2E] font-heading text-xs font-black text-white shadow">
                  {index + 1}
                </div>
                {/* Emoji */}
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl shadow-sm"
                  style={{ background: `${extra.tagColor}18` }}
                >
                  {extra.emoji}
                </div>
                {/* Time tag */}
                <span
                  className="mb-3 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                  style={{ background: `${extra.tagColor}15`, color: extra.tagColor }}
                >
                  {extra.tag}
                </span>
                <h3 className="font-heading text-lg font-bold text-[#1A1A2E] leading-tight">{title}</h3>
                {body && <p className="mt-2 text-sm leading-6 text-gray-500">{body}</p>}
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* CTA row */}
      <Reveal delay={400}>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#E86C2F] px-8 py-3 font-heading text-sm font-semibold text-white shadow-md transition hover:bg-orange-600"
          >
            Book My Free Call →
          </a>
          <a
            href={`https://wa.me/918328443057?text=${encodeURIComponent('Hi Agastya, I want to book a free call to discuss growing my dental clinic.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#25D366] px-8 py-3 font-heading text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us Instead
          </a>
        </div>
      </Reveal>
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

const TICKER_ITEMS = [
  '🦷 Smile Studio · 31 new patients in 30 days',
  '⭐ WhitePearl Dental · 4.9 Google rating',
  '📅 Dr. Priya\'s Clinic · Booked out 3 weeks ahead',
  '📈 BrightSmile Bengaluru · 2× website traffic in 60 days',
  '💬 Nayak Dental · WhatsApp inquiries up 180%',
  '🏆 ClearBite Clinic · #1 on Google Maps in their area',
];

export function ContactStrip() {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <section className="full-bleed" id="contact-strip">
      {/* Ticker strip */}
      <div
        style={{
          background: '#1a1a2e',
          overflow: 'hidden',
          padding: '10px 0',
          borderBottom: '1px solid rgba(232,108,47,0.18)',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '3rem',
            width: 'max-content',
            animation: 'tickerScroll 28s linear infinite',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {repeated.map((item, i) => (
            <span
              key={i}
              style={{
                whiteSpace: 'nowrap',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#E86C2F',
                letterSpacing: '0.01em',
              }}
            >
              {item}
              <span style={{ marginLeft: '3rem', color: 'rgba(232,108,47,0.3)' }}>·</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes tickerScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            @keyframes tickerScroll { 0%,100% { transform: none; } }
          }
        `}</style>
      </div>

      {/* Main CTA */}
      <div className="gradient-pattern text-white">
        <div className="site-container py-20 md:py-28">
          <Reveal>
            {/* Hook question */}
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                marginBottom: '1.25rem',
              }}
            >
              🦷 Trusted by dental clinics across Bengaluru
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">
              More Chairs Filled.<br />Less Chasing.
            </h2>
            <p
              style={{
                marginTop: '1.25rem',
                maxWidth: '540px',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.88)',
              }}
            >
              Right now, someone in your area is searching{' '}
              <em style={{ fontStyle: 'normal', color: '#fff', fontWeight: 600 }}>
                &ldquo;dentist near me.&rdquo;
              </em>{' '}
              Are you the one they&rsquo;re finding?
            </p>

            {/* Inline stats */}
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              {[
                { num: '11+', label: 'clinics served' },
                { num: '34', label: 'avg new patients/mo' },
                { num: '4.8★', label: 'avg Google rating' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: '#fff',
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Buttons */}
          <Reveal delay={120}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="yellow">
                Book Your Free Call
              </Button>
              <a
                href="#testimonials"
                className="inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white transition"
                style={{
                  background: '#1a1a2e',
                  border: '2px solid rgba(255,255,255,0.12)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#242442';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#1a1a2e';
                }}
              >
                Talk to a Past Client
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function InfoPills() {
  const contacts = [
    {
      title: 'Call Us',
      text: '+91 83284 43057',
      sub: 'Mon–Sat, 9 AM – 7 PM',
      href: 'tel:+918328443057',
      color: '#1A1A2E',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 11.6 19.79 19.79 0 0 1 1.05 3 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
        </svg>
      ),
    },
    {
      title: 'WhatsApp',
      text: 'Message us directly',
      sub: 'Usually replies in under 1 hour',
      href: 'https://wa.me/918328443057?text=Hi%20Agastya%2C%20I%20run%20a%20dental%20clinic%20in%20Bangalore%20and%20would%20like%20to%20learn%20more.',
      color: '#25D366',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      title: 'Email',
      text: 'hello@agastyaone.com',
      sub: 'We reply within 4 hours',
      href: 'mailto:hello@agastyaone.com',
      color: '#E86C2F',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      title: 'Instagram',
      text: '@agastyaone',
      sub: 'DMs open for quick questions',
      href: 'https://instagram.com/agastyaone',
      color: '#E1306C',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
        </svg>
      ),
    },
    {
      title: 'LinkedIn',
      text: 'AgastyaOne',
      sub: 'Connect for B2B conversations',
      href: 'https://linkedin.com/company/agastyaone',
      color: '#0A66C2',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      title: 'Location',
      text: 'J. P. Nagar, Bengaluru',
      sub: 'Serving clinics across Bengaluru',
      href: 'https://maps.google.com/?q=JP+Nagar+Bengaluru',
      color: '#10B981',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {contacts.map((c, index) => (
        <Reveal key={c.title} delay={index * 60}>
          <a
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="motion-card group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-card transition hover:border-orange-100 hover:shadow-lg"
          >
            <span style={{ color: c.color }}>{c.icon}</span>
            <h3 className="mt-3 font-heading text-xl font-semibold text-[#1A1A2E] group-hover:text-[#E86C2F] transition">{c.title}</h3>
            <p className="mt-1 text-sm font-medium text-gray-700">{c.text}</p>
            <p className="mt-0.5 text-xs text-gray-400">{c.sub}</p>
          </a>
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
            I am Agastya. I have built a dental leads management system from scratch, worked with clinic owners across Bengaluru and sold digital solutions to dental practices across the city.

            I started AgastyaOne because every agency I encountered either did not understand how a clinic operates or did not care about results after the invoice was paid.

            At AgastyaOne, we only build what we would stake our own business on.
          </p>
          <p className="mt-6 font-heading text-lg font-semibold italic text-saffron">Agastya, Founder AgastyaOne</p>
        </div>
      </div>
    </div>
  );
}




