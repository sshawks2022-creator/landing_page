import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "SSSecurity Agency | Military-Grade Security Services by Colonel(Dr) Subhash Sinha, Veteran",
  description:
    "Professional security services with military precision. Led by Colonel(Dr) Subhash Sinha, Veteran with 31+ years experience. Trusted by DRDO, IOCL & Fortune 500 companies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SSSecurity Agency | Military-Grade Security Services",
    description:
      "Professional security services with military precision. Led by Colonel(Dr) Subhash Sinha, Veteran - 31+ years experience.",
    url: "/",
    images: [
      {
        url: "/hero-security-team-elite.png",
        width: 1200,
        height: 630,
        alt: "SSSecurity Agency - Military-grade services",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Clients />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
