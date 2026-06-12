'use client';

import { useEffect, useState, useRef } from 'react';

type PatientRow = {
  id: number;
  initials: string;
  name: string;
  treatment: string;
  status: 'new' | 'confirmed' | 'visited' | 'recall';
};

type Toast = {
  id: number;
  icon: 'whatsapp' | 'star' | 'bell';
  text: string;
};

const STATUS = {
  new:       { label: 'New',       color: '#60a5fa' },
  confirmed: { label: 'Confirmed', color: '#34d399' },
  visited:   { label: 'Visited',   color: '#a78bfa' },
  recall:    { label: 'Recall',    color: '#fb923c' },
};

const PATIENTS: PatientRow[] = [
  { id: 1, initials: 'PS', name: 'Priya Sharma',  treatment: 'Root Canal',          status: 'visited'   },
  { id: 2, initials: 'RM', name: 'Rahul Mehta',   treatment: 'Braces Check',        status: 'confirmed' },
  { id: 3, initials: 'SR', name: 'Sunita Rao',    treatment: 'Cleaning',            status: 'confirmed' },
  { id: 4, initials: 'AN', name: 'Arjun Nair',    treatment: 'Implant Follow-up',   status: 'recall'    },
];

const SEQUENCE = [
  { at: 1600, toast: { id: 1, icon: 'whatsapp' as const, text: 'Reminder → Rahul Mehta, 3 PM tomorrow' },          pid: 2, status: 'confirmed' as const },
  { at: 4000, toast: { id: 2, icon: 'bell'      as const, text: 'New enquiry — Kavya Reddy, Extraction' },          pid: null, newRow: { id: 5, initials: 'KR', name: 'Kavya Reddy', treatment: 'Extraction', status: 'new' as const } },
  { at: 6800, toast: { id: 3, icon: 'star'      as const, text: 'Review request → Priya Sharma ⭐⭐⭐⭐⭐' },         pid: null },
  { at: 9400, toast: { id: 4, icon: 'bell'      as const, text: 'Recall sent → Arjun Nair (6 months)' },           pid: 4,    status: 'confirmed' as const },
];

function WaIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="11" height="11"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}

export function HeroCRMPanel() {
  const [patients, setPatients] = useState<PatientRow[]>(PATIENTS);
  const [toast, setToast] = useState<Toast | null>(null);
  const [highlightId, setHighlightId] = useState<number | null>(null);
  const [reviews, setReviews] = useState(47);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const cycle = useRef<ReturnType<typeof setTimeout> | null>(null);

  function run(pts: PatientRow[]) {
    timers.current.forEach(clearTimeout);

    SEQUENCE.forEach((step) => {
      const t = setTimeout(() => {
        setToast(step.toast);
        setTimeout(() => setToast(null), 2800);

        if (step.newRow) {
          setPatients(prev => [step.newRow!, ...prev.slice(0, 3)]);
          setHighlightId(step.newRow.id);
          setTimeout(() => setHighlightId(null), 1600);
        }

        if (step.pid && step.status) {
          setPatients(prev => prev.map(p => p.id === step.pid ? { ...p, status: step.status! } : p));
          setHighlightId(step.pid);
          setTimeout(() => setHighlightId(null), 1600);
        }

        if (step.toast.icon === 'star') {
          setTimeout(() => setReviews(r => r + 1), 1400);
        }
      }, step.at);

      timers.current.push(t);
    });

    const last = SEQUENCE[SEQUENCE.length - 1].at + 3200;
    cycle.current = setTimeout(() => {
      setPatients(PATIENTS);
      setToast(null);
      setReviews(47);
      run(PATIENTS);
    }, last);
  }

  useEffect(() => {
    run(patients);
    return () => {
      timers.current.forEach(clearTimeout);
      if (cycle.current) clearTimeout(cycle.current);
    };
  }, []);

  return (
    <div style={{
      background: 'linear-gradient(135deg,#1A1A2E 0%,#242442 60%,#11111f 100%)',
      borderRadius: 20,
      padding: 3,
      boxShadow: '0 32px 80px rgba(26,26,46,0.22), 0 0 0 1px rgba(255,255,255,0.07)',
      position: 'relative',
    }}>
      {/* inner card */}
      <div style={{ borderRadius: 17, overflow: 'hidden', background: '#13132a' }}>

        {/* titlebar */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '11px 16px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <span style={{ color: '#E86C2F', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 12 }}>AgastyaOne</span>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginLeft: 6 }}>Dental CRM · Live</span>
          </div>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#E86C2F', display: 'inline-block' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#25D366', display: 'inline-block' }} />
          </div>
        </div>

        {/* toast notification */}
        <div style={{
          height: 40,
          display: 'flex', alignItems: 'center',
          padding: '0 14px',
          overflow: 'hidden',
        }}>
          {toast ? (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 7,
              background: toast.icon === 'whatsapp' ? 'rgba(37,211,102,0.12)' : toast.icon === 'star' ? 'rgba(245,158,11,0.12)' : 'rgba(96,165,250,0.12)',
              border: `1px solid ${toast.icon === 'whatsapp' ? 'rgba(37,211,102,0.25)' : toast.icon === 'star' ? 'rgba(245,158,11,0.25)' : 'rgba(96,165,250,0.25)'}`,
              borderRadius: 99, padding: '4px 11px',
              animation: 'heroToastIn 0.3s ease',
              maxWidth: '100%',
            }}>
              <span style={{ color: toast.icon === 'whatsapp' ? '#25D366' : toast.icon === 'star' ? '#f59e0b' : '#60a5fa', flexShrink: 0 }}>
                {toast.icon === 'whatsapp' ? <WaIcon /> : toast.icon === 'star' ? '⭐' : '🔔'}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {toast.text}
              </span>
            </div>
          ) : (
            <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: 11 }}>Automation running…</span>
          )}
        </div>

        {/* patient rows */}
        <div style={{ padding: '4px 10px 10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {patients.slice(0, 4).map(p => {
            const cfg = STATUS[p.status];
            const lit = highlightId === p.id;
            return (
              <div key={p.id} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: lit ? 'rgba(232,108,47,0.08)' : 'rgba(255,255,255,0.025)',
                border: `1px solid ${lit ? 'rgba(232,108,47,0.3)' : 'rgba(255,255,255,0.05)'}`,
                borderRadius: 10, padding: '8px 11px',
                transition: 'all 0.45s ease',
              }}>
                <div style={{
                  width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
                  background: `${cfg.color}22`, border: `1.5px solid ${cfg.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: cfg.color, fontWeight: 700, fontSize: 10,
                  fontFamily: 'Poppins,sans-serif',
                }}>
                  {p.initials}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: '#fff', fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: 10, marginTop: 1 }}>{p.treatment}</div>
                </div>
                <div style={{
                  background: `${cfg.color}18`, color: cfg.color,
                  fontSize: 9, fontWeight: 700, padding: '3px 8px',
                  borderRadius: 99, whiteSpace: 'nowrap', flexShrink: 0,
                  transition: 'all 0.4s ease',
                  border: `1px solid ${cfg.color}33`,
                }}>
                  {cfg.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom stats strip */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(0,0,0,0.2)',
        }}>
          {[
            { label: 'Patients', value: '500+', color: '#34d399' },
            { label: 'Reviews',  value: String(reviews), color: '#f59e0b' },
            { label: 'Bookings', value: '3x',   color: '#E86C2F' },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding: '10px 8px', textAlign: 'center',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}>
              <div style={{ color: s.color, fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 16, transition: 'all 0.4s' }}>{s.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 9, marginTop: 2, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroToastIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
      `}</style>
    </div>
  );
}
