import { HOTEL } from '@/lib/data';
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  MountainIcon,
  PhoneIcon,
} from './Icons';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-20 pb-10 px-5 md:px-10">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-cream/10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brass flex items-center justify-center">
                <MountainIcon className="w-4 h-4 text-charcoal" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-[18px] tracking-[0.18em] uppercase">
                  {HOTEL.shortName}
                </div>
                <div className="text-[10px] tracking-[0.32em] uppercase text-cream/60">
                  Heaven · Coorg
                </div>
              </div>
            </div>
            <p className="text-cream/55 text-[14px] leading-relaxed max-w-sm">
              A small boutique homestay on the Madikeri–Virajpet Road, run by
              people who actually live here.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={HOTEL.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-cream/70 hover:bg-brass hover:border-brass hover:text-charcoal transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={HOTEL.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-cream/70 hover:bg-brass hover:border-brass hover:text-charcoal transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.32em] uppercase text-brass mb-5">
              Visit
            </div>
            <p className="text-[14px] leading-relaxed text-cream/75 flex items-start gap-2">
              <MapPinIcon className="w-4 h-4 text-brass mt-0.5 flex-shrink-0" />
              <span>
                {HOTEL.address.line1}
                <br />
                {HOTEL.address.line2}
                <br />
                {HOTEL.address.line3}
              </span>
            </p>
          </div>

          {/* Reach */}
          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.32em] uppercase text-brass mb-5">
              Reach
            </div>
            <ul className="space-y-3 text-[14px] text-cream/75">
              <li>
                <a
                  href={`tel:${HOTEL.phone}`}
                  className="flex items-center gap-2 hover:text-brass transition-colors"
                >
                  <PhoneIcon className="w-3.5 h-3.5" /> {HOTEL.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${HOTEL.email}`}
                  className="flex items-center gap-2 hover:text-brass transition-colors break-all"
                >
                  <MailIcon className="w-3.5 h-3.5 flex-shrink-0" />{' '}
                  {HOTEL.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="w-3.5 h-3.5" /> 24-hour Front Desk
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.32em] uppercase text-brass mb-5">
              Explore
            </div>
            <ul className="space-y-3 text-[14px] text-cream/75">
              <li>
                <a
                  href="#rooms"
                  className="hover:text-brass transition-colors"
                >
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className="hover:text-brass transition-colors"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-brass transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brass transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-cream/45 text-[11px] tracking-wider">
          <span>© {new Date().getFullYear()} {HOTEL.name}. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cancellation Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
