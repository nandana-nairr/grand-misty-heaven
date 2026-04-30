import { Reveal } from '@/components/Reveal';

const DIRECT_BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Best Rate Guaranteed',
    description: 'Our direct price is always equal to or lower than any OTA. No algorithm can beat our own front desk.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
        <path d="M12 14h.01" strokeLinecap="round" />
      </svg>
    ),
    title: 'Zero Booking Fees',
    description: 'No platform cut. No processing surcharge. What you see is exactly what you pay — nothing hidden.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Direct Communication',
    description: 'Call or WhatsApp us and reach a real person who knows the property. Special requests actually get heard.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Flexible Cancellation',
    description: 'Plans change. Book direct and speak to us — we work with you, not against you, when life happens.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
      </svg>
    ),
    title: 'Welcome Perks',
    description: 'Direct guests get priority room selection, early check-in when available, and Coorg coffee on arrival.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" strokeLinecap="round" />
      </svg>
    ),
    title: 'Instant Confirmation',
    description: "No waiting on third-party systems. Call us and your booking is confirmed in under two minutes.",
  },
];

const COMPARISON = [
  { label: 'Platform fee', direct: 'None', ota: '12–18%' },
  { label: 'Best price', direct: '✓ Always', ota: '✗ Not guaranteed' },
  { label: 'Human support', direct: 'Real person', ota: 'Chatbot / ticket' },
  { label: 'Special requests', direct: 'Handled directly', ota: 'Not guaranteed' },
  { label: 'Cancellation', direct: 'Flexible', ota: 'Platform policy' },
];

export function DirectBooking() {
  return (
    <section className="relative py-24 md:py-32 px-5 md:px-10 bg-cream overflow-hidden">
      {/* Background text watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[160px] md:text-[220px] text-stone-100 font-bold leading-none pointer-events-none select-none whitespace-nowrap opacity-60">
        Direct
      </div>

      <div className="max-w-[1440px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <Reveal>
            <div className="flex items-center justify-center gap-3 text-mute text-[11px] tracking-wide-3 uppercase mb-5">
              <span className="w-10 h-px bg-brass" />
              <span>Why Book Direct</span>
              <span className="w-10 h-px bg-brass" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display text-ink text-[38px] md:text-[58px] leading-[1.04] tracking-tight-2">
              Skip the middleman.
              <br />
              <span className="italic font-light">Get more for less.</span>
            </h2>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-5 text-mute max-w-md mx-auto text-[15px] leading-relaxed">
              Every rupee a platform takes is a rupee we can't spend on your experience.
              Call us. It takes 90 seconds.
            </p>
          </Reveal>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-14 md:mb-20">
          {DIRECT_BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 80}>
              <div className="group relative bg-sand border border-stone-200 hover:border-brass/40 rounded-2xl p-7 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(184,153,104,0.12)] hover:-translate-y-1">
                <div className="w-11 h-11 bg-brass/10 group-hover:bg-brass/20 rounded-xl flex items-center justify-center text-brass transition-colors duration-300 mb-5">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-ink text-[18px] md:text-[20px] leading-snug tracking-tight-2 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-mute text-[14px] leading-relaxed">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Comparison table */}
        <Reveal delay={200}>
          <div className="max-w-2xl mx-auto bg-sand border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-ink text-cream text-[11px] tracking-wide-2 uppercase">
              <div className="px-5 py-4 text-cream/60">Feature</div>
              <div className="px-5 py-4 text-center text-brass font-semibold">Book Direct</div>
              <div className="px-5 py-4 text-center text-cream/50">Via OTA</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 text-[13px] md:text-[14px] ${
                  i % 2 === 0 ? 'bg-cream/60' : 'bg-sand'
                } border-t border-stone-200`}
              >
                <div className="px-5 py-3.5 text-mute font-medium">{row.label}</div>
                <div className="px-5 py-3.5 text-center text-forest font-semibold">{row.direct}</div>
                <div className="px-5 py-3.5 text-center text-mute/60">{row.ota}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
