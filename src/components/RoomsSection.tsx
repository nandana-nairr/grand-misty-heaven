import { ROOMS } from '@/data/rooms';
import { Reveal } from '@/components/Reveal';
import { RoomCard } from '@/components/RoomCard';

export function RoomsSection() {
  return (
    <section
      id="rooms"
      className="relative py-24 md:py-32 px-5 md:px-10 bg-cream"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20 gap-6">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-mute text-[11px] tracking-wide-3 uppercase mb-5">
                <span className="w-10 h-px bg-gold" />
                <span>Stay With Us</span>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="font-display text-ink text-[40px] md:text-[60px] leading-[1.02] tracking-tight-2 max-w-2xl">
                Hand-finished rooms.
                <br />
                <span className="italic font-light">One unforgettable view.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <p className="text-mute max-w-sm leading-relaxed text-[15px]">
              Each room is finished in warm wood and white linen, with a private
              balcony or garden window. Tap any image to explore the gallery.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-8">
          {ROOMS.map((room, i) => (
            <Reveal key={room.id} delay={i * 120}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Anchor for offers section */}
      <div id="offers" className="absolute bottom-0 left-0" aria-hidden="true" />
    </section>
  );
}
