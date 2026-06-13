'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const CLINIC_DURATION = 6000; // ms per clinic before switching

/* ─── Clinic data ─────────────────────────────────── */
const CLINICS = [
  {
    name: 'Smile Studio',
    area: 'Koramangala, Bengaluru',
    tagline: 'Your trusted family dentist',
    accent: '#E86C2F',
    accentLight: 'rgba(232,108,47,0.12)',
    bg: '#fff',
    navBg: '#fff',
    heroBg: 'linear-gradient(135deg,#FFF7F3 0%,#FEF3EC 100%)',
    doctor: { ini: 'DR', name: 'Dr. Ramesh Kumar', spec: 'BDS, MDS · 12 yrs exp' },
    treatments: ['Teeth Cleaning', 'Root Canal', 'Dental Implants', 'Braces'],
    reviews: { count: 47, avg: '4.9' },
    waText: 'Book Appointment →',
  },
  {
    name: 'Dr. Priya Dental Care',
    area: 'Indiranagar, Bengaluru',
    tagline: 'Gentle care. Beautiful smiles.',
    accent: '#0891b2',
    accentLight: 'rgba(8,145,178,0.10)',
    bg: '#F8FFFE',
    navBg: '#F8FFFE',
    heroBg: 'linear-gradient(135deg,#ECFEFF 0%,#CFFAFE 100%)',
    doctor: { ini: 'DP', name: 'Dr. Priya Sharma', spec: 'BDS · Invisalign Certified' },
    treatments: ['Invisalign', 'Teeth Whitening', 'Veneers', 'Implants'],
    reviews: { count: 63, avg: '4.8' },
    waText: 'WhatsApp Us →',
  },
  {
    name: 'Bright Smile Clinic',
    area: 'HSR Layout, Bengaluru',
    tagline: 'Advanced dentistry. Honest pricing.',
    accent: '#7C3AED',
    accentLight: 'rgba(124,58,237,0.10)',
    bg: '#FAFAF9',
    navBg: '#1A1A2E',
    heroBg: 'linear-gradient(135deg,#1A1A2E 0%,#242442 100%)',
    doctor: { ini: 'AS', name: 'Dr. Arun Shetty', spec: 'MDS Orthodontics · 8 yrs' },
    treatments: ['Braces & Aligners', 'Root Canal', 'Crowns & Bridges', 'Kids Dentistry'],
    reviews: { count: 38, avg: '5.0' },
    waText: 'Book Free Consult →',
  },
];

/* ─── Shared mini components ─────────────────────── */

function StarRow({ avg, count, accent }: { avg: string; count: number; accent: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: '#FBBF24', fontSize: 10 }}>★</span>
      ))}
      <span style={{ fontSize: 9, fontWeight: 700, color: accent, marginLeft: 2 }}>{avg}</span>
      <span style={{ fontSize: 9, color: '#9CA3AF' }}>({count} reviews)</span>
    </div>
  );
}

function WaButton({ text, accent }: { text: string; accent: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      background: accent, color: '#fff',
      borderRadius: 20, padding: '5px 10px',
      fontSize: 9, fontWeight: 700,
      boxShadow: `0 4px 12px ${accent}40`,
    }}>
      <svg viewBox="0 0 24 24" fill="currentColor" width="9" height="9">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {text}
    </div>
  );
}

/* ─── Website sections rendered as scroll content ─── */

function NavBar({ clinic }: { clinic: typeof CLINICS[0] }) {
  const isDark = clinic.navBg === '#1A1A2E';
  return (
    <div style={{
      background: clinic.navBg,
      padding: '8px 12px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      borderBottom: isDark ? 'none' : '1px solid rgba(0,0,0,0.06)',
      flexShrink: 0,
    }}>
      <span style={{
        fontWeight: 800, fontSize: 10,
        color: isDark ? '#fff' : '#1A1A2E',
        fontFamily: 'Poppins,sans-serif',
      }}>
        {clinic.name.split(' ').map((w, i) =>
          i === 0
            ? <span key={i}>{w} </span>
            : <span key={i} style={{ color: clinic.accent }}>{w} </span>
        )}
      </span>
      <div style={{ display: 'flex', gap: 6 }}>
        {['Home', 'Services', 'Contact'].map(l => (
          <span key={l} style={{ fontSize: 7, color: isDark ? 'rgba(255,255,255,0.5)' : '#9CA3AF', fontWeight: 500 }}>{l}</span>
        ))}
      </div>
    </div>
  );
}

