'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const ROWS = [
  {
    label: 'After the invoice',
    them: 'Gone. No check-ins, no updates, no accountability.',
    us: 'Monthly strategy calls. You always know what we did and what is next.',
  },
  {
    label: 'Clinic knowledge',
    them: 'Never stepped inside a clinic. Learned from YouTube.',
    us: 'Built a dental CRM from scratch. Spoke to 20+ Bengaluru clinic owners before selling anything.',
  },
  {
    label: 'Your website',
    them: 'A template with your logo swapped in. Same as their last 10 clients.',
    us: 'Built around how Bengaluru patients actually search, compare and decide.',
  },
  {
    label: 'SEO promises',
    them: '"We will get you to page one." No timeline. No explanation.',
    us: 'Specific neighbourhood keywords, a clear monthly plan and honest timelines.',
  },
  {
    label: 'Who you talk to',
    them: 'A junior exec reading from a brief. Agastya is unreachable.',
    us: 'You work directly with Agastya. Every call. Every decision.',
  },
  {
    label: 'How it fits together',
    them: 'A website here. An SEO package there. Nothing connected.',
    us: 'Website, CRM, automation and SEO built as one system that compounds.',
  },
];

export function AgencyVsUs() {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [revealedRows, setRevealedRows] = useState<boolean[]>(Array(ROWS.length).fill(false));
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    rowRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setRevealedRows(prev => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 100);
            obs.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const revealedCount = revealedRows.filter(Boolean).length;

  return (
    <section style={{ background: '#fff', padding: '80px 0', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1rem, 5vw, 3rem)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <p style={{
            display: 'inline-block',
            background: '#FEE9D9', color: '#E86C2F',
            borderRadius: 999, padding: '5px 18px',
            fontSize: 13, fontWeight: 700,
            fontFamily: 'Poppins, sans-serif',
            marginBottom: 16, letterSpacing: '0.02em',
          }}>
            ✦ Why AgastyaOne
          </p>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 800, color: '#1A1A2E',
            margin: '0 0 14px', lineHeight: 1.15,
          }}>
            Most agencies have never sat<br />inside a dental clinic.
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, margin: '0 auto', maxWidth: 460, lineHeight: 1.65 }}>
            We have. Here is exactly what that difference looks like for your clinic.
          </p>

          {/* Progress dots */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            marginTop: 22, background: '#F8F6F3',
            borderRadius: 999, padding: '7px 18px',
            fontSize: 13, color: '#9CA3AF',
          }}>
            <span style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 16,
              color: revealedCount > 0 ? '#E86C2F' : '#D1D5DB',
              transition: 'color 0.3s',
              minWidth: 18, display: 'inline-block', textAlign: 'center',
            }}>
              {revealedCount}
            </span>
            <span>of {ROWS.length} differences</span>
            <div style={{ display: 'flex', gap: 5 }}>
              {ROWS.map((_, i) => (
                <div key={i} style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: i < revealedCount ? '#E86C2F' : '#E5E7EB',
                  transition: 'background 0.4s ease',
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* Column labels */}
        <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr', gap: 10, marginBottom: 8, padding: '0 4px' }}>
          <div />
          <div style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', fontFamily: 'Poppins, sans-serif' }}>
            Typical Agency
          </div>
          <div style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E86C2F', fontFamily: 'Poppins, sans-serif' }}>
            AgastyaOne
          </div>
        </div>

        {/* Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {ROWS.map((row, i) => {
            const revealed = revealedRows[i];
            const active = activeRow === i;
            return (
              <div
                key={i}
                ref={el => { rowRefs.current[i] = el; }}
                onMouseEnter={() => setActiveRow(i)}
                onMouseLeave={() => setActiveRow(null)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '140px 1fr 1fr',
                  gap: 10,
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`,
                }}
              >
                {/* Label */}
                <div style={{
                  display: 'flex', alignItems: 'center',
                  padding: '0 4px',
                }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.07em',
                    color: active ? '#E86C2F' : '#9CA3AF',
                    fontFamily: 'Poppins, sans-serif',
                    transition: 'color 0.2s',
                    lineHeight: 1.3,
                  }}>
                    {row.label}
                  </span>
                </div>

                {/* Them */}
                <div style={{
                  background: active ? '#FFF5F5' : '#FAFAFA',
                  border: `1.5px solid ${active ? '#FECACA' : '#F0F0F0'}`,
                  borderRadius: 14,
                  padding: '14px 16px',
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  transition: 'all 0.2s ease',
                }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: '#FEE2E2', flexShrink: 0, marginTop: 2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700, color: '#EF4444',
                  }}>✕</div>
                  <p style={{
                    margin: 0, fontSize: 13, lineHeight: 1.6,
                    color: '#9CA3AF', textDecoration: 'line-through',
                    textDecorationColor: '#D1D5DB',
                  }}>{row.them}</p>
                </div>

                {/* Us */}
                <div style={{
                  background: active ? '#FFFBF7' : '#FFFBF8',
                  border: `1.5px solid ${active ? '#E86C2F' : '#FDDCBF'}`,
                  borderRadius: 14,
                  padding: '14px 16px',
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  boxShadow: active ? '0 0 0 4px rgba(232,108,47,0.08)' : 'none',
                  transition: 'all 0.2s ease',
                }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: '#FEE9D9', flexShrink: 0, marginTop: 2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700, color: '#E86C2F',
                  }}>✓</div>
                  <p style={{
                    margin: 0, fontSize: 13, lineHeight: 1.6,
                    color: '#1A1A2E', fontWeight: 500,
                  }}>{row.us}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founder strip */}
        <div style={{
          marginTop: 44,
          borderRadius: 22,
          background: 'linear-gradient(135deg, #1A1A2E 0%, #242442 60%, #11111f 100%)',
          padding: 'clamp(24px, 4vw, 40px)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* dot grid */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(rgba(232,108,47,0.10) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }} />
          {/* accent line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: 3,
            background: 'linear-gradient(90deg, #E86C2F, #f59e0b)',
          }} />

          <div style={{ position: 'relative', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Avatar */}
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: 'linear-gradient(135deg, #E86C2F, #f59e0b)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Poppins, sans-serif', fontWeight: 900,
              fontSize: 22, color: '#fff', flexShrink: 0,
              boxShadow: '0 0 0 3px rgba(232,108,47,0.3)',
            }}>A</div>

            <div style={{ flex: 1, minWidth: 240 }}>
              {/* Big quote mark */}
              <div style={{
                fontFamily: 'Georgia, serif', fontSize: 56,
                lineHeight: 0.8, color: '#E86C2F',
                marginBottom: 12, opacity: 0.7,
              }}>"</div>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(14px, 2.5vw, 17px)',
                fontWeight: 600, color: '#fff',
                lineHeight: 1.7, margin: '0 0 8px',
              }}>
                I built a dental CRM before I sold a single service.
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14, color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7, margin: '0 0 20px',
              }}>
                I spent months sitting with clinic owners in Koramangala, Indiranagar and Jayanagar — learning their operations, their patient problems and why the tools they had were failing them. Only then did I start AgastyaOne. That is the difference you are buying.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 700, color: '#E86C2F', margin: 0, fontStyle: 'italic' }}>
                    — Agastya, Founder AgastyaOne
                  </p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', margin: '3px 0 0', fontFamily: 'Inter, sans-serif' }}>
                    Bengaluru · Dental Digital Specialist
                  </p>
                </div>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  background: '#E86C2F', color: '#fff',
                  borderRadius: 999, padding: '11px 22px',
                  fontSize: 13, fontWeight: 700,
                  fontFamily: 'Poppins, sans-serif',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  boxShadow: '0 4px 20px rgba(232,108,47,0.35)',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}>
                  Work with Agastya →
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
