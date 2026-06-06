import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'yellow';
};

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const variants = {
    primary: 'bg-[#E86C2F] text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20',
    secondary: 'border-2 border-[#1A1A2E] bg-transparent text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white',
    yellow: 'bg-white text-[#E86C2F] hover:bg-[#F8F6F3]'
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]}`}
    >
      {children}
      {variant === 'primary' && <ArrowRight size={17} aria-hidden="true" />}
    </Link>
  );
}
