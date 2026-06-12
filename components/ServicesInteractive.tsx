'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const PROBLEMS = [
  { id: 'invisible',  label: 'Patients can\'t find me online' },
  { id: 'noshows',   label: 'Too many no-shows'              },
  { id: 'retention', label: 'Patients don\'t come back'      },
  { id: 'manual',    label: 'Too much manual work'           },
] as const;

type ProblemId = typeof PROBLEMS[number]['id'];

type Service = {
  id: string;
  title: string;
  href: string;
  icon: string;
  // default state
  tagline: string;
  // per-problem state: the stat + outcome shown when a problem is selected
  angles: Partial<Record<ProblemId, { stat: string; outcome: string }>>;
  // which problems this service is primary for
  primary: ProblemId[];
};

const SERVICES: Service[] = [
  {
    id: 'website',
    title: 'Website Development',
    href: '/dental-website-development',
    icon: '🌐',
    tagline: 'A website that builds trust before patients ever call.',
    angles: {
      invisible:  { stat: '< 60 sec',  outcome: 'Patients decide in under a minute — your site either earns trust or loses them.' },
      noshows:    { stat: '↑ 40%',     outcome: 'A clear site with WhatsApp booking reduces no-calls-back by filtering serious patients.' },
      retention:  { stat: '3×',        outcome: 'A professional profile page keeps your clinic top-of-mind when patients need care again.' },
      manual:     { stat: '24 / 7',    outcome: 'Your site handles first impressions so your team doesn\'t have to.' },
    },
    primary: ['invisible'],
  },
  {
    id: 'crm',
    title: 'Dental CRM',
    href: '/dental-crm-software',
    icon: '📋',
    tagline: 'Every patient tracked. Every follow-up on time.',
    angles: {
      invisible:  { stat: '500+',      outcome: 'Manage your whole patient pipeline from a single clean dashboard.' },
      noshows:    { stat: '↓ 60%',     outcome: 'Automated WhatsApp reminders 24h and 2h before every appointment.' },
      retention:  { stat: '₹3.75L',    outcome: 'A clinic losing 25% of patients annually recovers this much with a recall system.' },
      manual:     { stat: '2 hrs/day', outcome: 'The average receptionist saves 2 hours of manual calling every single day.' },
    },
    primary: ['noshows', 'retention', 'manual'],
  },
  {
    id: 'seo',
    title: 'Local SEO',
    href: '/dental-seo-services',
    icon: '📍',
    tagline: 'Rank when patients search "dentist near me" in your area.',
    angles: {
      invisible:  { stat: '#1',        outcome: 'When patients in Koramangala or Indiranagar search for a dentist — they find you first.' },
      noshows:    { stat: 'Intent',    outcome: 'SEO brings patients already looking to book, not casual browsers — fewer drop-offs.' },
      retention:  { stat: 'Organic',   outcome: 'Reviews and rankings bring back lapsed patients who are searching again.' },
      manual:     { stat: 'Passive',   outcome: 'Once ranked, Google sends you patients without any ongoing manual effort.' },
    },
    primary: ['invisible'],
  },
  {
    id: 'automation',
    title: 'Practice Automation',
    href: '/dental-practice-automation',
    icon: '⚡',
    tagline: 'Reminders, recalls, reviews — all running without you.',
    angles: {
      invisible:  { stat: '48h',       outcome: 'Post-visit review requests sent at exactly the right moment to build your Google profile.' },
      noshows:    { stat: '↓ 70%',     outcome: 'Automated reminders reduce no-shows by up to 70% with zero receptionist calls.' },
      retention:  { stat: '6 mo',      outcome: 'Recall messages go out automatically at 6-month intervals to bring patients back.' },
      manual:     { stat: '0 calls',   outcome: 'Reminders, recalls, reviews, and follow-ups all run without anyone picking up the phone.' },
    },
    primary: ['manual', 'noshows'],
  },
  {
    id: 'appointments',
    title: 'Appointment Software',
    href: '/dentist-appointment-software',
    icon: '📅',
    tagline: 'Fill your schedule. Stop chasing cancellations.',
    angles: {
      invisible:  { stat: 'Online',    outcome: 'Patients can book at any hour — even when your clinic is closed.' },
      noshows:    { stat: '↓ 50%',     outcome: 'Confirmation + reminder sequences cut no-shows in half.' },
      retention:  { stat: 'Waitlist',  outcome: 'When a slot opens, the next patient on your waitlist gets it automatically.' },
      manual:     { stat: '0 calls',   outcome: 'Your team stops managing bookings by phone and WhatsApp manually.' },
    },
    primary: ['noshows', 'manual'],
  },
  {
    id: 'marketing',
    title: 'Dental Marketing',
    href: '/dental-marketing-services',
    icon: '📣',
    tagline: 'Grow your patient base without paying for ads.',
    angles: {
      invisible:  { stat: '50+ rev',   outcome: 'Clinics with 50+ reviews get 3× more clicks than those with fewer than 10.' },
      noshows:    { stat: 'Quality',   outcome: 'Better marketing filters for serious patients, not casual enquiries.' },
      retention:  { stat: 'WhatsApp',  outcome: 'Reactivation campaigns bring back patients who haven\'t visited in 12+ months.' },
      manual:     { stat: 'System',    outcome: 'A repeatable review + recall system that runs every month without manual input.' },
    },
    primary: ['invisible', 'retention'],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function ServicesInteractive() {
  const [active, setActive] = useState<ProblemId | null>(null);

  return (
    <section
      style={{
        background: '#F8F6F3',
        padding: '80px 0',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1rem, 5vw, 4rem)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{
            display: 'inline-block',
            background: '#FEE9D9',
            color: '#E86C2F',
            borderRadius: 999,
            padding: '4px 16px',
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 16,
          }}>
            🦷 For Dental Clinics
          </p>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 800,
            color: '#1A1A2E',
            margin: '0 0 12px',
            lineHeight: 1.2,
          }}>
            What's your biggest challenge?
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, margin: 0 }}>
            Pick one — we'll show you exactly how we solve it.
          </p>
        </div>

        {/* Problem pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          justifyContent: 'center',
          marginBottom: 48,
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
                  padding: '10px 20px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'Poppins, sans-serif',
                  whiteSpace: 'nowrap',
                }}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Service cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: 16,
        }}>
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

        {/* Bottom nudge */}
        {active && (
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 16 }}>
              Not sure where to start?
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#E86C2F',
                color: '#fff',
                borderRadius: 999,
                padding: '12px 28px',
                fontSize: 15,
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              Book a free 30-min call <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Individual Card ─────────────────────────────────────────────────────────

