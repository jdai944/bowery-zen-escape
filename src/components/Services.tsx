import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import footMassageImage from "@/assets/foot-massage.jpg";
import bodyMassageImage from "@/assets/body-massage.jpg";

const Services = () => {
  const services = [
    {
      title: "Foot Massage",
      description: "Relax and rejuvenate with our signature foot massage. Experience relief from tension and improved circulation through expertly applied pressure points.",
      image: footMassageImage,
      duration: "30 min • 60 min",
    },
    {
      title: "Body Massage",
      description: "Indulge in a full-body massage designed to ease muscle tension, reduce stress, and promote overall well-being through therapeutic techniques.",
      image: bodyMassageImage,
      duration: "60 min • 90 min",
    },
  ];

  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of professional massage therapies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{
                background: 'var(--gradient-card)',
              }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {service.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
