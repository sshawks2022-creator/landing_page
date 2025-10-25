"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
      <div className="text-3xl font-bold text-accent">
        {count}
        {suffix}
      </div>
      <div className="text-primary-foreground/80">{label}</div>
    </div>
  );
};

const Hero = () => {
  const router = useRouter();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-security-team-elite.jpg"
          alt="Elite security and military personnel team providing professional security services"
          fill
          priority
          quality={90}
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/50" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            {/* Logo - cropped and zoomed for stronger hero presence */}
            <div className="relative overflow-hidden drop-shadow-2xl w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <Image
                src="/logo.svg"
                alt="SS Security Agency Logo"
                fill
                className="object-cover scale-110 brightness-0 invert"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            Securing You with{" "}
            <span className="text-accent">Military Precision</span>
          </h1>

          <div className="text-xl md:text-2xl text-primary-foreground/90 font-body max-w-3xl mx-auto">
            <p>
              Led by{" "}
              <span className="font-semibold text-accent">
                Col. Subhash Sinha (Retd.)
              </span>
            </p>
            <p className="mt-2">
              Trusted by DRDO, IOCL, and top organizations nationwide.
            </p>
          </div>

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
              onClick={() => router.push("/contact")}
            >
              Book a Call
            </Button>
          </div>

          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm font-body">
            <StatItem value={31} suffix="+" label="Years Experience" />
            <StatItem value={40} suffix="+" label="Trusted Clients" />
            <StatItem value={250} suffix="+" label="Team Members" />
            <StatItem value={100} suffix="%" label="Compliance" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary to-transparent" />
    </section>
  );
};

export default Hero;
