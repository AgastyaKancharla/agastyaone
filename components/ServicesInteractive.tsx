'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const PROBLEMS = [
  { id: 'invisible',  label: "Patients can't find me online" },
  { id: 'noshows',   label: 'Too many no-shows'             },
  { id: 'retention', label: "Patients don't come back"      },
  { id: 'manual',    label: 'Too much manual work'          },
] as const;

type ProblemId = typeof PROBLEMS[number]['id'];

type Service = {
  id: string;
  title: string;
  href: string;
  icon: string;
  tagline: string;
  angles: Partial<Record<ProblemId, { stat: string; outcome: string }>>;
  primary: ProblemId[];
};

const SERVICES: Service[] = [
  {
    id: 'website',
    title: 'Dental Website',
    href: '/dental-website-development',
    icon: '🌐',
    tagline: 'A website that earns patient trust before they ever call.',
    angles: {
      invisible:  { stat: '< 60 sec',  outcome: 'Patients judge your clinic in under a minute online — a professional site wins that moment.' },
      noshows:    { stat: '↑ 40%',     outcome: 'Clear service pages and a WhatsApp button filter serious patients from tyre-kickers.' },
      retention:  { stat: '3×',        outcome: 'A strong doctor profile and reviews page keeps your clinic top-of-mind when patients search again.' },
      manual:     { stat: '24 / 7',    outcome: 'Your site answers patient questions and collects enquiries while your team focuses on care.' },
    },
    primary: ['invisible'],
  },
  {
    id: 'gbp',
    title: 'Google Business Profile',
    href: '/dental-seo-services',
    icon: '📍',
    tagline: 'Own your neighbourhood on Google Maps.',
    angles: {
      invisible:  { stat: '#1',        outcome: 'An optimised GBP puts your clinic at the top of Maps when patients search nearby.' },
      noshows:    { stat: 'Intent',    outcome: 'Maps searchers are already ready to book — they just need to find you first.' },
      retention:  { stat: '50+ ★',    outcome: 'More reviews on your GBP means lapsed patients trust you when they return to search.' },
      manual:     { stat: 'Passive',   outcome: 'A well-managed GBP drives calls and directions without any ongoing manual effort.' },
    },
    primary: ['invisible'],
  },
  {
    id: 'seo',
    title: 'Local SEO',
    href: '/dental-seo-services',
    icon: '🔍',
    tagline: 'Rank when patients search "dentist near me" in Bengaluru.',
    angles: {
      invisible:  { stat: 'Page 1',    outcome: 'Treatment-specific pages ranked for your neighbourhood bring patients who are already searching.' },
      noshows:    { stat: 'Quality',   outcome: 'Organic search brings high-intent patients — far fewer casual enquiries that ghost you.' },
      retention:  { stat: 'Owned',     outcome: 'Unlike Practo, your Google ranking is an asset your clinic owns permanently.' },
      manual:     { stat: 'Compound',  outcome: 'Once rankings are built, they send patients every month with no extra work from you.' },
    },
    primary: ['invisible'],
  },
  {
    id: 'booking',
    title: 'Booking & Automation',
    href: '/dentist-appointment-software',
    icon: '📅',
    tagline: 'Fill your schedule. Stop chasing cancellations.',
    angles: {
      invisible:  { stat: '24 / 7',    outcome: 'Patients can book any time — even at midnight when they finally decide to act.' },
      noshows:    { stat: '↓ 60%',     outcome: 'Automated confirmation + reminder sequences cut no-shows dramatically.' },
      retention:  { stat: 'Waitlist',  outcome: 'When a slot opens, the next patient on your waitlist fills it automatically.' },
      manual:     { stat: '0 calls',   outcome: 'Your front desk stops managing appointments by phone and WhatsApp manually.' },
    },
    primary: ['noshows', 'manual'],
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Automation',
    href: '/dental-practice-automation',
    icon: '💬',
    tagline: 'Stay connected with every patient — automatically.',
    angles: {
      invisible:  { stat: '98%',       outcome: 'WhatsApp messages are opened by 98% of recipients — far more than any email or SMS.' },
      noshows:    { stat: '↓ 70%',     outcome: 'Reminders sent 24h and 2h before appointments slash no-shows without a single manual call.' },
      retention:  { stat: '6 mo',      outcome: 'Recall messages fire automatically when a patient is due for their next visit.' },
      manual:     { stat: '0 calls',   outcome: 'Every reminder, follow-up and recall runs on autopilot — nothing for your team to do.' },
    },
    primary: ['manual', 'noshows', 'retention'],
  },
  {
    id: 'reviews',
    title: 'Google Review Automation',
    href: '/dental-practice-automation',
    icon: '⭐',
    tagline: 'Build your reputation while you sleep.',
    angles: {
      invisible:  { stat: '3×',        outcome: 'Clinics with 50+ reviews get 3× more clicks on Google than those with fewer than 10.' },
      noshows:    { stat: 'Trust',      outcome: 'A strong review profile pre-qualifies patients — they arrive more committed and less likely to ghost.' },
      retention:  { stat: 'Recall',    outcome: 'A review request is also a touchpoint that reminds happy patients to book their next visit.' },
      manual:     { stat: 'Auto',      outcome: 'Review requests go out automatically after every visit — no one has to remember to ask.' },
    },
    primary: ['invisible', 'retention'],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function ServicesInteractive() {
  const [active, setActive] = useState<ProblemId | null>(null);

  return (
    <section style={{ background: '#F8F6F3', padding: '72px 0', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1rem, 5vw, 3rem)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <p style={{
            display: 'inline-block',
            background: '#FEE9D9', color: '#E86C2F',
            borderRadius: 999, padding: '4px 16px',
            fontSize: 13, fontWeight: 600, fontFamily: 'Poppins, sans-serif',
            marginBottom: 14,
          }}>
            🦷 For Dental Clinics
          </p>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(26px, 5vw, 42px)',
            fontWeight: 800, color: '#1A1A2E',
            margin: '0 0 10px', lineHeight: 1.2,
          }}>
            What's your biggest challenge?
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, margin: 0, lineHeight: 1.5 }}>
            Pick one — we'll show you exactly how we solve it.
          </p>
        </div>

        {/* Problem pills — 2×2 grid on mobile, row on desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 10,
          marginBottom: 40,
          maxWidth: 560,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          {PROBLEMS.map((p) => {
            const isActive = active === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActive(isActive ? null : p.id)}
                style={{
                  border: isActive ? '2px solid #E86C2F' : '2px solid #E5E7EB',
                  background: isActive ? '#E86C2F' : '#fff',
                  color: isActive ? '#fff' : '#1A1A2E',
                  borderRadius: 999,
                  padding: '11px 16px',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'Poppins, sans-serif',
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Service cards — 2 cols on mobile, 3 on desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 12,
        }}
          className="services-grid"
        >
          {SERVICES.map((svc) => {
            const angle = active ? svc.angles[active] : null;
            const isPrimary = active ? svc.primary.includes(active) : false;
            const isDimmed = active !== null && !isPrimary;

            return (
              <ServiceCard
                key={svc.id}
                svc={svc}
                angle={angle ?? null}
                isPrimary={isPrimary}
                isDimmed={isDimmed}
                hasSelection={active !== null}
              />
            );
          })}
        </div>

        {/* Bottom CTA — always in DOM, fades in to avoid layout shift */}
        <div style={{
          textAlign: 'center', marginTop: 36,
          opacity: active ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: active ? 'auto' : 'none',
          minHeight: 90,
        }}>
          <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 14 }}>
            Not sure where to start?
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#E86C2F', color: '#fff',
              borderRadius: 999, padding: '13px 28px',
              fontSize: 15, fontWeight: 700,
              fontFamily: 'Poppins, sans-serif',
              textDecoration: 'none',
            }}
          >
            Book a free 30-min call <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─── Individual Card ─────────────────────────────────────────────────────────

