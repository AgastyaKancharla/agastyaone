'use client';

import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export function GlobalActions() {
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
    <a
      href="https://wa.me/91XXXXXXXXXX"
      aria-label="Message AgastyaOne on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <MessageCircle size={28} />
    </a>
  );
}
