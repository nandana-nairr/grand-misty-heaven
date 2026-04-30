import { ROOMS } from '@/lib/data';
import Reveal from './Reveal';
import RoomCard from './RoomCard';

export default function Rooms() {
  return (
    <section id="rooms" className="relative py-24 md:py-32 bg-sand">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20 gap-6">
          <div>
            <Reveal>
              <div className="eyebrow mb-5">
                <span>Stay With Us</span>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="heading-lg text-charcoal max-w-2xl">
                Three rooms.
                <br />
                <span className="italic font-light">
                  One unforgettable view.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <p className="text-charcoal/65 max-w-sm leading-relaxed text-[15px]">
              Each room is hand-finished in warm wood and white linen, with a
              private balcony or garden window. Choose the one that pulls you
              in.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {ROOMS.map((room, i) => (
            <Reveal key={room.id} delay={i * 120}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