function ServiceCard({
  svc, angle, isPrimary, isDimmed, hasSelection,
}: {
  svc: Service;
  angle: { stat: string; outcome: string } | null;
  isPrimary: boolean;
  isDimmed: boolean;
  hasSelection: boolean;
}) {
  return (
    <Link
      href={svc.href}
      style={{
        display: 'flex', flexDirection: 'column',
        background: isPrimary ? '#1A1A2E' : '#fff',
        border: `2px solid ${isPrimary ? '#E86C2F' : isDimmed ? '#F0F0F0' : '#E5E7EB'}`,
        borderRadius: 16,
        padding: '18px 16px',
        textDecoration: 'none',
        opacity: isDimmed ? 0.35 : 1,
        transform: isPrimary ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        boxShadow: isPrimary
          ? '0 16px 48px rgba(232,108,47,0.2)'
          : hasSelection && !isDimmed
          ? '0 6px 20px rgba(26,26,46,0.09)'
          : '0 2px 8px rgba(26,26,46,0.05)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 160,
      }}
    >
      {/* Best match badge */}
      {isPrimary && (
        <div style={{
          position: 'absolute', top: 10, right: 10,
          background: '#E86C2F', color: '#fff',
          fontSize: 9, fontWeight: 700,
          letterSpacing: '0.07em', textTransform: 'uppercase',
          padding: '3px 8px', borderRadius: 999,
          fontFamily: 'Poppins, sans-serif',
        }}>
          Best match
        </div>
      )}

      {/* Icon */}
      <div style={{
        width: 38, height: 38, borderRadius: 10, marginBottom: 12,
        background: isPrimary ? 'rgba(232,108,47,0.2)' : '#FEE9D9',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 18, flexShrink: 0,
      }}>
        {svc.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: 13,
        fontWeight: 700,
        color: isPrimary ? '#fff' : '#1A1A2E',
        margin: '0 0 10px',
        lineHeight: 1.3,
      }}>
        {svc.title}
      </h3>

      {/* Body */}
      <div style={{ flex: 1 }}>
        {angle ? (
          <>
            <div style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 26, fontWeight: 800,
              color: '#E86C2F', lineHeight: 1, marginBottom: 6,
            }}>
              {angle.stat}
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.55, color: isPrimary ? 'rgba(255,255,255,0.7)' : '#6B7280', margin: 0 }}>
              {angle.outcome}
            </p>
          </>
        ) : (
          <p style={{ fontSize: 12, lineHeight: 1.55, color: '#6B7280', margin: 0 }}>
            {svc.tagline}
          </p>
        )}
      </div>

      {/* CTA */}
      <div style={{
        marginTop: 14,
        display: 'flex', alignItems: 'center', gap: 4,
        fontSize: 12, fontWeight: 600, color: '#E86C2F',
        fontFamily: 'Poppins, sans-serif',
      }}>
        Learn more <ArrowRight size={12} />
      </div>
    </Link>
  );
}
