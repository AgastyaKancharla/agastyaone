'use client';

import { useEffect, useRef, useState } from 'react';

const TABS = [
  {
    id: 'homepage',
    label: 'Home',
    emoji: '🏠',
    tagline: 'First impression. Built to convert.',
    why: '70% of patients decide in the first 10 seconds. Your homepage needs to show trust immediately.',
    includes: ['Doctor intro & credentials', 'Services overview', 'Google Reviews strip', 'WhatsApp CTA button'],
    mockup: 'home',
  },
  {
    id: 'doctor',
    label: 'Doctor',
    emoji: '👨‍⚕️',
    tagline: 'Patients book doctors, not clinics.',
    why: 'A personal, credible doctor profile removes the biggest fear patients have — "will I be in safe hands?"',
    includes: ['Photo & qualifications', 'Years of experience', 'Specialisations', 'Personal intro message'],
    mockup: 'doctor',
  },
  {
    id: 'treatments',
    label: 'Treatments',
    emoji: '🦷',
    tagline: 'One page per treatment. More Google entry points.',
    why: 'Patients search "RCT dentist Koramangala" not just "dentist". Individual pages capture each search.',
    includes: ['Cleaning & Scaling', 'Root Canal Treatment', 'Dental Implants', 'Braces & Aligners', 'Teeth Whitening'],
    mockup: 'treatments',
  },
  {
    id: 'reviews',
    label: 'Reviews',
    emoji: '⭐',
    tagline: 'Your best salesperson. Automated.',
    why: 'Patients trust other patients more than any marketing. A dedicated reviews page turns social proof into bookings.',
    includes: ['Live Google Reviews feed', 'Star rating display', 'Patient count', 'Review request link'],
    mockup: 'reviews',
  },
  {
    id: 'location',
    label: 'Location',
    emoji: '📍',
    tagline: 'Show up for "dentist near me" searches.',
    why: 'A strong location page with your neighbourhood name, map and landmarks helps Google rank you for local searches.',
    includes: ['Embedded Google Map', 'Neighbourhood-specific copy', 'Nearby landmarks', 'Parking & directions'],
    mockup: 'location',
  },
  {
    id: 'gallery',
    label: 'Gallery',
    emoji: '📸',
    tagline: 'Visual proof builds confidence.',
    why: 'Patients considering implants, braces or whitening want to see real outcomes before booking. This page answers that.',
    includes: ['Treatment outcome photos', 'Compliant presentation', 'Organised by treatment', 'Subtle CTA'],
    mockup: 'gallery',
  },
  {
    id: 'appointments',
    label: 'Booking',
    emoji: '📅',
    tagline: 'Turn visits into bookings. 24/7.',
    why: 'Clinic owners lose patients who visit at 11pm when the phone is off. An online booking page captures them.',
    includes: ['Name & WhatsApp field', 'Treatment interest', 'Preferred date & time', 'Auto-confirmation'],
    mockup: 'booking',
  },
  {
    id: 'contact',
    label: 'Contact',
    emoji: '✉️',
    tagline: 'Every contact channel. One page.',
    why: 'Different patients prefer different channels — some call, some WhatsApp, some email. Give them all options in one place.',
    includes: ['Phone (tap to call)', 'WhatsApp button', 'Contact form', 'Address & map'],
    mockup: 'contact',
  },
];

