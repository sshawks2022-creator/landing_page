"use client";

import Image from "next/image";
import {
  Shield,
  Factory,
  Clock,
  Calendar,
  FileText,
  UserCheck,
  Building2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Professional Security Guards",
      description:
        "Highly trained and certified security personnel providing round-the-clock protection for your premises with professional vigilance and disciplined conduct.",
      image: "/service-security-guards.jpg",
    },
    {
      icon: Factory,
      title: "Industrial & Corporate Security Solutions",
      description:
        "Comprehensive security infrastructure for industrial facilities and corporate offices, ensuring complete protection of assets, personnel, and operations.",
      image: "/service-industrial-corporate.jpg",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring & On-site Support",
      description:
        "Continuous surveillance and immediate response capabilities with dedicated monitoring centers and on-ground security teams working around the clock.",
      image: "/service-monitoring-247.jpg",
    },
    {
      icon: Calendar,
      title: "Event Security Management",
      description:
        "Expert crowd control and security coordination for events of all sizes, ensuring safe and smooth execution with professional event security protocols.",
      image: "/service-event-security.jpg",
    },
    {
      icon: FileText,
      title: "Customized Security Plans",
      description:
        "Tailored security strategies designed specifically for your unique requirements, combining risk assessment with practical implementation roadmaps.",
      image: "/service-customized-plans.jpg",
    },
    {
      icon: UserCheck,
      title: "VIP & Executive Protection",
      description:
        "Elite close protection services for high-profile individuals and executives, delivered by specially trained security professionals with military precision.",
      image: "/service-vip-protection.jpg",
    },
    {
      icon: Building2,
      title: "Facility & Compliance Support",
      description:
        "Complete facility management services ensuring regulatory compliance, safety standards, and maintaining secure, well-managed operational environments.",
      image: "/service-facility-compliance.jpg",
    },
  ];

  return (
    <section id="services" className="bg-primary text-primary-foreground py-24">
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
            return (
              <Card
                key={index}
                className="group overflow-hidden border-accent/20 hover:border-accent transition-all duration-300 bg-secondary hover:shadow-[0_0_30px_rgba(198,40,40,0.3)] animate-zoom-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-3 text-primary-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/80 font-body leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;


