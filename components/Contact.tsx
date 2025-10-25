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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
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
                        Branch Office: B202, Nipuna Heritage, Virupakshapura, Bangalore, Karnataka, 560097
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

              <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                <h4 className="font-heading font-bold text-xl mb-3">
                  24/7 Emergency Response
                </h4>
                <p className="font-body text-primary-foreground/90">
                  For immediate security concerns or emergencies, our response
                  team is available round the clock to assist you.
                </p>
                <div className="pt-4">
                  <a
                    href="https://calendly.com/sshawks2022/60min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold">
                      Schedule a Quick Meet
                    </Button>
                  </a>
                </div>
              </div>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;


