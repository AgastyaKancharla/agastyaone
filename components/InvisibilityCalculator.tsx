'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, TrendingDown, TrendingUp } from 'lucide-react';

const NEIGHBOURHOODS = [
  { name: 'Koramangala',  searches: 340, competitors: 48 },
  { name: 'Indiranagar',  searches: 290, competitors: 41 },
  { name: 'Jayanagar',    searches: 210, competitors: 35 },
  { name: 'HSR Layout',   searches: 260, competitors: 39 },
  { name: 'Whitefield',   searches: 310, competitors: 52 },
  { name: 'Marathahalli', searches: 230, competitors: 44 },
  { name: 'JP Nagar',     searches: 195, competitors: 31 },
  { name: 'Bannerghatta', searches: 160, competitors: 28 },
];

const VISIT_VALUES = [
  { label: '₹800 – Basic checkup clinic',    value: 800  },
  { label: '₹1,500 – General dentistry',     value: 1500 },
  { label: '₹2,500 – Multi-treatment clinic', value: 2500 },
  { label: '₹5,000 – Cosmetic / implants',   value: 5000 },
];

const SLOTS = [10, 15, 20, 30, 40];

// Animated number counter
function Counter({ target, prefix = '', suffix = '', duration = 1200 }: {
  target: number; prefix?: string; suffix?: string; duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    startRef.current = null;
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return <>{prefix}{display.toLocaleString('en-IN')}{suffix}</>;
}

export function InvisibilityCalculator() {
  const [neighbourhood, setNeighbourhood] = useState(NEIGHBOURHOODS[0]);
  const [visitValue, setVisitValue] = useState(VISIT_VALUES[1]);
  const [slots, setSlots] = useState(20);
  const [revealed, setRevealed] = useState(false);
  const [key, setKey] = useState(0); // force counter re-animation

  // Core maths
  const conversionRate   = 0.12;  // 12% of searches → bookings industry avg
  const visibilityShare  = 0.31;  // top-3 maps gets ~31% of clicks
  const missedPatients   = Math.round(neighbourhood.searches * conversionRate * visibilityShare);
  const monthlyLoss      = missedPatients * visitValue.value;
  const yearlyLoss       = monthlyLoss * 12;
  const competitorGain   = Math.round(neighbourhood.searches * conversionRate * (1 - visibilityShare));

  function calculate() {
    setRevealed(true);
    setKey(k => k + 1);
  }

  const inputStyle = {
    width: '100%',
    background: '#1E2340',
    border: '1.5px solid rgba(232,108,47,0.25)',
    borderRadius: 12,
    padding: '13px 16px',
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    appearance: 'none' as const,
    cursor: 'pointer',
    outline: 'none',
  };

  return (
    <section style={{
      background: '#0F1228',
      padding: '72px 0',
      fontFamily: 'Inter, system-ui, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(232,108,47,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />
      {/* Orange glow */}
      <div style={{
        position: 'absolute', top: -120, right: -120,
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,108,47,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 clamp(1rem, 5vw, 3rem)', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(232,108,47,0.15)',
            border: '1px solid rgba(232,108,47,0.3)',
            borderRadius: 999, padding: '5px 16px',
            marginBottom: 18,
          }}>
            <TrendingDown size={13} color="#E86C2F" />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#E86C2F', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Invisibility Calculator
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(24px, 4.5vw, 38px)',
            fontWeight: 800, color: '#fff',
            margin: '0 0 12px', lineHeight: 1.2,
          }}>
            How much is Google invisibility<br />costing your clinic?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, margin: 0, lineHeight: 1.6 }}>
            Takes 20 seconds. Based on real Bengaluru search volumes.
          </p>
        </div>

        {/* Calculator card */}
        <div style={{
          background: '#161A35',
          border: '1.5px solid rgba(232,108,47,0.2)',
          borderRadius: 24,
          padding: 'clamp(24px, 4vw, 40px)',
          marginBottom: revealed ? 24 : 0,
        }}>

          {/* Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>

            {/* Neighbourhood */}
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>
                <MapPin size={12} color="#E86C2F" /> Your neighbourhood
              </label>
              <select
                value={neighbourhood.name}
                onChange={e => {
                  setNeighbourhood(NEIGHBOURHOODS.find(n => n.name === e.target.value)!);
                  setRevealed(false);
                }}
                style={inputStyle}
              >
                {NEIGHBOURHOODS.map(n => (
                  <option key={n.name} value={n.name}>{n.name}</option>
                ))}
              </select>
            </div>

            {/* Two col: value + slots */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>
                  Avg visit value
                </label>
                <select
                  value={visitValue.value}
                  onChange={e => {
                    setVisitValue(VISIT_VALUES.find(v => v.value === Number(e.target.value))!);
                    setRevealed(false);
                  }}
                  style={inputStyle}
                >
                  {VISIT_VALUES.map(v => (
                    <option key={v.value} value={v.value}>{v.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>
                  Slots / day
                </label>
                <select
                  value={slots}
                  onChange={e => { setSlots(Number(e.target.value)); setRevealed(false); }}
                  style={inputStyle}
                >
                  {SLOTS.map(s => (
                    <option key={s} value={s}>{s} appointments</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* CTA button */}
          <button
            onClick={calculate}
            style={{
              width: '100%',
              background: '#E86C2F',
              color: '#fff',
              border: 'none',
              borderRadius: 14,
              padding: '16px',
              fontSize: 15,
              fontWeight: 700,
              fontFamily: 'Poppins, sans-serif',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: 'background 0.2s',
            }}
          >
            Calculate my loss <ArrowRight size={16} />
          </button>
        </div>

        {/* Results */}
        {revealed && (
          <div key={key} style={{
            animation: 'fadeUp 0.5s cubic-bezier(0.22,1,0.36,1)',
          }}>
            {/* Big loss number */}
            <div style={{
              background: 'linear-gradient(135deg, #1E0A00, #2A1200)',
              border: '1.5px solid rgba(232,108,47,0.4)',
              borderRadius: 20,
              padding: 'clamp(24px, 4vw, 36px)',
              textAlign: 'center',
              marginBottom: 16,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 50% 0%, rgba(232,108,47,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontFamily: 'Poppins, sans-serif', marginBottom: 8 }}>
                Your clinic is losing an estimated
              </p>
              <div style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(36px, 8vw, 56px)',
                fontWeight: 800,
                color: '#E86C2F',
                lineHeight: 1,
                marginBottom: 6,
              }}>
                <Counter key={`month-${key}`} target={monthlyLoss} prefix="₹" duration={1400} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, fontFamily: 'Poppins, sans-serif', margin: '0 0 16px' }}>
                per month in {neighbourhood.name}
              </p>
              <div style={{
                display: 'inline-block',
                background: 'rgba(232,108,47,0.15)',
                border: '1px solid rgba(232,108,47,0.3)',
                borderRadius: 999,
                padding: '6px 16px',
                fontSize: 13,
                fontWeight: 700,
                color: '#E86C2F',
                fontFamily: 'Poppins, sans-serif',
              }}>
                ₹<Counter key={`year-${key}`} target={yearlyLoss} duration={1600} /> per year
              </div>
            </div>

            {/* Breakdown grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div style={{
                background: '#161A35',
                border: '1.5px solid rgba(255,255,255,0.08)',
                borderRadius: 16, padding: '20px 16px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontFamily: 'Poppins, sans-serif', marginBottom: 8 }}>
                  Monthly searches in {neighbourhood.name}
                </div>
                <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                  {neighbourhood.searches}+
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>
                  "dentist near me" searches
                </div>
              </div>
              <div style={{
                background: '#161A35',
                border: '1.5px solid rgba(255,255,255,0.08)',
                borderRadius: 16, padding: '20px 16px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontFamily: 'Poppins, sans-serif', marginBottom: 8 }}>
                  Patients going to competitors
                </div>
                <div style={{ fontSize: 28, fontWeight: 800, color: '#EF4444', fontFamily: 'Poppins, sans-serif' }}>
                  ~{competitorGain}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>
                  patients / month
                </div>
              </div>
            </div>

            {/* What ranking gives you */}
            <div style={{
              background: '#0D1F0F',
              border: '1.5px solid rgba(34,197,94,0.3)',
              borderRadius: 16, padding: '20px',
              marginBottom: 24,
              display: 'flex', alignItems: 'flex-start', gap: 14,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(34,197,94,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <TrendingUp size={18} color="#22C55E" />
              </div>
              <div>
                <p style={{ color: '#22C55E', fontSize: 13, fontWeight: 700, fontFamily: 'Poppins, sans-serif', margin: '0 0 4px' }}>
                  If you ranked in the top 3 on Google Maps
                </p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                  You could capture <strong style={{ color: '#fff' }}>~{missedPatients} additional patients/month</strong> from {neighbourhood.name} alone — 
                  worth <strong style={{ color: '#22C55E' }}>₹{(missedPatients * visitValue.value).toLocaleString('en-IN')}/month</strong> at your visit value.
                  That's what ranking is worth.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div style={{
              background: '#161A35',
              border: '1.5px solid rgba(232,108,47,0.25)',
              borderRadius: 20, padding: 'clamp(20px, 4vw, 32px)',
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(16px, 3vw, 20px)',
                fontWeight: 700, color: '#fff',
                margin: '0 0 8px', lineHeight: 1.3,
              }}>
                See exactly where your clinic stands on Google
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, margin: '0 0 24px', lineHeight: 1.6 }}>
                Free 30-min audit. We'll show you your current rankings, who's beating you in {neighbourhood.name}, and what it takes to overtake them.
              </p>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#E86C2F', color: '#fff',
                borderRadius: 999, padding: '14px 32px',
                fontSize: 15, fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                textDecoration: 'none',
              }}>
                Book my free SEO audit <ArrowRight size={16} />
              </Link>
              <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, margin: '16px 0 0', fontStyle: 'italic' }}>
                *Estimates based on average Bengaluru search volumes and industry click-through rates. Actual results vary by clinic, competition and current rankings.
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
