import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-pulse animate-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-accent rounded-full animate-pulse delay-1000 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full animate-pulse delay-500 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-accent rounded-full animate-pulse delay-1500 animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-60 right-1/4 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1.2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 mt-2 rounded-full text-sm font-medium animate-bounce-in">
            <Sparkles className="w-4 h-4 animate-float" />
            <span>AI-Powered Digital Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-up">
            <span className="text-reveal">
              <span>AI-Powered</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Digital Marketing
              </span>
              <br />
              <span>& Web Solutions</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-2">
            We build AI agents using n8n workflows, create stunning websites, and implement SEO strategies 
            that actually grow your business. Transform your digital presence today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-stagger-3">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold group btn-animate hover-lift"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="px-8 py-3 text-lg font-semibold border-accent text-accent hover:bg-accent hover:text-accent-foreground btn-animate hover-lift"
            >
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border animate-fade-in-up animate-stagger-4">
            <div className="text-center hover-scale">
              <div className="text-3xl md:text-4xl font-bold text-foreground">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center hover-scale">
              <div className="text-3xl md:text-4xl font-bold text-foreground">25+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center hover-scale">
              <div className="text-3xl md:text-4xl font-bold text-foreground">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center hover-scale">
              <div className="text-3xl md:text-4xl font-bold text-foreground">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;