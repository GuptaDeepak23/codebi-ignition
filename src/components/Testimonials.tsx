import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc",
      image: "https://images.unsplash.com/photo-1494790108755-2616b5e9af97?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      feedback: "CodeBi transformed our online presence completely. Their AI-powered marketing strategies increased our leads by 300% in just 3 months. The team is professional, responsive, and truly understands modern digital marketing.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder",
      company: "E-Commerce Plus",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      feedback: "The website and mobile app they developed for us exceeded all expectations. The user experience is fantastic, and our sales have doubled since launch. CodeBi's attention to detail and technical expertise is outstanding.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "Growth Dynamics",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      feedback: "Working with CodeBi has been a game-changer for our business. Their automation workflows saved us countless hours, and their SEO strategies helped us rank #1 for our target keywords. Highly recommended!",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-accent" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.feedback}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by 25+ companies worldwide
          </p>
          
          {/* Enhanced CodeBi Marquee - Seamless Infinite */}
          <div className="relative overflow-hidden bg-gradient-to-r from-accent/5 via-accent/15 to-accent/5 rounded-xl py-6 border border-accent/20 shadow-lg">
            <div className="marquee-container">
              <div className="marquee-track">
                {/* First set of CodeBi */}
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                
                {/* Duplicate set for seamless loop */}
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
                <span className="marquee-item text-3xl font-bold text-accent">CodeBi</span>
              </div>
            </div>
            
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;