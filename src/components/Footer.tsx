import { SITE, CONTACT_LINKS } from '@/lib/site';
import {
  MountainIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  InstagramIcon,
  FacebookIcon,
  GoogleIcon,
  WhatsAppIcon,
} from '@/components/icons';

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream pt-20 pb-10 px-5 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-cream/10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <MountainIcon className="w-4 h-4 text-ink" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-[18px] tracking-wide-2 uppercase">
                  Grand Misty
                </div>
                <div className="text-[10px] tracking-wide-3 uppercase text-cream/60">
                  Heaven · Coorg
                </div>
              </div>
            </div>
            <p className="text-cream/55 text-[14px] leading-relaxed max-w-sm">
              A small boutique homestay on the Madikeri–Virajpet Road, run by
              people who actually live here. Family-friendly, valley-facing, and
              quietly beautiful.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={SITE.social.instagram} label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </SocialLink>
              <SocialLink href={SITE.social.facebook} label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </SocialLink>
              <SocialLink href={SITE.social.google} label="Google Maps">
                <GoogleIcon className="w-4 h-4" />
              </SocialLink>
              <SocialLink href={CONTACT_LINKS.whatsapp} label="WhatsApp">
                <WhatsAppIcon className="w-4 h-4" />
              </SocialLink>
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-wide-3 uppercase text-gold mb-5">
              Visit
            </div>
            <address className="text-[14px] leading-relaxed text-cream/75 not-italic">
              <span className="flex items-start gap-2 mb-2">
                <MapPinIcon className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  {SITE.addressLine1}
                  <br />
                  {SITE.addressLine2}
                  <br />
                  {SITE.city}, {SITE.state} {SITE.pincode}
                  <br />
                  {SITE.country}
                </span>
              </span>
            </address>
          </div>

          {/* Reach */}
          <div className="md:col-span-2">
            <div className="text-[10px] tracking-wide-3 uppercase text-gold mb-5">
              Reach
            </div>
            <ul className="space-y-3 text-[14px] text-cream/75">
              <li>
                <a
                  href={CONTACT_LINKS.tel}
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <PhoneIcon className="w-3.5 h-3.5" /> {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 hover:text-gold transition-colors break-all"
                >
                  <MailIcon className="w-3.5 h-3.5 flex-shrink-0" />{' '}
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="w-3.5 h-3.5" /> 24-hour Front Desk
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <div className="text-[10px] tracking-wide-3 uppercase text-gold mb-5">
              Explore
            </div>
            <ul className="space-y-3 text-[14px] text-cream/75">
              <li>
                <a href="#rooms" className="hover:text-gold transition-colors">
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className="hover:text-gold transition-colors"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-cream/45 text-[11px] tracking-wider">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <span className="hover:text-cream/70 cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="hover:text-cream/70 cursor-pointer transition-colors">
              Cancellation Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-cream/20 hover:border-gold hover:bg-gold/10 hover:text-gold flex items-center justify-center transition-all duration-300"
    >
      {children}
    </a>
  );
}
