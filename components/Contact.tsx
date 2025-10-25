"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7acfacb5-1298-4de6-ae0d-4cf49ce05805",
          subject: "New Inquiry from SS Security Agency Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          from_name: "SS Security Agency Website",
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "Submission failed",
          description: "Please try again in a moment.",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please check your connection and retry.",
      });
    }
  };

  return (
    <section id="contact" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Contact <span className="text-accent">Us</span>
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
              Let's secure your business with military precision
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-primary mb-1">
                        Phone
                      </div>
                      <div className="text-muted-foreground font-body">
                        +91 7004708779
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-primary mb-1">
                        Email
                      </div>
                      <div className="text-muted-foreground font-body">
                        info@sssecurityagency.in
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-primary mb-1">
                        Location
                      </div>
                      <div className="text-muted-foreground font-body">
                        Branch Office: B202, Nipuna Heritage, Virupakshapura,
                        Bangalore, Karnataka, 560097
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border mt-4">
                    <iframe
                      title="Branch Office Location"
                      src="https://www.google.com/maps?q=B202%2C%20Nipuna%20Heritage%2C%20Virupakshapura%2C%20Bangalore%2C%20Karnataka%2C%20560097&output=embed"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Removed emergency copy as requested */}
            </div>

            <div className="animate-slide-in-right">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-card p-8 rounded-lg shadow-lg border-2 border-border"
              >
                <div>
                  <label className="block text-sm font-heading font-semibold text-primary mb-2">
                    Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="focus-visible:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-primary mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="focus-visible:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-primary mb-2">
                    Phone *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="focus-visible:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-primary mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="min-h-32 focus-visible:ring-accent"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg py-6 red-glow-hover"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Centered Online Meet CTA - styled similar to homepage CTA */}
          <div className="mt-12 flex justify-center">
            <div className="relative bg-gradient-to-br from-primary/95 to-primary border-2 border-accent/30 rounded-3xl p-12 md:p-20 text-center space-y-8 animate-fade-in-up shadow-2xl max-w-3xl w-full">
              <div className="absolute inset-0 opacity-5 rounded-3xl">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
                  }}
                />
              </div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                  Let's talk
                </h3>
                <p className="text-lg md:text-xl text-primary-foreground/90 font-body mb-6">
                  Connect with us over an online meet and let's see what
                  services we can offer to protect you.
                </p>
                <a
                  href="https://calendly.com/sshawks2022/60min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg px-10 py-7 red-glow-hover"
                  >
                    Start an Online Meet
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
