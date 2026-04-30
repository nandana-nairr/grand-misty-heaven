'use client';

import { useState } from 'react';
import type { Room } from '@/data/rooms';
import { CONTACT_LINKS } from '@/lib/site';
import { RoomGallery } from '@/components/RoomGallery';
import {
  BedIcon,
  UsersIcon,
  MaximizeIcon,
  PhoneIcon,
} from '@/components/icons';

type Props = {
  room: Room;
};

export function RoomCard({ room }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group relative bg-canvas rounded-3xl overflow-hidden border border-warm/60 transition-all duration-700 ease-out hover:shadow-lift hover:-translate-y-1 hover:border-gold/40 flex flex-col">
      {/* Gallery */}
      <div className="p-3 pb-0">
        <div className="rounded-2xl overflow-hidden">
          <RoomGallery images={room.images} roomName={room.name} />
        </div>
      </div>

      {/* Badges over the card header */}
      <div className="px-7 pt-5 flex items-center justify-between">
        {room.highlight ? (
          <span className="bg-gold text-ink text-[10px] tracking-wide-3 uppercase px-3 py-1.5 rounded-full font-bold">
            {room.highlight}
          </span>
        ) : <span />}
        <span className="bg-cream/90 border border-warm/60 text-ink text-[10px] tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium uppercase">
          <UsersIcon className="w-3 h-3" /> Sleeps {room.sleeps}
        </span>
      </div>

      {/* Body */}
      <div className="p-7 md:p-8 pt-4 flex flex-col flex-1">
        <span className="text-[10px] tracking-wide-3 uppercase text-mute">
          {room.subtitle}
        </span>
        <h3 className="font-display text-ink text-[24px] md:text-[28px] leading-tight tracking-tight-2 mt-1.5">
          {room.name}
        </h3>

        <p className="mt-4 text-mute leading-relaxed text-[14px] md:text-[14.5px]">
          {room.shortDescription}
        </p>

        {/* Expandable long description */}
        {expanded && (
          <p className="mt-3 text-mute/80 leading-relaxed text-[13.5px] animate-fade-in border-t border-warm/40 pt-3">
            {room.longDescription}
          </p>
        )}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-[11px] tracking-wider text-brass hover:text-brass-light transition-colors self-start"
        >
          {expanded ? '↑ Less' : '↓ Read more'}
        </button>

        {/* Quick spec strip */}
        <div className="mt-5 flex items-center gap-4 text-[11px] tracking-wider text-mute uppercase">
          <span className="flex items-center gap-1.5">
            <MaximizeIcon className="w-3.5 h-3.5 text-gold" /> {room.size}
          </span>
          <span className="w-px h-3 bg-warm" />
          <span className="flex items-center gap-1.5">
            <BedIcon className="w-3.5 h-3.5 text-gold" /> King Bed
          </span>
        </div>

        {/* Features */}
        <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
          {room.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-[12.5px] text-graphite">
              <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="mt-7 pt-6 border-t border-warm/60 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-ink text-[28px] md:text-[30px] leading-none">
                ₹{room.pricePerNight.toLocaleString('en-IN')}
              </span>
              {room.originalPrice && (
                <span className="text-mute/60 line-through text-[13px]">
                  ₹{room.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <span className="text-[10px] tracking-wider text-mute mt-1 inline-block uppercase">
              per night · taxes included
            </span>
          </div>

          <a
            href={CONTACT_LINKS.tel}
            className="inline-flex items-center gap-2 bg-ink hover:bg-graphite text-cream rounded-full px-5 py-3 text-[10px] tracking-wide-2 uppercase font-semibold transition-all duration-300 hover:shadow-soft whitespace-nowrap"
          >
            <PhoneIcon className="w-3 h-3" />
            Check Availability
          </a>
        </div>
      </div>
    </article>
  );
}
