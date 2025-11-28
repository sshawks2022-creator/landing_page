"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "SSSecurity Agency has been instrumental in securing our facilities. Their professional approach and military-grade expertise give us complete peace of mind.",
      author: "Rajesh Kumar",
      position: "Security Head, DRDO",
      rating: 5,
    },
    {
      quote:
        "The level of professionalism and dedication shown by the SSSecurity team is unmatched. They've transformed our security infrastructure completely.",
      author: "Priya Sharma",
      position: "Facility Manager, IOCL",
      rating: 5,
    },
    {
      quote:
        "Working with SSSecurity has been a game-changer. Their veteran-led approach brings discipline and reliability that we can always count on.",
      author: "Amit Patel",
      position: "Operations Director, Karnataka Govt",
      rating: 5,
    },
    {
      quote:
        "Outstanding service and commitment to excellence. SSSecurity Agency sets the standard for what professional security should look like.",
      author: "Sanjay Reddy",
      position: "Chief Security Officer",
      rating: 5,
    },
  ];

  const brandLogos = [
    { name: "DRDO", opacity: 70 },
    { name: "IOCL", opacity: 70 },
    { name: "Karnataka", opacity: 70 },
    { name: "Partner 1", opacity: 60 },
    { name: "Partner 2", opacity: 60 },
    { name: "Partner 3", opacity: 60 },
  ];

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Testimonials Carousel */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              What Our <span className="text-accent">Clients Say</span>
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
              Hear from the organizations that trust us with their security
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-6" />
          </div>

          <div className="mb-20 px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/2"
                  >
                    <div className="p-2">
                      <Card className="border-2 border-border hover:border-accent transition-all duration-300 red-glow-hover h-full">
                        <CardContent className="p-8 flex flex-col h-full">
                          <Quote className="w-12 h-12 text-accent mb-4 opacity-50" />
                          <p className="text-lg font-body text-foreground mb-6 flex-grow italic">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex items-center gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="text-accent text-xl">
                                ★
                              </span>
                            ))}
                          </div>
                          <div>
                            <p className="font-heading font-bold text-primary text-lg">
                              {testimonial.author}
                            </p>
                            <p className="text-sm font-body text-muted-foreground">
                              {testimonial.position}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" />
              <CarouselNext className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" />
            </Carousel>
          </div>

          {/* Brand Logos Carousel
          <div className="mt-16 overflow-hidden">
            <style jsx>{`
              @keyframes infinite-scroll {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-50%);
                }
              }
              .animate-infinite-scroll {
                animation: infinite-scroll 30s linear infinite;
              }
              .animate-infinite-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="flex gap-2 md:gap-4 animate-infinite-scroll">
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <div key={index} className="flex-shrink-0 w-48 md:w-56">
                  <div className="flex items-center justify-center h-24 bg-muted rounded-lg border border-border hover:border-accent transition-all duration-300 group">
                    <div
                      className={`text-xl md:text-2xl font-heading font-bold text-primary/${brand.opacity} group-hover:text-primary transition-colors`}
                    >
                      {brand.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


