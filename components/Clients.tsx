"use client";

import Image from "next/image";
import { Building2 } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const StatItem = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const { count, ref } = useCountUp({ end: value, duration: 2500 });

  return (
    <div ref={ref as any} className="flex flex-col items-center">
      <div className="text-3xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-foreground/80 font-body">{label}</div>
    </div>
  );
};

const Clients = () => {
  const clients = [
    {
      name: "DRDO",
      description: "Defence Research & Development Organisation",
      imageSrc: "/drdo.jpg",
    },
    {
      name: "IOCL",
      description: "Indian Oil Corporation Limited",
      imageSrc: "/service-industrial-corporate.jpg",
    },
    {
      name: "Government of Karnataka",
      description: "State Government of Karnataka",
      imageSrc: "/kargov.jpg",
    },
  ];

  return (
    <section id="clients" className="bg-muted py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Trusted by{" "}
              <span className="text-accent">Leading Organizations</span>
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
              We secure India's most critical infrastructure and organizations
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-6" />
          </div>

          {/* Additional Stats Grid with Count-Up Animation */}
          <div className=" pt-12 pb-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            <StatItem value={2} suffix="+" label="Years Established" />
            <StatItem value={250} suffix="+" label="Team Members" />
            <StatItem value={100} suffix="%" label="Satisfaction" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border-2 border-border hover:border-accent transition-all duration-300 text-center group red-glow-hover animate-zoom-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {client.imageSrc ? (
                  <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md">
                    <Image
                      src={client.imageSrc}
                      alt={`${client.name} visual`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                ) : (
                  <Building2 className="w-16 h-16 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                )}
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  {client.name}
                </h3>
                <p className="text-muted-foreground font-body">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
