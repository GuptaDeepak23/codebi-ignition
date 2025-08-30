import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Smartphone, 
  TrendingUp, 
  Search, 
  Globe, 
  Palette, 
  Zap, 
  Package 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and more.",
      featured: false,
      id: "web-development",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      featured: false,
      id: "app-development",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including social media, PPC, content marketing, and more.",
      featured: false,
      id: "digital-marketing",
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Advanced SEO strategies to improve your search rankings and drive organic traffic to your website.",
      featured: true,
      id: "seo-services",
    },
    {
      icon: Globe,
      title: "WordPress Development",
      description: "Custom WordPress themes, plugins, and full website development with professional design.",
      featured: false,
      id: "wordpress-development",
    },
    {
      icon: Palette,
      title: "Graphic Designing",
      description: "Professional graphic design services including logos, branding, videos, photos, and marketing materials.",
      featured: false,
      id: "graphic-designing",
    },
    {
      icon: Zap,
      title: "Automation Solutions",
      description: "Email automation, RPA, workflow automation, and AI agent development using n8n and other tools.",
      featured: true,
      id: "automation-solutions",
    },
    {
      icon: Package,
      title: "Product Development",
      description: "End-to-end product development from concept to launch, including MVP development and scaling.",
      featured: false,
      id: "product-development",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                onClick={() => navigate(`/service/${service.id}`)}
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:scale-105 card-hover animate-fade-in-up ${
                  service.featured 
                    ? 'ring-2 ring-accent bg-accent/5 hover:bg-accent/10' 
                    : 'hover:bg-card/80'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    service.featured 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground'
                  } transition-all duration-300 hover-scale hover-glow`}>
                    <IconComponent className="w-8 h-8 group-hover:animate-bounce" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  {service.featured && (
                    <div className="inline-block bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                      Featured
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="text-center">
                    <span className="text-accent text-sm font-medium group-hover:text-accent/80 transition-colors">
                      Click to learn more →
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animate-stagger-5">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business with our services?
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors btn-animate hover-lift"
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;