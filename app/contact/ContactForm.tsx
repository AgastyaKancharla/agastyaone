'use client';

import { useState } from 'react';

const services = [
  'Website Development',
  'CRM Software',
  'SEO Services',
  'WhatsApp Automation',
  'Appointment Software',
  'Practice Automation',
  'Not Sure — Need Advice',
];

const timeSlots = [
  '9–10 AM', '10–11 AM', '11 AM–12 PM', '12–1 PM',
  '2–3 PM', '3–4 PM', '4–5 PM', '6–7 PM',
];

function getAvailableDates(): { label: string; value: string }[] {
  const dates: { label: string; value: string }[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (dates.length < 5) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      dates.push({
        label: d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' }),
        value: d.toISOString().split('T')[0],
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const availableDates = getAvailableDates();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.set('Timestamp', new Date().toISOString());
    fd.set('Preferred Date', selectedDate);
    fd.set('Preferred Time', selectedSlot);
    fd.set('Service Interest', selectedService);
    try {
      if (!endpoint) await new Promise(r => setTimeout(r, 600));
      else await fetch(endpoint, { method: 'POST', mode: 'no-cors', body: fd });
      form.reset();
      setSelectedDate(''); setSelectedSlot(''); setSelectedService('');
      setStatus('success');
    } catch { setStatus('error'); }
  }

  if (status === 'success') {
    return (
      <div style={{ background: '#fff', borderRadius: 16, padding: '32px 24px', textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, margin: '0 auto 16px' }}>✅</div>
        <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 20, fontWeight: 700, color: '#1A1A2E', margin: '0 0 10px' }}>You're booked in!</h3>
        <p style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
          We will WhatsApp you within 2 hours to confirm your call on <strong>{selectedDate}</strong> between <strong>{selectedSlot}</strong>.
        </p>
        <a href={`https://wa.me/918951553531?text=${encodeURIComponent('Hi Agastya, I just booked a call on your website!')}`}
          target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#25D366', color: '#fff', borderRadius: 999, padding: '10px 20px', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
          💬 Message us on WhatsApp now →
        </a>
      </div>
    );
  }

  const chipBase: React.CSSProperties = {
    border: '1.5px solid #E5E7EB', borderRadius: 8, padding: '6px 10px',
    fontSize: 11.5, fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s',
    background: '#fff', color: '#6B7280', textAlign: 'center',
  };
  const chipActive: React.CSSProperties = {
    ...chipBase, borderColor: '#E86C2F', background: '#FFF7F3', color: '#E86C2F',
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

      {/* Name + WhatsApp */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>Your Name *</span>
          <input name="Name" required placeholder="Dr. Ramesh" style={{ border: '1.5px solid #E5E7EB', borderRadius: 8, padding: '9px 12px', fontSize: 13, outline: 'none', background: '#fff' }} />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>WhatsApp Number *</span>
          <input name="WhatsApp Number" type="tel" required placeholder="+91 98765 43210" style={{ border: '1.5px solid #E5E7EB', borderRadius: 8, padding: '9px 12px', fontSize: 13, outline: 'none', background: '#fff' }} />
        </label>
      </div>

      {/* Clinic name */}
      <label style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>Clinic Name</span>
        <input name="Clinic Name" placeholder="Smile Dental Clinic, Koramangala" style={{ border: '1.5px solid #E5E7EB', borderRadius: 8, padding: '9px 12px', fontSize: 13, outline: 'none', background: '#fff' }} />
      </label>

      {/* Service interest */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>What are you most interested in?</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(120px,1fr))', gap: 6 }}>
          {services.map(s => (
            <button type="button" key={s} onClick={() => setSelectedService(s)}
              style={selectedService === s ? chipActive : chipBase}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Date */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>Preferred Call Date</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {availableDates.map(d => (
            <button type="button" key={d.value} onClick={() => setSelectedDate(d.label)}
              style={selectedDate === d.label ? chipActive : chipBase}>
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Time slots — compact 4-col grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>Preferred Time</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }}>
          {timeSlots.map(slot => (
            <button type="button" key={slot} onClick={() => setSelectedSlot(slot)}
              style={selectedSlot === slot ? chipActive : chipBase}>
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Optional note */}
      <label style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>
          Anything to know? <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(optional)</span>
        </span>
        <textarea name="Message" rows={2} placeholder="e.g. 3 chairs, 0 Google reviews, want more patients..."
          style={{ border: '1.5px solid #E5E7EB', borderRadius: 8, padding: '9px 12px', fontSize: 13, outline: 'none', background: '#fff', resize: 'none' }} />
      </label>

      {/* Submit */}
      <button type="submit" disabled={status === 'loading'}
        style={{ background: 'linear-gradient(135deg,#E86C2F,#f59e0b)', color: '#fff', border: 'none', borderRadius: 999, padding: '13px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'Poppins,sans-serif', boxShadow: '0 6px 20px rgba(232,108,47,0.3)', opacity: status === 'loading' ? 0.7 : 1 }}>
        {status === 'loading' ? 'Booking your call...' : 'Book My Free Call →'}
      </button>

      <p style={{ textAlign: 'center', fontSize: 11, color: '#9CA3AF', margin: 0 }}>
        We confirm on WhatsApp within 2 hours ·{' '}
        <a href="tel:+918951553531" style={{ color: '#E86C2F' }}>Or call us directly</a>
      </p>

      {status === 'error' && (
        <p style={{ background: '#FEF2F2', borderRadius: 8, padding: '12px', fontSize: 13, color: '#DC2626' }}>
          Something went wrong. WhatsApp us at <a href="https://wa.me/918951553531" style={{ fontWeight: 700 }}>+91 83284 43057</a>
        </p>
      )}
    </form>
  );
}
