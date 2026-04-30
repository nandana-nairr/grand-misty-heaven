import Image from 'next/image';
import { SITE } from '@/lib/site';
import { Reveal } from '@/components/Reveal';
import { QuoteIcon } from '@/components/icons';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 px-5 md:px-10 bg-cream"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Text */}
        <div className="lg:col-span-5 lg:col-start-1">
          <Reveal>
            <div className="flex items-center gap-3 text-mute text-[11px] tracking-wide-3 uppercase mb-6">
              <span className="w-10 h-px bg-gold" />
              <span>The Property</span>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display text-ink text-[40px] md:text-[54px] leading-[1.05] tracking-tight-2">
              A small place
              <br />
              <span className="italic font-light">on a quiet road,</span>
              <br />
              run by people<br />
              who live here.
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 text-mute leading-relaxed text-[15px] md:text-[16px] max-w-md">
              Grand Misty Heaven is a family-run boutique homestay at Biligeri
              Junction in Mekeri, just off the Madikeri–Virajpet Road. Fifteen
              rooms, one honest kitchen, and a balcony for every guest who asks.
              We don't try to be a resort — we try to be the place you remember.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-5 text-mute leading-relaxed text-[15px] md:text-[16px] max-w-md">
              Since {SITE.established}, we've welcomed over{' '}
              {SITE.reviewCount.toLocaleString('en-IN')} families, couples and
              solo travellers — all looking for the same thing: a quiet morning
              on a balcony with a good cup of coffee, somewhere a long way from
              everything.
            </p>
          </Reveal>
          <Reveal delay={550}>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat value={String(SITE.rating)} label="Guest Rating" />
              <Stat value="1.6k+" label="Reviews" />
              <Stat value="24/7" label="Front Desk" />
            </div>
          </Reveal>
        </div>

        {/* Image + floating testimonial */}
        <div className="lg:col-span-6 lg:col-start-7 relative">
          <Reveal delay={200}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80"
                alt="Misty Coorg valley at dawn"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={500}>
            <div className="absolute -bottom-8 -left-6 md:-left-10 bg-canvas p-6 rounded-2xl shadow-lift border border-warm max-w-[260px] hidden sm:block">
              <QuoteIcon className="w-5 h-5 text-gold mb-3" />
              <p className="text-[13px] leading-relaxed text-graphite italic">
                Clean room, nice balcony, comfortable bed and 24×7 hot water —
                the food was the surprise.
              </p>
              <p className="mt-3 text-[10px] tracking-wide-2 uppercase text-mute">
                — Recent Guest
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-ink text-[34px] md:text-[40px] leading-none">
        {value}
      </div>
      <div className="mt-2 text-[10px] tracking-wide-3 uppercase text-mute">
        {label}
      </div>
    </div>
  );
}
