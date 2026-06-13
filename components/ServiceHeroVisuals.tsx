'use client';

import { useEffect, useRef, useState } from 'react';

/* ── shared hook ──────────────────────────────────────── */
function useOnceVisible(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [fired, setFired] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setFired(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, fired };
}

/* ══════════════════════════════════════════════════════
   1. WEBSITE — browser frame with clinic site loading
══════════════════════════════════════════════════════ */
export function WebsiteHeroVisual() {
  const { ref, fired } = useOnceVisible(0.2);
  const [barW, setBarW] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const ts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!fired) return;
    const add = (fn: () => void, ms: number) => { const t = setTimeout(fn, ms); ts.current.push(t); };
    add(() => setBarW(45),  300);
    add(() => setBarW(78),  700);
    add(() => setBarW(100), 1200);
    add(() => { setLoaded(true); }, 1400);
    add(() => setShowReviews(true), 2200);
    return () => ts.current.forEach(clearTimeout);
  }, [fired]);

  return (
    <div ref={ref} style={{ background: '#fff', borderRadius: 20, boxShadow: '0 24px 64px rgba(26,26,46,0.10), 0 0 0 1px rgba(26,26,46,0.06)', overflow: 'hidden', maxWidth: 420 }}>
      {/* browser chrome */}
      <div style={{ background: '#F3F4F6', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#FF5F57','#FEBC2E','#28C840'].map(c => <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, display: 'inline-block' }} />)}
        </div>
        <div style={{ flex: 1, background: '#fff', borderRadius: 6, padding: '4px 10px', fontSize: 11, color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: 5, border: '1px solid #E5E7EB' }}>
          <span style={{ color: '#34d399', fontSize: 10 }}>🔒</span> drpriya-dental.com
        </div>
      </div>
      {/* load bar */}
      {!loaded && (
        <div style={{ height: 2, background: '#F3F4F6' }}>
          <div style={{ height: '100%', width: `${barW}%`, background: 'linear-gradient(90deg,#E86C2F,#f59e0b)', transition: 'width 0.45s ease', borderRadius: 2 }} />
        </div>
      )}
      {/* site content */}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}>
        {/* hero strip */}
        <div style={{ background: 'linear-gradient(135deg,#1A1A2E,#242442)', padding: '18px 18px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(232,108,47,0.2)', border: '2px solid rgba(232,108,47,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>🦷</div>
            <div>
              <div style={{ color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 14 }}>Dr. Priya Dental Clinic</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginTop: 1 }}>Koramangala, Bengaluru</div>
            </div>
          </div>
          <div style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#25D366', borderRadius: 99, padding: '6px 14px', cursor: 'pointer' }}>
            <svg viewBox="0 0 24 24" fill="white" width="12" height="12"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>Book Appointment</span>
          </div>
        </div>
        {/* trust signals */}
        <div style={{ padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { icon: '⭐', text: '4.9 Google Rating · 47 Reviews', sub: 'Verified patients' },
            { icon: '🏆', text: '10+ Years Experience', sub: 'Specialist in cosmetic dentistry' },
            { icon: '✓',  text: 'Same-Day Appointments', sub: 'Emergency slots available' },
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', background: '#F9FAFB', borderRadius: 8, border: '1px solid #F3F4F6' }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>{t.icon}</span>
              <div>
                <div style={{ color: '#1A1A2E', fontSize: 12, fontWeight: 600 }}>{t.text}</div>
                <div style={{ color: '#9CA3AF', fontSize: 10, marginTop: 1 }}>{t.sub}</div>
              </div>
            </div>
          ))}
        </div>
        {/* reviews strip */}
        <div style={{ margin: '0 18px 14px', padding: '10px 12px', background: showReviews ? 'rgba(245,158,11,0.06)' : '#F9FAFB', border: `1px solid ${showReviews ? 'rgba(245,158,11,0.2)' : '#F3F4F6'}`, borderRadius: 10, transition: 'all 0.5s ease', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 18 }}>💬</span>
          <div>
            <div style={{ color: '#1A1A2E', fontSize: 11, fontWeight: 600 }}>"Best dental clinic in Koramangala!"</div>
            <div style={{ color: '#9CA3AF', fontSize: 10, marginTop: 1 }}>— Rahul M. · Google Review</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   2. SEO / GBP — profile being built out, reviews growing
══════════════════════════════════════════════════════ */
const GBP_STEPS = [
  { label: 'Business name & category', done: true,  delay: 0    },
  { label: 'Address & service area',   done: true,  delay: 0    },
  { label: 'Phone & website added',    done: false, delay: 800  },
  { label: '12 photos uploaded',       done: false, delay: 1800 },
  { label: 'Services & treatments',    done: false, delay: 2800 },
  { label: 'Weekly posts scheduled',   done: false, delay: 3800 },
];

export function SEOHeroVisual() {
  const { ref, fired } = useOnceVisible(0.2);
  const [doneSteps, setDoneSteps] = useState(2);
  const [reviews, setReviews] = useState(14);
  const ts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!fired) return;
    GBP_STEPS.slice(2).forEach((_, i) => {
      const t = setTimeout(() => setDoneSteps(d => d + 1), GBP_STEPS[i + 2].delay);
      ts.current.push(t);
    });
    [1600, 3200, 4400].forEach(ms => {
      const t = setTimeout(() => setReviews(r => r + 1), ms);
      ts.current.push(t);
    });
    return () => ts.current.forEach(clearTimeout);
  }, [fired]);

  const pct = Math.round((doneSteps / GBP_STEPS.length) * 100);

  return (
    <div ref={ref} style={{ background: '#fff', borderRadius: 20, boxShadow: '0 24px 64px rgba(26,26,46,0.10), 0 0 0 1px rgba(26,26,46,0.06)', overflow: 'hidden', maxWidth: 420 }}>
      {/* header */}
      <div style={{ padding: '14px 18px 10px', borderBottom: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>📍</div>
        <div>
          <div style={{ color: '#1A1A2E', fontSize: 13, fontWeight: 700 }}>Google Business Profile</div>
          <div style={{ color: '#9CA3AF', fontSize: 10, marginTop: 1 }}>Dr. Priya Dental Clinic · Koramangala</div>
        </div>
        <div style={{ marginLeft: 'auto', background: 'rgba(52,211,153,0.1)', color: '#059669', fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 99 }}>
          {pct}% optimised
        </div>
      </div>
      {/* progress bar */}
      <div style={{ height: 3, background: '#F3F4F6' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg,#34d399,#059669)', transition: 'width 0.6s ease' }} />
      </div>
      {/* checklist */}
      <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {GBP_STEPS.map((s, i) => {
          const done = i < doneSteps;
          return (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', background: done ? 'rgba(52,211,153,0.05)' : '#FAFAFA', border: `1px solid ${done ? 'rgba(52,211,153,0.2)' : '#F3F4F6'}`, borderRadius: 8, transition: 'all 0.4s ease' }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: done ? '#34d399' : '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.3s' }}>
                {done && <span style={{ color: '#fff', fontSize: 10, fontWeight: 700 }}>✓</span>}
              </div>
              <span style={{ fontSize: 12, color: done ? '#1A1A2E' : '#9CA3AF', fontWeight: done ? 600 : 400, transition: 'color 0.3s' }}>{s.label}</span>
              {done && i === doneSteps - 1 && (
                <span style={{ marginLeft: 'auto', fontSize: 9, color: '#E86C2F', fontWeight: 700, background: 'rgba(232,108,47,0.08)', padding: '2px 7px', borderRadius: 99, animation: 'gbpPop 0.3s ease' }}>Just done</span>
              )}
            </div>
          );
        })}
      </div>
      {/* reviews strip */}
      <div style={{ margin: '0 14px 14px', padding: '10px 14px', background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ color: '#1A1A2E', fontSize: 12, fontWeight: 700 }}>Google Reviews</div>
          <div style={{ display: 'flex', gap: 2, marginTop: 3 }}>{'★★★★★'.split('').map((s,i) => <span key={i} style={{ color: '#f59e0b', fontSize: 12 }}>{s}</span>)}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: '#E86C2F', fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 26, lineHeight: 1, transition: 'all 0.3s' }}>{reviews}</div>
          <div style={{ color: '#9CA3AF', fontSize: 9, marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Reviews</div>
        </div>
      </div>
      <style>{`@keyframes gbpPop { from { opacity:0; transform:scale(0.8); } to { opacity:1; transform:scale(1); } }`}</style>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   3. APPOINTMENTS — schedule filling, no-shows dropping
══════════════════════════════════════════════════════ */
const INIT_SLOTS = [
  { time: '9:00 AM',  name: 'Priya S.',  tx: 'Root Canal',  filled: true  },
  { time: '10:30 AM', name: 'Rahul M.',  tx: 'Braces',      filled: true  },
  { time: '12:00 PM', name: '',          tx: '',             filled: false },
  { time: '2:00 PM',  name: 'Sunita R.', tx: 'Cleaning',    filled: true  },
  { time: '3:30 PM',  name: '',          tx: '',             filled: false },
  { time: '5:00 PM',  name: '',          tx: '',             filled: false },
];

export function AppointmentHeroVisual() {
  const { ref, fired } = useOnceVisible(0.2);
  const [slots, setSlots]     = useState(INIT_SLOTS);
  const [noShows, setNoShows] = useState(3);
  const [toast, setToast]     = useState<string | null>(null);
  const ts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!fired) return;
    const fill = (time: string, name: string, tx: string, delay: number, msg: string) => {
      const t = setTimeout(() => {
        setSlots(prev => prev.map(s => s.time === time ? { ...s, name, tx, filled: true } : s));
        setToast(msg);
        setTimeout(() => setToast(null), 1600);
      }, delay);
      ts.current.push(t);
    };
    fill('12:00 PM', 'Arjun N.',  'Implant',   900,  'Arjun N. confirmed via WhatsApp');
    fill('3:30 PM',  'Kavya R.',  'Whitening', 2400, 'Kavya R. booked online at 11 PM');
    fill('5:00 PM',  'Dev P.',    'Extraction',3800, 'Dev P. — waitlist slot filled');
    const t = setTimeout(() => setNoShows(0), 4600);
    ts.current.push(t);
    return () => ts.current.forEach(clearTimeout);
  }, [fired]);

  const filled = slots.filter(s => s.filled).length;

  return (
    <div ref={ref} style={{ background: '#fff', borderRadius: 20, boxShadow: '0 24px 64px rgba(26,26,46,0.10), 0 0 0 1px rgba(26,26,46,0.06)', overflow: 'hidden', maxWidth: 420 }}>
      {/* header */}
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ color: '#1A1A2E', fontSize: 13, fontWeight: 700 }}>Today's Schedule</div>
          <div style={{ color: '#9CA3AF', fontSize: 10, marginTop: 1 }}>Tuesday, Jun 17 · Koramangala</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#34d399', fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 18, lineHeight: 1, transition: 'all 0.3s' }}>{filled}/{slots.length}</div>
            <div style={{ color: '#9CA3AF', fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Booked</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: noShows === 0 ? '#34d399' : '#fb923c', fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 18, lineHeight: 1, transition: 'all 0.4s' }}>{noShows}</div>
            <div style={{ color: '#9CA3AF', fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>No-shows</div>
          </div>
        </div>
      </div>
      {/* toast */}
      <div style={{ height: 34, display: 'flex', alignItems: 'center', padding: '0 14px', overflow: 'hidden' }}>
        {toast ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)', borderRadius: 99, padding: '3px 10px', animation: 'apptToast 0.3s ease' }}>
            <span style={{ color: '#25D366', fontSize: 10 }}>✓</span>
            <span style={{ color: '#374151', fontSize: 10.5 }}>{toast}</span>
          </div>
        ) : <span style={{ color: '#D1D5DB', fontSize: 10.5 }}>Booking system active…</span>}
      </div>
      {/* slots */}
      <div style={{ padding: '0 12px 12px', display: 'flex', flexDirection: 'column', gap: 5 }}>
        {slots.map(s => (
          <div key={s.time} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', background: s.filled ? '#FAFFFE' : '#FAFAFA', border: `1px solid ${s.filled ? 'rgba(52,211,153,0.2)' : '#F3F4F6'}`, borderRadius: 8, transition: 'all 0.4s ease' }}>
            <div style={{ color: '#9CA3AF', fontSize: 10, fontWeight: 600, width: 50, flexShrink: 0 }}>{s.time}</div>
            {s.filled ? (
              <>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#1A1A2E', fontSize: 11.5, fontWeight: 600 }}>{s.name}</div>
                  <div style={{ color: '#9CA3AF', fontSize: 9.5, marginTop: 1 }}>{s.tx}</div>
                </div>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', flexShrink: 0 }} />
              </>
            ) : (
              <div style={{ color: '#D1D5DB', fontSize: 10.5, fontStyle: 'italic' }}>Open slot</div>
            )}
          </div>
        ))}
      </div>
      <style>{`@keyframes apptToast { from { opacity:0; transform:translateY(-4px); } to { opacity:1; transform:none; } }`}</style>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   4. MARKETING — activity feed of real actions
══════════════════════════════════════════════════════ */
const MKT_EVENTS = [
  { id: 1, icon: '📍', color: '#6366f1', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.2)', title: 'GBP post published', sub: '"Root canal special — Koramangala"', time: 'Just now', delay: 0 },
  { id: 2, icon: '⭐', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', title: 'New Google review received', sub: '"5 stars — Dr. Priya is excellent!"', time: '2 min ago', delay: 1200 },
  { id: 3, icon: '💬', color: '#25D366', bg: 'rgba(37,211,102,0.08)', border: 'rgba(37,211,102,0.2)', title: 'WhatsApp campaign sent', sub: '47 patients · 98% open rate', time: '9:00 AM', delay: 2400 },
  { id: 4, icon: '🔁', color: '#E86C2F', bg: 'rgba(232,108,47,0.08)', border: 'rgba(232,108,47,0.2)', title: 'Recall message sent', sub: 'Arjun N. — 6 months since last visit', time: '9:15 AM', delay: 3600 },
  { id: 5, icon: '📣', color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)', title: 'New patient enquiry', sub: 'From Google · "braces Koramangala"', time: '10:30 AM', delay: 4600 },
];

export function MarketingHeroVisual() {
  const { ref, fired } = useOnceVisible(0.2);
  const [visible, setVisible] = useState<number[]>([]);
  const [newPatients, setNewPatients] = useState(4);
  const ts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!fired) return;
    MKT_EVENTS.forEach(e => {
      const t = setTimeout(() => {
        setVisible(prev => [...prev, e.id]);
        if (e.id === 5) setNewPatients(p => p + 1);
      }, e.delay);
      ts.current.push(t);
    });
    return () => ts.current.forEach(clearTimeout);
  }, [fired]);

  return (
    <div ref={ref} style={{ background: '#FEFCF8', borderRadius: 20, boxShadow: '0 24px 64px rgba(26,26,46,0.10), 0 0 0 1px rgba(232,108,47,0.1)', overflow: 'hidden', maxWidth: 420 }}>
      {/* header */}
      <div style={{ padding: '12px 16px 10px', borderBottom: '1px solid #F5EDE4', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ color: '#1A1A2E', fontSize: 13, fontWeight: 700, fontFamily: 'Poppins,sans-serif' }}>Growth Activity</div>
          <div style={{ color: '#9CA3AF', fontSize: 10, marginTop: 1 }}>Dr. Priya Dental · Today</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#E86C2F', fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 18, lineHeight: 1, transition: 'all 0.3s' }}>{newPatients}</div>
            <div style={{ color: '#9CA3AF', fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>New patients</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#34d399', fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 18, lineHeight: 1 }}>47</div>
            <div style={{ color: '#9CA3AF', fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Reviews</div>
          </div>
        </div>
      </div>
      {/* feed */}
      <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 7 }}>
        {MKT_EVENTS.map(e => {
          const show = visible.includes(e.id);
          return (
            <div key={e.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '9px 11px', background: show ? e.bg : '#F9F9F9', border: `1px solid ${show ? e.border : '#F3F4F6'}`, borderRadius: 10, transition: 'all 0.4s ease', opacity: show ? 1 : 0.35 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: show ? e.bg : '#F3F4F6', border: `1px solid ${show ? e.border : 'transparent'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0, transition: 'all 0.4s' }}>{e.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: show ? '#1A1A2E' : '#9CA3AF', fontSize: 12, fontWeight: 600, transition: 'color 0.3s' }}>{e.title}</div>
                <div style={{ color: '#9CA3AF', fontSize: 10.5, marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{e.sub}</div>
              </div>
              <div style={{ color: '#D1D5DB', fontSize: 9.5, whiteSpace: 'nowrap', flexShrink: 0 }}>{e.time}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   5. AUTOMATION — WhatsApp message feed
══════════════════════════════════════════════════════ */
const AUTO_MSGS = [
  { id: 1, name: 'Rahul Mehta',  type: '📅 Reminder',  msg: 'Your appointment is tomorrow at 3 PM. Reply YES to confirm.',        delay: 600  },
  { id: 2, name: 'Priya Sharma', type: '⭐ Review',     msg: 'Hope your cleaning went well! Would you leave us a Google review?',  delay: 1800 },
  { id: 3, name: 'Arjun Nair',   type: '🔁 Recall',    msg: 'It\'s been 6 months since your checkup. Book your recall today!',    delay: 3200 },
  { id: 4, name: 'Kavya Reddy',  type: '👋 Welcome',   msg: 'Welcome! Your appointment is confirmed for tomorrow at 11 AM.',      delay: 4400 },
];

export function AutomationHeroVisual() {
  const { ref, fired } = useOnceVisible(0.2);
  const [msgs, setMsgs] = useState<typeof AUTO_MSGS>([]);
  const [sent, setSent] = useState(0);
  const ts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!fired) return;
    AUTO_MSGS.forEach(m => {
      const t = setTimeout(() => {
        setMsgs(prev => [...prev, m]);
        setSent(s => s + 1);
      }, m.delay);
      ts.current.push(t);
    });
    return () => ts.current.forEach(clearTimeout);
  }, [fired]);

  return (
    <div ref={ref} style={{ background: '#f0fdf4', borderRadius: 20, boxShadow: '0 24px 64px rgba(37,211,102,0.08), 0 0 0 1.5px rgba(37,211,102,0.15)', overflow: 'hidden', maxWidth: 420 }}>
      {/* WhatsApp header */}
      <div style={{ background: '#075E54', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </div>
        <div>
          <div style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>AgastyaOne Automation</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10 }}>Sending automatically · {sent} sent today</div>
        </div>
        <div style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.15)', borderRadius: 99, padding: '3px 9px', color: '#fff', fontSize: 9, fontWeight: 700 }}>● LIVE</div>
      </div>
      {/* messages */}
      <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 240 }}>
        {msgs.length === 0 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100, color: '#9CA3AF', fontSize: 12 }}>
            Automation starting…
          </div>
        )}
        {msgs.map((m, i) => (
          <div key={m.id} style={{ animation: 'autoMsgIn 0.35s ease' }}>
            <div style={{ fontSize: 9.5, color: '#6B7280', marginBottom: 3, fontWeight: 600 }}>{m.type} → {m.name}</div>
            <div style={{ background: '#DCF8C6', borderRadius: '0 10px 10px 10px', padding: '8px 11px', maxWidth: '90%' }}>
              <div style={{ color: '#1A1A2E', fontSize: 11.5, lineHeight: 1.5 }}>{m.msg}</div>
              <div style={{ color: '#25D366', fontSize: 9.5, marginTop: 4, textAlign: 'right' }}>✓✓ Delivered</div>
            </div>
          </div>
        ))}
      </div>
      {/* stats strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderTop: '1px solid rgba(37,211,102,0.15)', background: 'rgba(255,255,255,0.6)' }}>
        {[[String(sent),'Sent today','#25D366'],['98%','Open rate','#059669'],['0 hrs','Manual work','#E86C2F']].map(([v,l,c],i) => (
          <div key={l} style={{ padding: '10px 8px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(37,211,102,0.15)' : 'none' }}>
            <div style={{ color: c, fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 15, transition: 'all 0.3s' }}>{v}</div>
            <div style={{ color: '#9CA3AF', fontSize: 8.5, marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{l}</div>
          </div>
        ))}
      </div>
      <style>{`@keyframes autoMsgIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:none; } }`}</style>
    </div>
  );
}
