import {
  AcIcon,
  BellIcon,
  CarIcon,
  ClockIcon,
  CoffeeIcon,
  TreesIcon,
  UtensilsIcon,
  WifiIcon,
} from './Icons';
import Reveal from './Reveal';

const AMENITIES = [
  { icon: WifiIcon, label: 'Free Wi-Fi', sub: 'In every room' },
  { icon: AcIcon, label: 'Air Conditioning', sub: 'Climate control' },
  { icon: CarIcon, label: 'Free Parking', sub: '4 cars · no charge' },
  { icon: BellIcon, label: 'Room Service', sub: '7 AM – 11 PM' },
  { icon: UtensilsIcon, label: 'On-Site Restaurant', sub: 'Indian cuisine' },
  { icon: CoffeeIcon, label: 'Coorg Coffee', sub: 'Brewed at dawn' },
  { icon: ClockIcon, label: '24-Hour Reception', sub: 'Anytime arrivals' },
  { icon: TreesIcon, label: 'Nature Trails', sub: 'Steps from door' },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="relative py-24 md:py-32 bg-cream"
    >
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <div className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.32em] uppercase text-charcoal/60 mb-5">
              <span className="w-10 h-px bg-brass" />
              <span>What's Included</span>
              <span className="w-10 h-px bg-brass" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="heading-md text-charcoal">
              The small things,
              <br />
              <span className="italic font-light">done well.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {AMENITIES.map((a, i) => (
            <Reveal key={a.label} delay={i * 80}>
              <div className="group h-full bg-white border border-charcoal/8 rounded-[24px] p-6 md:p-7 transition-all duration-500 hover:border-brass/40 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(26,26,26,0.2)]">
                <div className="w-12 h-12 rounded-full bg-brass/10 text-brass flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-brass group-hover:text-cream">
                  <a.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-charcoal text-[19px] md:text-[20px] leading-tight tracking-tight">
                  {a.label}
                </h3>
                <p className="mt-1.5 text-[11px] tracking-[0.22em] uppercase text-charcoal/55">
                  {a.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
