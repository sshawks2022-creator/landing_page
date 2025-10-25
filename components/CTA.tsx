"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const router = useRouter();

  return (
    <section className="bg-background py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Bordered Card */}
          <div className="relative bg-gradient-to-br from-primary/95 to-primary border-2 border-accent/30 rounded-3xl p-12 md:p-20 text-center space-y-8 animate-fade-in-up shadow-2xl">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 rounded-3xl">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
                }}
              />
            </div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight">
              We secure every <br></br> {" "}
                <span className="text-accent">moment that matters</span>
              </h2>

              <p className="text-xl md:text-2xl text-primary-foreground/90 font-body max-w-3xl mx-auto">
              Connect with Us and Take Control of Your Security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg px-10 py-7 red-glow-hover group"
                  onClick={() => router.push("/contact")}
                >
                  Contact us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;


