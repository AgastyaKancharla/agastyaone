'use client';

import { useEffect, useState } from 'react';
import { Phone, X } from 'lucide-react';

const WA_NUMBER = '918328443057';
const PHONE_NUMBER = '+918328443057';
const WA_MESSAGE = encodeURIComponent(
  'Hi Agastya, I run a dental clinic in Bangalore and would like to learn more about your services.'
);

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function GlobalActions() {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show FAB after slight delay on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Open external links in new tab
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]');
    links.forEach((link) => {
      if (link.hostname && link.hostname !== window.location.hostname) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    });
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Expanded action buttons */}
      {expanded && (
        <div className="flex flex-col items-end gap-2 animate-fade-in-up">
          {/* Call button */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label="Call AgastyaOne"
            className="flex items-center gap-2 rounded-full bg-[#1A1A2E] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#242442]"
          >
            <Phone size={16} />
            <span>Call Us</span>
          </a>

          {/* WhatsApp with pre-filled message */}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp AgastyaOne"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#20b858]"
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>

          {/* Email */}
          <a
            href="mailto:hello@agastyaone.com"
            aria-label="Email AgastyaOne"
            className="flex items-center gap-2 rounded-full bg-[#E86C2F] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>Email Us</span>
          </a>
        </div>
      )}

      {/* Main FAB toggle */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        aria-label={expanded ? 'Close contact options' : 'Contact us'}
        className={`inline-flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 ${
          expanded
            ? 'bg-gray-700 text-white hover:bg-gray-800 rotate-0'
            : 'bg-[#25D366] text-white hover:scale-105'
        }`}
      >
        {expanded ? <X size={24} /> : <WhatsAppIcon />}
      </button>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.25s ease forwards;
        }
      `}</style>
    </div>
  );
}
