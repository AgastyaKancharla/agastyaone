'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
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

// ── Animated Hamburger → X ─────────────────────────────────────────
function HamburgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="mobile-menu"
      style={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        borderRadius: 8,
      }}
    >
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: 22,
          height: 22,
          gap: 0,
          position: 'relative',
        }}
      >
        {/* Top bar */}
        <span style={{
          display: 'block',
          width: 22,
          height: 2,
          borderRadius: 2,
          background: '#1a1a2e',
          position: 'absolute',
          top: open ? '50%' : '25%',
          left: 0,
          transform: open ? 'translateY(-50%) rotate(45deg)' : 'translateY(-50%) rotate(0deg)',
          transition: 'top 0.25s ease, transform 0.25s ease',
        }} />
        {/* Middle bar */}
        <span style={{
          display: 'block',
          width: 22,
          height: 2,
          borderRadius: 2,
          background: '#1a1a2e',
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          opacity: open ? 0 : 1,
          transition: 'opacity 0.15s ease',
        }} />
        {/* Bottom bar */}
        <span style={{
          display: 'block',
          width: 22,
          height: 2,
          borderRadius: 2,
          background: '#1a1a2e',
          position: 'absolute',
          top: open ? '50%' : '75%',
          left: 0,
          transform: open ? 'translateY(-50%) rotate(-45deg)' : 'translateY(-50%) rotate(0deg)',
          transition: 'top 0.25s ease, transform 0.25s ease',
        }} />
      </span>
    </button>
  );
}

// ── Main Header ────────────────────────────────────────────────────
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: scrolled
            ? '1.5px solid rgba(232,108,47,0.28)'
            : '1.5px solid transparent',
          boxShadow: scrolled ? '0 2px 16px rgba(26,26,46,0.07)' : 'none',
        }}
      >
        <div className="site-container flex items-center justify-between gap-4 py-3">
          {/* Logo */}
          <Link href="/" className="font-heading text-xl font-black text-charcoal shrink-0">
            Agastya<span className="text-saffron">One</span>
          </Link>

          {/* Desktop nav */}
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

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#E86C2F] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Book a Free Call
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href="tel:+918328443057"
              aria-label="Call AgastyaOne"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-charcoal transition hover:border-saffron hover:text-saffron"
            >
              <Phone size={17} />
            </a>
            <HamburgerButton open={menuOpen} onClick={() => setMenuOpen(p => !p)} />
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div style={{ height: 56 }} aria-hidden="true" />

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-white lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: '56px' }}
      >
        <nav className="flex flex-col gap-1 px-5 py-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center rounded-xl px-4 py-3.5 text-base font-medium transition hover:bg-orange-50 hover:text-saffron ${
                pathname === link.href ? 'bg-orange-50 text-saffron' : 'text-charcoal'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mx-5 border-t border-gray-100" />

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
