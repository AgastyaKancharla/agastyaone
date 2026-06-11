'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/dental-solutions', label: 'Dental Solutions' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' }
];

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

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`full-bleed sticky top-0 z-50 transition-all duration-200 ${scrolled ? 'border-b border-gray-100 bg-white/80 shadow-sm backdrop-blur-md' : 'border-b border-transparent bg-white/70 backdrop-blur-sm'}`}>
        <div className="site-container flex items-center justify-between gap-4 py-4">
          <Link href="/" className="font-heading text-xl font-black text-charcoal">
            Agastya<span className="text-saffron">One</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-charcoal lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link transition hover:text-saffron ${pathname === link.href ? 'is-active text-saffron' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden sm:block">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#E86C2F] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Book a Free Call
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-brand bg-saffron text-white lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-white pt-20 lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-lg font-medium transition hover:bg-orange-50 hover:text-saffron ${pathname === link.href ? 'text-saffron' : 'text-charcoal'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pt-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-[#E86C2F] px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-600"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