function HeroSection({ clinic, showWa }: { clinic: typeof CLINICS[0]; showWa: boolean }) {
  const isDark = clinic.heroBg.includes('#1A1A2E');
  return (
    <div style={{ background: clinic.heroBg, padding: '14px 12px 16px', flexShrink: 0 }}>
      <div style={{
        display: 'inline-block',
        background: clinic.accentLight,
        color: clinic.accent,
        borderRadius: 20, padding: '2px 8px',
        fontSize: 7, fontWeight: 700,
        marginBottom: 6,
      }}>
        ✦ {clinic.area}
      </div>
      <h2 style={{
        fontFamily: 'Poppins,sans-serif',
        fontSize: 13, fontWeight: 800,
        color: isDark ? '#fff' : '#1A1A2E',
        margin: '0 0 4px', lineHeight: 1.3,
      }}>
        {clinic.tagline}
      </h2>
      <p style={{ fontSize: 8.5, color: isDark ? 'rgba(255,255,255,0.6)' : '#6B7280', margin: '0 0 8px', lineHeight: 1.5 }}>
        Trusted by patients across {clinic.area.split(',')[0]}
      </p>
      <StarRow avg={clinic.reviews.avg} count={clinic.reviews.count} accent={clinic.accent} />
      <div style={{ marginTop: 8, opacity: showWa ? 1 : 0, transition: 'opacity 0.4s ease' }}>
        <WaButton text={clinic.waText} accent={clinic.accent} />
      </div>
    </div>
  );
}

