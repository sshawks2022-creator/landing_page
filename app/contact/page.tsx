import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Request Security Services",
  description:
    "Contact SS Security Agency for professional security services. Available 24/7 for emergency response and security consultations. Led by Colonel(Dr) Subhash Sinha, Veteran.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact SS Security Agency | Request Security Services",
    description:
      "Get in touch with our team for professional security solutions. 24/7 emergency response available.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
