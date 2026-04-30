import About from '@/components/About';
import Amenities from '@/components/Amenities';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Rooms from '@/components/Rooms';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <CallToAction />
      <Footer />
    </main>
  );
}
