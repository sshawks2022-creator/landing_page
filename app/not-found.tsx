import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-8">
        {/* Logo - White version for dark background */}
        <Image
          src="/logo.svg"
          alt="SS Security Agency Logo"
          width={192}
          height={192}
          className="brightness-0 invert drop-shadow-2xl w-40 h-40 md:w-48 md:h-48 mx-auto"
        />

        <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary-foreground">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent">
          Page Not Found
        </h2>

        <p className="text-xl text-primary-foreground/80 font-body">
          The security perimeter you're looking for doesn't exist. Let us escort
          you back to safety.
        </p>

        <div className="pt-8">
          <Link href="/">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg px-8 py-6 red-glow-hover"
            >
              <Home className="mr-2 w-5 h-5" />
              Return to Home Base
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
