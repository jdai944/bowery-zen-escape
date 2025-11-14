import { Instagram, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Bowery Day Spa</h3>
          <p className="text-background/80">
            86 Bowery, New York NY 10013
          </p>
          <p className="text-background/80">
            <a href="tel:+16469228324" className="hover:text-background transition-colors">
              (646) 922-8324
            </a>
          </p>
          
          <div className="flex justify-center gap-4 pt-4">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background/10 hover:bg-background/20 p-3 rounded-full transition-colors"
              aria-label="Visit our Yelp page"
            >
              <Star className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background/10 hover:bg-background/20 p-3 rounded-full transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          
          <p className="text-sm text-background/60 pt-4">
            © {new Date().getFullYear()} Bowery Day Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
