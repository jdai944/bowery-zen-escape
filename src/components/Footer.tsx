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
            <a href="tel:+12125551234" className="hover:text-background transition-colors">
              (212) 555-1234
            </a>
          </p>
          <p className="text-sm text-background/60 pt-4">
            © {new Date().getFullYear()} Bowery Day Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
