'use client';

import Link from 'next/link';

const FEATURES = [
  {
    icon: '👥',
    title: 'Patient Database',
    tag: 'Core',
    tagColor: '#6366f1',
    body: 'Complete patient profiles — contact details, treatment history, last visit date and next appointment due. Never lose track of a patient again.',
    stat: '500+', statLabel: 'patients per clinic',
  },
  {
    icon: '📥',
    title: 'New Patient Enquiries',
    tag: 'Conversion',
    tagColor: '#E86C2F',
    body: 'Every call, WhatsApp or online enquiry tracked from first contact to booked appointment. No new patient ever falls through the cracks.',
    stat: '0', statLabel: 'enquiries lost',
  },
  {
    icon: '🔔',
    title: 'Appointment Reminders',
    tag: 'Automation',
    tagColor: '#25D366',
    body: 'WhatsApp reminders sent 24 hours and 2 hours before every appointment — automatically. Your receptionist stops making manual reminder calls.',
    stat: '↓70%', statLabel: 'no-show rate',
  },
  {
    icon: '💬',
    title: 'Treatment Follow-ups',
    tag: 'Retention',
    tagColor: '#f59e0b',
    body: 'After every procedure, a WhatsApp message checks on recovery, answers common questions and prompts the next visit. Patients feel looked after.',
    stat: '3×', statLabel: 'patient retention',
  },
  {
    icon: '🔁',
    title: 'Recall System',
    tag: 'Revenue',
    tagColor: '#34d399',
    body: 'Patients due for a checkup get a recall message automatically — at 3 months, 6 months or 12 months. Bring back patients before competitors do.',
    stat: '₹3.7L', statLabel: 'avg recovered/yr',
  },
  {
    icon: '⭐',
    title: 'Review Requests',
    tag: 'Reputation',
    tagColor: '#f59e0b',
    body: 'After a successful visit, a review request goes out automatically — timed for when patient satisfaction is highest. Reviews build without anyone asking manually.',
    stat: '5-10', statLabel: 'new reviews/month',
  },
  {
    icon: '📊',
    title: 'Clinic Dashboard',
    tag: 'Visibility',
    tagColor: '#6366f1',
    body: 'See your pipeline, upcoming appointments, retention rate and review count in one clean view — updated in real time. Own your clinic\'s numbers.',
    stat: '1 view', statLabel: 'everything in one place',
  },
];

export function CRMFeaturesSection() {
  return (
    <section style={{ background: '#fff', padding: '72px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1rem,5vw,2rem)' }}>

        {/* heading */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ display: 'inline-block', background: '#FEE9D9', color: '#E86C2F', borderRadius: 999, padding: '4px 16px', fontSize: 13, fontWeight: 600, fontFamily: 'Poppins,sans-serif', marginBottom: 14 }}>
            ⚡ What You Get
          </p>
          <h2 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(24px,4vw,38px)', fontWeight: 800, color: '#1A1A2E', margin: '0 0 10px', lineHeight: 1.2 }}>
            7 Systems That Run Your Clinic Growth
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, margin: '0 auto', maxWidth: 500, lineHeight: 1.6 }}>
            Each one solves a specific gap. Together they create a clinic that grows without manual effort.
          </p>
        </div>

        {/* feature grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 16 }}>
          {FEATURES.map((f, i) => (
            <div key={f.title} style={{
              background: '#FAFAFA',
              border: '1px solid #F3F4F6',
              borderRadius: 16,
              padding: '20px 20px 16px',
              display: 'flex', flexDirection: 'column', gap: 12,
              transition: 'border-color 0.2s, box-shadow 0.2s',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: f.tagColor, opacity: 0.6, borderRadius: '16px 16px 0 0' }} />

              {/* icon + tag row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${f.tagColor}14`, border: `1px solid ${f.tagColor}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                  {f.icon}
                </div>
                <span style={{ background: `${f.tagColor}12`, color: f.tagColor, fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'Poppins,sans-serif' }}>
                  {f.tag}
                </span>
              </div>

              {/* title */}
              <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 15, fontWeight: 700, color: '#1A1A2E', margin: 0, lineHeight: 1.3 }}>
                {f.title}
              </h3>

              {/* body */}
              <p style={{ color: '#6B7280', fontSize: 13, lineHeight: 1.65, margin: 0, flex: 1 }}>
                {f.body}
              </p>

              {/* stat */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 10, borderTop: '1px solid #F3F4F6' }}>
                <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 20, color: f.tagColor, lineHeight: 1 }}>{f.stat}</span>
                <span style={{ color: '#9CA3AF', fontSize: 11, fontWeight: 500 }}>{f.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg,#E86C2F,#f59e0b)',
            color: '#fff', borderRadius: 999, padding: '14px 30px',
            fontSize: 15, fontWeight: 700, fontFamily: 'Poppins,sans-serif',
            textDecoration: 'none',
            boxShadow: '0 8px 28px rgba(232,108,47,0.3)',
          }}>
            Book a Free Demo — See All 7 Live →
          </Link>
          <p style={{ color: '#9CA3AF', fontSize: 12, marginTop: 10 }}>
            30 minutes · No commitment · We show you everything
          </p>
        </div>
      </div>
    </section>
  );
}
