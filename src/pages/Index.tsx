import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Reviews />
      <Booking />
      <Location />
      <Footer />
    </main>
  );
};

export default Index;
