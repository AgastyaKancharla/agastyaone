import Link from 'next/link';
import { Reveal } from './Reveal';

const dentalLinks = [
  ['Dental CRM', '/dental-crm-software'],
  ['Dental Websites', '/dental-website-development'],
  ['Dental SEO', '/dental-seo-services'],
  ['Appointment Software', '/dentist-appointment-software'],
  ['Dental Marketing', '/dental-marketing-services'],
  ['Practice Automation', '/dental-practice-automation'],
];

const NAP_ADDRESS = 'Nayak Layout, 8th Phase, J. P. Nagar, Bengaluru, Karnataka 560076';
const NAP_PHONE = '+91 83284 43057';
const NAP_PHONE_HREF = 'tel:+918328443057';
const WA_HREF = 'https://wa.me/918328443057?text=' + encodeURIComponent('Hi Agastya, I run a dental clinic in Bangalore and would like to learn more.');

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const socialLinks = [
  { href: 'https://instagram.com/agastyaone', label: 'Instagram', Icon: InstagramIcon },
  { href: 'https://linkedin.com/company/agastyaone', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: WA_HREF, label: 'WhatsApp', Icon: WhatsAppIcon },
];

export function Footer() {
  return (
    <footer className="full-bleed bg-[#1A1A2E] text-white">
      <div className="h-1 bg-gradient-to-r from-[#E86C2F] to-[#f59e0b]" />
      <div className="site-container grid gap-10 py-14 md:grid-cols-4">
        <Reveal>
          <div className="font-heading text-2xl font-black text-white">
            Agastya<span className="text-saffron">One</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Dental digital solutions built in Bengaluru.
          </p>
          <address className="mt-4 not-italic text-sm leading-6 text-white/60">
            {NAP_ADDRESS}
          </address>
          <a href={NAP_PHONE_HREF} className="mt-2 block text-sm text-white/60 hover:text-white transition">
            {NAP_PHONE}
          </a>
          <a href="mailto:hello@agastyaone.com" className="mt-1 block text-sm text-white/60 hover:text-white transition">
            hello@agastyaone.com
          </a>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-saffron hover:text-saffron"
              >
                <Icon />
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <FooterColumn title="Dental Solutions" links={dentalLinks} />
        </Reveal>
        <Reveal delay={160}>
          <FooterColumn
            title="Services"
            links={[
              ['Website Development', '/dental-website-development'],
              ['CRM Software', '/dental-crm-software'],
              ['SEO Services', '/dental-seo-services'],
              ['Appointment Software', '/dentist-appointment-software'],
              ['Practice Automation', '/dental-practice-automation'],
              ['Dental Marketing', '/dental-marketing-services'],
            ]}
          />
        </Reveal>
        <Reveal delay={240}>
          <FooterColumn
            title="Company"
            links={[
              ['About', '/about'],
              ['Blog', '/blog'],
              ['Contact', '/contact'],
            ]}
          />
        </Reveal>
      </div>
      <div className="site-container border-t border-white/10 py-5 text-center text-sm text-white/70">
        © 2026 AgastyaOne |{' '}
        <a href="mailto:hello@agastyaone.com" className="hover:text-white transition">hello@agastyaone.com</a>{' '}
        | {NAP_ADDRESS} |{' '}
        <a href={NAP_PHONE_HREF} className="hover:text-white transition">{NAP_PHONE}</a>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="font-heading text-sm font-medium uppercase tracking-widest text-white">{title}</h3>
      <div className="mt-4 grid gap-3 text-sm text-white/60">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="transition hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
