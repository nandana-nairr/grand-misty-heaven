import Image from 'next/image';
import { SITE, CONTACT_LINKS } from '@/lib/site';
import { Reveal } from '@/components/Reveal';
import {
  PhoneIcon,
  WhatsAppIcon,
  ArrowRightIcon,
} from '@/components/icons';

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 px-5 md:px-10 bg-cream overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="relative rounded-[32px] overflow-hidden">
          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 1440px"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(20,36,32,0.92) 0%, rgba(20,36,32,0.7) 60%, rgba(15,15,15,0.85) 100%)',
            }}
          />

          {/* Content */}
          <div className="relative px-6 py-20 md:px-20 md:py-32 text-center text-cream">
            <Reveal>
              <div className="inline-flex items-center gap-3 text-gold text-[11px] tracking-wide-3 uppercase mb-7">
                <span className="w-10 h-px bg-gold" />
                <span>Reserve Direct</span>
                <span className="w-10 h-px bg-gold" />
              </div>
            </Reveal>

            <Reveal delay={150}>
              <h2 className="font-display text-[44px] md:text-[80px] leading-[1] tracking-tight-2 max-w-3xl mx-auto">
                Your balcony
                <br />
                <span className="italic font-light">is waiting.</span>
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-7 text-cream/80 max-w-md mx-auto leading-relaxed text-[15px]">
                Skip the booking apps. Call or WhatsApp us directly for the best
                rates, free cancellation, and a real human on the line.
              </p>
            </Reveal>

            {/* Phone display */}
            <Reveal delay={450}>
              <div className="mt-12 flex flex-col items-center">
                <span className="text-[10px] tracking-wide-3 uppercase text-cream/60 mb-3">
                  Call Now to Book
                </span>
                <a
                  href={CONTACT_LINKS.tel}
                  className="font-display text-[36px] md:text-[56px] tracking-tight-2 text-gold hover:text-cream transition-colors leading-none"
                >
                  {SITE.phone}
                </a>
              </div>
            </Reveal>

            {/* CTA buttons */}
            <Reveal delay={600}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={CONTACT_LINKS.tel}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-cream text-ink rounded-full px-7 py-4 text-[12px] tracking-wide-2 uppercase font-semibold transition-all duration-500 hover:shadow-gold hover:-translate-y-0.5"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call to Book
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
                <a
                  href={CONTACT_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-cream rounded-full px-7 py-4 text-[12px] tracking-wide-2 uppercase font-semibold transition-all duration-500 hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </Reveal>

            <Reveal delay={750}>
              <p className="mt-8 text-cream/60 text-[12px] tracking-wider">
                Free cancellation · No booking fees · Best rate guaranteed
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
