import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spa.jpg";
import yelpLogo from "@/assets/yelp-logo-white.png";
import { Phone, MapPin, Instagram, Calendar } from "lucide-react";

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
              Call to Book
            </a>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <a href="https://book.squareup.com/appointments/813p4r368kg8c4/location/LF7KHBJJQJA4V/services?rwg_token=ACgRB3feSVO4x-bINHB9R-Xc5aquUDqRn0sO-E3ut8NydAStK5SuInxyOyv_UYgUdmo7-_8OwWMgk7CRTJWlw5CpiWmDfy6QgHDalT3vYnQUZfe8TjYf_6w%3D" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Book Online
            </a>
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4 text-sm md:text-base">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            86 Bowery, New York NY 10013
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://www.yelp.com/biz/bowery-day-spa-new-york-2?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm"
              aria-label="Visit our Yelp page"
            >
              <img src={yelpLogo} alt="Yelp" className="h-6 w-auto brightness-0 invert" />
            </a>
            <a 
              href="https://www.instagram.com/bowerydayspa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
