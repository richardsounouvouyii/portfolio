"use client";
import { ArrowRight } from 'lucide-react';

export default function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-black text-lg md:text-xl font-medium group"
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
