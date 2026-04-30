'use client';

import { useState, useEffect, useRef } from 'react';
import { Reveal } from '@/components/Reveal';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Menon',
    location: 'Bengaluru',
    rating: 5,
    date: 'October 2024',
    review:
      'Waking up to mist rolling over the valley from our balcony was genuinely magical. The hosts treated us like family — Coorg coffee ready every morning, local tips for places most tourists miss. We extended our stay by two nights. Will be back.',
    stay: 'King Room with Balcony',
    avatar: 'PM',
    source: 'Google',
  },
  {
    id: 2,
    name: 'Rohan & Aditi Shah',
    location: 'Mumbai',
    rating: 5,
    date: 'August 2024',
    review:
      'Our third visit and Grand Misty Heaven somehow keeps getting better. The family room was spotless, the kids loved the garden, and the home-cooked dinner was the best meal of our entire trip through Karnataka. Extraordinary value.',
    stay: 'Deluxe Family Room',
    avatar: 'RS',
    source: 'MakeMyTrip',
  },
  {
    id: 3,
    name: 'Anjali Krishnaswamy',
    location: 'Chennai',
    rating: 5,
    date: 'December 2024',
    review:
      'I was hesitant about a last-minute trip but this place was absolutely worth it. The rooms smell of fresh linen and wood. The view at sunrise is indescribable. The owner personally drove us to the nearest viewpoint at dawn — nothing can beat that kind of hospitality.',
    stay: 'Standard King Room',
    avatar: 'AK',
    source: 'Airbnb',
  },
  {
    id: 4,
    name: 'Vikram Nair',
    location: 'Kochi',
    rating: 5,
    date: 'January 2025',
    review:
      "Been to plenty of resorts in Coorg — Grand Misty Heaven has the best location on that road. Perched high enough for real mist but close enough to Madikeri for convenience. Quiet nights, clean rooms, honest prices. Exactly what I needed after a hard month.",
    stay: 'Standard King Room',
    avatar: 'VN',
    source: 'Google',
  },
  {
    id: 5,
    name: 'Deepika & Sanjay Reddy',
    location: 'Hyderabad',
    rating: 5,
    date: 'February 2025',
    review:
      'Booked directly and got a lovely room upgrade — that alone tells you the vibe here. The property feels like a home, not a hotel. Staff remembered our names from check-in to check-out. The balcony sunset was better than any Instagram photo could capture.',
    stay: 'King Room with Balcony',
    avatar: 'DR',
    source: 'TripAdvisor',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          className={`w-3.5 h-3.5 ${star <= rating ? 'fill-brass text-brass' : 'fill-stone-200 text-stone-200'}`}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 40 30" fill="currentColor" className="w-8 h-6 text-brass/20">
      <path d="M0 30V18.182C0 10 4.545 4.242 13.636 0l2.728 4.242C11.212 6.667 8.485 10.303 8.485 15.152H15V30H0zm22 0V18.182C22 10 26.545 4.242 35.636 0L38.364 4.242C33.212 6.667 30.485 10.303 30.485 15.152H37V30H22z" />
    </svg>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (isAnimating || index === active) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(index);
      setIsAnimating(false);
    }, 300);
  };

  const next = () => goTo((active + 1) % TESTIMONIALS.length);
  const prev = () => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [active]);

  const current = TESTIMONIALS[active];

  return (
    <section className="relative py-24 md:py-32 px-5 md:px-10 bg-forest overflow-hidden">
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative arc */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-b-full bg-brass/5 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex flex-col items-center text-center mb-14 md:mb-20">
          <Reveal>
            <div className="flex items-center gap-3 text-brass/70 text-[11px] tracking-wide-3 uppercase mb-5">
              <span className="w-10 h-px bg-brass/40" />
              <span>Guest Stories</span>
              <span className="w-10 h-px bg-brass/40" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display text-cream text-[38px] md:text-[58px] leading-[1.04] tracking-tight-2">
              Words from those
              <br />
              <span className="italic font-light text-brass">who stayed.</span>
            </h2>
          </Reveal>
        </div>

        {/* Main review card */}
        <div className="max-w-3xl mx-auto">
          <div
            className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
          >
            <div className="relative bg-cream/[0.06] border border-cream/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <QuoteIcon />

              <p className="mt-4 font-display text-cream text-[18px] md:text-[22px] leading-[1.6] italic font-light tracking-wide">
                &ldquo;{current.review}&rdquo;
              </p>

              <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-11 h-11 rounded-full bg-brass/20 border border-brass/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-brass text-[13px] font-semibold">
                      {current.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="text-cream font-medium text-[14px] tracking-wide">{current.name}</p>
                    <p className="text-cream/50 text-[12px] tracking-wider mt-0.5">
                      {current.location} · {current.date}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1.5">
                  <StarRating rating={current.rating} />
                  <span className="text-cream/40 text-[11px] tracking-wider">
                    via {current.source}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-cream/10">
                <span className="text-brass/60 text-[11px] tracking-wide-2 uppercase">
                  Stayed in: {current.stay}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="text-cream/40 hover:text-brass transition-colors p-2 hover:bg-cream/5 rounded-full"
              aria-label="Previous review"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dot nav */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-400 ${
                    i === active ? 'w-8 h-1.5 bg-brass' : 'w-1.5 h-1.5 bg-cream/20 hover:bg-cream/40'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="text-cream/40 hover:text-brass transition-colors p-2 hover:bg-cream/5 rounded-full"
              aria-label="Next review"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Aggregate rating pill */}
          <Reveal delay={400}>
            <div className="mt-10 flex justify-center">
              <div className="inline-flex items-center gap-3 bg-cream/[0.06] border border-cream/10 rounded-full px-6 py-3">
                <StarRating rating={5} />
                <span className="text-cream font-display text-[16px]">4.7</span>
                <span className="text-cream/40 text-[11px] tracking-wider">·</span>
                <span className="text-cream/50 text-[12px] tracking-wide">1,689+ reviews</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Side cards — desktop only */}
        <div className="hidden lg:grid grid-cols-2 gap-5 mt-12 max-w-5xl mx-auto">
          {[
            { index: (active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length },
            { index: (active + 1) % TESTIMONIALS.length },
          ].map(({ index }) => {
            const t = TESTIMONIALS[index];
            return (
              <button
                key={t.id}
                onClick={() => goTo(index)}
                className="text-left bg-cream/[0.04] border border-cream/8 rounded-2xl p-6 hover:bg-cream/[0.08] hover:border-cream/15 transition-all duration-300 group"
              >
                <p className="text-cream/50 text-[13px] leading-relaxed line-clamp-2 italic font-display">
                  &ldquo;{t.review.substring(0, 90)}…&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brass/15 border border-brass/20 flex items-center justify-center">
                    <span className="font-display text-brass text-[11px]">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="text-cream/60 text-[12px] font-medium">{t.name}</p>
                    <StarRating rating={t.rating} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
