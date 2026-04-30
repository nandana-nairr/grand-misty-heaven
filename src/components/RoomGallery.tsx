'use client';

import Image from 'next/image';
import { useState, useRef, useCallback, useEffect } from 'react';

type RoomGalleryProps = {
  images: string[];
  roomName: string;
};

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
      <path d="M15 3h6m0 0v6m0-6-7 7M9 21H3m0 0v-6m0 6 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Touch/swipe state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, prev, next, closeLightbox]);

  // Touch swipe handlers for lightbox
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev();
    }
  };

  if (!images.length) return null;

  const [primary, ...thumbnails] = images;

  return (
    <>
      {/* Gallery grid */}
      <div className="w-full">
        {/* Primary image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100 cursor-zoom-in group" onClick={() => openLightbox(0)}>
          <Image
            src={primary}
            alt={`${roomName} — main view`}
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-ink/60 backdrop-blur-md text-cream rounded-full px-3 py-1.5 text-[11px] tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExpandIcon />
            View all {images.length} photos
          </div>
        </div>

        {/* Thumbnail strip */}
        {thumbnails.length > 0 && (
          <div
            ref={scrollRef}
            className="flex gap-2.5 mt-2.5 overflow-x-auto pb-1 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {thumbnails.map((src, i) => (
              <button
                key={src}
                onClick={() => openLightbox(i + 1)}
                className="relative flex-shrink-0 w-24 h-16 md:w-28 md:h-20 rounded-xl overflow-hidden bg-stone-100 group snap-start focus:outline-none focus:ring-2 focus:ring-brass"
                aria-label={`View photo ${i + 2} of ${roomName}`}
              >
                <Image
                  src={src}
                  alt={`${roomName} photo ${i + 2}`}
                  fill
                  sizes="112px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-xl flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5">
            <span className="text-cream/60 text-[12px] tracking-wide-2 uppercase font-medium">
              {roomName} · {activeIndex + 1} / {images.length}
            </span>
            <button
              onClick={closeLightbox}
              className="text-cream/70 hover:text-cream transition-colors p-2 hover:bg-cream/10 rounded-full"
              aria-label="Close lightbox"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Main image */}
          <div className="relative w-full h-full flex items-center justify-center px-16 py-20">
            <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
              <Image
                src={images[activeIndex]}
                alt={`${roomName} photo ${activeIndex + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Prev button */}
          {images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream bg-ink/40 hover:bg-ink/70 backdrop-blur-md border border-cream/10 hover:border-cream/30 rounded-full p-3 transition-all duration-300"
              aria-label="Previous photo"
            >
              <ChevronLeft />
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={next}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream bg-ink/40 hover:bg-ink/70 backdrop-blur-md border border-cream/10 hover:border-cream/30 rounded-full p-3 transition-all duration-300"
              aria-label="Next photo"
            >
              <ChevronRight />
            </button>
          )}

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 h-1.5 bg-brass' : 'w-1.5 h-1.5 bg-cream/30 hover:bg-cream/60'
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
