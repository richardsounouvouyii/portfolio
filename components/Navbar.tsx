"use client";
import { useEffect, useState } from 'react';
import { Menu, X, Sun, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '#home', label: 'Acceuil' },
  { href: '#about', label: 'A propos de moi' },
  { href: '#services', label: 'Mes services' },
  { href: '#work', label: 'Mon travail' },
  { href: '#contact', label: 'Me contacter' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'backdrop-blur border-b border-white/10 bg-black/30' : ''}`}>
      <nav className="container-base flex items-center justify-between h-20">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-1 font-semibold tracking-wide text-2xl md:text-3xl">
          <span>Richard</span>
          <span className="inline-block h-2 mt-4 w-2 rounded-full bg-accent" />
        </a>

        {/* Center links (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] p-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-6 py-3 text-lg text-white/85 rounded-full hover:bg-white/[0.06] hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <button aria-label="Changer de thème" className="pill pill-hover flex items-center justify-center">
            <Sun className="h-4 w-4" />
          </button>
          <a href="#contact" className="pill pill-hover flex items-center gap-2">
            <span>Contact</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden" aria-label="menu" onClick={() => setOpen((s) => !s)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="container-base py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="pill pill-hover w-fit flex items-center gap-2">
              <span>Contact</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
