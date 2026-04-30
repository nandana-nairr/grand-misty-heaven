import { Reveal } from '@/components/Reveal';
import { SITE, CONTACT_LINKS } from '@/lib/site';

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
      <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

// Grand Misty Heaven, Mekeri, Madikeri – Virajpet Road
const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8!2d75.7379!3d12.4192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba52d87c7d6b4b7%3A0x0!2sGrand+Misty+Heaven!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

const FROM_LOCATIONS = [
  { place: 'Bengaluru (Silk Board)', duration: '5 – 5.5 hrs', route: 'NH 275 via Mysuru' },
  { place: 'Mysuru', duration: '2.5 – 3 hrs', route: 'NH 275 via Hunsur' },
  { place: 'Mangaluru', duration: '2 – 2.5 hrs', route: 'NH 75 via Madikeri' },
  { place: 'Kannur Airport', duration: '2 – 2.5 hrs', route: 'NH 66 via Kalpetta' },
];

export function MapSection() {
  return (
    <section id="location" className="relative py-24 md:py-32 px-5 md:px-10 bg-sand overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-stone-100 -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="flex items-center gap-3 text-mute text-[11px] tracking-wide-3 uppercase mb-5">
              <span className="w-10 h-px bg-brass" />
              <span>Find Us</span>
            </div>
          </Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal delay={150}>
              <h2 className="font-display text-ink text-[38px] md:text-[58px] leading-[1.04] tracking-tight-2 max-w-xl">
                Set above
                <br />
                <span className="italic font-light">Madikeri's mist.</span>
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <a
                href={CONTACT_LINKS.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-ink hover:bg-forest text-cream rounded-full px-6 py-3.5 text-[11px] tracking-wide-2 uppercase font-semibold transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 self-start"
              >
                <CompassIcon />
                Get Directions
              </a>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 lg:gap-8 items-start">
          {/* Map iframe */}
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-stone-200">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="460"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grand Misty Heaven location on Google Maps"
                className="block"
              />
            </div>
          </Reveal>

          {/* Info panel */}
          <Reveal delay={200}>
            <div className="space-y-5">
              {/* Address card */}
              <div className="bg-cream border border-stone-200 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 bg-brass/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <PinIcon />
                  </div>
                  <div>
                    <p className="font-display text-ink text-[18px] leading-snug">{SITE.name}</p>
                    <p className="text-mute text-[13px] leading-relaxed mt-1">
                      {SITE.addressLine1},<br />
                      {SITE.addressLine2},<br />
                      {SITE.city} – {SITE.pincode},<br />
                      {SITE.state}, {SITE.country}
                    </p>
                  </div>
                </div>
                <a
                  href={CONTACT_LINKS.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-block border border-stone-200 hover:border-brass text-ink hover:text-brass rounded-xl py-2.5 text-[11px] tracking-wide-2 uppercase font-medium transition-all duration-300"
                >
                  Open in Google Maps
                </a>
              </div>

              {/* Travel times */}
              <div className="bg-cream border border-stone-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ClockIcon />
                  <span className="text-[11px] tracking-wide-2 uppercase text-mute font-medium">Travel Times</span>
                </div>
                <ul className="space-y-3">
                  {FROM_LOCATIONS.map((loc) => (
                    <li key={loc.place} className="flex items-start justify-between gap-3 text-[13px]">
                      <div>
                        <p className="text-ink font-medium">{loc.place}</p>
                        <p className="text-mute/70 text-[11px] mt-0.5">{loc.route}</p>
                      </div>
                      <span className="text-brass font-medium whitespace-nowrap text-[12px] mt-0.5">
                        {loc.duration}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Landmarks */}
              <div className="bg-cream border border-stone-200 rounded-2xl p-6">
                <p className="text-[11px] tracking-wide-2 uppercase text-mute font-medium mb-4">Nearby Landmarks</p>
                <ul className="space-y-2.5">
                  {SITE.landmarks.map((lm) => (
                    <li key={lm.name} className="flex items-center justify-between text-[13px]">
                      <span className="text-ink flex items-center gap-2">
                        <span className="w-1 h-1 bg-brass rounded-full" />
                        {lm.name}
                      </span>
                      <span className="text-mute">{lm.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
