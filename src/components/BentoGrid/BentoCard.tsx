import Link from 'next/link';
import { ReactNode } from 'react';

interface BentoCardProps {
  className?: string;
  children: ReactNode;
  href?: string;
}

export default function BentoCard({ className = '', children, href }: BentoCardProps) {
  if (href) {
    return (
      <Link href={href} className={`rounded-xl block ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <div className={`rounded-xl ${className}`}>
      {children}
    </div>
  );
}
