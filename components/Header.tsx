'use client';

import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const WA_NUMBER = '918328443057';
const WA_MESSAGE = encodeURIComponent(
  'Hi Agastya, I run a dental clinic and would like to learn more about your services.'
);

const links = [
  { href: '/dental-solutions', label: 'Dental Solutions' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`full-bleed sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md'
            : 'border-b border-transparent bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="site-container flex items-center justify-between gap-4 py-3">
          {/* Logo */}
          <Link href="/" className="font-heading text-xl font-black text-charcoal shrink-0">
            Agastya<span className="text-saffron">One</span>
          </Link>

          {/* Desktop nav — visible at lg+ */}
          <nav className="hidden items-center gap-7 text-sm font-medium text-charcoal lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link transition hover:text-saffron ${
                  pathname === link.href ? 'is-active text-saffron' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA — visible at lg+ */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#E86C2F] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Book a Free Call
            </Link>
          </div>

          {/* Mobile right side: phone shortcut + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+918328443057"
              aria-label="Call AgastyaOne"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-charcoal transition hover:border-saffron hover:text-saffron"
            >
              <Phone size={17} />
            </a>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-saffron text-white transition hover:bg-orange-600"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-white lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: '64px' }}
      >
        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-5 py-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center rounded-xl px-4 py-3.5 text-base font-medium transition hover:bg-orange-50 hover:text-saffron ${
                pathname === link.href
                  ? 'bg-orange-50 text-saffron'
                  : 'text-charcoal'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="mx-5 border-t border-gray-100" />

        {/* Contact shortcuts */}
        <div className="px-5 py-5 flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Get in touch
          </p>
          <a
            href="tel:+918328443057"
            className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3.5 text-sm font-medium text-charcoal transition hover:border-saffron hover:text-saffron"
          >
            <Phone size={17} className="shrink-0 text-saffron" />
            +91 83284 43057
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3.5 text-sm font-medium text-charcoal transition hover:border-[#25D366] hover:text-[#25D366]"
          >
            <span className="shrink-0 text-[#25D366]">
              <WhatsAppIcon size={17} />
            </span>
            WhatsApp us
          </a>
        </div>

        {/* Primary CTA */}
        <div className="mt-auto px-5 pb-10 pt-2">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-[#E86C2F] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-orange-600"
          >
            Book a Free Call
          </Link>
          <p className="mt-3 text-center text-xs text-muted">
            Free 30-min strategy call · No commitment
          </p>
        </div>
      </div>
    </>
  );
}
