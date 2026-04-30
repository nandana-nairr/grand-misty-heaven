'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Room } from '@/lib/data';
import { WHATSAPP_BOOK_URL } from '@/lib/data';
import { ArrowRightIcon, BedIcon } from './Icons';

type Props = {
  room: Room;
};

export default function RoomCard({ room }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative bg-white rounded-[28px] overflow-hidden border border-charcoal/8 transition-all duration-700 ease-out hover:shadow-[0_40px_80px_-30px_rgba(26,26,26,0.35)] hover:-translate-y-1 hover:border-brass/30"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-[1400ms] ease-out"
          style={{ transform: hover ? 'scale(1.06)' : 'scale(1)' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
        {room.tag && (
          <div className="absolute top-5 left-5 bg-brass text-charcoal text-[10px] tracking-[0.28em] uppercase px-3 py-1.5 rounded-full font-semibold">
            {room.tag}
          </div>
        )}
        <div className="absolute top-5 right-5 bg-cream/90 backdrop-blur-md text-charcoal text-[11px] tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium">
          <BedIcon className="w-3 h-3" /> Sleeps {room.sleeps} · {room.size}
        </div>
      </div>

      {/* Body */}
      <div className="p-7 md:p-8">
        <span className="text-[10px] tracking-[0.32em] uppercase text-charcoal/55">
          {room.subtitle}
        </span>
        <h3 className="mt-2 font-display text-charcoal text-[24px] md:text-[28px] leading-tight tracking-tight">
          {room.name}
        </h3>
        <p className="mt-3 text-charcoal/65 leading-relaxed text-[14px]">
          {room.description}
        </p>

        <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
          {room.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-[12.5px] text-charcoal/75"
            >
              <span className="w-1 h-1 rounded-full bg-brass flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-7 pt-6 border-t border-charcoal/8 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-charcoal text-[28px] leading-none">
                ₹{room.price.toLocaleString('en-IN')}
              </span>
              {room.strikePrice && (
                <span className="text-charcoal/40 line-through text-[13px]">
                  ₹{room.strikePrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <span className="text-[10px] tracking-wider text-charcoal/55 mt-1 inline-block uppercase">
              per night
            </span>
          </div>
          <a
            href={WHATSAPP_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-5 !py-3 !text-[10px]"
          >
            Check Availability <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