// Mini phone wireframe mockups per page type
function Mockup({ type }: { type: string }) {
  const base: React.CSSProperties = {
    width: '100%', height: '100%',
    display: 'flex', flexDirection: 'column',
    gap: 6, padding: 10,
  };

  const bar = (w: string, h = 6, color = '#E86C2F', opacity = 1) => (
    <div style={{ width: w, height: h, borderRadius: 4, background: color, opacity }} />
  );
  const block = (h: number, color = '#f0ede8') => (
    <div style={{ width: '100%', height: h, borderRadius: 6, background: color }} />
  );
  const row = (w1: string, w2: string) => (
    <div style={{ display: 'flex', gap: 5 }}>
      <div style={{ flex: 1, height: 6, borderRadius: 3, background: '#e5e2dd' }} />
      <div style={{ width: w2, height: 6, borderRadius: 3, background: '#e5e2dd' }} />
    </div>
  );

  if (type === 'home') return (
    <div style={base}>
      {bar('60%', 8, '#E86C2F')}
      {bar('85%', 5, '#1A1A2E', 0.15)}
      {bar('70%', 5, '#1A1A2E', 0.1)}
      <div style={{ display: 'flex', gap: 5, marginTop: 2 }}>
        <div style={{ flex: 1, height: 28, borderRadius: 6, background: '#E86C2F' }} />
        <div style={{ flex: 1, height: 28, borderRadius: 6, background: '#f0ede8' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, marginTop: 2 }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ height: 32, borderRadius: 6, background: '#f8f6f3', border: '1px solid #e5e2dd' }} />
        ))}
      </div>
      {[...Array(2)].map((_, i) => <div key={i}>{row('80%', '40%')}</div>)}
    </div>
  );

  if (type === 'doctor') return (
    <div style={base}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#E86C2F,#f59e0b)', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          {bar('80%', 6, '#1A1A2E', 0.7)}
          <div style={{ marginTop: 4 }}>{bar('60%', 4, '#9CA3AF', 0.5)}</div>
        </div>
      </div>
      {block(8, '#f0ede8')}
      {[...Array(3)].map((_, i) => <div key={i}>{row('90%', '50%')}</div>)}
      {bar('50%', 22, '#E86C2F')}
    </div>
  );

  if (type === 'treatments') return (
    <div style={base}>
      {bar('55%', 7, '#1A1A2E', 0.7)}
      {['🦷 RCT', '✨ Implants', '😁 Braces', '🪥 Cleaning', '⚡ Whitening'].map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 6px', borderRadius: 6, background: i === 0 ? 'rgba(232,108,47,0.1)' : '#f8f6f3', border: `1px solid ${i === 0 ? 'rgba(232,108,47,0.3)' : '#e5e2dd'}` }}>
          <span style={{ fontSize: 10 }}>{t.split(' ')[0]}</span>
          <div style={{ flex: 1, height: 4, borderRadius: 2, background: i === 0 ? '#E86C2F' : '#d1cdc7' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: i === 0 ? '#E86C2F' : '#e5e2dd', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, color: '#fff' }}>›</div>
        </div>
      ))}
    </div>
  );

  if (type === 'reviews') return (
    <div style={base}>
      {bar('50%', 7, '#1A1A2E', 0.7)}
      <div style={{ display: 'flex', gap: 2 }}>
        {[...Array(5)].map((_, i) => <span key={i} style={{ fontSize: 12, color: '#f59e0b' }}>★</span>)}
        <span style={{ fontSize: 9, color: '#6B7280', marginLeft: 4, marginTop: 2 }}>4.9 · 47 reviews</span>
      </div>
      {[...Array(3)].map((_, i) => (
        <div key={i} style={{ padding: '5px 7px', borderRadius: 6, background: '#f8f6f3', border: '1px solid #e5e2dd' }}>
          <div style={{ display: 'flex', gap: 2, marginBottom: 3 }}>
            {[...Array(5)].map((_, j) => <span key={j} style={{ fontSize: 8, color: '#f59e0b' }}>★</span>)}
          </div>
          <div style={{ height: 4, width: '90%', borderRadius: 2, background: '#d1cdc7' }} />
          <div style={{ height: 4, width: '70%', borderRadius: 2, background: '#d1cdc7', marginTop: 3 }} />
        </div>
      ))}
    </div>
  );

  if (type === 'location') return (
    <div style={base}>
      {bar('60%', 7, '#1A1A2E', 0.7)}
      <div style={{ width: '100%', height: 50, borderRadius: 8, background: 'linear-gradient(135deg,#d1fae5,#a7f3d0)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px)', backgroundSize: '8px 8px' }} />
        <div style={{ width: 16, height: 20, background: '#E86C2F', borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', position: 'relative', zIndex: 1 }}>
          <div style={{ position: 'absolute', top: 3, left: 3, width: 10, height: 10, background: '#fff', borderRadius: '50%' }} />
        </div>
      </div>
      {bar('70%', 5, '#1A1A2E', 0.15)}
      {row('80%', '50%')}
      {bar('45%', 20, '#E86C2F')}
    </div>
  );

  if (type === 'gallery') return (
    <div style={base}>
      {bar('55%', 7, '#1A1A2E', 0.7)}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
        {[
          ['#fde68a', '#d1fae5'],
          ['#bfdbfe', '#fecaca'],
          ['#e9d5ff', '#fed7aa'],
          ['#d1fae5', '#fde68a'],
        ].map(([a, b], i) => (
          <div key={i} style={{ height: 36, borderRadius: 6, background: `linear-gradient(135deg,${a},${b})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
            {['✨', '😁', '🦷', '⭐'][i]}
          </div>
        ))}
      </div>
      {bar('45%', 20, '#E86C2F')}
    </div>
  );

  if (type === 'booking') return (
    <div style={base}>
      {bar('55%', 7, '#1A1A2E', 0.7)}
      {[...Array(3)].map((_, i) => (
        <div key={i} style={{ height: 18, borderRadius: 6, background: '#f8f6f3', border: '1px solid #e5e2dd', padding: '0 6px', display: 'flex', alignItems: 'center' }}>
          <div style={{ height: 4, width: `${[70, 55, 80][i]}%`, borderRadius: 2, background: '#d1cdc7' }} />
        </div>
      ))}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => (
          <div key={d} style={{ padding: '2px 5px', borderRadius: 4, background: i === 2 ? '#E86C2F' : '#f0ede8', fontSize: 8, color: i === 2 ? '#fff' : '#6B7280', fontWeight: 600 }}>{d}</div>
        ))}
      </div>
      {bar('100%', 22, '#E86C2F')}
    </div>
  );

  // contact
  return (
    <div style={base}>
      {bar('50%', 7, '#1A1A2E', 0.7)}
      {[
        { icon: '📞', color: '#1A1A2E', label: 'Call Us' },
        { icon: '💬', color: '#25D366', label: 'WhatsApp' },
        { icon: '✉️', color: '#E86C2F', label: 'Email' },
      ].map(({ icon, color, label }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 7px', borderRadius: 7, background: '#f8f6f3', border: '1px solid #e5e2dd' }}>
          <span style={{ fontSize: 12 }}>{icon}</span>
          <div style={{ height: 4, flex: 1, borderRadius: 2, background: color, opacity: 0.3 }} />
          <div style={{ width: 28, height: 14, borderRadius: 10, background: color, opacity: 0.8 }} />
        </div>
      ))}
      {block(28, '#f0ede8')}
    </div>
  );
}

export function WebsitePagesTabs() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const switchTo = (idx: number) => {
    if (idx === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 180);
  };

  // Auto-cycle every 3.5s
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % TABS.length);
    }, 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const resetTimer = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    switchTo(idx);
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % TABS.length);
    }, 3500);
  };

  const tab = TABS[active];

  return (
    <section style={{ background: '#fff', padding: '0 0 8px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1rem,5vw,3rem)' }}>

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <p style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#FEE9D9', color: '#E86C2F',
            borderRadius: 999, padding: '4px 14px',
            fontSize: 12, fontWeight: 700,
            fontFamily: 'Poppins,sans-serif',
            letterSpacing: '0.04em', marginBottom: 12,
          }}>
            📄 {TABS.length} Pages Included
          </p>
          <h2 style={{
            fontFamily: 'Poppins,sans-serif',
            fontSize: 'clamp(22px,4vw,32px)',
            fontWeight: 800, color: '#1A1A2E',
            margin: 0, lineHeight: 1.2,
          }}>
            Every page your patients<br />will see — built for you
          </h2>
          <p style={{ marginTop: 10, color: '#6B7280', fontSize: 14, lineHeight: 1.6 }}>
            Tap any page to preview what we build and why it matters to your patients.
          </p>
        </div>

        {/* Main panel */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '100px 1fr',
          gap: 0,
          borderRadius: 20,
          border: '1.5px solid #E5E7EB',
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
          minHeight: 340,
        }}>

          {/* Tab list */}
          <div style={{ background: '#F8F6F3', borderRight: '1.5px solid #E5E7EB', display: 'flex', flexDirection: 'column' }}>
            {TABS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => resetTimer(i)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '9px 10px',
                  background: active === i ? '#fff' : 'transparent',
                  borderLeft: active === i ? '3px solid #E86C2F' : '3px solid transparent',
                  borderTop: 'none', borderRight: 'none',
                  borderBottom: '1px solid #EEEBE7',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: 14, lineHeight: 1 }}>{t.emoji}</span>
                <span style={{
                  fontFamily: 'Poppins,sans-serif',
                  fontSize: 10, fontWeight: active === i ? 700 : 500,
                  color: active === i ? '#E86C2F' : '#6B7280',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}>
                  {t.label}
                </span>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div style={{
            display: 'grid',
            gridTemplateRows: '1fr auto',
            background: '#fff',
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(6px)' : 'translateY(0)',
            transition: 'opacity 0.18s ease, transform 0.18s ease',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, minHeight: 260 }}>

              {/* Left: text — full width on mobile */}
              <div className="col-span-2 sm:col-span-1" style={{ padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 10, borderRight: '1px solid #F3F1EE' }}>
                <div>
                  <span style={{ fontSize: 20 }}>{tab.emoji}</span>
                  <h3 style={{
                    fontFamily: 'Poppins,sans-serif',
                    fontSize: 14, fontWeight: 800,
                    color: '#1A1A2E', margin: '4px 0 2px',
                  }}>
                    {tab.label}
                  </h3>
                  <p style={{ fontSize: 11, color: '#E86C2F', fontWeight: 600, margin: 0, fontFamily: 'Poppins,sans-serif' }}>
                    {tab.tagline}
                  </p>
                </div>

                {/* Why it matters */}
                <div style={{
                  background: '#FEF3EC', borderRadius: 8, padding: '8px 10px',
                  borderLeft: '3px solid #E86C2F',
                }}>
                  <p style={{ fontSize: 10, color: '#92400E', margin: 0, lineHeight: 1.55, fontWeight: 500 }}>
                    {tab.why}
                  </p>
                </div>

                {/* Includes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {tab.includes.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
                      <span style={{ color: '#E86C2F', fontSize: 10, marginTop: 2, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 10.5, color: '#374151', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: phone mockup — hidden on mobile via CSS */}
              <div className="hidden sm:flex" style={{ background: '#F8F6F3', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
                <div style={{
                  width: 110, height: 200,
                  borderRadius: 16,
                  background: '#fff',
                  border: '2.5px solid #1A1A2E',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  {/* phone notch */}
                  <div style={{
                    height: 14, background: '#1A1A2E',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{ width: 28, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.3)' }} />
                  </div>
                  {/* screen */}
                  <div style={{ height: 172, overflow: 'hidden' }}>
                    <Mockup type={tab.mockup} />
                  </div>
                  {/* home bar */}
                  <div style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)', width: 32, height: 3, borderRadius: 2, background: '#1A1A2E', opacity: 0.3 }} />
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ height: 3, background: '#F3F1EE' }}>
              <div style={{
                height: '100%',
                background: 'linear-gradient(90deg,#E86C2F,#f59e0b)',
                animation: 'progressBar 3.5s linear infinite',
                transformOrigin: 'left',
              }} />
            </div>
          </div>
        </div>

        {/* Page counter */}
        <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          {TABS.map((_, i) => (
            <button
              key={i}
              onClick={() => resetTimer(i)}
              style={{
                width: active === i ? 20 : 6,
                height: 6, borderRadius: 3,
                background: active === i ? '#E86C2F' : '#E5E7EB',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.3s ease', padding: 0,
              }}
            />
          ))}
          <span style={{ fontSize: 11, color: '#9CA3AF', marginLeft: 4, fontFamily: 'Poppins,sans-serif' }}>
            {active + 1} / {TABS.length}
          </span>
        </div>

      </div>
      <style>{`
        @keyframes progressBar {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}

