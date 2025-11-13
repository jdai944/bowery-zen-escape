import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spa.jpg";
import { Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Bowery Day Spa
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
          Experience tranquility in the heart of New York City
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" asChild>
            <a href="tel:+16469228324">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Appointment
            </a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="#location">
              <MapPin className="mr-2 h-5 w-5" />
              Visit Us
            </a>
          </Button>
        </div>
        <div className="flex flex-col items-center gap-2 text-sm md:text-base">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            86 Bowery, New York NY 10013
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