function DoctorSection({ clinic, visible }: { clinic: typeof CLINICS[0]; visible: boolean }) {
  return (
    <div style={{
      padding: '12px',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      flexShrink: 0,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(10px)',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
    }}>
      <p style={{ fontSize: 7.5, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>
        Meet Your Doctor
      </p>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: `linear-gradient(135deg,${clinic.accent},${clinic.accent}99)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 800, color: '#fff', flexShrink: 0,
        }}>
          {clinic.doctor.ini}
        </div>
        <div>
          <p style={{ fontSize: 10, fontWeight: 700, color: '#1A1A2E', margin: 0 }}>{clinic.doctor.name}</p>
          <p style={{ fontSize: 8, color: '#6B7280', margin: '2px 0 0' }}>{clinic.doctor.spec}</p>
        </div>
      </div>
    </div>
  );
}

function TreatmentsSection({ clinic, visible }: { clinic: typeof CLINICS[0]; visible: boolean }) {
  return (
    <div style={{
      padding: '12px',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      flexShrink: 0,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(10px)',
      transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
    }}>
      <p style={{ fontSize: 7.5, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>
        Our Treatments
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
        {clinic.treatments.map((t, i) => (
          <div key={t} style={{
            padding: '5px 7px',
            background: clinic.accentLight,
            borderRadius: 6,
            fontSize: 8, fontWeight: 600,
            color: clinic.accent,
            display: 'flex', alignItems: 'center', gap: 3,
          }}>
            <span>🦷</span> {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewsSection({ clinic, visible }: { clinic: typeof CLINICS[0]; visible: boolean }) {
  return (
    <div style={{
      padding: '12px',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      background: '#FAFAFA',
      flexShrink: 0,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(10px)',
      transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
    }}>
      <p style={{ fontSize: 7.5, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>
        Patient Reviews
      </p>
      {[
        { ini: 'SR', name: 'Sneha R.', text: 'Best dental clinic in the area. Very professional.' },
        { ini: 'MK', name: 'Mohan K.', text: 'Got my root canal done. Painless experience!' },
      ].map((r) => (
        <div key={r.ini} style={{ marginBottom: 6, padding: '6px 8px', background: '#fff', borderRadius: 7, border: '1px solid #F0EDE8' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: clinic.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 700, color: clinic.accent }}>
              {r.ini}
            </div>
            <span style={{ fontSize: 8.5, fontWeight: 600, color: '#1A1A2E' }}>{r.name}</span>
            <div style={{ display: 'flex', gap: 1, marginLeft: 'auto' }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ fontSize: 8, color: '#FBBF24' }}>★</span>)}
            </div>
          </div>
          <p style={{ fontSize: 8, color: '#6B7280', margin: 0, lineHeight: 1.4 }}>{r.text}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Single clinic website with auto-scroll ────── */

function ClinicWebsite({ clinic, active }: { clinic: typeof CLINICS[0]; active: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showWa, setShowWa] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);
  const [showTreatments, setShowTreatments] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    setShowWa(false);
    setShowDoctor(false);
    setShowTreatments(false);
    setShowReviews(false);

    if (!active) return;

    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = 0;

    // Step 1: WA button appears (1s)
    timers.current.push(setTimeout(() => setShowWa(true), 1000));

    // Step 2: Scroll to doctor (2s)
    timers.current.push(setTimeout(() => {
      setShowDoctor(true);
      el.scrollTo({ top: 80, behavior: 'smooth' });
    }, 2200));

    // Step 3: Scroll to treatments (3.5s)
    timers.current.push(setTimeout(() => {
      setShowTreatments(true);
      el.scrollTo({ top: 160, behavior: 'smooth' });
    }, 3500));

    // Step 4: Scroll to reviews (5s)
    timers.current.push(setTimeout(() => {
      setShowReviews(true);
      el.scrollTo({ top: 280, behavior: 'smooth' });
    }, 4800));

    return () => timers.current.forEach(clearTimeout);
  }, [active, clinic]);

  return (
    <div
      ref={scrollRef}
      style={{
        position: 'absolute', inset: 0,
        overflowY: 'hidden', // auto-scroll only, no manual scroll
        background: clinic.bg,
        opacity: active ? 1 : 0,
        transition: 'opacity 0.6s ease',
        pointerEvents: active ? 'auto' : 'none',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <NavBar clinic={clinic} />
      <HeroSection clinic={clinic} showWa={showWa} />
      <DoctorSection clinic={clinic} visible={showDoctor} />
      <TreatmentsSection clinic={clinic} visible={showTreatments} />
      <ReviewsSection clinic={clinic} visible={showReviews} />
    </div>
  );
}

/* ─── Main export ────────────────────────────────── */

export function HeroDentalWebsitePanel({ onPanelChange }: { onPanelChange?: (idx: number) => void }) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const switchTo = useCallback((idx: number) => {
    setActive(idx);
    onPanelChange?.(idx);
  }, [onPanelChange]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(prev => {
        const next = (prev + 1) % CLINICS.length;
        onPanelChange?.(next);
        return next;
      });
    }, CLINIC_DURATION);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [onPanelChange]);

  const resetTimer = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    switchTo(idx);
    timerRef.current = setInterval(() => {
      setActive(prev => {
        const next = (prev + 1) % CLINICS.length;
        onPanelChange?.(next);
        return next;
      });
    }, CLINIC_DURATION);
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg,#1A1A2E 0%,#242442 60%,#11111f 100%)',
      borderRadius: 20, padding: 3,
      boxShadow: '0 32px 80px rgba(26,26,46,0.22), 0 0 0 1px rgba(255,255,255,0.07)',
    }}>
      <div style={{ borderRadius: 17, overflow: 'hidden', background: '#13132a' }}>

        {/* Titlebar */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '10px 14px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 11, color: '#E86C2F' }}>
              AgastyaOne
            </span>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10.5, marginLeft: 2 }}>
              Dental Websites
            </span>
          </div>
          <div style={{ display: 'flex', gap: 5 }}>
            {['#ff5f57', '#ffbd2e', '#28c840'].map((c) => (
              <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
            ))}
          </div>
        </div>

        {/* Clinic tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          overflowX: 'auto', scrollbarWidth: 'none',
        }}>
          {CLINICS.map((c, i) => (
            <button
              key={c.name}
              onClick={() => resetTimer(i)}
              style={{
                flex: '1 0 auto', padding: '7px 6px', fontSize: 9, fontWeight: 600,
                color: active === i ? c.accent : 'rgba(255,255,255,0.35)',
                background: active === i ? `${c.accentLight}` : 'transparent',
                borderBottom: active === i ? `2px solid ${c.accent}` : '2px solid transparent',
                border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
                fontFamily: 'Poppins,sans-serif', whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: 12 }}>🏥</span>
              {c.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ height: 2, background: 'rgba(255,255,255,0.04)' }}>
          <div
            key={active}
            style={{
              height: '100%',
              background: `linear-gradient(90deg,${CLINICS[active].accent},${CLINICS[active].accent}88)`,
              animation: `panelProgress ${CLINIC_DURATION}ms linear forwards`,
            }}
          />
        </div>

        {/* Phone frame with scrolling website */}
        <div style={{ padding: '16px 12px', display: 'flex', justifyContent: 'center', background: '#0f0f22' }}>
          <div style={{
            width: 200, height: 340,
            borderRadius: 22,
            border: '3px solid rgba(255,255,255,0.15)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 16px 40px rgba(0,0,0,0.5)',
            overflow: 'hidden',
            position: 'relative',
            background: '#fff',
          }}>
            {/* Phone notch */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 18, zIndex: 10,
              background: '#0f0f22',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ width: 40, height: 5, borderRadius: 3, background: 'rgba(255,255,255,0.2)' }} />
            </div>

            {/* Website content area */}
            <div style={{ position: 'absolute', inset: 0, top: 18, bottom: 12 }}>
              {CLINICS.map((clinic, i) => (
                <ClinicWebsite key={clinic.name} clinic={clinic} active={active === i} />
              ))}
            </div>

            {/* Home bar */}
            <div style={{
              position: 'absolute', bottom: 4, left: '50%',
              transform: 'translateX(-50%)',
              width: 50, height: 4, borderRadius: 2,
              background: 'rgba(255,255,255,0.15)',
            }} />
          </div>
        </div>

        {/* Clinic label */}
        <div style={{ padding: '0 14px 12px', textAlign: 'center' }}>
          <p style={{
            fontSize: 10, fontWeight: 700,
            color: CLINICS[active].accent,
            fontFamily: 'Poppins,sans-serif', margin: 0,
            transition: 'color 0.3s',
          }}>
            {CLINICS[active].name}
          </p>
          <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', margin: '2px 0 0' }}>
            {CLINICS[active].area}
          </p>
        </div>

      </div>

      <style>{`
        @keyframes panelProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </div>
  );
}

/* ─── Client wrapper for Next.js dynamic import ── */
export function HeroDentalWebsitePanelClient({ onPanelChange }: { onPanelChange?: (idx: number) => void }) {
  return <HeroDentalWebsitePanel onPanelChange={onPanelChange} />;
}
