'use client';

import { useState } from 'react';
import Link from 'next/link';

const TREATMENTS = [
  'Teeth Cleaning',
  'Whitening',
  'Root Canal',
  'Checkup',
  'Braces Consult',
  'Filling',
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const SLOTS = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'];

type Step = 1 | 2 | 3 | 4;

export function BookingWidget() {
  const [step, setStep] = useState<Step>(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('');
  const [day, setDay] = useState('');
  const [slot, setSlot] = useState('');

  const progress = ((step - 1) / 3) * 100;

  return (
    <div
      id="booking-demo"
      style={{
        background: '#1a1a2e',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(0,0,0,0.22)',
        maxWidth: 420,
        margin: '0 auto',
        fontFamily: 'inherit',
      }}
    >
      {/* Header */}
      <div style={{ background: '#E86C2F', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
            AgastyaOne · Live Demo
          </p>
          <p style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700, margin: '2px 0 0' }}>
            Patient Appointment Booking
          </p>
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.9)' }} />
        </div>
      </div>

      {/* Progress bar */}
      {step < 4 && (
        <div style={{ background: 'rgba(255,255,255,0.07)', height: 3 }}>
          <div style={{ height: '100%', background: '#E86C2F', width: `${progress}%`, transition: 'width 0.4s ease' }} />
        </div>
      )}

      <div style={{ padding: '24px 20px' }}>

        {/* Step 1 — Details */}
        {step === 1 && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
              Step 1 of 3 — Your Details
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: 6, fontWeight: 600 }}>Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Dr. Priya's Patient"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    background: 'rgba(255,255,255,0.07)',
                    border: `1.5px solid ${name ? '#E86C2F' : 'rgba(255,255,255,0.12)'}`,
                    borderRadius: 10, padding: '11px 14px',
                    color: '#fff', fontSize: '0.88rem',
                    outline: 'none', transition: 'border-color 0.2s',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: 6, fontWeight: 600 }}>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    background: 'rgba(255,255,255,0.07)',
                    border: `1.5px solid ${phone ? '#E86C2F' : 'rgba(255,255,255,0.12)'}`,
                    borderRadius: 10, padding: '11px 14px',
                    color: '#fff', fontSize: '0.88rem',
                    outline: 'none', transition: 'border-color 0.2s',
                  }}
                />
              </div>
            </div>
            <button
              onClick={() => name && phone && setStep(2)}
              style={{
                marginTop: 20, width: '100%',
                background: name && phone ? '#E86C2F' : 'rgba(255,255,255,0.08)',
                color: name && phone ? '#fff' : 'rgba(255,255,255,0.3)',
                border: 'none', borderRadius: 10, padding: '13px',
                fontSize: '0.88rem', fontWeight: 700, cursor: name && phone ? 'pointer' : 'default',
                transition: 'all 0.2s',
              }}
            >
              Next → Select Treatment
            </button>
          </div>
        )}

        {/* Step 2 — Treatment */}
        {step === 2 && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
              Step 2 of 3 — Select Treatment
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {TREATMENTS.map(t => (
                <button
                  key={t}
                  onClick={() => setTreatment(t)}
                  style={{
                    background: treatment === t ? 'rgba(232,108,47,0.18)' : 'rgba(255,255,255,0.05)',
                    border: `1.5px solid ${treatment === t ? '#E86C2F' : 'rgba(255,255,255,0.1)'}`,
                    borderRadius: 10, padding: '12px 10px',
                    color: treatment === t ? '#E86C2F' : 'rgba(255,255,255,0.6)',
                    fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer',
                    transition: 'all 0.15s', textAlign: 'center',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <button
                onClick={() => setStep(1)}
                style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: 'none', borderRadius: 10, padding: 12, color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer' }}
              >
                ← Back
              </button>
              <button
                onClick={() => treatment && setStep(3)}
                style={{
                  flex: 2,
                  background: treatment ? '#E86C2F' : 'rgba(255,255,255,0.08)',
                  color: treatment ? '#fff' : 'rgba(255,255,255,0.3)',
                  border: 'none', borderRadius: 10, padding: 12,
                  fontSize: '0.88rem', fontWeight: 700, cursor: treatment ? 'pointer' : 'default',
                  transition: 'all 0.2s',
                }}
              >
                Next → Pick a Slot
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — Slot */}
        {step === 3 && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
              Step 3 of 3 — Pick Your Slot
            </p>
            {/* Day chips */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
              {DAYS.map(d => (
                <button
                  key={d}
                  onClick={() => { setDay(d); setSlot(''); }}
                  style={{
                    background: day === d ? '#E86C2F' : 'rgba(255,255,255,0.07)',
                    border: `1.5px solid ${day === d ? '#E86C2F' : 'rgba(255,255,255,0.1)'}`,
                    borderRadius: 8, padding: '7px 13px',
                    color: day === d ? '#fff' : 'rgba(255,255,255,0.55)',
                    fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
            {/* Time slots */}
            {day && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16, animation: 'fadeUp 0.2s ease' }}>
                {SLOTS.map(s => (
                  <button
                    key={s}
                    onClick={() => setSlot(s)}
                    style={{
                      background: slot === s ? 'rgba(232,108,47,0.18)' : 'rgba(255,255,255,0.05)',
                      border: `1.5px solid ${slot === s ? '#E86C2F' : 'rgba(255,255,255,0.1)'}`,
                      borderRadius: 10, padding: '11px',
                      color: slot === s ? '#E86C2F' : 'rgba(255,255,255,0.6)',
                      fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => setStep(2)}
                style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: 'none', borderRadius: 10, padding: 12, color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer' }}
              >
                ← Back
              </button>
              <button
                onClick={() => day && slot && setStep(4)}
                style={{
                  flex: 2,
                  background: day && slot ? '#E86C2F' : 'rgba(255,255,255,0.08)',
                  color: day && slot ? '#fff' : 'rgba(255,255,255,0.3)',
                  border: 'none', borderRadius: 10, padding: 12,
                  fontSize: '0.88rem', fontWeight: 700, cursor: day && slot ? 'pointer' : 'default',
                  transition: 'all 0.2s',
                }}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}

        {/* Step 4 — Confirmation */}
        {step === 4 && (
          <div style={{ animation: 'fadeUp 0.4s ease', textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '2px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <span style={{ fontSize: 26 }}>✅</span>
            </div>
            <p style={{ color: '#22c55e', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 6px' }}>
              Appointment Confirmed
            </p>
            <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 20px' }}>
              See you {day}!
            </p>

            {/* Confirmation card */}
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '16px', textAlign: 'left', marginBottom: 20 }}>
              {[
                { label: 'Patient', value: name },
                { label: 'Phone', value: phone },
                { label: 'Treatment', value: treatment },
                { label: 'Slot', value: `${day} at ${slot}` },
                { label: 'Clinic', value: 'AgastyaOne Demo Clinic, Bengaluru' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{label}</span>
                  <span style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 600, textAlign: 'right', maxWidth: '60%' }}>{value}</span>
                </div>
              ))}
            </div>

            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.6, marginBottom: 16 }}>
              This is what your patients will see — automatically sent via WhatsApp.
            </p>

            <Link
              href="/contact"
              style={{
                display: 'block', background: '#E86C2F', color: '#fff',
                borderRadius: 10, padding: '13px', fontSize: '0.88rem',
                fontWeight: 700, textDecoration: 'none', marginBottom: 10,
                textAlign: 'center',
              }}
            >
              Book a Free Call to Set This Up
            </Link>
            <button
              onClick={() => { setStep(1); setName(''); setPhone(''); setTreatment(''); setDay(''); setSlot(''); }}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', cursor: 'pointer', padding: 0 }}
            >
              Try again →
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        #booking-demo input::placeholder { color: rgba(255,255,255,0.25); }
        #booking-demo input:focus { border-color: #E86C2F !important; }
      `}</style>
    </div>
  );
}
