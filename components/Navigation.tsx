"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Clients", href: "#clients" },
  ];

  const handleNavigation = (href: string) => {
    if (pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    } else {
      router.push("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg py-2" : "bg-primary/95 py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          {/* Logo - 1:1 cropped with subtle zoom for better visibility */}
          <div className="relative w-16 h-16 overflow-hidden">
            <Image
              src="/logo.svg"
              alt="SS Security Agency Logo"
              fill
              className="object-cover scale-110 brightness-0 invert"
              priority
            />
          </div>
          <span className="font-heading font-bold text-primary-foreground text-xl hidden sm:block">
            SS Security Agency
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigation(link.href)}
              className="text-primary-foreground hover:text-accent transition-colors duration-300 font-body font-medium relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <a
            href="https://calendly.com/sssecurityagency/book-a-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold animate-pulse-red"
            >
              Book a Call
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-accent/20">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigation(link.href)}
                className="text-primary-foreground hover:text-accent transition-colors duration-300 font-body font-medium text-left py-2"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://calendly.com/sssecurityagency/book-a-call"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button
                variant="default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold w-full"
              >
                Book a Call
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
