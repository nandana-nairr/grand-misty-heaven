import Image from 'next/image';
import { Reveal } from '@/components/Reveal';

const NEARBY_PLACES = [
  {
    id: 'abbey-falls',
    name: 'Abbey Falls',
    distance: '11 km · ~20 min drive',
    category: 'Waterfall',
    description:
      'One of Coorg\'s most visited waterfalls, a 70-foot cascade framed by dense coffee and spice plantations. Best visited after the monsoon when flow is heaviest.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    tip: 'Go early — crowds arrive by 10 am',
  },
  {
    id: 'raja-seat',
    name: 'Raja\'s Seat',
    distance: '5.7 km · ~12 min drive',
    category: 'Viewpoint',
    description:
      'A historic garden and sunset viewpoint where Coorg\'s kings once watched the evening light die over the valley. The view stretches across the Western Ghats.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    tip: 'Best at 6 pm when the light turns gold',
  },
  {
    id: 'madikeri-fort',
    name: 'Madikeri Fort',
    distance: '5.3 km · ~10 min drive',
    category: 'Heritage',
    description:
      'A 17th-century fort with British-era architecture, a small museum, and a church within its walls. Quiet on weekdays — an hour here is never wasted.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    tip: 'Morning light is perfect for photos of the ramparts',
  },
  {
    id: 'namdroling',
    name: 'Namdroling Monastery',
    distance: '36 km · ~55 min drive',
    category: 'Spiritual',
    description:
      'The Golden Temple monastery in Bylakuppe is one of the largest Tibetan settlements in South Asia. The gilded prayer hall is extraordinary — shoes off at the gate.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80',
    tip: 'Arrive during prayer time for the chants',
  },
  {
    id: 'talacauvery',
    name: 'Talacauvery',
    distance: '48 km · ~1.5 hr drive',
    category: 'Sacred Site',
    description:
      'The sacred source of the Cauvery river, high in the Brahmagiri hills at 1,276 metres. The drive through misty forests is half the experience.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
    tip: 'Bring a warm layer — it\'s cooler at elevation',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Waterfall: 'bg-blue-100 text-blue-700',
  Viewpoint: 'bg-amber-100 text-amber-700',
  Heritage: 'bg-stone-100 text-stone-600',
  Spiritual: 'bg-purple-100 text-purple-700',
  'Sacred Site': 'bg-rose-100 text-rose-700',
};

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-3.5 h-3.5 flex-shrink-0">
      <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function NearbyPlaces() {
  return (
    <section className="relative py-24 md:py-32 px-5 md:px-10 bg-cream">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="flex items-center gap-3 text-mute text-[11px] tracking-wide-3 uppercase mb-5">
              <span className="w-10 h-px bg-brass" />
              <span>Explore Around Us</span>
            </div>
          </Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <Reveal delay={150}>
              <h2 className="font-display text-ink text-[38px] md:text-[58px] leading-[1.04] tracking-tight-2">
                Coorg is outside
                <br />
                <span className="italic font-light">your door.</span>
              </h2>
            </Reveal>
            <Reveal delay={250}>
              <p className="text-mute max-w-sm text-[15px] leading-relaxed">
                Grand Misty Heaven sits at the centre of Coorg's best — falls, forts, viewpoints, and monastery all within reach.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {NEARBY_PLACES.map((place, i) => {
            const isLarge = i === 0; // First card spans 2 cols on xl
            return (
              <Reveal
                key={place.id}
                delay={i * 100}
                className={isLarge ? 'xl:col-span-2 xl:row-span-1' : ''}
              >
                <div className="group relative overflow-hidden rounded-2xl bg-stone-100 border border-stone-200 hover:border-brass/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] flex flex-col h-full min-h-[300px]">
                  {/* Image */}
                  <div className={`relative overflow-hidden ${isLarge ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'}`}>
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      sizes={isLarge ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] tracking-wide-2 uppercase font-semibold ${
                        CATEGORY_COLORS[place.category] || 'bg-gray-100 text-gray-700'
                      }`}>
                        {place.category}
                      </span>
                    </div>

                    {/* Distance — overlay on image */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-cream/90 text-[11px] tracking-wider">
                      <MapPinIcon />
                      <span>{place.distance}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <h3 className="font-display text-ink text-[20px] md:text-[22px] leading-snug tracking-tight-2">
                      {place.name}
                    </h3>
                    <p className="mt-2.5 text-mute text-[13.5px] leading-relaxed flex-1">
                      {place.description}
                    </p>

                    {/* Local tip */}
                    <div className="mt-4 flex items-start gap-2 bg-brass/8 border border-brass/15 rounded-xl px-4 py-3">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4 text-brass flex-shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" strokeLinecap="round" />
                      </svg>
                      <p className="text-[12px] text-brass/80 italic leading-snug">
                        <span className="font-semibold not-italic text-brass">Our tip:</span> {place.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
