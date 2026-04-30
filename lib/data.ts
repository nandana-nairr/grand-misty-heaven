export const HOTEL = {
  name: 'Grand Misty Heaven',
  shortName: 'Grand Misty',
  tagline: 'A boutique homestay above the clouds.',
  phone: '+919482807848',
  phoneDisplay: '+91 94828 07848',
  whatsapp: '919482807848',
  email: 'stay@grandmistyheaven.in',
  address: {
    line1: 'Biligeri Junction, Mekeri',
    line2: 'Madikeri-Virajpet Road',
    line3: 'Madikeri, Karnataka 571201',
  },
  rating: 4.7,
  reviewCount: 1689,
  established: 2020,
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
} as const;

export const WHATSAPP_BOOK_URL = `https://wa.me/${HOTEL.whatsapp}?text=${encodeURIComponent(
  "Hi! I'd like to enquire about a stay at Grand Misty Heaven."
)}`;

export type Room = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  strikePrice?: number;
  image: string;
  features: string[];
  size: string;
  sleeps: number;
  tag?: string;
};

export const ROOMS: Room[] = [
  {
    id: 'balcony',
    name: 'King Room with Balcony',
    subtitle: 'Room No. 602 · Top Floor',
    description:
      'A private balcony opens onto layered ridgelines and morning mist. Watch sunrise rinse the valley in gold while the kettle hums.',
    price: 1999,
    strikePrice: 2351,
    image:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Private Balcony',
      'Panoramic Valley View',
      'King Bed',
      'Tea & Coffee Setup',
      'Workspace',
    ],
    size: '32 m²',
    sleeps: 2,
    tag: 'Most Loved',
  },
  {
    id: 'standard',
    name: 'Standard King Room',
    subtitle: 'Ground Floor · Easy Access',
    description:
      'A grounded, accessible king room for those who prefer the quiet of low floors. Step in, set down your bag, breathe.',
    price: 1599,
    strikePrice: 1792,
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Ground Floor',
      'King Bed',
      'Garden-Side Window',
      'Step-Free Entry',
      'In-Room Dining',
    ],
    size: '28 m²',
    sleeps: 2,
  },
  {
    id: 'deluxe',
    name: 'Deluxe Twin Room',
    subtitle: 'First Floor · Forest Side',
    description:
      'Two well-spaced twin beds with a forest-facing window. Perfect for siblings, friends, or colleagues sharing a stay.',
    price: 1799,
    strikePrice: 2014,
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Twin Beds',
      'Forest Window',
      'Ample Wardrobe',
      'Reading Corner',
      'Hot Shower',
    ],
    size: '30 m²',
    sleeps: 2,
  },
];
