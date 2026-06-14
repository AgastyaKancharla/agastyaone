'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const FEATURES = [
  {
    id: 'gbp',
    icon: '📍', title: 'GBP Management', tag: 'Visibility', tagColor: '#6366f1',
    stat: '#1', statLabel: 'Maps position',
    pitch: 'Your profile active, accurate and converting every day.',
    href: '/dental-seo-services',
    preview: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '10px 12px', border: '1px solid #F3F4F6' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 18 }}>📍</span>
            <div>
              <div style={{ color: '#1A1A2E', fontSize: 12, fontWeight: 700 }}>Dr. Priya Dental Clinic</div>
              <div style={{ color: '#9CA3AF', fontSize: 10 }}>Koramangala · Dentist</div>
            </div>
          </div>
          {[
            { label: 'Photos added', done: true },
            { label: 'Services listed', done: true },
            { label: 'Weekly post published', done: true },
            { label: 'Review response sent', done: true },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', borderBottom: '1px solid #F3F4F6' }}>
              <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#fff', fontSize: 9, fontWeight: 700 }}>✓</span>
              </div>
              <span style={{ color: '#374151', fontSize: 11 }}>{item.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <div style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: 10, padding: '10px', textAlign: 'center' }}>
            <div style={{ color: '#6366f1', fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 22 }}>#1</div>
            <div style={{ color: '#9CA3AF', fontSize: 9, marginTop: 2 }}>Maps position</div>
          </div>
          <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: 10, padding: '10px', textAlign: 'center' }}>
            <div style={{ color: '#f59e0b', fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 22 }}>47</div>
            <div style={{ color: '#9CA3AF', fontSize: 9, marginTop: 2 }}>Google reviews</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'reviews',
    icon: '⭐', title: 'Review Generation', tag: 'Reputation', tagColor: '#f59e0b',
    stat: '5–10', statLabel: 'new reviews/month',
    pitch: 'Automated review requests timed perfectly after every visit.',
    href: '/dental-practice-automation',
    preview: ({ active }: { active: boolean }) => {
      const [count, setCount] = useState(31);
      const ts = useRef<ReturnType<typeof setTimeout>[]>([]);
      useEffect(() => {
        if (!active) { ts.current.forEach(clearTimeout); setCount(31); return; }
        [1000, 2200, 3600].forEach(ms => {
          const t = setTimeout(() => setCount(c => c + 1), ms);
          ts.current.push(t);
        });
        return () => ts.current.forEach(clearTimeout);
      }, [active]);
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ background: '#DCF8C6', borderRadius: '0 10px 10px 10px', padding: '9px 12px', maxWidth: '90%' }}>
            <div style={{ color: '#1A1A2E', fontSize: 11.5, lineHeight: 1.5 }}>⭐ Hi Priya! Glad your cleaning went well. Would you take 30 seconds to leave us a Google review?</div>
            <div style={{ color: '#25D366', fontSize: 9, marginTop: 3, textAlign: 'right' }}>✓✓ Delivered</div>
          </div>
          <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 10, padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', gap: 2 }}>{'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: '#f59e0b', fontSize: 16 }}>{s}</span>)}</div>
              <div style={{ color: '#9CA3AF', fontSize: 10, marginTop: 3 }}>Google Reviews</div>
            </div>
            <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 32, color: '#f59e0b', transition: 'all 0.3s' }}>{count}</div>
          </div>
        </div>
      );
    },
  },
  {
    id: 'seo',
    icon: '🔍', title: 'Local SEO', tag: 'Discovery', tagColor: '#34d399',
    stat: 'Page 1', statLabel: 'Google ranking',
    pitch: 'Treatment pages ranked for how patients in Bengaluru actually search.',
    href: '/dental-seo-services',
    preview: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ color: '#9CA3AF', fontSize: 9.5, fontWeight: 600, marginBottom: 2 }}>Google Search · "dentist Koramangala"</div>
        {[
          { title: 'Dr. Priya Dental Clinic', sub: 'Koramangala · 4.9 ★ · 47 reviews', yours: true },
          { title: 'SmileCare Dental', sub: 'Koramangala · 4.5 ★ · 23 reviews', yours: false },
          { title: 'CitySmile Dentistry', sub: 'Koramangala · 4.2 ★ · 11 reviews', yours: false },
        ].map((r, i) => (
          <div key={r.title} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: r.yours ? 'rgba(52,211,153,0.06)' : '#FAFAFA', border: `1px solid ${r.yours ? 'rgba(52,211,153,0.25)' : '#F3F4F6'}`, borderRadius: 8 }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: r.yours ? 'rgba(52,211,153,0.15)' : '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: r.yours ? '#34d399' : '#9CA3AF', fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
            <div>
              <div style={{ color: r.yours ? '#059669' : '#6B7280', fontSize: 12, fontWeight: r.yours ? 700 : 400 }}>{r.title}{r.yours ? ' ✓' : ''}</div>
              <div style={{ color: '#9CA3AF', fontSize: 10 }}>{r.sub}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'whatsapp',
    icon: '💬', title: 'WhatsApp Marketing', tag: 'Engagement', tagColor: '#25D366',
    stat: '98%', statLabel: 'open rate',
    pitch: 'Campaigns, recalls and education — timed and relevant, not spam.',
    href: '/dental-practice-automation',
    preview: ({ active }: { active: boolean }) => {
      const msgs = [
        { text: '🦷 Arjun, it\'s been 6 months since your checkup. Book your recall today!', delay: 400 },
        { text: '🎉 Kavya, your appointment is confirmed for tomorrow at 11 AM.', delay: 1800 },
        { text: '📚 Did you know? Cleaning every 6 months prevents 80% of dental issues.', delay: 3200 },
      ];
      const [shown, setShown] = useState<number[]>([]);
      const ts = useRef<ReturnType<typeof setTimeout>[]>([]);
      useEffect(() => {
        if (!active) { ts.current.forEach(clearTimeout); setShown([]); return; }
        msgs.forEach((m, i) => {
          const t = setTimeout(() => setShown(prev => [...prev, i]), m.delay);
          ts.current.push(t);
        });
        return () => ts.current.forEach(clearTimeout);
      }, [active]);
      return (
        <div style={{ background: '#f0fdf4', borderRadius: 12, padding: '12px', border: '1px solid rgba(37,211,102,0.15)', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ color: '#25D366', fontSize: 11, fontWeight: 700 }}>AgastyaOne · Campaign</span>
            <span style={{ marginLeft: 'auto', background: 'rgba(37,211,102,0.15)', color: '#25D366', fontSize: 8, fontWeight: 700, padding: '2px 7px', borderRadius: 99 }}>● LIVE</span>
          </div>
          {msgs.map((m, i) => shown.includes(i) && (
            <div key={i} style={{ background: '#DCF8C6', borderRadius: '0 10px 10px 10px', padding: '8px 11px', animation: 'mktMsgIn 0.3s ease' }}>
              <div style={{ color: '#1A1A2E', fontSize: 11, lineHeight: 1.5 }}>{m.text}</div>
              <div style={{ color: '#25D366', fontSize: 9, marginTop: 2, textAlign: 'right' }}>✓✓ Delivered</div>
            </div>
          ))}
        </div>
      );
    },
  },
  {
    id: 'reputation',
    icon: '🛡️', title: 'Reputation Management', tag: 'Trust', tagColor: '#8b5cf6',
    stat: '4.9★', statLabel: 'avg rating',
    pitch: 'Monitor, respond and build trust across every review platform.',
    href: '/dental-marketing-services',
    preview: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { name: 'Rahul M.', stars: 5, text: 'Best dental experience in Koramangala!', reply: true },
          { name: 'Sunita R.', stars: 4, text: 'Great care, would recommend.', reply: true },
        ].map(r => (
          <div key={r.name} style={{ background: '#F9FAFB', borderRadius: 10, padding: '10px 12px', border: '1px solid #F3F4F6' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ color: '#1A1A2E', fontSize: 11, fontWeight: 700 }}>{r.name}</span>
              <span style={{ color: '#f59e0b', fontSize: 11 }}>{'★'.repeat(r.stars)}</span>
            </div>
            <div style={{ color: '#6B7280', fontSize: 11, marginBottom: 6 }}>{r.text}</div>
            {r.reply && (
              <div style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 6, padding: '6px 8px' }}>
                <div style={{ color: '#8b5cf6', fontSize: 9, fontWeight: 700, marginBottom: 2 }}>Owner replied</div>
                <div style={{ color: '#6B7280', fontSize: 10 }}>Thank you so much! We look forward to seeing you again.</div>
              </div>
            )}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'reporting',
    icon: '📊', title: 'Monthly Reporting', tag: 'Clarity', tagColor: '#E86C2F',
    stat: '1 report', statLabel: 'every month',
    pitch: 'What improved, what did not, what we do next — no vanity charts.',
    href: '/dental-marketing-services',
    preview: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ color: '#9CA3AF', fontSize: 9.5, fontWeight: 600 }}>June 2025 · Monthly Report</div>
        {[
          { label: 'New patient enquiries', value: '+12', trend: 'up', color: '#34d399' },
          { label: 'Google Maps calls',     value: '+28%', trend: 'up', color: '#34d399' },
          { label: 'Review count',          value: '47 → 52', trend: 'up', color: '#f59e0b' },
          { label: 'No-shows this month',   value: '2',    trend: 'down', color: '#fb923c' },
        ].map(m => (
          <div key={m.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', background: '#FAFAFA', borderRadius: 8, border: '1px solid #F3F4F6' }}>
            <span style={{ color: '#6B7280', fontSize: 11 }}>{m.label}</span>
            <span style={{ color: m.color, fontSize: 12, fontWeight: 700, fontFamily: 'Poppins,sans-serif' }}>
              {m.trend === 'up' ? '↑ ' : '↓ '}{m.value}
            </span>
          </div>
        ))}
      </div>
    ),
  },
] as const;

