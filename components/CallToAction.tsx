import Image from 'next/image';
import { HOTEL, WHATSAPP_BOOK_URL } from '@/lib/data';
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from './Icons';
import Reveal from './Reveal';

const CTA_IMAGE =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80';

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 px-5 md:px-10 bg-cream overflow-hidden"
    >
      <div className="container-x">
        <div className="relative rounded-[32px] overflow-hidden">
          <Image
            src={CTA_IMAGE}
            alt="Coorg mountains in mist"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(45,62,51,0.92) 0%, rgba(26,26,26,0.7) 60%, rgba(26,26,26,0.85) 100%)',
            }}
          />

          <div className="relative px-7 py-20 md:px-20 md:py-32 text-center text-cream">
            <Reveal>
              <div className="inline-flex items-center gap-3 text-brass-light text-[11px] tracking-[0.32em] uppercase mb-7">
                <span className="w-10 h-px bg-brass" />
                <span>Ready to Stay?</span>
                <span className="w-10 h-px bg-brass" />
              </div>
            </Reveal>

            <Reveal delay={150}>
              <h2 className="heading-lg max-w-3xl mx-auto">
                Your balcony
                <br />
                <span className="italic font-light">is waiting.</span>
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-7 text-cream/75 max-w-md mx-auto leading-relaxed">
                Call now to book your stay or chat with us on WhatsApp. Our
                front desk is open 24 hours, every day.
              </p>
            </Reveal>

            <Reveal delay={450}>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
                {/* Call */}
                <a
                  href={`tel:${HOTEL.phone}`}
                  className="group flex items-center justify-between gap-4 rounded-[24px] bg-cream/8 backdrop-blur-md border border-cream/15 px-7 py-6 hover:bg-cream/15 hover:border-brass/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-full bg-brass text-charcoal flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.32em] uppercase text-brass-light">
                        Call Now
                      </div>
                      <div className="font-display text-cream text-[20px] md:text-[22px] mt-1">
                        {HOTEL.phoneDisplay}
                      </div>
                    </div>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-cream/60 group-hover:text-brass group-hover:translate-x-1 transition-all" />
                </a>

                {/* WhatsApp */}
                <a
                  href={WHATSAPP_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-[24px] bg-cream/8 backdrop-blur-md border border-cream/15 px-7 py-6 hover:bg-cream/15 hover:border-brass/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div
                      className="w-12 h-12 rounded-full text-cream flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.32em] uppercase text-brass-light">
                        WhatsApp
                      </div>
                      <div className="font-display text-cream text-[20px] md:text-[22px] mt-1">
                        Chat with us
                      </div>
                    </div>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-cream/60 group-hover:text-brass group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <p className="mt-10 text-cream/55 text-[12px] tracking-[0.18em] uppercase">
                Free cancellation · Pay at hotel · No advance required
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