function ServiceCard({
  svc,
  angle,
  isPrimary,
  isDimmed,
  hasSelection,
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
        display: 'flex',
        flexDirection: 'column',
        background: isPrimary ? '#1A1A2E' : '#fff',
        border: isPrimary
          ? '2px solid #E86C2F'
          : isDimmed
          ? '2px solid #F3F4F6'
          : '2px solid #E5E7EB',
        borderRadius: 20,
        padding: '24px',
        textDecoration: 'none',
        opacity: isDimmed ? 0.45 : 1,
        transform: isPrimary ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        boxShadow: isPrimary
          ? '0 20px 60px rgba(232, 108, 47, 0.18)'
          : hasSelection && !isDimmed
          ? '0 8px 24px rgba(26,26,46,0.08)'
          : '0 2px 8px rgba(26,26,46,0.06)',
        minHeight: 180,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Primary badge */}
      {isPrimary && (
        <div style={{
          position: 'absolute',
          top: 16,
          right: 16,
          background: '#E86C2F',
          color: '#fff',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '3px 10px',
          borderRadius: 999,
          fontFamily: 'Poppins, sans-serif',
        }}>
          Best match
        </div>
      )}

      {/* Icon + title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: isPrimary ? 'rgba(232,108,47,0.2)' : '#FEE9D9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          flexShrink: 0,
        }}>
          {svc.icon}
        </div>
        <h3 style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: 16,
          fontWeight: 700,
          color: isPrimary ? '#fff' : '#1A1A2E',
          margin: 0,
          lineHeight: 1.3,
        }}>
          {svc.title}
        </h3>
      </div>

      {/* Body — morphs based on selection */}
      {angle ? (
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 32,
            fontWeight: 800,
            color: isPrimary ? '#E86C2F' : '#E86C2F',
            lineHeight: 1,
            marginBottom: 8,
          }}>
            {angle.stat}
          </div>
          <p style={{
            fontSize: 13,
            lineHeight: 1.6,
            color: isPrimary ? 'rgba(255,255,255,0.75)' : '#6B7280',
            margin: 0,
          }}>
            {angle.outcome}
          </p>
        </div>
      ) : (
        <p style={{
          fontSize: 14,
          lineHeight: 1.6,
          color: isPrimary ? 'rgba(255,255,255,0.75)' : '#6B7280',
          margin: 0,
          flex: 1,
        }}>
          {svc.tagline}
        </p>
      )}

      {/* Arrow */}
      <div style={{
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        fontSize: 13,
        fontWeight: 600,
        color: isPrimary ? '#E86C2F' : '#E86C2F',
        fontFamily: 'Poppins, sans-serif',
      }}>
        Learn more <ArrowRight size={14} />
      </div>
    </Link>
  );
}