type FeatureId = typeof FEATURES[number]['id'];

export function MarketingFeatureTabs() {
  const [selected, setSelected] = useState<FeatureId>('gbp');
  const [previewing, setPreviewing] = useState(true);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setSelected(prev => {
        const idx = FEATURES.findIndex(f => f.id === prev);
        return FEATURES[(idx + 1) % FEATURES.length].id;
      });
      setPreviewing(false);
      setTimeout(() => setPreviewing(true), 80);
    }, 5000);
  };

  useEffect(() => { resetAuto(); return () => { if (autoRef.current) clearInterval(autoRef.current); }; }, []);

  const handleSelect = (id: FeatureId) => {
    setSelected(id);
    setPreviewing(false);
    setTimeout(() => setPreviewing(true), 80);
    resetAuto();
  };

  const feat = FEATURES.find(f => f.id === selected)!;
  const Preview = feat.preview as React.ComponentType<{ active: boolean }>;

  return (
    <div>
      {/* Mobile: horizontal tabs + preview */}
      <div className="mkt-mobile">
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none', marginBottom: 12 }}>
          {FEATURES.map(f => {
            const isActive = selected === f.id;
            return (
              <button key={f.id} onClick={() => handleSelect(f.id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '8px 10px', borderRadius: 12, flexShrink: 0, background: isActive ? '#fff' : 'rgba(255,255,255,0.5)', border: `2px solid ${isActive ? f.tagColor : 'transparent'}`, boxShadow: isActive ? `0 4px 16px ${f.tagColor}25` : 'none', cursor: 'pointer', transition: 'all 0.2s', minWidth: 58 }}>
                <span style={{ fontSize: 18 }}>{f.icon}</span>
                <span style={{ fontSize: 8, fontWeight: 700, color: isActive ? f.tagColor : '#9CA3AF', fontFamily: 'Poppins,sans-serif', textAlign: 'center', lineHeight: 1.2 }}>{f.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
        <div style={{ background: '#fff', borderRadius: 16, padding: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.07)', border: `1.5px solid ${feat.tagColor}30` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid #F3F4F6' }}>
            <span style={{ fontSize: 16 }}>{feat.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: 13, fontWeight: 700, color: '#1A1A2E' }}>{feat.title}</div>
              <div style={{ color: '#9CA3AF', fontSize: 10, marginTop: 1 }}>{feat.pitch}</div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 18, color: feat.tagColor }}>{feat.stat}</div>
              <div style={{ color: '#9CA3AF', fontSize: 8 }}>{feat.statLabel}</div>
            </div>
          </div>
          <div key={selected + '-m'} style={{ animation: 'mktFade 0.3s ease' }}>
            <Preview active={previewing} />
          </div>
        </div>
      </div>

      {/* Desktop: list left, preview right */}
      <div className="mkt-desktop" style={{ display: 'none', gridTemplateColumns: '1fr 1.15fr', gap: 20, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {FEATURES.map(f => {
            const isActive = selected === f.id;
            return (
              <button key={f.id} onClick={() => handleSelect(f.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 12, background: isActive ? '#fff' : 'transparent', border: `1.5px solid ${isActive ? f.tagColor + '40' : 'transparent'}`, borderLeft: isActive ? `4px solid ${f.tagColor}` : '4px solid transparent', boxShadow: isActive ? '0 4px 20px rgba(0,0,0,0.07)' : 'none', cursor: 'pointer', textAlign: 'left', transition: 'all 0.25s' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{f.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: 13, fontWeight: 700, color: isActive ? '#1A1A2E' : '#6B7280' }}>{f.title}</div>
                  {isActive && <div style={{ color: '#9CA3AF', fontSize: 11, marginTop: 2 }}>{f.pitch}</div>}
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 16, color: isActive ? f.tagColor : '#D1D5DB' }}>{feat.stat}</div>
                  {isActive && <div style={{ color: '#9CA3AF', fontSize: 9, marginTop: 1 }}>{f.statLabel}</div>}
                </div>
              </button>
            );
          })}
        </div>
        <div style={{ background: '#fff', borderRadius: 18, padding: '20px', boxShadow: '0 8px 40px rgba(0,0,0,0.08)', border: `1.5px solid ${feat.tagColor}25`, minHeight: 260 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #F3F4F6' }}>
            <span style={{ fontSize: 18 }}>{feat.icon}</span>
            <div>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: 13, fontWeight: 700, color: '#1A1A2E' }}>{feat.title}</div>
              <div style={{ color: '#9CA3AF', fontSize: 10, marginTop: 1 }}>{feat.pitch}</div>
            </div>
            <span style={{ marginLeft: 'auto', background: `${feat.tagColor}12`, color: feat.tagColor, fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{feat.tag}</span>
          </div>
          <div key={selected + '-d'} style={{ animation: 'mktFade 0.3s ease' }}>
            <Preview active={previewing} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes mktFade   { from { opacity:0; transform:translateY(5px); } to { opacity:1; transform:none; } }
        @keyframes mktMsgIn  { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:none; } }
        .mkt-mobile  { display: block; }
        .mkt-desktop { display: none !important; }
        @media (min-width: 768px) {
          .mkt-mobile  { display: none !important; }
          .mkt-desktop { display: grid !important; }
        }
        .mkt-mobile ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
