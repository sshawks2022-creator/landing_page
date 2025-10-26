"use client";

import Image from "next/image";
import {
  Shield,
  Award,
  Clock,
  FileCheck,
  Target,
  CheckCircle,
  ClipboardCheck,
  Activity,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Why Choose <span className="text-accent">SS Security</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Military precision meets modern security solutions
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
            {/* Hero Leadership Image - Main Feature (Larger) */}
            <Card className="md:col-span-8 md:row-span-2 overflow-hidden border-none group animate-slide-in-left hover:shadow-[0_20px_60px_rgba(198,40,40,0.4)] transition-all duration-500">
              <div className="relative h-full min-h-[420px] md:min-h-[600px]">
                <Image
                  src="/img2.webp"
                  alt="Military veteran security leader with over 31 years of field experience in strategic security operations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="inline-block p-4 bg-accent rounded-2xl mb-5 w-fit group-hover:scale-110 group-hover:shadow-[0_10px_40px_rgba(198,40,40,0.6)] transition-all duration-300">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-bold rounded-full mb-4 w-fit">
                    MILITARY-GRADE SECURITY
                  </span>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                    Ex-Army Leadership
                  </h3>
                  <p className="text-white/95 text-xl mb-3 font-semibold">
                    31+ years of field experience
                  </p>
                  <p className="text-white/85 text-base max-w-xl leading-relaxed">
                    Led by decorated veterans with proven track records in
                    high-stakes security operations, bringing military precision
                    to corporate security
                  </p>
                </div>
              </div>
            </Card>

            {/* 24/7 Monitoring with CCTV */}
            <Card className="md:col-span-4 overflow-hidden border-none group animate-fade-in-up hover:shadow-[0_20px_60px_rgba(10,30,61,0.4)] transition-all duration-500">
              <div className="relative h-full min-h-[280px]">
                <Image
                  src="/monitoring-cctv.jpg"
                  alt="Advanced security control room with 24/7 CCTV monitoring and real-time surveillance systems"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div className="inline-block p-3 bg-accent rounded-2xl w-fit mb-4 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(198,40,40,0.5)] transition-all duration-300">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold rounded-full mb-3 w-fit">
                    ALWAYS ACTIVE
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    24/7 Monitoring
                  </h3>
                  <p className="text-white/90 text-sm">
                    Real-time CCTV surveillance with instant response
                  </p>
                </div>
              </div>
            </Card>

            {/* Fully Certified */}
            <Card className="md:col-span-4 overflow-hidden border-none group animate-slide-in-right hover:shadow-[0_15px_40px_rgba(198,40,40,0.3)] transition-all duration-300">
              <div className="relative h-full min-h-[280px]">
                <Image
                  src="/certifications-badge.jpg"
                  alt="Official security certifications including DGR, PASARA and Labour Department regulatory approvals"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div className="inline-block p-4 bg-white rounded-2xl mb-4 w-fit group-hover:scale-110 transition-all duration-300">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold rounded-full mb-3 w-fit">
                    COMPLIANT
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    Fully Certified
                  </h3>
                  <p className="text-white/90 text-sm">
                    DGR, PASARA & Labour Department approved
                  </p>
                </div>
              </div>
            </Card>

            {/* Tailored Security */}
            <Card className="md:col-span-4 overflow-hidden border-none group animate-slide-in-left hover:shadow-[0_20px_60px_rgba(10,30,61,0.4)] transition-all duration-500">
              <div className="relative h-full min-h-[280px]">
                <Image
                  src="/security-formation.jpg"
                  alt="Professional security team in tactical formation providing customized tailored security solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div className="inline-block p-3 bg-white rounded-2xl w-fit mb-4 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)] transition-all duration-300">
                    <Target className="w-7 h-7 text-accent" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-white text-accent text-xs font-bold rounded-full mb-3 w-fit">
                    PERSONALIZED
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    Tailored Security
                  </h3>
                  <p className="text-white/95 text-sm">
                    Custom plans for every client's unique needs
                  </p>
                </div>
              </div>
            </Card>

            {/* Transparent Reporting */}
            <Card className="md:col-span-4 overflow-hidden border-none group animate-fade-in-up hover:shadow-[0_15px_40px_rgba(10,30,61,0.4)] transition-all duration-300">
              <div className="relative h-full min-h-[280px]">
                <Image
                  src="/client-handshake.jpg"
                  alt="Professional handshake between security service provider and client showing transparent business partnership"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div className="inline-block p-4 bg-accent rounded-2xl mb-4 w-fit group-hover:scale-110 transition-all duration-300">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold rounded-full mb-3 w-fit">
                    FULL VISIBILITY
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    Transparent Reporting
                  </h3>
                  <p className="text-white/90 text-sm">
                    100% compliance tracking with detailed analytics
                  </p>
                </div>
              </div>
            </Card>

            {/* 100% Compliance Rate */}
            <Card className="md:col-span-4 overflow-hidden border-none group animate-fade-in-up hover:shadow-[0_20px_60px_rgba(198,40,40,0.4)] transition-all duration-500">
              <div className="relative h-full min-h-[280px]">
                <Image
                  src="/compliance-trust.jpg"
                  alt="100% compliance certification badge demonstrating quality assurance and trust standards"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div className="inline-block p-4 bg-accent rounded-2xl mb-4 w-fit group-hover:scale-110 group-hover:shadow-[0_10px_40px_rgba(198,40,40,0.6)] transition-all duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold rounded-full mb-3 w-fit">
                    EXCELLENCE
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    100% Compliance Rate
                  </h3>
                  <p className="text-white/90 text-sm">
                    Perfect track record in regulatory compliance
                  </p>
                </div>
              </div>
            </Card>

            {/* Safety Inspection & Guidance */}
            <Card className="md:col-span-6 overflow-hidden border-none group animate-fade-in-up hover:shadow-[0_20px_60px_rgba(198,40,40,0.35)] transition-all duration-500">
              <div className="relative h-full min-h-[280px]">
                <Image
                  src="/service-facility-compliance.jpg"
                  alt="On-site safety survey and risk assessment at client facility"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div className="inline-block p-3 bg-white rounded-2xl w-fit mb-4 group-hover:scale-110 transition-all duration-300">
                    <ClipboardCheck className="w-7 h-7 text-accent" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-white text-accent text-xs font-bold rounded-full mb-3 w-fit">
                    SAFETY FIRST
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    Safety Inspection & Guidance
                  </h3>
                  <p className="text-white/90 text-sm">
                    Inspections, risk assessments, and on-site guidance with
                    actionable reports
                  </p>
                </div>
              </div>
            </Card>

            {/* Proactive Actions */}
            <Card className="md:col-span-6 overflow-hidden border-none group animate-fade-in-up hover:shadow-[0_20px_60px_rgba(10,30,61,0.4)] transition-all duration-500">
              <div className="relative h-full min-h-[280px]">
                <Image
                  src="/security-team.jpg"
                  alt="Security team taking proactive actions to prevent incidents"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div className="inline-block p-3 bg-accent rounded-2xl w-fit mb-4 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(198,40,40,0.5)] transition-all duration-300">
                    <Activity className="w-7 h-7 text-white" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold rounded-full mb-3 w-fit">
                    PREVENTION
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    Proactive Actions
                  </h3>
                  <p className="text-white/90 text-sm">
                    Incident prevention through patrols, early alerts, and SOP
                    enforcement
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
