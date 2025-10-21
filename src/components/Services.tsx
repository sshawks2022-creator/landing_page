import { Shield, Factory, Camera, Flame, Users, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import mannedGuarding from "@/assets/service-manned-guarding.jpg";
import corporateSecurity from "@/assets/service-corporate-security.jpg";
import surveillance from "@/assets/service-surveillance.jpg";
import fireSafety from "@/assets/service-fire-safety.jpg";
import vipProtection from "@/assets/service-vip-protection.jpg";
import facilityManagement from "@/assets/service-facility-management.jpg";
const Services = () => {
  const services = [{
    icon: Shield,
    title: "Manned Guarding",
    description: "Trained guards providing 24/7 protection for industrial, corporate, and residential areas.",
    image: mannedGuarding
  }, {
    icon: Factory,
    title: "Corporate & Industrial Security",
    description: "End-to-end security for offices, factories, and logistics hubs.",
    image: corporateSecurity
  }, {
    icon: Camera,
    title: "Electronic Surveillance",
    description: "AI-powered CCTV and biometric systems for real-time threat monitoring.",
    image: surveillance
  }, {
    icon: Flame,
    title: "Fire & Disaster Management",
    description: "Emergency readiness through drills, response teams, and fire-safety systems.",
    image: fireSafety
  }, {
    icon: Users,
    title: "VIP & Executive Protection",
    description: "Elite security teams ensuring safety for executives and dignitaries.",
    image: vipProtection
  }, {
    icon: Building,
    title: "Facility & Housekeeping",
    description: "Clean, safe, and well-maintained environments through professional facility management.",
    image: facilityManagement
  }];
  return <section id="services" className="bg-primary text-primary-foreground py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl font-body text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive security solutions tailored to your needs
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
          const Icon = service.icon;
          return <Card key={index} className="group overflow-hidden border-accent/20 hover:border-accent transition-all duration-300 bg-secondary hover:shadow-[0_0_30px_rgba(198,40,40,0.3)] animate-zoom-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-3 text-primary-foreground group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/80 font-body leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>;
        })}
          </div>
      </div>
    </section>;
};
export default Services;