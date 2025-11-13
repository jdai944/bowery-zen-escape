import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const BOOKING_URL = "https://book.squareup.com/appointments/813p4r368kg8c4/location/LF7KHBJJQJA4V/services?rwg_token=ACgRB3feSVO4x-bINHB9R-Xc5aquUDqRn0sO-E3ut8NydAStK5SuInxyOyv_UYgUdmo7-_8OwWMgk7CRTJWlw5CpiWmDfy6QgHDalT3vYnQUZfe8TjYf_6w%3D";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show confirmation toast
    toast({
      title: "Redirecting to booking...",
      description: "You'll be taken to our secure booking system.",
    });

    // Redirect to Square booking page
    setTimeout(() => {
      window.open(BOOKING_URL, "_blank");
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-muted/30" id="booking">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Book Your Appointment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to relax? Fill out the form below and we'll direct you to our booking system
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card 
            className="overflow-hidden"
            style={{
              background: 'var(--gradient-card)',
            }}
          >
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Schedule Your Visit
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-base">
                <Clock className="w-4 h-4" />
                Available 7 days a week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let us know if you have any special requests or preferences..."
                    className="bg-background min-h-[120px]"
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto"
                    variant="hero"
                  >
                    Continue to Booking
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    * Required fields. You'll be directed to our secure booking system to select your preferred date and time.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;
