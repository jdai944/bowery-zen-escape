import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import yelpLogo from "@/assets/yelp-logo.png";

const reviews = [
  {
    name: "Sarah M.",
    platform: "Google",
    rating: 5,
    text: "Best massage I've ever had! The atmosphere is so calming and the staff is incredibly professional. I left feeling completely refreshed.",
    date: "2 weeks ago"
  },
  {
    name: "James K.",
    platform: "Yelp",
    rating: 5,
    text: "Amazing experience! The deep tissue massage was exactly what I needed. Very clean facility and great location in Chinatown.",
    date: "1 month ago"
  },
  {
    name: "Emily R.",
    platform: "Google",
    rating: 5,
    text: "I've been coming here for years and they never disappoint. The foot massage is incredible and the prices are very reasonable.",
    date: "3 weeks ago"
  },
  {
    name: "Michael T.",
    platform: "Yelp",
    rating: 5,
    text: "Fantastic spa! The therapists really know what they're doing. Great pressure and technique. Highly recommend for anyone with muscle tension.",
    date: "2 months ago"
  },
  {
    name: "Lisa P.",
    platform: "Google",
    rating: 5,
    text: "Wonderful place to unwind after a long day. The couple's massage was perfect for our anniversary. Will definitely be back!",
    date: "1 week ago"
  },
  {
    name: "David W.",
    platform: "Yelp",
    rating: 5,
    text: "Clean, professional, and relaxing. The staff is friendly and attentive. Best value for money in NYC!",
    date: "3 weeks ago"
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied clients
        </p>
        
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-3 bg-background/80 backdrop-blur-sm px-4 py-3 rounded-lg border shadow-sm w-[240px]">
            <div className="text-2xl font-bold flex">
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-bold">4.9</span>
              </div>
              <span className="text-xs text-muted-foreground">668 reviews</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-background/80 backdrop-blur-sm px-4 py-3 rounded-lg border shadow-sm w-[240px]">
            <img src={yelpLogo} alt="Yelp" className="h-8 w-auto" />
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-bold">4.9</span>
              </div>
              <span className="text-xs text-muted-foreground">44 reviews</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-6">
            {[...reviews, ...reviews].map((review, index) => (
              <Card key={index} className="flex-shrink-0 w-80 p-6 bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {review.platform}
                  </span>
                </div>
                <p className="text-sm mb-4 line-clamp-4">{review.text}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-muted-foreground">{review.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
