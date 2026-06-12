'use client';

import Link from 'next/link';
import { ArrowRight, X, Check } from 'lucide-react';

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
    them: 'Promises rankings — can\'t explain how',
    us:   'Specific local keyword strategy for your neighbourhood',
  },
  {
    them: 'Hands you a website and walks away',
    us:   'Website, CRM, automation and SEO working as one system',
  },
  {
    them: 'You\'re account #47 managed by a junior exec',
    us:   'You work directly with Agastya — every time',
  },
];

export function AgencyVsUs() {
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
          <p style={{ color: '#6B7280', fontSize: 15, margin: 0, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            We have. Here's what that difference looks like in practice.
          </p>
        </div>

        {/* Column headers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
          marginBottom: 10,
          padding: '0 4px',
        }}>
          <div style={{
            textAlign: 'center',
            fontFamily: 'Poppins, sans-serif',
            fontSize: 12, fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: '#9CA3AF',
            padding: '8px 0',
          }}>
            Typical Agency
          </div>
          <div style={{
            textAlign: 'center',
            fontFamily: 'Poppins, sans-serif',
            fontSize: 12, fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: '#E86C2F',
            padding: '8px 0',
          }}>
            AgastyaOne
          </div>
        </div>

        {/* Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {ROWS.map((row, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 10,
                alignItems: 'stretch',
              }}
            >
              {/* Them */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                background: '#FAFAFA',
                border: '1.5px solid #F0F0F0',
                borderRadius: 14,
                padding: '14px 14px',
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: '#FEE2E2',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: 1,
                }}>
                  <X size={12} color="#EF4444" strokeWidth={2.5} />
                </div>
                <p style={{
                  fontSize: 13, lineHeight: 1.55,
                  color: '#9CA3AF', margin: 0,
                  textDecoration: 'line-through',
                  textDecorationColor: '#D1D5DB',
                }}>
                  {row.them}
                </p>
              </div>

              {/* Us */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                background: '#FFFBF8',
                border: '1.5px solid #FDDCBF',
                borderRadius: 14,
                padding: '14px 14px',
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: '#FEE9D9',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: 1,
                }}>
                  <Check size={12} color="#E86C2F" strokeWidth={2.5} />
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
          {/* decorative dot grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(rgba(232,108,47,0.12) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            {/* Avatar */}
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
                fontSize: 'clamp(15px, 2.5vw, 18px)',
                fontWeight: 600,
                color: '#fff',
                lineHeight: 1.6,
                margin: '0 0 16px',
              }}>
                "I started AgastyaOne because every agency I encountered either did not understand how a clinic operates — or did not care about results after the invoice was paid."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <p style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 13, fontWeight: 600,
                  color: '#E86C2F', margin: 0,
                  fontStyle: 'italic',
                }}>
                  — Agastya, Founder AgastyaOne
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: '#E86C2F', color: '#fff',
                    borderRadius: 999, padding: '10px 20px',
                    fontSize: 13, fontWeight: 700,
                    fontFamily: 'Poppins, sans-serif',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
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
