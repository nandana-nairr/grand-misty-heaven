import Image from 'next/image';
import { HOTEL, WHATSAPP_BOOK_URL } from '@/lib/data';
import { ArrowRightIcon, StarIcon } from './Icons';
import Reveal from './Reveal';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=80';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden grain"
    >
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Misty mountains of Coorg at dawn"
          fill
          priority
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(26,26,26,0.45) 0%, rgba(26,26,26,0.15) 35%, rgba(26,26,26,0.6) 80%, rgba(26,26,26,0.88) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at top, transparent 30%, rgba(26,26,26,0.35) 100%)',
        }}
      />

      {/* Top eyebrow */}
      <div className="absolute top-[110px] md:top-[130px] left-0 right-0 z-10">
        <div className="container-x">
          <Reveal delay={100}>
            <div className="flex items-center gap-3 text-cream/80 text-[11px] tracking-[0.32em] uppercase">
              <span className="w-12 h-px bg-brass" />
              <span>Madikeri · Coorg · Karnataka</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32">
        <div className="container-x">
          <div className="max-w-4xl">
            <Reveal delay={200}>
              <h1 className="heading-xl text-cream">
                Waking up
                <br />
                <span className="italic font-light">above the</span>{' '}
                <span className="text-brass-light">clouds</span>.
              </h1>
            </Reveal>

            <Reveal delay={400}>
              <p className="mt-7 max-w-xl text-cream/85 text-[15px] md:text-[17px] leading-relaxed font-light">
                A boutique sanctuary on the Madikeri–Virajpet Road, where the
                Western Ghats fold into morning mist and breakfast tastes
                faintly of cardamom and rain.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#rooms" className="btn-gold">
                  View Rooms <ArrowRightIcon className="w-4 h-4" />
                </a>
                <a
                  href={WHATSAPP_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Book Now
                </a>
              </div>
            </Reveal>

            <Reveal delay={800}>
              <div className="mt-12 flex items-center gap-6 text-cream/75 text-[12px] tracking-wider">
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon
                      key={i}
                      className="w-3.5 h-3.5 text-brass-light"
                    />
                  ))}
                  <span className="ml-2 font-medium">{HOTEL.rating}</span>
                </div>
                <span className="text-cream/40">·</span>
                <span>
                  {HOTEL.reviewCount.toLocaleString('en-IN')}+ Guest Reviews
                </span>
                <span className="text-cream/40 hidden md:inline">·</span>
                <span className="hidden md:inline">
                  Est. {HOTEL.established}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/60">
        <span className="text-[10px] tracking-[0.32em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brass to-transparent" />
      </div>
    </section>
  );
}
