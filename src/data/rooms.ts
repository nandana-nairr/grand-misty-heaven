/**
 * Room inventory for Grand Misty Heaven.
 * Each room now includes an `images` array for the gallery carousel.
 */

export type Room = {
  id: string;
  name: string;
  subtitle: string;
  pricePerNight: number;
  originalPrice?: number;
  shortDescription: string;
  longDescription: string;
  image: string;
  images: string[];
  size: string;
  sleeps: number;
  features: string[];
  highlight?: string;
};

export const ROOMS: Room[] = [
  {
    id: 'king-balcony',
    name: 'King Room with Balcony',
    subtitle: 'Room No. 602 · Top Floor',
    pricePerNight: 1999,
    originalPrice: 2351,
    shortDescription:
      'A private balcony opens to layered ridgelines and morning mist — the room our returning guests ask for by number.',
    longDescription:
      'Our most-loved room sits on the top floor with a wide balcony overlooking the valley. Wake to soft fog rinsing the hills gold, brew Coorg coffee at the kettle, and watch the day open from a place that feels carved out of the mountain itself.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=1600&q=80',
    ],
    size: '32 m²',
    sleeps: 2,
    features: ['Private Balcony', 'Panoramic Valley View', 'King Bed', 'Workspace', 'Tea & Coffee Setup', '24-Hour Hot Water'],
    highlight: 'Most Loved',
  },
  {
    id: 'standard-king',
    name: 'Standard King Room',
    subtitle: 'Ground Floor · Easy Access',
    pricePerNight: 1599,
    originalPrice: 1792,
    shortDescription: 'A grounded, accessible king room for those who prefer the quiet of low floors and a step-free entry.',
    longDescription: 'Step in, set down your bag, breathe. The Standard King is our ground-floor room — quiet, spacious, with a garden-side window.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80',
    ],
    size: '28 m²',
    sleeps: 2,
    features: ['Ground Floor', 'King Bed', 'Garden-Side Window', 'Step-Free Entry', 'In-Room Dining', '24-Hour Hot Water'],
  },
  {
    id: 'deluxe-family',
    name: 'Deluxe Family Room',
    subtitle: 'Sleeps 4 · Twin Setup',
    pricePerNight: 2799,
    originalPrice: 3199,
    shortDescription: 'A larger room set for families or small groups — one king bed, one queen, and space to spread out.',
    longDescription: 'For travellers arriving with parents or kids in tow. Comfortable enough for four, with a small seating corner, generous bathroom, and valley-side outlook.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1587985064135-0366536eab42?auto=format&fit=crop&w=1600&q=80',
    ],
    size: '42 m²',
    sleeps: 4,
    features: ['Sleeps Up to 4', 'King + Queen Beds', 'Seating Corner', 'Larger Bathroom', 'Tea & Coffee Setup', 'Daily Housekeeping'],
    highlight: 'Best for Families',
  },
];
