import { Reveal } from '@/components/Reveal';
import {
  WifiIcon,
  SnowflakeIcon,
  CarIcon,
  BellIcon,
  CoffeeIcon,
  ClockIcon,
  UtensilsIcon,
  SunriseIcon,
} from '@/components/icons';
import type { ComponentType, SVGProps } from 'react';

type Amenity = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  sub: string;
};

const AMENITIES: Amenity[] = [
  { icon: WifiIcon, title: 'Free Wi-Fi', sub: 'In every room' },
  { icon: SnowflakeIcon, title: 'Air Conditioning', sub: 'Climate control' },
  { icon: CarIcon, title: 'Free Parking', sub: '4 cars · no charge' },
  { icon: BellIcon, title: 'Room Service', sub: 'On request' },
  { icon: ClockIcon, title: '24-Hour Reception', sub: 'Front desk always open' },
  { icon: UtensilsIcon, title: 'Indian Restaurant', sub: 'On-site kitchen' },
  { icon: CoffeeIcon, title: 'Coorg Coffee', sub: 'Brewed at dawn' },
  { icon: SunriseIcon, title: 'Breakfast', sub: 'Complimentary' },
];

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="relative py-24 md:py-32 px-5 md:px-10 bg-canvas"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-3 text-mute text-[11px] tracking-wide-3 uppercase mb-5">
              <span className="w-10 h-px bg-gold" />
              <span>What's Included</span>
              <span className="w-10 h-px bg-gold" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display text-ink text-[40px] md:text-[56px] leading-[1.05] tracking-tight-2">
              The small things,
              <br />
              <span className="italic font-light">done well.</span>
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-mute leading-relaxed text-[15px]">
              Everything you'd expect from a thoughtful hotel — and a few things
              you wouldn't.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {AMENITIES.map((amenity, i) => (
            <Reveal key={amenity.title} delay={i * 80}>
              <AmenityCard {...amenity} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenityCard({ icon: Icon, title, sub }: Amenity) {
  return (
    <div className="group relative p-7 md:p-8 rounded-2xl bg-cream hover:bg-sand border border-warm/50 hover:border-gold/40 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-soft cursor-default">
      <div className="w-12 h-12 rounded-full bg-canvas group-hover:bg-gold/15 flex items-center justify-center transition-colors duration-500 mb-5">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <h3 className="font-display text-ink text-[18px] md:text-[20px] leading-tight tracking-tight-2">
        {title}
      </h3>
      <p className="mt-1.5 text-[11px] tracking-wide-2 uppercase text-mute">
        {sub}
      </p>
    </div>
  );
}
