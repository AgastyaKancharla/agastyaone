'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';

const ROWS = [
  {
    them: 'Disappears after the invoice is paid',
    us:   'Monthly strategy calls and reporting — always accountable',
  },
  {
    them: 'Never sat inside a clinic or spoken to a patient',
    us:   'Built a dental CRM from scratch before selling anything',
  },
  {
    them: 'Generic templates reused across every client',
    us:   'Built around how Bengaluru dental clinics actually operate',
  },
  {
    them: "Promises rankings — can't explain how",
    us:   'Specific local keyword strategy for your neighbourhood',
  },
  {
    them: 'Hands you a website and walks away',
    us:   'Website, CRM, automation and SEO working as one system',
  },
  {
    them: "You're account #47 managed by a junior exec",
    us:   'You work directly with Agastya — every time',
  },
];

// Animated SVG checkmark
function AnimatedCheck({ play }: { play: boolean }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <polyline
        points="1.5,6.5 5,10 11.5,2.5"
        stroke="#E86C2F"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 20,
          strokeDashoffset: play ? 0 : 20,
          transition: play ? 'stroke-dashoffset 0.4s cubic-bezier(0.22,1,0.36,1) 0.15s' : 'none',
        }}
      />
    </svg>
  );
}

function CompareRow({ row, index, visible }: {
  row: typeof ROWS[number];
  index: number;
  visible: boolean;
}) {
  const [glowing, setGlowing] = useState(false);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setGlowing(true), 300);
      const t2 = setTimeout(() => setGlowing(false), 1100);
      return () => { clearTimeout(t); clearTimeout(t2); };
    }
  }, [visible]);

  const baseDelay = index * 80;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      alignItems: 'stretch',
    }}>
      {/* Them — slides from left */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        background: '#FAFAFA',
        border: '1.5px solid #F0F0F0',
        borderRadius: 14,
        padding: '14px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-18px)',
        transition: `opacity 0.45s ease ${baseDelay}ms, transform 0.45s cubic-bezier(0.22,1,0.36,1) ${baseDelay}ms`,
      }}>
        <div style={{
          width: 22, height: 22, borderRadius: '50%',
          background: '#FEE2E2',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, marginTop: 1,
        }}>
          <X size={11} color="#EF4444" strokeWidth={2.5} />
        </div>
        <p style={{
          fontSize: 13, lineHeight: 1.55,
          color: '#B0B0B0', margin: 0,
          textDecoration: 'line-through',
          textDecorationColor: '#D1D5DB',
        }}>
          {row.them}
        </p>
      </div>

      {/* Us — punches in from right with glow */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        background: '#FFFBF8',
        border: `1.5px solid ${glowing ? '#E86C2F' : '#FDDCBF'}`,
        borderRadius: 14,
        padding: '14px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0) scale(1)' : 'translateX(18px) scale(0.97)',
        transition: `opacity 0.45s ease ${baseDelay + 120}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${baseDelay + 120}ms, border-color 0.3s ease, box-shadow 0.3s ease`,
        boxShadow: glowing ? '0 0 0 3px rgba(232,108,47,0.15)' : 'none',
      }}>
        <div style={{
          width: 22, height: 22, borderRadius: '50%',
          background: '#FEE9D9',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, marginTop: 1,
        }}>
          <AnimatedCheck play={visible} />
        </div>
        <p style={{
          fontSize: 13, lineHeight: 1.55,
          color: '#1A1A2E', margin: 0,
          fontWeight: 500,
        }}>
          {row.us}
        </p>
      </div>
    </div>
  );
}

export function AgencyVsUs() {
  const [visibleRows, setVisibleRows] = useState<boolean[]>(Array(ROWS.length).fill(false));
  const [revealedCount, setRevealedCount] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    rowRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleRows(prev => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            setRevealedCount(prev => Math.max(prev, i + 1));
            obs.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section style={{
      background: '#fff',
      padding: '72px 0',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1rem, 5vw, 3rem)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{
            display: 'inline-block',
            background: '#FEE9D9', color: '#E86C2F',
            borderRadius: 999, padding: '4px 16px',
            fontSize: 13, fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            marginBottom: 14,
          }}>
            ✦ Why AgastyaOne
          </p>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(26px, 5vw, 42px)',
            fontWeight: 800, color: '#1A1A2E',
            margin: '0 0 12px', lineHeight: 1.2,
          }}>
            Most agencies have never sat<br />
            inside a dental clinic.
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, margin: '0 auto', maxWidth: 480, lineHeight: 1.6 }}>
            We have. Here's what that difference looks like in practice.
          </p>

          {/* Live counter */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            marginTop: 20,
            background: '#F8F6F3', borderRadius: 999,
            padding: '6px 16px',
            fontSize: 13, color: '#6B7280',
            fontFamily: 'Poppins, sans-serif',
            transition: 'all 0.3s ease',
          }}>
            <span style={{
              fontWeight: 800, fontSize: 15,
              color: revealedCount > 0 ? '#E86C2F' : '#D1D5DB',
              transition: 'color 0.3s ease',
              minWidth: 16, display: 'inline-block',
              textAlign: 'center',
            }}>
              {revealedCount}
            </span>
            <span>of {ROWS.length} reasons</span>
            <div style={{ display: 'flex', gap: 4 }}>
              {ROWS.map((_, i) => (
                <div key={i} style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: i < revealedCount ? '#E86C2F' : '#E5E7EB',
                  transition: 'background 0.3s ease',
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* Column headers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 10, marginBottom: 10,
        }}>
          <div style={{
            textAlign: 'center',
            fontFamily: 'Poppins, sans-serif',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.09em', textTransform: 'uppercase',
            color: '#9CA3AF', padding: '6px 0',
          }}>
            Typical Agency
          </div>
          <div style={{
            textAlign: 'center',
            fontFamily: 'Poppins, sans-serif',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.09em', textTransform: 'uppercase',
            color: '#E86C2F', padding: '6px 0',
          }}>
            AgastyaOne
          </div>
        </div>

        {/* Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {ROWS.map((row, i) => (
            <div key={i} ref={el => { rowRefs.current[i] = el; }}>
              <CompareRow row={row} index={i} visible={visibleRows[i]} />
            </div>
          ))}
        </div>

        {/* Founder quote strip */}
        <div style={{
          marginTop: 40,
          background: '#1A1A2E',
          borderRadius: 20,
          padding: 'clamp(24px, 4vw, 36px)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(rgba(232,108,47,0.12) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: '#E86C2F',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800, fontSize: 20, color: '#fff',
              flexShrink: 0,
            }}>
              A
            </div>
            <div style={{ flex: 1 }}>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(14px, 2.5vw, 17px)',
                fontWeight: 600, color: '#fff',
                lineHeight: 1.65, margin: '0 0 16px',
              }}>
                "I started AgastyaOne because every agency I encountered either did not understand how a clinic operates — or did not care about results after the invoice was paid."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <p style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 13, fontWeight: 600,
                  color: '#E86C2F', margin: 0, fontStyle: 'italic',
                }}>
                  — Agastya, Founder AgastyaOne
                </p>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: '#E86C2F', color: '#fff',
                  borderRadius: 999, padding: '10px 20px',
                  fontSize: 13, fontWeight: 700,
                  fontFamily: 'Poppins, sans-serif',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                }}>
                  Work with Agastya <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

