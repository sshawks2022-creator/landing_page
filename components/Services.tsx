"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { servicesData } from "@/lib/services-data";

const Services = () => {

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
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block h-full"
              >
                <Card
                  className="group overflow-hidden border-accent/20 hover:border-accent transition-all duration-300 bg-secondary hover:shadow-[0_0_30px_rgba(198,40,40,0.3)] animate-zoom-in h-full cursor-pointer"
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
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-heading font-bold text-primary-foreground group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-primary-foreground/80 font-body leading-relaxed text-sm">
                      {service.shortDescription}
                    </p>
                    <p className="text-accent text-sm font-body font-medium mt-4 group-hover:translate-x-2 transition-transform duration-300">
                      Learn more →
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
