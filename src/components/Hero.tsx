import Image from 'next/image';
import { SITE } from '@/lib/site';
import { Reveal } from '@/components/Reveal';
import { ArrowRightIcon, StarIcon } from '@/components/icons';

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden grain"
    >
      {/* Background image with gentle Ken Burns zoom */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=80"
          alt="Misty mountains of Coorg at dawn — view from Grand Misty Heaven"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-kenburns"
        />
      </div>

      {/* Gradient overlay (30% bottom-up + radial vignette) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(20,36,32,0.4) 0%, rgba(20,36,32,0.15) 30%, rgba(20,36,32,0.55) 75%, rgba(20,36,32,0.85) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at top, transparent 30%, rgba(15,15,15,0.35) 100%)',
        }}
      />

      {/* Top meta strip */}
      <div className="absolute top-[100px] md:top-[120px] left-0 right-0 z-10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <Reveal delay={100}>
            <div className="flex items-center gap-3 text-cream/80 text-[11px] tracking-wide-3 uppercase">
              <span className="w-12 h-px bg-gold" />
              <span>Madikeri · Coorg · Karnataka</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Main content — bottom-aligned */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-32 md:pb-40">
        <div className="max-w-[1440px] mx-auto w-full px-5 md:px-10">
          <div className="max-w-4xl">
            <Reveal delay={200}>
              <h1 className="font-display text-cream text-[44px] leading-[1.02] sm:text-[64px] md:text-[88px] lg:text-[112px] tracking-tight-2 font-medium">
                Waking up
                <br />
                <span className="italic font-light">above the</span>{' '}
                <span className="text-gold">clouds</span>.
              </h1>
            </Reveal>

            <Reveal delay={400}>
              <p className="mt-7 max-w-xl text-cream/85 text-[15px] md:text-[17px] leading-relaxed font-light">
                A boutique sanctuary on the Madikeri–Virajpet Road, where the
                Western Ghats fold into morning mist and breakfast tastes faintly
                of cardamom and rain.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#rooms"
                  className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-deep text-ink rounded-full px-7 py-3.5 text-[12px] tracking-wide-2 uppercase font-semibold transition-all duration-500 hover:shadow-gold hover:-translate-y-0.5"
                >
                  View Rooms <ArrowRightIcon className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 border border-cream/30 hover:border-gold text-cream hover:text-gold rounded-full px-7 py-3.5 text-[12px] tracking-wide-2 uppercase font-medium backdrop-blur-sm bg-cream/5 transition-all duration-500"
                >
                  Book Now
                </a>
              </div>
            </Reveal>

            <Reveal delay={800}>
              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-cream/75 text-[12px] tracking-wider">
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5 text-gold" />
                  ))}
                  <span className="ml-2 font-medium">{SITE.rating}</span>
                </div>
                <span className="text-cream/40">·</span>
                <span>
                  {SITE.reviewCount.toLocaleString('en-IN')}+ Guest Reviews
                </span>
                <span className="text-cream/40 hidden md:inline">·</span>
                <span className="hidden md:inline">Est. {SITE.established}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/60">
        <span className="text-[10px] tracking-wide-3 uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
