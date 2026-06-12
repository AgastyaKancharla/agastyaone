'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function CountUp({ to, suffix = '', visible }: { to: number; suffix?: string; visible: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const steps = 40;
    const inc = to / steps;
    const t = setInterval(() => {
      start += inc;
      if (start >= to) { setVal(to); clearInterval(t); }
      else setVal(Math.floor(start));
    }, 30);
    return () => clearInterval(t);
  }, [visible, to]);
  return <>{val}{suffix}</>;
}

const WITHOUT = [
  { icon: '📵', label: 'Patients call once, no answer — gone forever' },
  { icon: '📋', label: 'Appointment book managed in a register or WhatsApp group' },
  { icon: '😶', label: 'Google profile incomplete, photos missing, no posts' },
  { icon: '🔕', label: 'No reminder system — patients forget, slots go empty' },
  { icon: '⭐', label: 'Under 20 Google reviews, competitors have 100+' },
  { icon: '🕳️', label: 'No follow-up after visits — patients never return' },
];

const WITH = [
  { icon: '💬', label: 'Every enquiry captured, followed up automatically on WhatsApp' },
  { icon: '📅', label: 'Online booking live 24/7, slots fill without reception calls' },
  { icon: '📍', label: 'Google Business Profile optimised, ranking in top 3 Maps results' },
  { icon: '🔔', label: 'Automatic reminders cut no-shows by up to 70%' },
  { icon: '🌟', label: 'Review system generates 5–10 new Google reviews every month' },
  { icon: '🔁', label: 'Recall system brings patients back every 6 months automatically' },
];

const STATS = [
  { label: 'Reduction in no-shows', to: 70, suffix: '%', color: '#34d399' },
  { label: 'More Google visibility', to: 5,  suffix: 'x', color: '#E86C2F' },
  { label: 'Patient retention lift', to: 40, suffix: '%', color: '#f59e0b' },
];

export function ProblemSolution() {
  const { ref, visible } = useInView(0.2);

  return (
    <section ref={ref} style={{ background: '#f8f6f3', padding: '72px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>

        {/* heading */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(232,108,47,0.1)', border: '1px solid rgba(232,108,47,0.2)', color: '#E86C2F', borderRadius: 999, padding: '4px 16px', fontSize: 13, fontWeight: 600, marginBottom: 14 }}>
            ⚡ The Difference
          </p>
          <h2 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: '#1A1A2E', lineHeight: 1.2, margin: '0 0 12px' }}>
            Two Dental Clinics.<br />Same Location. Different Results.
          </h2>
          <p style={{ color: '#6b7280', fontSize: 15, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            The only difference between a clinic that struggles and one that grows is the systems behind it.
          </p>
        </div>

        {/* before / after grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16, marginBottom: 32 }}>

          {/* WITHOUT */}
          <div style={{ background: '#1A1A2E', borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 60px rgba(26,26,46,0.15)' }}>
            <div style={{ padding: '18px 22px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 18 }}>😔</span>
              <div>
                <div style={{ color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 15 }}>Without AgastyaOne</div>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 1 }}>Most Bengaluru clinics today</div>
              </div>
              <div style={{ marginLeft: 'auto', background: 'rgba(239,68,68,0.15)', color: '#f87171', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>LOSING PATIENTS</div>
            </div>
            <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {WITHOUT.map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontSize: 15, flexShrink: 0, marginTop: 1, filter: 'grayscale(0.3)' }}>{item.icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WITH */}
          <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 60px rgba(232,108,47,0.12)', border: '1.5px solid rgba(232,108,47,0.2)' }}>
            <div style={{ padding: '18px 22px', borderBottom: '1px solid rgba(232,108,47,0.1)', background: 'rgba(232,108,47,0.04)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 18 }}>🚀</span>
              <div>
                <div style={{ color: '#1A1A2E', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 15 }}>With AgastyaOne</div>
                <div style={{ color: '#9ca3af', fontSize: 11, marginTop: 1 }}>What your clinic looks like in 90 days</div>
              </div>
              <div style={{ marginLeft: 'auto', background: 'rgba(52,211,153,0.12)', color: '#059669', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>GROWING</div>
            </div>
            <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {WITH.map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontSize: 15, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                  <span style={{ color: '#374151', fontSize: 13, lineHeight: 1.5 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* animated stats strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12, marginBottom: 36 }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 16, padding: '20px 16px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 36, color: s.color, lineHeight: 1, transition: 'all 0.3s' }}>
                <CountUp to={s.to} suffix={s.suffix} visible={visible} />
              </div>
              <div style={{ color: '#9ca3af', fontSize: 11, marginTop: 6, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* credibility bar */}
        <div style={{ background: '#1A1A2E', borderRadius: 16, padding: '20px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {[
              ['🦷', 'Built a dental CRM from scratch'],
              ['📍', 'Active across 5 Bengaluru neighbourhoods'],
              ['⚡', '100% dental focused — no generalist work'],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 15 }}>{icon}</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 500 }}>{text}</span>
              </div>
            ))}
          </div>
          <Link href="/contact" style={{ background: 'linear-gradient(135deg,#E86C2F,#f59e0b)', color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 13, padding: '11px 22px', borderRadius: 999, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, boxShadow: '0 6px 20px rgba(232,108,47,0.3)' }}>
            Book a Free 30 Min Call →
          </Link>
        </div>

      </div>
    </section>
  );
}
