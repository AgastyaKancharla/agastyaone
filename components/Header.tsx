'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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

// ── Monkey SVG button ──────────────────────────────────────────────
function MonkeyButton({
  menuOpen,
  tapCount,
  surpriseLevel,
  showBanana,
  pupilOffset,
  onClick,
}: {
  menuOpen: boolean;
  tapCount: number;
  surpriseLevel: number; // 0 | 1 | 2 | 3
  showBanana: boolean;
  pupilOffset: { x: number; y: number };
  onClick: () => void;
}) {
  // Eye shape changes with surprise level
  const eyeRy = menuOpen ? [3, 4, 5, 6][surpriseLevel] : 3;
  const browY = menuOpen ? [7, 5.5, 4.5, 3.5][surpriseLevel] : 7;
  // Mouth shape
  const mouthD = menuOpen
    ? surpriseLevel >= 2
      ? 'M 10 17 Q 12 20 14 17' // big O surprised
      : 'M 10 16.5 Q 12 19 14 16.5'
    : 'M 10 16 Q 12 18 14 16'; // normal smile

  return (
    <button
      onClick={onClick}
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', position: 'relative', width: 40, height: 40 }}
    >
      {/* Banana easter egg */}
      {showBanana && (
        <span
          style={{
            position: 'absolute',
            top: -8,
            right: -8,
            fontSize: 14,
            animation: 'bananaFly 0.6s ease forwards',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          🍌
        </span>
      )}

      <svg
        viewBox="0 0 24 24"
        width="40"
        height="40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))' }}
      >
        {/* Outer ear left */}
        <ellipse cx="4.5" cy="12" rx="2.5" ry="3" fill="#c47c3e" />
        {/* Outer ear right */}
        <ellipse cx="19.5" cy="12" rx="2.5" ry="3" fill="#c47c3e" />
        {/* Inner ear left */}
        <ellipse cx="4.5" cy="12" rx="1.3" ry="1.8" fill="#e8a87c" />
        {/* Inner ear right */}
        <ellipse cx="19.5" cy="12" rx="1.3" ry="1.8" fill="#e8a87c" />

        {/* Head */}
        <ellipse cx="12" cy="12" rx="8" ry="8.5" fill="#c47c3e" />

        {/* Face patch */}
        <ellipse cx="12" cy="14" rx="5" ry="4.5" fill="#e8c49e" />

        {/* Forehead highlight */}
        <ellipse cx="10" cy="7.5" rx="1.5" ry="1" fill="#d4944e" opacity="0.4" />

        {/* Left eyebrow */}
        <line
          x1="7.5" y1={browY}
          x2="10" y2={browY - (menuOpen ? 0.8 : 0)}
          stroke="#5a3010" strokeWidth="0.9" strokeLinecap="round"
          style={{ transition: 'all 0.3s ease' }}
        />
        {/* Right eyebrow */}
        <line
          x1="14" y1={browY - (menuOpen ? 0.8 : 0)}
          x2="16.5" y2={browY}
          stroke="#5a3010" strokeWidth="0.9" strokeLinecap="round"
          style={{ transition: 'all 0.3s ease' }}
        />

        {/* Left eye white */}
        <ellipse cx="9" cy="10.5" rx="2" ry={eyeRy * 0.7} fill="white"
          style={{ transition: 'all 0.3s ease' }} />
        {/* Right eye white */}
        <ellipse cx="15" cy="10.5" rx="2" ry={eyeRy * 0.7} fill="white"
          style={{ transition: 'all 0.3s ease' }} />

        {/* Left pupil — tracks cursor */}
        <circle
          cx={9 + pupilOffset.x}
          cy={10.5 + pupilOffset.y}
          r="1"
          fill="#1a1a2e"
          style={{ transition: 'cx 0.1s ease, cy 0.1s ease' }}
        />
        {/* Right pupil — tracks cursor */}
        <circle
          cx={15 + pupilOffset.x}
          cy={10.5 + pupilOffset.y}
          r="1"
          fill="#1a1a2e"
          style={{ transition: 'cx 0.1s ease, cy 0.1s ease' }}
        />

        {/* Left eye shine */}
        <circle cx={9.6 + pupilOffset.x * 0.5} cy={10 + pupilOffset.y * 0.5} r="0.35" fill="white" />
        {/* Right eye shine */}
        <circle cx={15.6 + pupilOffset.x * 0.5} cy={10 + pupilOffset.y * 0.5} r="0.35" fill="white" />

        {/* Nose */}
        <ellipse cx="12" cy="13.5" rx="1.2" ry="0.7" fill="#a06030" />
        <circle cx="11.4" cy="13.3" r="0.25" fill="#c47c3e" opacity="0.6" />
        <circle cx="12.6" cy="13.3" r="0.25" fill="#c47c3e" opacity="0.6" />

        {/* Mouth */}
        <path
          d={mouthD}
          stroke="#a06030"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none"
          style={{ transition: 'd 0.3s ease' }}
        />

        {/* Surprised open mouth fill */}
        {menuOpen && surpriseLevel >= 2 && (
          <ellipse cx="12" cy="18" rx="1.5" ry="1" fill="#7a3010" opacity="0.5" />
        )}

        {/* Cheek blush left */}
        <ellipse cx="7.5" cy="13" rx="1.5" ry="0.8" fill="#e86c2f" opacity="0.2" />
        {/* Cheek blush right */}
        <ellipse cx="16.5" cy="13" rx="1.5" ry="0.8" fill="#e86c2f" opacity="0.2" />

        {/* Sweat drop when very surprised */}
        {menuOpen && surpriseLevel >= 3 && (
          <ellipse cx="17.5" cy="8" rx="0.6" ry="1" fill="#60a5fa" opacity="0.7" />
        )}
      </svg>

      <style>{`
        @keyframes bananaFly {
          0%   { transform: translate(0, 0) scale(1); opacity: 1; }
          60%  { transform: translate(-8px, -12px) scale(1.3) rotate(-20deg); opacity: 1; }
          100% { transform: translate(-14px, 4px) scale(0.4) rotate(10deg); opacity: 0; }
        }
      `}</style>
    </button>
  );
}

// ── Main Header ────────────────────────────────────────────────────
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [surpriseLevel, setSurpriseLevel] = useState(0);
  const [showBanana, setShowBanana] = useState(false);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLDivElement>(null);
  const surpriseTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Floating header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Surprise escalation timers when menu opens
  useEffect(() => {
    surpriseTimers.current.forEach(clearTimeout);
    surpriseTimers.current = [];
    if (menuOpen) {
      setSurpriseLevel(0);
      surpriseTimers.current.push(setTimeout(() => setSurpriseLevel(1), 3000));
      surpriseTimers.current.push(setTimeout(() => setSurpriseLevel(2), 6000));
      surpriseTimers.current.push(setTimeout(() => setSurpriseLevel(3), 9000));
    } else {
      setSurpriseLevel(0);
    }
    return () => surpriseTimers.current.forEach(clearTimeout);
  }, [menuOpen]);

  // Pupil tracking — passive listener, pure math
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = () => btn.getBoundingClientRect();
    const calc = (cx: number, cy: number) => {
      const r = rect();
      const bx = r.left + r.width / 2;
      const by = r.top + r.height / 2;
      const dx = cx - bx;
      const dy = cy - by;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const maxShift = 1.8;
      return {
        x: parseFloat(((dx / dist) * Math.min(dist / 60, 1) * maxShift).toFixed(2)),
        y: parseFloat(((dy / dist) * Math.min(dist / 60, 1) * maxShift).toFixed(2)),
      };
    };
    const onMouseMove = (e: MouseEvent) => setPupilOffset(calc(e.clientX, e.clientY));
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      setPupilOffset(calc(t.clientX, t.clientY));
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  const handleMonkeyClick = () => {
    const next = tapCount + 1;
    setTapCount(next);
    // Every 5th tap — banana easter egg
    if (next % 5 === 0) {
      setShowBanana(true);
      setTimeout(() => setShowBanana(false), 700);
      // Slight delay before opening menu so banana is visible
      setTimeout(() => setMenuOpen((prev) => !prev), 150);
    } else {
      setMenuOpen((prev) => !prev);
    }
  };

  return (
    <>
      {/* Header — floats when scrolled past 60px */}
      <header
        className={`full-bleed z-50 transition-all duration-300 ${
          scrolled
            ? 'fixed top-3 left-0 right-0 mx-auto'
            : 'sticky top-0'
        }`}
        style={
          scrolled
            ? {
                width: 'calc(100% - 2rem)',
                maxWidth: '1200px',
                left: '50%',
                transform: 'translateX(-50%)',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.92)',
                boxShadow: '0 8px 32px rgba(26,26,46,0.13)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.6)',
              }
            : {
                background: 'rgba(255,255,255,0.80)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderBottom: '1px solid transparent',
              }
        }
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

          {/* Mobile: phone + monkey */}
          <div ref={btnRef} className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+918328443057"
              aria-label="Call AgastyaOne"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-charcoal transition hover:border-saffron hover:text-saffron"
            >
              <Phone size={17} />
            </a>
            <MonkeyButton
              menuOpen={menuOpen}
              tapCount={tapCount}
              surpriseLevel={surpriseLevel}
              showBanana={showBanana}
              pupilOffset={pupilOffset}
              onClick={handleMonkeyClick}
            />
          </div>
        </div>
      </header>

      {/* Spacer so content doesn't jump when header becomes fixed */}
      {scrolled && <div style={{ height: '64px' }} />}

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-white lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: '64px' }}
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
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Get in touch</p>
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
            <span className="shrink-0 text-[#25D366]"><WhatsAppIcon size={17} /></span>
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
          <p className="mt-3 text-center text-xs text-muted">Free 30-min strategy call · No commitment</p>
        </div>
      </div>
    </>
  );
}
