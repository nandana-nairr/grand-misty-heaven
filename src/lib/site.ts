/**
 * Site-wide constants for Grand Misty Heaven.
 * All hotel info lives here. Edit this file to change phone number,
 * address, or social links across the entire site.
 */

export const SITE = {
  name: 'Grand Misty Heaven',
  tagline: 'A boutique sanctuary above the clouds',
  shortName: 'GMH',
  established: '2020',

  // Contact
  phone: '+91 94828 07848',
  phoneDigits: '919482807848', // for tel: and wa.me links (no +, no spaces)
  email: 'stay@grandmistyheaven.in', // placeholder — replace with real email

  // Address
  addressLine1: 'Biligeri Junction, Mekeri',
  addressLine2: 'Madikeri-Virajpet Road',
  city: 'Madikeri',
  state: 'Karnataka',
  pincode: '571201',
  country: 'India',

  // Social ratings
  rating: 4.7,
  reviewCount: 1689,

  // Key landmarks (distance for SEO + location section)
  landmarks: [
    { name: 'Madikeri Fort', distance: '5.3 km' },
    { name: 'Raja Seat Sunset Point', distance: '5.7 km' },
    { name: 'Abbi Falls', distance: '11 km' },
    { name: 'Kannur International Airport', distance: '84 km' },
  ],

  // Social (placeholder — fill in real handles)
  social: {
    instagram: 'https://instagram.com/grandmistyheaven',
    facebook: 'https://facebook.com/grandmistyheaven',
    google: 'https://www.google.com/maps/search/?api=1&query=Grand+Misty+Heaven+Madikeri',
  },
} as const;

/** Convenience: pre-built tel: and WhatsApp links */
export const CONTACT_LINKS = {
  tel: `tel:${SITE.phone.replace(/\s/g, '')}`,
  whatsapp: `https://wa.me/${SITE.phoneDigits}?text=${encodeURIComponent(
    `Hi! I'd like to book a stay at ${SITE.name}. Could you share availability and rates?`
  )}`,
  maps: SITE.social.google,
} as const;
