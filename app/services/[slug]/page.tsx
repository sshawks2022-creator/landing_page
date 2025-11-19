import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found | SS Security Agency",
    };
  }

  return {
    title: `${service.title} | SS Security Agency`,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | SS Security Agency`,
      description: service.shortDescription,
      url: `/services/${service.slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-secondary text-primary-foreground py-24">
          <div className="container mx-auto px-4">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors duration-300 mb-12 font-body"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-4 bg-accent/20 rounded-lg">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-heading font-bold">
                    {service.title}
                  </h1>
                </div>
                <div className="w-24 h-1 bg-accent mx-auto mb-8" />
                <p className="text-xl font-body text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Image */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="relative h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-secondary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Key <span className="text-accent">Features</span>
                </h2>
                <div className="w-24 h-1 bg-accent mx-auto" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-primary rounded-lg border-l-4 border-accent hover:shadow-[0_0_20px_rgba(198,40,40,0.3)] transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-primary-foreground/90 font-body text-lg leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Key <span className="text-accent">Benefits</span>
                </h2>
                <div className="w-24 h-1 bg-accent mx-auto" />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-6 bg-secondary rounded-lg border border-accent/20 hover:border-accent hover:shadow-[0_0_30px_rgba(198,40,40,0.3)] transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mb-4" />
                    <p className="text-primary-foreground/90 font-body leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-secondary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Ideal <span className="text-accent">For</span>
                </h2>
                <div className="w-24 h-1 bg-accent mx-auto" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-primary rounded-lg border-l-4 border-accent hover:shadow-[0_0_20px_rgba(198,40,40,0.3)] transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-primary-foreground/90 font-body leading-relaxed">
                      {useCase}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        {service.additionalInfo && (
          <section className="py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-secondary border-l-4 border-accent p-8 rounded-r-lg">
                  <h2 className="text-2xl font-heading font-bold mb-4 text-accent">
                    Additional Information
                  </h2>
                  <p className="text-primary-foreground/90 font-body leading-relaxed">
                    {service.additionalInfo}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-primary border-2 border-accent/30 rounded-3xl p-12 md:p-20 text-center space-y-8 animate-fade-in-up shadow-2xl">
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight">
                    Ready to Secure Your <span className="text-accent">Facility?</span>
                  </h2>
                  <p className="text-xl font-body text-primary-foreground/90 max-w-3xl mx-auto">
                    Get in touch with us to discuss how we can customize our{" "}
                    {service.title.toLowerCase()} services for your specific needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg px-10 py-7 red-glow-hover group"
                      >
                        Contact Us
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <a
                      href="https://calendly.com/sssecurityagency-info/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body font-semibold text-lg px-10 py-7"
                      >
                        Book a Call
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

