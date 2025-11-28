"use client";

import Image from "next/image";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-secondary text-primary-foreground py-16 border-t-2 border-accent/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                {/* Logo - subtle cropped and zoomed for visual emphasis */}
                <div className="relative w-28 h-28 overflow-hidden">
                  <Image
                    src="/logofinal.svg"
                    alt="SSSecurity Agency Logo"
                    fill
                    className="object-cover scale-110 brightness-0 invert"
                  />
                </div>
                <span className="font-heading font-bold text-2xl">
                  SSSecurity Agency
                </span>
              </div>
              <p className="text-primary-foreground/80 font-body text-base leading-relaxed max-w-md">
                Veteran-led security solutions with military precision. Trusted
                by government and corporate sectors across India.
              </p>
              <div className="pt-4">
                <p className="text-accent font-body italic text-lg font-semibold">
                  "Strength in Security, Trust in Service"
                </p>
              </div>
              <div className="pt-6">
                <h4 className="font-heading font-bold text-lg mb-3">
                  Certifications & Registrations
                </h4>
                <ul className="text-primary-foreground/80 font-body text-sm space-y-1">
                  <li>
                    <span className="font-semibold">
                      DGR, Ministry of Defence
                    </span>{" "}
                    (Regn No. DGR(O)/2079701082022)
                  </li>
                  <li>
                    <span className="font-semibold">
                      Government of Karnataka, Department of Labour
                    </span>{" "}
                    (Regn. No. 32/79/CE/0036/2022 dt 13/12/2022)
                  </li>
                  <li>
                    <span className="font-semibold">GST</span>: 29ABIPM1357P1Z0
                  </li>
                  <li>
                    <span className="font-semibold">PASARA</span>: Ser No.
                    PSA/L/KA/2023/APR/3/553
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-heading font-bold text-xl mb-6 text-primary-foreground">
                Quick Links
              </h3>
              <div className="flex flex-wrap gap-6 font-body">
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-primary-foreground hover:text-accent transition-all"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-primary-foreground hover:text-accent transition-all"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-primary-foreground hover:text-accent transition-all"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-heading font-bold text-xl mb-6 text-primary-foreground">
                Our Socials
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-foreground/10 rounded-lg text-primary-foreground/80 hover:text-accent hover:bg-accent/10 transition-all hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-foreground/10 rounded-lg text-primary-foreground/80 hover:text-accent hover:bg-accent/10 transition-all hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-foreground/10 rounded-lg text-primary-foreground/80 hover:text-accent hover:bg-accent/10 transition-all hover:scale-110"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-foreground/10 rounded-lg text-primary-foreground/80 hover:text-accent hover:bg-accent/10 transition-all hover:scale-110"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/60 font-body text-sm">
                © 2025 SSSecurity Agency. All rights reserved.
              </p>
              <p className="text-primary-foreground/70 font-body text-sm font-semibold">
                Founded by Colonel(Dr) Subhash Sinha, Veteran
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
