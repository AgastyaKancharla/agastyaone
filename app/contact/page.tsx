import type { Metadata } from 'next';
import { ContactForm } from './ContactForm';
import { Section, Steps, InfoPills } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'Contact AgastyaOne | Book a Free 30 Min Call — Bangalore',
  description:
    'Book a free 30 minute call with AgastyaOne. Honest advice for dental clinics in Bangalore on websites, CRM, SEO and digital growth. No pressure. No jargon.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    siteName: 'AgastyaOne',
    title: 'Contact AgastyaOne | Book a Free 30 Min Call — Bangalore',
    description: 'Book a free 30 minute call with AgastyaOne. Honest advice for dental clinics in Bangalore.',
    url: '/contact',
    images: ['/og-image.png']
  },
  twitter: { card: 'summary_large_image' }
};

const CALL_STEPS = [
  { icon: '🔍', title: 'We review your online presence first', body: 'Before the call we look at your Google profile, website and local visibility so we come prepared.' },
  { icon: '💬', title: 'You tell us about your clinic', body: 'Where you are, what you want to grow, what has and hasn\'t worked before.' },
  { icon: '🎯', title: 'We tell you honestly what we see', body: 'Clear observations, no jargon, no pressure. You get our real take on your biggest opportunity.' },
  { icon: '📋', title: 'You leave with clarity', body: 'Whether you become a client or not, you leave knowing exactly what to do next.' },
];

const REASSURANCES = [
  { icon: '⏱️', text: '30 minutes — no longer' },
  { icon: '👤', text: 'You speak directly with Agastya' },
  { icon: '💬', text: 'Confirmed on WhatsApp within 2 hrs' },
  { icon: '🚫', text: 'No sales script. No junior rep.' },
];

export default function ContactPage() {
  return (
    <div style={{ background: '#F8F6F3' }}>

      {/* What happens on the call */}
      <Section title="What Happens On The Call" tint>
        <Steps steps={[
          'You Tell Us About Your Business — We understand where you are and what is blocking growth',
          'We Review Your Online Presence — We look at your website, Google profile and visibility before the call',
          'We Tell You Honestly What We See — Clear observations without jargon or pressure',
          'We Discuss Next Steps — You leave with clarity whether you become a client or not',
        ]} />
      </Section>

      {/* Two-column booking form */}
      <div id="booking" style={{ scrollMarginTop: 80 }}>

      {/* ── Full page two-column layout ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        minHeight: '100vh',
        overflowX: 'hidden',
      }} className="contact-grid">

        {/* LEFT — Why book */}
        <div style={{
          background: '#1A1A2E',
          padding: 'clamp(1.25rem,6vw,4rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <div style={{ maxWidth: 480, margin: '0 auto', width: '100%' }}>

            {/* Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(232,108,47,0.12)', border: '1px solid rgba(232,108,47,0.25)', borderRadius: 999, padding: '4px 14px', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E86C2F', display: 'inline-block' }} />
              <span style={{ color: '#E86C2F', fontSize: 12, fontWeight: 700 }}>Free · 30 minutes · No commitment</span>
            </div>

            <h1 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: '#fff', lineHeight: 1.2, margin: '0 0 14px' }}>
              Book a Free<br />30 Min Call
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
              An honest conversation about your clinic — no sales pressure, no jargon. You speak directly with Agastya.
            </p>

            {/* What happens */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
              {CALL_STEPS.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(232,108,47,0.1)', border: '1px solid rgba(232,108,47,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                    {step.icon}
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{step.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, lineHeight: 1.6 }}>{step.body}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurances */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {REASSURANCES.map((r, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 14 }}>{r.icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 500 }}>{r.text}</span>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div style={{ marginTop: 28, padding: '14px 18px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 20 }}>💬</span>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>Prefer to message directly?</div>
                <a href="https://wa.me/918951553531" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
                  WhatsApp +91 89515 53531 →
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT — Compact form */}
        <div style={{
          background: '#F8F6F3',
          padding: 'clamp(1.25rem,6vw,4rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <div style={{ maxWidth: 520, margin: '0 auto', width: '100%' }}>
            <h2 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 22, fontWeight: 700, color: '#1A1A2E', margin: '0 0 6px' }}>
              Pick a time that works for you
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: 13, marginBottom: 24 }}>
              We confirm on WhatsApp within 2 hours.
            </p>
            <ContactForm />
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
      </div>{/* end booking */}

      {/* Find us */}
      <Section title="Find Us in Bengaluru">
        <div className="motion-card overflow-hidden rounded-brand bg-white shadow-card">
          <iframe
            title="JP Nagar Bengaluru map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5858945508!2d77.5691!3d12.9082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15055eb5b0ed%3A0x2e9b8a4f4c1c1234!2sKumaraswamy%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="360"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>

      {/* Other ways to reach */}
      <Section title="Other Ways To Reach Us" tint>
        <div id="reach">
          <InfoPills />
        </div>
      </Section>

      {/* What this call is not */}
      <Section title="What This Call Is Not">
        <div className="motion-card mx-auto max-w-3xl rounded-brand bg-white p-7 text-center leading-7 text-charcoal/75 shadow-card">
          This is not a high pressure sales call. This is not a call with a junior account manager reading from a script.
          You will speak directly with Agastya and get honest observations about your specific business.
        </div>
      </Section>

    </div>
  );
}

