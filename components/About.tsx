import Image from 'next/image';
import { HOTEL } from '@/lib/data';
import Reveal from './Reveal';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80';

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-charcoal text-[34px] md:text-[40px] leading-none">
        {value}
      </div>
      <div className="mt-2 text-[10px] tracking-[0.28em] uppercase text-charcoal/60">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 bg-cream"
    >
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 lg:col-start-1">
          <Reveal>
            <div className="eyebrow mb-6">
              <span>The Property</span>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="heading-md text-charcoal">
              A quiet bend on the
              <br />
              <span className="italic font-light">Virajpet Road</span>,
              <br />
              where the valley opens.
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 text-charcoal/70 leading-relaxed text-[15px] md:text-[16px] max-w-md">
              {HOTEL.name} is a small, family-run retreat at Biligeri Junction
              in Mekeri — a handful of rooms, one honest kitchen, and a
              balcony for every guest who asks. We don't try to be a resort.
              We try to be the place you remember.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat value={HOTEL.rating.toString()} label="Guest Rating" />
              <Stat
                value={`${(HOTEL.reviewCount / 1000).toFixed(1)}k+`}
                label="Reviews"
              />
              <Stat value="24/7" label="Front Desk" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 relative">
          <Reveal delay={200}>
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden">
              <Image
                src={ABOUT_IMAGE}
                alt="Misty Coorg valley at dawn"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={500}>
            <div className="absolute -bottom-8 -left-6 md:-left-10 bg-cream p-6 rounded-[24px] shadow-[0_30px_60px_-20px_rgba(26,26,26,0.25)] border border-charcoal/5 max-w-[260px] hidden sm:block">
              <div className="text-brass text-3xl font-display leading-none mb-3">
                "
              </div>
              <p className="text-[13px] leading-relaxed text-charcoal/80 italic">
                Clean room, nice balcony, comfortable bed and 24×7 hot water —
                the food was the surprise.
              </p>
              <p className="mt-3 text-[10px] tracking-[0.22em] uppercase text-charcoal/60">
                — Recent Guest
              </p>
            </div>
          </Reveal>
          <div className="absolute -top-6 -right-4 w-20 h-20 rounded-full bg-brass/15 hidden md:block" />
        </div>
      </div>
    </section>
  );
}
