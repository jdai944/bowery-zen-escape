import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const Location = () => {
  return (
    <section className="py-24 bg-muted" id="location">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Manhattan's Lower East Side
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardHeader className="bg-secondary/50">
              <CardTitle className="text-3xl text-center">Bowery Day Spa</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        86 Bowery<br />
                        New York, NY 10013
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <a 
                        href="tel:+12125551234" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (212) 555-1234
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Sunday</p>
                        <p className="font-medium">10:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2991745984567!2d-73.9979284!3d40.7156347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598bb32e00a7%3A0x6e50e43c14b47d21!2s86%20Bowery%2C%20New%20York%2C%20NY%2010013!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bowery Day Spa Location"
                  />
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="default" size="lg" asChild>
                  <a href="tel:+12125551234">
                    <Phone className="mr-2 h-5 w-5" />
                    Call to Book
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;
