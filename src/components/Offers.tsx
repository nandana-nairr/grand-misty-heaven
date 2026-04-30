import { Reveal } from '@/components/Reveal';
import { CONTACT_LINKS } from '@/lib/site';

const OFFERS = [
  {
    id: 'weekend-escape',
    badge: 'This Weekend',
    badgeColor: 'bg-brass text-ink',
    title: '10% Off Weekend Stays',
    subtitle: 'Friday – Sunday arrivals',
    description:
      'Book a Friday or Saturday check-in for any of our rooms and receive an automatic 10% discount on the published rate. No code needed — just mention it when you call.',
    perks: ['Free early check-in (subject to availability)', 'Valley-view room preference', 'Coorg coffee on arrival'],
    validUntil: 'Valid through 31 May 2025',
    cta: 'Claim This Offer',
    highlight: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: 'breakfast-bundle',
    badge: 'Always On',
    badgeColor: 'bg-forest text-cream',
    title: 'Free Breakfast Included',
    subtitle: 'For all direct bookings',
    description:
      'Every room booked directly includes complimentary breakfast for two. South Indian and Continental options prepared fresh each morning from 7 to 10 am.',
    perks: ['Hot South Indian breakfast', 'Continental option available', 'Coorg filter coffee & tea'],
    validUntil: 'No expiry · Direct bookings only',
    cta: 'Book with Breakfast',
    highlight: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    id: 'long-stay',
    badge: '4+ Nights',
    badgeColor: 'bg-stone-200 text-ink',
    title: 'Long Stay, Longer Savings',
    subtitle: '15% off stays of 4 nights or more',
    description:
      'Staying four or more nights? You deserve a real break — and a real discount. Fifteen percent off our standard nightly rate, plus free late check-out on your last day.',
    perks: ['15% off total stay', 'Free late checkout (up to 2 pm)', 'Complimentary room upgrade if available'],
    validUntil: 'Valid year-round · Book 7 days in advance',
    cta: 'Plan a Long Stay',
    highlight: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-brass flex-shrink-0">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Offers() {
  return (
    <section className="relative py-24 md:py-32 px-5 md:px-10 bg-sand overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="flex items-center gap-3 text-mute text-[11px] tracking-wide-3 uppercase mb-5">
              <span className="w-10 h-px bg-brass" />
              <span>Special Offers</span>
            </div>
          </Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <Reveal delay={150}>
              <h2 className="font-display text-ink text-[38px] md:text-[58px] leading-[1.04] tracking-tight-2">
                Stay more,
                <br />
                <span className="italic font-light">pay less.</span>
              </h2>
            </Reveal>
            <Reveal delay={250}>
              <p className="text-mute max-w-xs text-[15px] leading-relaxed">
                Exclusive deals only available when you book directly with us.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Offers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
          {OFFERS.map((offer, i) => (
            <Reveal key={offer.id} delay={i * 120}>
              <div
                className={`relative rounded-2xl border overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-1 ${
                  offer.highlight
                    ? 'bg-ink border-brass/30 shadow-[0_20px_60px_rgba(184,153,104,0.2)] hover:shadow-[0_28px_70px_rgba(184,153,104,0.3)]'
                    : 'bg-cream border-stone-200 hover:border-brass/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]'
                }`}
              >
                {/* Top accent bar for highlight */}
                {offer.highlight && (
                  <div className="h-0.5 bg-gradient-to-r from-brass via-brass-light to-brass" />
                )}

                <div className="p-7 md:p-8 flex flex-col flex-1">
                  {/* Badge + icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] tracking-wide-2 uppercase font-semibold ${offer.badgeColor}`}>
                      {offer.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      offer.highlight ? 'bg-brass/20 text-brass' : 'bg-stone-100 text-brass'
                    }`}>
                      {offer.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-display text-[22px] md:text-[24px] leading-snug tracking-tight-2 ${
                    offer.highlight ? 'text-cream' : 'text-ink'
                  }`}>
                    {offer.title}
                  </h3>
                  <p className={`text-[11px] tracking-wider uppercase mt-1 ${
                    offer.highlight ? 'text-brass/70' : 'text-mute/70'
                  }`}>
                    {offer.subtitle}
                  </p>

                  {/* Description */}
                  <p className={`mt-4 text-[14px] leading-relaxed flex-1 ${
                    offer.highlight ? 'text-cream/70' : 'text-mute'
                  }`}>
                    {offer.description}
                  </p>

                  {/* Perks */}
                  <ul className="mt-5 space-y-2">
                    {offer.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5">
                        <CheckIcon />
                        <span className={`text-[13px] ${
                          offer.highlight ? 'text-cream/80' : 'text-graphite'
                        }`}>
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className={`mt-6 pt-5 border-t flex items-center justify-between gap-3 ${
                    offer.highlight ? 'border-cream/10' : 'border-stone-200'
                  }`}>
                    <span className={`text-[11px] ${
                      offer.highlight ? 'text-cream/40' : 'text-mute/60'
                    }`}>
                      {offer.validUntil}
                    </span>
                    <a
                      href={CONTACT_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-[11px] tracking-wide-2 uppercase font-semibold rounded-full px-5 py-2.5 transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 ${
                        offer.highlight
                          ? 'bg-brass text-ink hover:bg-brass-light hover:shadow-[0_6px_20px_rgba(184,153,104,0.4)]'
                          : 'bg-ink text-cream hover:bg-forest hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]'
                      }`}
                    >
                      {offer.cta}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
