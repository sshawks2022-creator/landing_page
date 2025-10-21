import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Shield, AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import securityGuard from "@/assets/security-guard.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${securityGuard})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-secondary" />
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-2xl text-center space-y-8 fade-in-up">
          {/* Alert Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <Shield className="h-24 w-24 text-accent animate-pulse" />
              <AlertTriangle className="h-12 w-12 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Error Code */}
          <div>
            <h1 className="text-8xl md:text-9xl font-heading font-bold text-primary-foreground mb-2">
              404
            </h1>
            <div className="h-1 w-32 bg-accent mx-auto mb-6" />
          </div>

          {/* Humorous Security-Themed Message */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
              🚨 SECURITY BREACH DETECTED 🚨
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-lg mx-auto">
              Our surveillance systems have detected an unauthorized attempt to access a restricted area.
            </p>
            <p className="text-base md:text-lg text-primary-foreground/80 italic">
              "This page is under tighter security than a military base. Not even our guards can find it!"
            </p>
          </div>

          {/* Security Report */}
          <div className="bg-card/10 backdrop-blur-sm border border-accent/30 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-accent font-semibold mb-3 flex items-center justify-center gap-2">
              <Shield className="h-5 w-5" />
              INCIDENT REPORT
            </h3>
            <div className="text-primary-foreground/80 text-sm space-y-2">
              <p><strong>Code:</strong> PAGE_NOT_FOUND</p>
              <p><strong>Location:</strong> {location.pathname}</p>
              <p><strong>Status:</strong> Access Denied</p>
              <p><strong>Recommendation:</strong> Return to safe zone immediately</p>
            </div>
          </div>

          {/* Return Button */}
          <div className="pt-4">
            <Link to="/">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 red-glow-hover font-semibold"
              >
                <Home className="mr-2 h-5 w-5" />
                Return to Security HQ
              </Button>
            </Link>
          </div>

          {/* Footer Note */}
          <p className="text-primary-foreground/60 text-sm">
            Don't worry, we won't report this to management... this time. 😉
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
