import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, CheckCircle, Star, Users, Clock, Award, Code, TrendingUp, Zap, Code as CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesData = {
    "web-development": {
      title: "Web Development",
      subtitle: "Custom websites and web applications",
      description: "We create modern, responsive, and high-performance websites and web applications that drive business growth and provide exceptional user experiences.",
      icon: "🌐",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"],
      features: [
        "Responsive design for all devices",
        "SEO-optimized architecture",
        "Fast loading times and performance",
        "Secure and scalable backend",
        "Modern UI/UX design",
        "Content management systems",
        "E-commerce solutions",
        "API development and integration"
      ],
      process: [
        "Discovery & Planning",
        "Design & Prototyping",
        "Development & Testing",
        "Deployment & Launch",
        "Maintenance & Support"
      ],
      benefits: [
        "Increased online presence",
        "Better user engagement",
        "Improved conversion rates",
        "Scalable business solutions",
        "24/7 technical support"
      ],
      timeline: "4-8 weeks",
      team: "2-4 developers",
      pricing: "Starting from $5,000"
    },
    "app-development": {
      title: "App Development",
      subtitle: "Native and cross-platform mobile applications",
      description: "We develop cutting-edge mobile applications that deliver exceptional user experiences across iOS, Android, and web platforms using the latest technologies.",
      icon: "📱",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS", "GraphQL", "Redux"],
      features: [
        "Cross-platform development",
        "Native performance",
        "Offline functionality",
        "Push notifications",
        "Social media integration",
        "Payment gateway integration",
        "Analytics and tracking",
        "App store optimization"
      ],
      process: [
        "Requirements Analysis",
        "UI/UX Design",
        "Development & Testing",
        "Beta Testing",
        "App Store Submission",
        "Post-launch Support"
      ],
      benefits: [
        "Reach more customers",
        "Enhanced user engagement",
        "Increased brand loyalty",
        "Higher conversion rates",
        "Real-time user insights"
      ],
      timeline: "8-16 weeks",
      team: "3-5 developers",
      pricing: "Starting from $15,000"
    },
    "digital-marketing": {
      title: "Digital Marketing",
      subtitle: "Comprehensive digital marketing strategies",
      description: "We create data-driven digital marketing campaigns that increase brand awareness, drive traffic, and generate qualified leads for your business.",
      icon: "📈",
      technologies: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Google Analytics", "HubSpot", "Mailchimp", "Hootsuite", "Canva"],
      features: [
        "Social media marketing",
        "Pay-per-click advertising",
        "Content marketing",
        "Email marketing campaigns",
        "Influencer partnerships",
        "Video marketing",
        "Marketing automation",
        "Performance tracking"
      ],
      process: [
        "Market Research",
        "Strategy Development",
        "Campaign Creation",
        "Execution & Monitoring",
        "Performance Analysis",
        "Optimization"
      ],
      benefits: [
        "Increased brand visibility",
        "Higher website traffic",
        "More qualified leads",
        "Better ROI tracking",
        "Competitive advantage"
      ],
      timeline: "Ongoing campaigns",
      team: "2-3 marketers",
      pricing: "Starting from $2,000/month"
    },
    "seo-services": {
      title: "SEO Services",
      subtitle: "Advanced search engine optimization",
      description: "We implement comprehensive SEO strategies to improve your search rankings, increase organic traffic, and boost your online visibility.",
      icon: "🔍",
      technologies: ["Google Search Console", "Google Analytics", "SEMrush", "Ahrefs", "Yoast SEO", "Schema Markup", "Core Web Vitals", "PageSpeed Insights"],
      features: [
        "Technical SEO audit",
        "On-page optimization",
        "Content strategy",
        "Link building",
        "Local SEO",
        "E-commerce SEO",
        "Voice search optimization",
        "Mobile-first indexing"
      ],
      process: [
        "SEO Audit & Analysis",
        "Keyword Research",
        "On-page Optimization",
        "Content Creation",
        "Link Building",
        "Performance Monitoring"
      ],
      benefits: [
        "Higher search rankings",
        "Increased organic traffic",
        "Better user experience",
        "Long-term results",
        "Cost-effective marketing"
      ],
      timeline: "3-6 months for results",
      team: "2-3 SEO specialists",
      pricing: "Starting from $1,500/month"
    },
    "wordpress-development": {
      title: "WordPress Development",
      subtitle: "Custom WordPress themes and plugins",
      description: "We create custom WordPress solutions that are fast, secure, and tailored to your specific business needs with professional design and functionality.",
      icon: "⚙️",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3", "HTML5", "WooCommerce", "Elementor"],
      features: [
        "Custom theme development",
        "Plugin development",
        "E-commerce integration",
        "Performance optimization",
        "Security hardening",
        "SEO optimization",
        "Multi-language support",
        "Backup and maintenance"
      ],
      process: [
        "Requirements Gathering",
        "Design & Development",
        "Testing & QA",
        "Content Migration",
        "Launch & Training",
        "Ongoing Support"
      ],
      benefits: [
        "Easy content management",
        "SEO-friendly structure",
        "Mobile responsive design",
        "Fast loading times",
        "Regular updates and security"
      ],
      timeline: "3-6 weeks",
      team: "2-3 developers",
      pricing: "Starting from $3,000"
    },
    "graphic-designing": {
      title: "Graphic Designing",
      subtitle: "Professional graphic design services",
      description: "We create stunning visual designs that capture your brand essence and communicate your message effectively across all platforms.",
      icon: "🎨",
      technologies: ["Adobe Creative Suite", "Figma", "Canva Pro", "Sketch", "InVision", "Procreate", "Blender", "After Effects"],
      features: [
        "Logo and brand identity",
        "Marketing materials",
        "Social media graphics",
        "Print design",
        "Video and animation",
        "UI/UX design",
        "Packaging design",
        "Illustration and icons"
      ],
      process: [
        "Brief & Research",
        "Concept Development",
        "Design Creation",
        "Client Feedback",
        "Revisions & Refinement",
        "Final Delivery"
      ],
      benefits: [
        "Professional brand image",
        "Consistent visual identity",
        "Increased brand recognition",
        "Better customer engagement",
        "Competitive advantage"
      ],
      timeline: "1-3 weeks",
      team: "1-2 designers",
      pricing: "Starting from $500"
    },
    "automation-solutions": {
      title: "Automation Solutions",
      subtitle: "Email automation, RPA, and AI agents",
      description: "We build intelligent automation solutions that streamline your business processes, reduce manual work, and increase operational efficiency.",
      icon: "🤖",
      technologies: ["n8n", "Zapier", "Python", "Node.js", "OpenAI API", "LangChain", "Docker", "AWS Lambda"],
      features: [
        "Workflow automation",
        "Email marketing automation",
        "Customer service bots",
        "Data processing automation",
        "AI-powered insights",
        "Integration automation",
        "Reporting automation",
        "Process optimization"
      ],
      process: [
        "Process Analysis",
        "Automation Strategy",
        "Solution Development",
        "Testing & Deployment",
        "Training & Documentation",
        "Ongoing Optimization"
      ],
      benefits: [
        "Increased efficiency",
        "Reduced manual errors",
        "Cost savings",
        "24/7 operation",
        "Scalable solutions"
      ],
      timeline: "2-6 weeks",
      team: "2-3 developers",
      pricing: "Starting from $3,000"
    },
    "product-development": {
      title: "Product Development",
      subtitle: "End-to-end product development",
      description: "We help you bring your product ideas to life, from concept to launch, including MVP development, user testing, and scaling strategies.",
      icon: "🚀",
      technologies: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
      features: [
        "Product strategy",
        "MVP development",
        "User research",
        "Prototyping",
        "Development & testing",
        "Launch planning",
        "Growth strategies",
        "Performance optimization"
      ],
      process: [
        "Ideation & Research",
        "MVP Development",
        "User Testing",
        "Iteration & Refinement",
        "Launch & Marketing",
        "Growth & Scaling"
      ],
      benefits: [
        "Faster time to market",
        "User-validated products",
        "Reduced development risk",
        "Scalable architecture",
        "Competitive advantage"
      ],
      timeline: "12-24 weeks",
      team: "4-6 developers",
      pricing: "Starting from $25,000"
    }
  };

  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
            <Link to="/">
              <Button>Go Back Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Background decoration for all pages */}
      <div className="page-background-decoration">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-2 pb-16 bg-gradient-to-br from-accent/10 via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
           
            <div className="text-center mb-6">
              <Link to="/#services" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {service.title}
            </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {service.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-6">
              {service.description}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card rounded-lg border">
              <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{service.timeline}</div>
              <div className="text-muted-foreground">Timeline</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{service.team}</div>
              <div className="text-muted-foreground">Team Size</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <Award className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{service.pricing}</div>
              <div className="text-muted-foreground">Starting Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <div className="space-y-5">
              {/* Technologies Used */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CodeIcon className="w-5 h-5 mr-2 text-accent" />
                    Technologies We Use
                  </CardTitle>
                  <CardDescription>
                    Modern, reliable technologies that power our solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-accent" />
                    What We Deliver
                  </CardTitle>
                  <CardDescription>
                    Comprehensive features and capabilities included in our service
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-accent" />
                    Benefits for Your Business
                  </CardTitle>
                  <CardDescription>
                    How our service will help grow and improve your business
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Our Process */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-accent" />
                    Our Development Process
                  </CardTitle>
                  <CardDescription>
                    A proven methodology that ensures quality and timely delivery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{step}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-accent">Ready to Get Started?</CardTitle>
                  <CardDescription>
                    Let's discuss how we can help transform your business with our {service.title.toLowerCase()} services.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Get a free consultation and quote for your project. No commitment required.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={() => {
                        const element = document.querySelector("#contact");
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      Get Free Consultation
                    </Button>
                   
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to ensure footer is visible */}
      <div className="py-20"></div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
