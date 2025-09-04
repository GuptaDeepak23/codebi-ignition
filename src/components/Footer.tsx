import { Facebook, Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { name: "Home", href: "/", isRoute: true, isHome: true },
    { name: "Services", href: "/#services", isRoute: true },
    { name: "Portfolio", href: "/#portfolio", isRoute: true },
    { name: "Blogs", href: "/blogs", isRoute: true },
    { name: "Contact Us", href: "/#contact", isRoute: true },
  ];

  const services = [
    "Web Development",
    "App Development", 
    "Digital Marketing",
    "SEO Services",
    "WordPress Development",
    "Graphic Designing",
    "Automation Solutions",
    "Product Development",
  ];

  const handleNavigation = (link: { href: string; isRoute: boolean; isHome?: boolean }) => {
    if (link.isRoute) {
      if (link.isHome) {
        // Handle Home link specially - navigate to home and scroll to top
        if (location.pathname !== '/') {
          navigate('/');
        } else {
          // Already on home page, just scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (link.href.includes('#')) {
        // Handle anchor links
        if (location.pathname !== '/') {
          // Not on home page, navigate to home first
          navigate('/');
          // Wait for navigation then scroll with retry mechanism
          setTimeout(() => {
            scrollToSectionWithRetry(link.href.split('#')[1]);
          }, 300);
        } else {
          // Already on home page, just scroll with retry mechanism
          scrollToSectionWithRetry(link.href.split('#')[1]);
        }
      } else {
        // Direct route navigation
        navigate(link.href);
      }
    } else {
      // Direct section scrolling (fallback)
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Helper function to scroll to section with retry mechanism
  const scrollToSectionWithRetry = (sectionId: string, maxRetries: number = 10) => {
    const element = document.querySelector(`#${sectionId}`);
    console.log('Looking for section:', sectionId, 'Found:', element);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (maxRetries > 0) {
      // Retry after a short delay
      setTimeout(() => {
        scrollToSectionWithRetry(sectionId, maxRetries - 1);
      }, 100);
    } else {
      console.log('Section not found after all retries:', sectionId);
    }
  };

  return (
    <footer className="bg-white text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
                         <div className="flex items-center mb-6 animate-scale-in">
               <div className="text-3xl font-bold hover-scale">
                 Code<span className="text-accent">Bi</span>
               </div>
             </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              We build AI agents using n8n workflows, create stunning websites, and implement SEO strategies that actually grow your business.
            </p>
                         <div className="flex space-x-4">
              
               <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors hover-scale hover-glow">
                 <Linkedin className="w-5 h-5" />
               </a>
               <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors hover-scale hover-glow">
                 <Instagram className="w-5 h-5" />
               </a>
              
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavigation({ href: "/#services", isRoute: true })}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">info@codebi.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">Global Remote Team</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <button
                onClick={() => handleNavigation({ href: "/#contact", isRoute: true })}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} CodeBi. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </button>
          
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;