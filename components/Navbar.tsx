'use client';

import { useEffect, useState } from 'react';
import { HOTEL, WHATSAPP_BOOK_URL } from '@/lib/data';
import {
  ArrowRightIcon,
  MenuIcon,
  MountainIcon,
  PhoneIcon,
  XIcon,
} from './Icons';

const LINKS = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? 'rgba(250, 247, 242, 0.78)'
            : 'rgba(26, 26, 26, 0.04)',
          backdropFilter: scrolled
            ? 'blur(20px) saturate(180%)'
            : 'blur(8px)',
          WebkitBackdropFilter: scrolled
            ? 'blur(20px) saturate(180%)'
            : 'blur(8px)',
          borderBottom: scrolled
            ? '1px solid rgba(26,26,26,0.08)'
            : '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="container-x h-[72px] md:h-[84px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-500 ${
                scrolled ? 'bg-charcoal' : 'bg-brass'
              }`}
            >
              <MountainIcon
                className={`w-4 h-4 ${
                  scrolled ? 'text-brass' : 'text-charcoal'
                }`}
              />
            </div>
            <div className="leading-tight">
              <div
                className={`font-display text-[15px] md:text-[17px] tracking-[0.18em] uppercase ${
                  scrolled ? 'text-charcoal' : 'text-cream'
                }`}
              >
                {HOTEL.shortName}
              </div>
              <div
                className={`text-[10px] tracking-[0.32em] uppercase ${
                  scrolled ? 'text-charcoal/60' : 'text-cream/70'
                }`}
              >
                Heaven · Coorg
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[12px] tracking-[0.22em] uppercase font-medium transition-colors duration-300 ${
                  scrolled
                    ? 'text-charcoal hover:text-brass'
                    : 'text-cream/90 hover:text-brass'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${HOTEL.phone}`}
              className={`hidden md:flex items-center gap-2 text-[12px] tracking-wider transition-colors ${
                scrolled
                  ? 'text-charcoal hover:text-brass'
                  : 'text-cream/90 hover:text-brass'
              }`}
            >
              <PhoneIcon className="w-3.5 h-3.5" /> {HOTEL.phoneDisplay}
            </a>
            <a
              href={WHATSAPP_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold !px-5 !py-2.5 !text-[11px]"
            >
              Reserve <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              className={`lg:hidden p-2 rounded-full ${
                scrolled ? 'text-charcoal' : 'text-cream'
              }`}
              aria-label="Open menu"
            >
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-500 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-cream transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex items-center justify-between border-b border-charcoal/10">
            <span className="font-display text-lg tracking-[0.18em] uppercase text-charcoal">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <XIcon className="w-5 h-5 text-charcoal" />
            </button>
          </div>
          <div className="p-6 flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl tracking-tight text-charcoal py-3 border-b border-charcoal/10 flex items-center justify-between group"
              >
                <span>{l.label}</span>
                <ArrowRightIcon className="w-5 h-5 text-brass opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
            <div className="mt-8 space-y-3 text-sm text-charcoal/70">
              <a
                href={`tel:${HOTEL.phone}`}
                className="flex items-center gap-2 hover:text-brass"
              >
                <PhoneIcon className="w-4 h-4 text-brass" />{' '}
                {HOTEL.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
