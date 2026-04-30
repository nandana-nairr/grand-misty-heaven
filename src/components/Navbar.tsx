'use client';

import { useEffect, useState } from 'react';
import { SITE, CONTACT_LINKS } from '@/lib/site';
import {
  MountainIcon,
  PhoneIcon,
  ArrowRightIcon,
  MenuIcon,
  CloseIcon,
} from '@/components/icons';

const NAV_LINKS = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Offers', href: '#offers' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'About', href: '#about' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/85 backdrop-blur-xl backdrop-saturate-150 border-b border-warm/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-[72px] md:h-[84px] flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-500 ${
                scrolled ? 'bg-ink' : 'bg-gold'
              }`}
            >
              <MountainIcon className={`w-4 h-4 ${scrolled ? 'text-gold' : 'text-ink'}`} />
            </div>
            <div className="leading-tight">
              <div className={`font-display text-[15px] md:text-[17px] tracking-wide-2 uppercase transition-colors ${scrolled ? 'text-ink' : 'text-cream'}`}>
                Grand Misty
              </div>
              <div className={`text-[10px] tracking-wide-3 uppercase transition-colors ${scrolled ? 'text-mute' : 'text-cream/70'}`}>
                Heaven · Coorg
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-wide-2 uppercase font-medium transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-ink' : 'text-cream/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Click-to-call — desktop */}
            <a
              href={CONTACT_LINKS.tel}
              className={`hidden md:flex items-center gap-2 rounded-full px-4 py-2 text-[11px] tracking-wider font-medium border transition-all duration-300 hover:-translate-y-0.5 ${
                scrolled
                  ? 'border-stone-200 text-ink hover:border-brass hover:text-brass bg-cream'
                  : 'border-cream/20 text-cream/90 hover:border-gold hover:text-gold bg-cream/5 backdrop-blur-sm'
              }`}
            >
              <PhoneIcon className="w-3.5 h-3.5" />
              {SITE.phone}
            </a>

            <a
              href="#rooms"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-deep text-cream rounded-full px-5 py-2.5 text-[11px] tracking-wide-2 uppercase font-semibold transition-all duration-300 hover:shadow-gold hover:-translate-y-0.5"
            >
              Reserve <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-ink' : 'text-cream'}`}
            >
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-cream transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-6 flex items-center justify-between border-b border-warm">
            <span className="font-display text-lg tracking-wide-2 uppercase text-ink">Menu</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2">
              <CloseIcon className="w-5 h-5 text-ink" />
            </button>
          </div>
          <div className="p-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl tracking-tight-2 text-ink py-3 border-b border-warm/60 flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <ArrowRightIcon className="w-5 h-5 text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            ))}

            {/* Click-to-call — mobile menu */}
            <div className="mt-8 space-y-3">
              <a
                href={CONTACT_LINKS.tel}
                className="w-full flex items-center justify-center gap-2.5 bg-ink text-cream rounded-full py-4 text-[12px] tracking-wide-2 uppercase font-semibold transition-colors hover:bg-graphite"
              >
                <PhoneIcon className="w-4 h-4" />
                Call to Book · {SITE.phone}
              </a>
              <div className="flex items-start gap-2 text-sm text-mute pt-2">
                <span className="mt-0.5 w-4 h-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="text-gold">
                    <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>{SITE.addressLine1}, {SITE.city}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
