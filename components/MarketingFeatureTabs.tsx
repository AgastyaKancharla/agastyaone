'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const FEATURES = [
  {
    tab: 'Google Business',
    icon: '📍',
    headline: 'When someone searches "dentist near me" — you show up first.',
    body: 'We keep your Google Business Profile accurate, active and conversion-focused. Services, photos, posts and review prompts — updated consistently so Google ranks you above competitors who set it up once and forgot.',
    stat: '#1',
    statLabel: 'local map position',
    highlight: true,
  },
  {
    tab: 'Review Generation',
    icon: '⭐',
    headline: '47 reviews beats 8 reviews. Every single time.',
    body: 'We create a simple, repeatable system for collecting reviews from satisfied patients. A steady stream of new reviews improves both your Google ranking and the confidence of every new patient checking you out.',
    stat: '+35',
    statLabel: 'avg reviews in 90 days',
    highlight: true,
  },
  {
    tab: 'Local SEO',
    icon: '🔍',
    headline: 'Rank for the terms patients actually type.',
    body: 'We optimise your clinic for neighbourhood-specific and treatment-specific searches — "root canal Koramangala", "dentist near Indiranagar" — not just generic keywords no one in your area uses.',
    stat: '3x',
    statLabel: 'more organic visits',
  },
  {
    tab: 'WhatsApp',
    icon: '💬',
    headline: 'Reach patients where they already spend their day.',
    body: 'Reminders, recalls, reactivation campaigns and patient education — timed and contextual, not random broadcasts. Patients respond to messages that feel personal, not promotional.',
    stat: '68%',
    statLabel: 'open rate vs 22% email',
  },
  {
    tab: 'Website',
    icon: '🌐',
    headline: 'Your website should book appointments, not just exist.',
    body: 'We improve existing pages for speed, clarity and conversion. Small changes — a WhatsApp button above the fold, treatment-specific pages, faster mobile load — often produce immediate results.',
    stat: '2.4s',
    statLabel: 'avg load time after fix',
  },
  {
    tab: 'Reputation',
    icon: '🛡️',
    headline: 'One bad review shouldn\'t define your clinic.',
    body: 'We monitor reviews across platforms, respond professionally and build a stronger trust profile over time. Reputation management protects the clinic as much as it promotes it.',
    stat: '4.8★',
    statLabel: 'avg client rating',
  },
  {
    tab: 'Monthly Report',
    icon: '📊',
    headline: 'You always know what improved and what\'s next.',
    body: 'Every month you get a clear report: what rankings moved, how many new patients came from digital, what we are doing next and why. No jargon, no vanity metrics — just what matters for your clinic.',
    stat: '100%',
    statLabel: 'transparent reporting',
  },
];

export function MarketingFeatureTabs() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % FEATURES.length);
    }, 4000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused]);

  const handleTabClick = (i: number) => {
    setActive(i);
    setPaused(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(() => setPaused(false), 8000);
  };

  const f = FEATURES[active];

  return (
    <div style={{ width: '100%' }}>
      {/* Tab pill row */}
      <div style={{ overflowX: 'scroll', overflowY: 'visible', scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch', paddingBottom: 4 }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 8, width: 'max-content' }}>
          {FEATURES.map((feat, i) => (
            <button
              key={feat.tab}
              onClick={() => handleTabClick(i)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                padding: '8px 16px', borderRadius: 999,
                border: `1.5px solid ${active === i ? '#E86C2F' : 'rgba(26,26,46,0.12)'}`,
                background: active === i ? '#E86C2F' : '#fff',
                color: active === i ? '#fff' : '#555',
                fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
                transition: 'all 0.2s', whiteSpace: 'nowrap', lineHeight: 1,
              }}
            >
              <span style={{ fontSize: '0.9rem' }}>{feat.icon}</span>
              <span>{feat.tab}</span>
              {feat.highlight && active !== i && (
                <span style={{ background: '#E86C2F', color: '#fff', fontSize: '0.58rem', fontWeight: 700, padding: '2px 5px', borderRadius: 999 }}>TOP</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 2, background: 'rgba(26,26,46,0.08)', borderRadius: 999, marginTop: 12, overflow: 'hidden' }}>
        <div style={{ height: '100%', background: '#E86C2F', width: `${((active + 1) / FEATURES.length) * 100}%`, transition: 'width 0.4s ease' }} />
      </div>

      {/* Detail panel */}
      <div
        key={active}
        style={{
          marginTop: 20, background: '#1a1a2e', borderRadius: 20,
          padding: '24px', animation: 'mktFadeUp 0.3s ease',
          position: 'relative', overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%', background: 'rgba(232,108,47,0.12)', pointerEvents: 'none' }} />

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 14, flexShrink: 0,
            background: 'rgba(232,108,47,0.15)', border: '1.5px solid rgba(232,108,47,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
          }}>
            {f.icon}
          </div>
          <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 800, lineHeight: 1.35, margin: 0 }}>
            {f.headline}
          </h3>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.7, margin: '0 0 20px' }}>
          {f.body}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ color: '#E86C2F', fontSize: '1.6rem', fontWeight: 900, lineHeight: 1 }}>{f.stat}</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{f.statLabel}</span>
          </div>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: '#E86C2F', color: '#fff', borderRadius: 999,
              padding: '9px 18px', fontSize: '0.8rem', fontWeight: 700,
              textDecoration: 'none', transition: 'background 0.2s',
            }}
          >
            Get This →
          </Link>
        </div>
      </div>

      {/* Dot nav */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16 }}>
        {FEATURES.map((_, i) => (
          <button
            key={i}
            onClick={() => handleTabClick(i)}
            style={{
              width: active === i ? 20 : 7, height: 7, borderRadius: 999,
              background: active === i ? '#E86C2F' : 'rgba(26,26,46,0.2)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes mktFadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
