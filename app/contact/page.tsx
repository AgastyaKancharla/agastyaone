import type { Metadata } from 'next';
import { Hero, InfoPills, Section, Steps } from '@/components/Sections';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact AgastyaOne | Book a Free 30 Min Call — Bangalore',
  description:
    'Book a free 30 minute call with AgastyaOne. Honest advice for restaurants and dental clinics in Bangalore on websites, CRM, SEO and digital growth. No pressure. No jargon.',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    type: 'website',
    siteName: 'AgastyaOne',
    title: 'Contact AgastyaOne | Book a Free 30 Min Call — Bangalore',
    description:
      'Book a free 30 minute call with AgastyaOne. Honest advice for restaurants and dental clinics in Bangalore on websites, CRM, SEO and digital growth. No pressure. No jargon.',
    url: '/contact',
    images: ['/og-image.png']
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Let's Talk About Growing Your Business"
        subtitle="Book a free 30 minute call with Agastya. No sales script. No pressure. Just an honest conversation about where your business is and what it would take to grow it."
        ctas={[{ label: 'Book My Free Call', href: '#booking' }, { label: 'Other Ways to Reach Us', href: '#reach' }]}
        imageAlt="AgastyaOne booking call placeholder image"
      />
      <Section title="What Happens On The Call" tint>
        <Steps
          steps={[
            'You Tell Us About Your Business — We understand where you are and what is blocking growth',
            'We Review Your Online Presence — We look at your website, Google profile and visibility before the call',
            'We Tell You Honestly What We See — Clear observations without jargon or pressure',
            'We Discuss Next Steps — You leave with clarity whether you become a client or not'
          ]}
        />
      </Section>
      <section id="booking" className="full-bleed bg-warm">
        <div className="site-container grid gap-8 py-12 lg:grid-cols-[.9fr_1.1fr] lg:py-20">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-charcoal">Book Your Free Call</h2>
            <p className="mt-4 leading-7 text-charcoal/75">
              We will confirm your call time on WhatsApp within 2 hours of your booking.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
      <Section title="Find Us in Bengaluru">
        <div className="motion-card overflow-hidden rounded-brand bg-white shadow-card">
          <iframe
            title="Kumaraswamy Layout Bengaluru map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5858945508!2d77.5691!3d12.9082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15055eb5b0ed%3A0x2e9b8a4f4c1c1234!2sKumaraswamy%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
      <Section title="Other Ways To Reach Us" tint>
        <div id="reach">
          <InfoPills />
        </div>
      </Section>
      <Section title="What This Call Is Not">
        <div className="motion-card mx-auto max-w-3xl rounded-brand bg-white p-7 text-center leading-7 text-charcoal/75 shadow-card">
          This is not a high pressure sales call. This is not a call with a junior account manager reading from a script.
          You will speak directly with Agastya and get honest observations about your specific business.
        </div>
      </Section>
    </>
  );
}
