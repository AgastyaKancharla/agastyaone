import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Reveal } from './Reveal';

const dentalLinks = [
  ['Dental CRM', '/dental-crm-software'],
  ['Dental Websites', '/dental-website-development'],
  ['Dental SEO', '/dental-seo-services'],
  ['Appointment Software', '/dentist-appointment-software'],
  ['Dental Marketing', '/dental-marketing-services'],
  ['Practice Automation', '/dental-practice-automation']
];

const restaurantLinks = [
  ['Restaurant CRM', '/restaurant-crm-software'],
  ['Restaurant Websites', '/restaurant-website-development'],
  ['Restaurant SEO', '/restaurant-seo-services'],
  ['Loyalty Software', '/restaurant-loyalty-software'],
  ['Online Ordering', '/restaurant-online-ordering-system'],
  ['WhatsApp Marketing', '/restaurant-whatsapp-marketing']
];

const NAP_ADDRESS = 'Nayak Layout, 8th Phase, J. P. Nagar, Bengaluru, Karnataka 560076';
const NAP_PHONE = '+91 83284 43057';
const NAP_PHONE_HREF = 'tel:+918328443057';

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
            Dental and restaurant digital solutions built in Bengaluru.
          </p>
          <address className="mt-4 not-italic text-sm leading-6 text-white/60">
            {NAP_ADDRESS}
          </address>
          <a href={NAP_PHONE_HREF} className="mt-2 block text-sm text-white/60 hover:text-white transition">
            {NAP_PHONE}
          </a>
          <div className="mt-5 flex gap-3">
            {[Instagram, Linkedin, Facebook].map((Icon, index) => (
              <span key={index} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60">
                <Icon size={18} />
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <FooterColumn title="Dental Solutions" links={dentalLinks} />
        </Reveal>
        <Reveal delay={160}>
          <FooterColumn title="Restaurant Solutions" links={restaurantLinks} />
        </Reveal>
        <Reveal delay={240}>
          <FooterColumn
            title="Company"
            links={[
              ['About', '/about'],
              ['Blog', '/blog'],
              ['Contact', '/contact']
            ]}
          />
        </Reveal>
      </div>
      <div className="site-container border-t border-white/10 py-5 text-center text-sm text-white/40">
        © 2026 AgastyaOne | hello@agastyaone.com | {NAP_ADDRESS} | {NAP_PHONE}
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
