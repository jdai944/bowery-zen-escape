import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Booking = () => {
  const BOOKING_URL = "https://book.squareup.com/appointments/813p4r368kg8c4/location/LF7KHBJJQJA4V/services?rwg_token=ACgRB3feSVO4x-bINHB9R-Xc5aquUDqRn0sO-E3ut8NydAStK5SuInxyOyv_UYgUdmo7-_8OwWMgk7CRTJWlw5CpiWmDfy6QgHDalT3vYnQUZfe8TjYf_6w%3D";

  return (
    <section className="py-24 bg-muted/30" id="booking">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Book Your Appointment
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to experience tranquility? Book your spa appointment online now.
            </p>
          </div>
          
          <Button 
            variant="hero" 
            size="lg"
            asChild
            className="text-lg px-8 py-6"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Appointment
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Available 7 days a week | Walk-ins welcome
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
