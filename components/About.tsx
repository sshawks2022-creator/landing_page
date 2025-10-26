"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const About = () => {
  const { count: yearsCount, ref: yearsRef } = useCountUp({
    end: 31,
    duration: 2500,
  });

  return (
    <section id="about" className="bg-secondary text-primary-foreground py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="text-accent">SS Security Agency</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg font-body leading-relaxed text-primary-foreground/90">
                Founded by a decorated Indian Army veteran, Subhash Sinha
                Security Agency combines discipline, leadership, and advanced
                technology to redefine modern security and facility management.
              </p>

              <p className="text-lg font-body leading-relaxed text-primary-foreground/90">
                We provide customized solutions for corporates, industries, and
                government sectors with a focus on trust, precision, and
                efficiency.
              </p>

              <div className="bg-primary/50 border-l-4 border-accent p-6 rounded-r-lg">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-xl font-body italic text-accent font-medium">
                  "Discipline, dedication, and protection — that's our code."
                </p>
                <p className="text-sm text-primary-foreground/70 mt-4 font-body">
                  — Col. Subhash Sinha (Veteran), Founder
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative group overflow-hidden md:overflow-visible p-3 md:p-0">
                <div className="absolute inset-0 md:-inset-4 lg:-inset-6 bg-accent/30 rounded-lg hidden md:block md:rotate-3 md:group-hover:rotate-6 md:group-hover:shadow-[0_30px_70px_rgba(198,40,40,0.5)] transition-all duration-500 pointer-events-none" />
                <div className="relative bg-primary p-5 md:p-8 rounded-lg shadow-2xl overflow-hidden group-hover:shadow-[0_25px_60px_rgba(198,40,40,0.4)] transition-all duration-500">
                  <div className="mb-6 overflow-hidden rounded-lg group-hover:shadow-[0_15px_40px_rgba(198,40,40,0.3)] transition-all duration-500 relative h-64 md:h-96">
                    <Image
                      src="/img1.webp"
                      alt="Col. Subhash Sinha (Veteran) - Founder and decorated Indian Army veteran with 31+ years of military service"
                      fill
                      className="object-cover grayscale md:group-hover:scale-110 md:group-hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-accent">
                    Leadership with Distinction
                  </h3>
                  <div className="space-y-4 font-body">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-primary-foreground/90">
                        <span
                          ref={yearsRef as any}
                          className="font-semibold text-accent"
                        >
                          {yearsCount}+ years
                        </span>{" "}
                        of military service
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-primary-foreground/90">
                        Ex-Army officer with{" "}
                        <span className="font-semibold">
                          field-tested expertise
                        </span>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-primary-foreground/90">
                        Certified under{" "}
                        <span className="font-semibold">
                          DGR, PASARA & Labour Department
                        </span>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-primary-foreground/90">
                        Certified under{" "}
                        <span className="font-semibold">
                          DGR, PASARA & Labour Department
                        </span>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-primary-foreground/90">
                        Doctorate in Management (special reference to Disaster
                        Management)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-primary-foreground/90">
                        Masters of Sociology
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-primary-foreground/90">
                        Masters of Industrial Relations and Personnel Management
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-primary-foreground/90">
                        Qualified Combat Army Helicopter Pilot
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-primary-foreground/90">
                        Expertise in Administration, Security and Safety
                        Management, Training and Personnel Management
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-primary-foreground/90">
                        Certified under{" "}
                        <span className="font-semibold">
                          DGR, PASARA & Labour Department
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
