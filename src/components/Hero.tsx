import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import securityTeam from "@/assets/security-team.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={securityTeam} 
          alt="Professional security team" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <Shield className="w-20 h-20 text-accent animate-pulse-red" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            Securing You with{" "}
            <span className="text-accent">Military Precision</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-body max-w-3xl mx-auto">
            Led by <span className="font-semibold text-accent">Col. Subhash Sinha (Retd.)</span>, 
            trusted by DRDO, IOCL, and top organizations nationwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg px-8 py-6 red-glow-hover"
              onClick={() => {
                const element = document.querySelector("#services");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-black hover:bg-gray-500 hover:text-white font-body font-semibold text-lg px-8 py-6"
              onClick={() => navigate("/contact")}
            >
              Book a Call
            </Button>
          </div>

          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm font-body">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent">31+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent">40+</div>
              <div className="text-primary-foreground/80">Trusted Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent">250+</div>
              <div className="text-primary-foreground/80">Team Members</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-primary-foreground/80">Compliance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary to-transparent" />
    </section>
  );
};

export default Hero;
