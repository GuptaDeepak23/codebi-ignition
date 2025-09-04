import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isdark , isdarkset] = useState(true);

  // const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/", isRoute: true, isHome: true },
    { name: "Services", href: "/#services", isRoute: true },
    { name: "Portfolio", href: "/#portfolio", isRoute: true },
    { name: "Blogs", href: "/blogs", isRoute: true },
    { name: "Contact Us", href: "/#contact", isRoute: true },
  ];

  const handleNavigation = (item: { href: string; isRoute: boolean; isHome?: boolean }) => {
    if (item.isRoute) {
      if (item.isHome) {
        // Handle Home link specially - navigate to home and scroll to top
        if (location.pathname !== '/') {
          navigate('/');
        } else {
          // Already on home page, just scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (item.href.includes('#')) {
        // Handle anchor links
        if (location.pathname !== '/') {
          // Not on home page, navigate to home first
          navigate('/');
          // Wait for navigation then scroll with retry mechanism
          setTimeout(() => {
            scrollToSectionWithRetry(item.href.split('#')[1]);
          }, 300);
        } else {
          // Already on home page, just scroll with retry mechanism
          scrollToSectionWithRetry(item.href.split('#')[1]);
        }
      } else {
        // Direct route navigation
        navigate(item.href);
      }
    } else {
      // Direct section scrolling (fallback)
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
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
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          
          
          
         {/* Logo */}
<div className="flex-shrink-0 animate-scale-in cursor-pointer" onClick={() => navigate("/")}>
  <div className="flex items-center">
    {resolvedTheme === "dark" ? (
      <video className="h-12 w-auto" autoPlay muted loop playsInline>
        <source src="/white.mp4" type="video/mp4" />
      </video>
    ) : (
      <video className="h-12 w-auto" autoPlay muted loop playsInline>
        <source src="/black.mp4" type="video/mp4" />
      </video>
    )}
  </div>
</div>



                     {/* Desktop Menu */}
                       <div className="hidden md:block animate-fade-in-up animate-stagger-1">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className="text-foreground hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors hover-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </button>
                ))}

              </div>
            </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="text-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;