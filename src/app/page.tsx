import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RoomsSection from '@/components/RoomsSection';
import Offers from '@/components/Offers';
import AmenitiesSection from '@/components/AmenitiesSection';
import DirectBooking from '@/components/DirectBooking';
import Testimonials from '@/components/Testimonials';
import NearbyPlaces from '@/components/NearbyPlaces';
import MapSection from '@/components/MapSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <RoomsSection />
      <Offers />
      <AmenitiesSection />
      <DirectBooking />
      <Testimonials />
      <NearbyPlaces />
      <MapSection />
      <AboutSection />
      <CTASection />
      <Footer />
      {/* Fixed floating elements */}
      <WhatsAppButton />
    </main>
  );
}
