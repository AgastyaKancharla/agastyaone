'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Search, ChevronDown } from 'lucide-react';

// ─── Proof Strip ─────────────────────────────────────────────────────────────

export function SEOProofStrip() {
  const stats = [
    { icon: '📍', value: '5+',  label: 'Bengaluru neighbourhoods ranked' },
    { icon: '⭐', value: '50+', label: 'Reviews generated for clients'   },
    { icon: '📈', value: '3×',  label: 'Average traffic increase'        },
    { icon: '🏆', value: '#1',  label: 'Maps positions achieved'         },
  ];
  return (
    <div style={{ background: '#1A1A2E', padding: '40px 0', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1rem,5vw,3rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 24, textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: 26, fontWeight: 800, color: '#E86C2F', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Two-Track GBP vs SEO ────────────────────────────────────────────────────

const TRACKS = {
  gbp: {
    icon: <MapPin size={18} color="#E86C2F" />,
    label: 'Google Maps / GBP',
    badge: 'Results in 2–4 weeks',
    badgeColor: '#22C55E',
    headline: 'Patients searching "dentist near me" right now — ready to book',
    desc: "When someone opens Google Maps and types \"dentist in Koramangala\", your GBP is the only thing that decides if they call you or your competitor. Most clinics have an unclaimed, incomplete, or photo-free profile — and wonder why the phone isn't ringing.",
    bullets: [
      'Complete profile setup — categories, services, hours, photos',
      'Weekly Google posts to signal activity',
      'Q&A management and review response strategy',
      'Competitor gap analysis for your neighbourhood',
      'Maps ranking monitoring every month',
    ],
    stat: '2–4 wks',
    statLabel: 'to see ranking movement',
    intent: 'High intent — ready to book NOW',
    intentColor: '#22C55E',
    auditLabel: 'GBP',
  },
  seo: {
    icon: <Search size={18} color="#E86C2F" />,
    label: 'Local SEO',
    badge: 'Compounds over 3–6 months',
    badgeColor: '#3B82F6',
    headline: 'Patients searching by treatment — "dental implants Indiranagar"',
    desc: "Local SEO targets patients searching for specific treatments in your area. These pages rank on Google Search (not just Maps) and keep sending you patients permanently — unlike Practo, where the moment you stop paying, you disappear.",
    bullets: [
      'Treatment-specific pages per neighbourhood',
      'Local keyword research for your exact area',
      'On-page optimisation and schema markup',
      'Local citations and directory listings',
      'Monthly ranking report and content updates',
    ],
    stat: '3–6 mo',
    statLabel: 'to top positions that compound',
    intent: 'Research intent — comparing options',
    intentColor: '#3B82F6',
    auditLabel: 'SEO',
  },
} as const;

export function TwoTrackSection() {
  const [active, setActive] = useState<'gbp' | 'seo'>('gbp');
  const t = TRACKS[active];

  return (
    <section style={{ background: '#F8F6F3', padding: '72px 0', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1rem,5vw,3rem)' }}>

        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ display: 'inline-block', background: '#FEE9D9', color: '#E86C2F', borderRadius: 999, padding: '4px 16px', fontSize: 13, fontWeight: 600, fontFamily: 'Poppins,sans-serif', marginBottom: 14 }}>
            🎯 Two different problems. Two solutions.
          </p>
          <h2 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(24px,4.5vw,38px)', fontWeight: 800, color: '#1A1A2E', margin: '0 0 12px', lineHeight: 1.2 }}>
            GBP and SEO are not the same thing
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, margin: '0 auto', maxWidth: 520, lineHeight: 1.6 }}>
            Most agencies bundle them without explaining what each does. Here is the honest breakdown.
          </p>
        </div>

        {/* Toggle */}
        <div style={{ display: 'flex', background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: 16, padding: 6, gap: 6, maxWidth: 460, margin: '0 auto 32px' }}>
          {(['gbp', 'seo'] as const).map(key => (
            <button key={key} onClick={() => setActive(key)} style={{ flex: 1, padding: '12px 16px', borderRadius: 12, border: 'none', background: active === key ? '#1A1A2E' : 'transparent', color: active === key ? '#fff' : '#6B7280', fontFamily: 'Poppins,sans-serif', fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s ease' }}>
              {key === 'gbp' ? '📍 Google Maps / GBP' : '🔍 Local SEO'}
            </button>
          ))}
        </div>

        {/* Card */}
        <div style={{ background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 32px rgba(26,26,46,0.06)' }}>
          {/* Header */}
          <div style={{ background: '#1A1A2E', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(232,108,47,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{t.icon}</div>
              <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: 15, fontWeight: 700, color: '#fff' }}>{t.label}</span>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ background: `${t.badgeColor}22`, color: t.badgeColor, border: `1px solid ${t.badgeColor}44`, borderRadius: 999, padding: '4px 12px', fontSize: 11, fontWeight: 700, fontFamily: 'Poppins,sans-serif' }}>⏱ {t.badge}</span>
              <span style={{ background: `${t.intentColor}22`, color: t.intentColor, border: `1px solid ${t.intentColor}44`, borderRadius: 999, padding: '4px 12px', fontSize: 11, fontWeight: 600, fontFamily: 'Poppins,sans-serif' }}>{t.intent}</span>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: 'clamp(20px,4vw,32px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 28 }}>
            <div>
              <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 16, fontWeight: 700, color: '#1A1A2E', margin: '0 0 10px', lineHeight: 1.4 }}>{t.headline}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: '#6B7280', margin: '0 0 20px' }}>{t.desc}</p>
              <div style={{ background: '#F8F6F3', borderRadius: 14, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: 24, fontWeight: 800, color: '#E86C2F', lineHeight: 1 }}>{t.stat}</div>
                  <div style={{ fontSize: 10, color: '#9CA3AF', marginTop: 3 }}>{t.statLabel}</div>
                </div>
                <div style={{ width: 1, height: 36, background: '#E5E7EB', flexShrink: 0 }} />
                <p style={{ fontSize: 12, color: '#6B7280', margin: 0, lineHeight: 1.5 }}>Unlike paid ads — results don't stop when you stop paying.</p>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 14 }}>What's included</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.bullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#FEE9D9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><polyline points="1.5,5 4,7.5 8.5,2" stroke="#E86C2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.55 }}>{b}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 22, background: '#E86C2F', color: '#fff', borderRadius: 999, padding: '11px 20px', fontSize: 13, fontWeight: 700, fontFamily: 'Poppins,sans-serif', textDecoration: 'none' }}>
                Free {t.auditLabel} audit <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Month Timeline ───────────────────────────────────────────────────────────

const MONTHS = [
  { month: 'Month 1',   label: 'Foundations',       color: '#E86C2F', items: ['GBP fully optimised and verified', 'Categories, photos, services all added', 'Local keyword map built for your area', 'Treatment pages drafted and published', 'Review request system activated'] },
  { month: 'Month 2–3', label: 'Rankings Move',      color: '#F59E0B', items: ['Maps position actively improving', 'First page 1 keywords appearing in Search', 'Review count growing weekly automatically', 'Citations submitted to directories', 'First ranking report delivered'] },
  { month: 'Month 4–6', label: 'Consistent Top 3',   color: '#22C55E', items: ['Stable top-3 Maps position in your area', 'Multiple page 1 treatment keywords', 'Organic calls and bookings increasing', 'Monthly content updates keeping rankings', 'Competitor gap closed significantly'] },
  { month: 'Month 6+',  label: 'Compounding Growth', color: '#3B82F6', items: ['Rankings self-reinforce and hold', 'New patients arrive organically daily', 'Reviews create lasting trust advantage', 'Expanding to new treatment keywords', 'Results compound — zero extra ad spend'] },
];

export function TimelineSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ background: '#fff', padding: '72px 0', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 clamp(1rem,5vw,3rem)' }}>

        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ display: 'inline-block', background: '#FEE9D9', color: '#E86C2F', borderRadius: 999, padding: '4px 16px', fontSize: 13, fontWeight: 600, fontFamily: 'Poppins,sans-serif', marginBottom: 14 }}>
            📅 What to expect
          </p>
          <h2 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(24px,4.5vw,36px)', fontWeight: 800, color: '#1A1A2E', margin: '0 0 10px', lineHeight: 1.2 }}>
            Month-by-month — no vague promises
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, margin: '0 auto', maxWidth: 440, lineHeight: 1.6 }}>
            This is the honest timeline of what SEO actually looks like for a dental clinic in Bengaluru.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {MONTHS.map((m, i) => (
            <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{ background: open === i ? '#FFFBF8' : '#F9FAFB', border: `1.5px solid ${open === i ? m.color + '55' : '#F0F0F0'}`, borderRadius: 16, overflow: 'hidden', transition: 'all 0.25s ease', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: m.color, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: 10, fontWeight: 700, color: m.color, letterSpacing: '0.07em', textTransform: 'uppercase' }}>{m.month}</div>
                    <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: 14, fontWeight: 700, color: '#1A1A2E' }}>{m.label}</div>
                  </div>
                </div>
                <ChevronDown size={15} color="#9CA3AF" style={{ transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', flexShrink: 0 }} />
              </div>
              {open === i && (
                <div style={{ padding: '0 20px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {m.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 17, height: 17, borderRadius: '50%', background: m.color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><polyline points="1.5,5 4,7.5 8.5,2" stroke={m.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 14 }}>Ready to start Month 1?</p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1A1A2E', color: '#fff', borderRadius: 999, padding: '13px 28px', fontSize: 14, fontWeight: 700, fontFamily: 'Poppins,sans-serif', textDecoration: 'none' }}>
            Book a free SEO audit <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
