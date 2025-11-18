import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const bodyWork = [
    { duration: "60 mins", price: "$55" },
    { duration: "90 mins", price: "$80" },
    { duration: "45 mins", price: "$50" },
    { duration: "30 mins", price: "$35" },
  ];

  const footRub = [
    { duration: "60 mins", price: "$45" },
    { duration: "45 mins", price: "$40" },
    { duration: "30 mins", price: "$30" },
    { duration: "15 mins", price: "$15" },
  ];

  const combos = [
    { description: "Body 30 mins + Foot 30 mins", price: "$60" },
    { description: "Body 60 mins + Foot 15 mins", price: "$70" },
    { description: "Body 60 mins + Foot 30 mins", price: "$80" },
  ];

  const addOns = [
    { name: "Essential / Herb Oil", price: "$10" },
    { name: "CBD Oil", price: "$10" },
    { name: "Hot Stone", price: "$10" },
    { name: "Cupping", price: "$20" },
    { name: "Guasha", price: "$20" },
  ];

  const specials = [
    { 
      description: "60 mins Body + 15 mins Foot", 
      alternatives: "45 mins Body + 30 mins Head/Foot • 45 mins Body + 30 mins Head/Hand",
      price: "$65" 
    },
    { description: "45 mins Foot + 15 mins Chair", price: "$50" },
  ];

  return (
    <section className="py-20 bg-secondary/20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Pricing & Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Affordable luxury for your wellness journey
          </p>
        </div>

        {/* Specials Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <Badge className="text-lg px-4 py-2 bg-primary text-primary-foreground">
              Special Offers
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specials.map((special, index) => (
              <Card key={index} className="bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-lg">{special.description}</p>
                    <span className="text-3xl font-bold text-primary">{special.price}</span>
                  </div>
                  {special.alternatives && (
                    <p className="text-sm text-muted-foreground mt-2">{special.alternatives}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Body Work */}
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Body Work</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {bodyWork.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground">{item.duration}</span>
                  <span className="text-xl font-semibold">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Foot Rub */}
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Foot Rub</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {footRub.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground">{item.duration}</span>
                  <span className="text-xl font-semibold">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Combo Packages */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Body & Foot Combo</CardTitle>
              <CardDescription className="text-center">Combine services for the ultimate relaxation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {combos.map((combo, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground">{combo.description}</span>
                  <span className="text-xl font-semibold">{combo.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Add-On Services */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Add-On Services</CardTitle>
              <CardDescription className="text-center">Enhance your massage experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {addOns.map((addon, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground">{addon.name}</span>
                  <span className="text-xl font-semibold">{addon.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
