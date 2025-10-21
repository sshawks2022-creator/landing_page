import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Shield, ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import securityTeam from "@/assets/security-team.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${securityTeam})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Geometric Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 border-2 border-primary-foreground rotate-45" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-primary-foreground rotate-12" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full">
          <div className="text-center space-y-8 fade-in-up">
            {/* Shield Icon with Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                <Shield className="relative h-24 w-24 text-accent drop-shadow-[0_0_25px_rgba(198,40,40,0.5)]" />
              </div>
            </div>

            {/* Error Code */}
            <div className="space-y-4">
              <h1 className="text-[12rem] md:text-[16rem] font-heading font-bold text-primary-foreground leading-none tracking-tighter">
                404
              </h1>
              <div className="h-1 w-24 bg-accent mx-auto" />
            </div>

            {/* Message */}
            <div className="space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                Page Not Found
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                The page you are looking for doesn't exist or has been moved. 
                Please check the URL or return to the homepage.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 red-glow-hover font-semibold min-w-[200px]"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold min-w-[200px]"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Contact Support
                </Button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="pt-12">
              <p className="text-primary-foreground/60 text-sm mb-4 font-semibold tracking-wider uppercase">
                Quick Navigation
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70">
                <a href="/#about" className="hover:text-accent transition-colors duration-300 text-sm">
                  About Us
                </a>
                <a href="/#services" className="hover:text-accent transition-colors duration-300 text-sm">
                  Services
                </a>
                <a href="/#testimonials" className="hover:text-accent transition-colors duration-300 text-sm">
                  Testimonials
                </a>
                <a href="/contact" className="hover:text-accent transition-colors duration-300 text-sm">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
