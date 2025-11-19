import {
  Shield,
  Factory,
  Clock,
  Calendar,
  FileText,
  UserCheck,
  Building2,
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  icon: typeof Shield;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  additionalInfo?: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "professional-security-guards",
    icon: Shield,
    title: "Professional Security Guards",
    shortDescription:
      "Highly trained and certified security personnel providing round-the-clock protection for your premises with professional vigilance and disciplined conduct.",
    description:
      "Our professional security guards are the backbone of your security infrastructure. Trained with military precision and certified under DGR, PASARA, and Labour Department regulations, our security personnel bring unmatched discipline, vigilance, and professionalism to protect your assets, personnel, and operations 24/7.",
    image: "/service-security-guards.jpg",
    features: [
      "DGR, PASARA & Labour Department certified personnel",
      "Background verified and trained security professionals",
      "Round-the-clock surveillance and monitoring",
      "Regular patrols and access control management",
      "Incident reporting and documentation",
      "Emergency response and crisis management",
      "Professional appearance and conduct standards",
      "Regular training and skill enhancement programs",
    ],
    benefits: [
      "Immediate on-site security presence",
      "Deterrent effect on potential threats",
      "Quick response to security incidents",
      "Professional handling of visitors and access control",
      "Peace of mind with trained personnel",
      "Compliance with statutory security requirements",
    ],
    useCases: [
      "Corporate offices and business centers",
      "Residential complexes and gated communities",
      "Educational institutions",
      "Healthcare facilities",
      "Retail stores and shopping malls",
      "Warehouses and storage facilities",
    ],
  },
  {
    slug: "industrial-corporate-security",
    icon: Factory,
    title: "Industrial & Corporate Security Solutions",
    shortDescription:
      "Comprehensive security infrastructure for industrial facilities and corporate offices, ensuring complete protection of assets, personnel, and operations.",
    description:
      "Comprehensive security solutions designed specifically for industrial facilities and corporate environments. We understand the unique security challenges faced by manufacturing units, corporate offices, and industrial complexes. Our integrated approach combines physical security, access control, surveillance, and emergency response protocols tailored to your industry requirements.",
    image: "/service-industrial-corporate.jpg",
    features: [
      "Perimeter security and access control systems",
      "Multi-layer security protocols",
      "Asset protection and inventory security",
      "Employee safety and visitor management",
      "Integration with existing security infrastructure",
      "Customized security protocols per industry",
      "Regular security audits and assessments",
      "Compliance with industrial safety standards",
    ],
    benefits: [
      "Protection of critical assets and infrastructure",
      "Reduced risk of theft, vandalism, and unauthorized access",
      "Enhanced employee safety and confidence",
      "Compliance with regulatory requirements",
      "Minimized operational disruptions",
      "Scalable solutions for growing businesses",
    ],
    useCases: [
      "Manufacturing and production facilities",
      "IT parks and corporate campuses",
      "Pharmaceutical and chemical industries",
      "Automotive and engineering units",
      "Food processing and packaging facilities",
      "Data centers and server facilities",
    ],
  },
  {
    slug: "monitoring-247-support",
    icon: Clock,
    title: "24/7 Monitoring & On-site Support",
    shortDescription:
      "Continuous surveillance and immediate response capabilities with dedicated monitoring centers and on-ground security teams working around the clock.",
    description:
      "Round-the-clock security monitoring and on-site support services ensuring your premises are protected at all times. Our dedicated monitoring centers work in coordination with on-ground security teams to provide immediate response to any security situation, day or night, throughout the year.",
    image: "/service-monitoring-247.jpg",
    features: [
      "24/7 surveillance and monitoring operations",
      "Dedicated control room with trained operators",
      "Real-time incident detection and response",
      "On-ground security teams on standby",
      "Rapid response to emergencies",
      "Continuous communication and coordination",
      "Regular patrols and security checks",
      "Integration with electronic security systems",
    ],
    benefits: [
      "Uninterrupted security coverage",
      "Immediate response to security threats",
      "Reduced response time to incidents",
      "Continuous monitoring of critical areas",
      "Peace of mind with always-on security",
      "Proactive threat detection and prevention",
    ],
    useCases: [
      "Critical infrastructure facilities",
      "High-value asset protection",
      "Round-the-clock operations facilities",
      "Remote or isolated locations",
      "Event venues during events",
      "Construction sites and project locations",
    ],
  },
  {
    slug: "electronic-security-systems",
    icon: FileText,
    title: "Electronic Security Systems",
    shortDescription:
      "Integrated electronic surveillance including CCTV, access control, intrusion alarms, and remote monitoring backed by rapid response.",
    description:
      "State-of-the-art electronic security systems that provide comprehensive surveillance and access control. Our integrated solutions combine CCTV monitoring, access control systems, intrusion detection alarms, and remote monitoring capabilities, all backed by rapid response teams ready to act on any alert.",
    image: "/service-surveillance.jpg",
    features: [
      "HD CCTV surveillance systems with remote access",
      "Access control and biometric systems",
      "Intrusion detection and alarm systems",
      "Motion sensors and perimeter protection",
      "Remote monitoring and mobile alerts",
      "Video analytics and AI-powered detection",
      "Integration with physical security teams",
      "Regular maintenance and system updates",
    ],
    benefits: [
      "24/7 automated surveillance",
      "Remote monitoring capabilities",
      "Detailed incident documentation",
      "Reduced false alarms with smart detection",
      "Scalable and expandable systems",
      "Integration with existing infrastructure",
    ],
    useCases: [
      "Retail stores and showrooms",
      "Office buildings and corporate facilities",
      "Residential complexes",
      "Parking areas and garages",
      "Warehouses and storage facilities",
      "Educational institutions",
    ],
  },
  {
    slug: "event-security-management",
    icon: Calendar,
    title: "Event Security Management",
    shortDescription:
      "Expert crowd control and security coordination for events of all sizes, ensuring safe and smooth execution with professional event security protocols.",
    description:
      "Comprehensive event security management services for events of all scales - from corporate gatherings and conferences to large public events and celebrations. Our experienced team ensures safe and smooth event execution with professional crowd control, access management, and emergency response protocols.",
    image: "/service-event-security.jpg",
    features: [
      "Pre-event security assessment and planning",
      "Crowd control and management",
      "Access control and VIP protection",
      "Emergency response and medical support coordination",
      "Traffic and parking management",
      "Coordination with local authorities",
      "Real-time monitoring and incident response",
      "Post-event security review and reporting",
    ],
    benefits: [
      "Safe and secure event execution",
      "Professional crowd management",
      "Quick response to any incidents",
      "Compliance with event safety regulations",
      "Enhanced attendee experience",
      "Protection of event assets and participants",
    ],
    useCases: [
      "Corporate events and conferences",
      "Weddings and private celebrations",
      "Concerts and entertainment events",
      "Sports events and tournaments",
      "Exhibitions and trade shows",
      "Religious and cultural gatherings",
    ],
  },
  {
    slug: "fire-safety-disaster-management",
    icon: FileText,
    title: "Fire Safety & Disaster Management",
    shortDescription:
      "End-to-end fire safety audits, evacuation planning, mock drills, and disaster response coordination aligned with industry standards.",
    description:
      "Comprehensive fire safety and disaster management services ensuring your facility is prepared for emergencies. We conduct thorough fire safety audits, develop evacuation plans, organize mock drills, and coordinate disaster response protocols in alignment with industry standards and regulatory requirements.",
    image: "/service-fire-safety.jpg",
    features: [
      "Fire safety audits and risk assessments",
      "Evacuation plan development and implementation",
      "Regular mock drills and training programs",
      "Fire safety equipment inspection and maintenance",
      "Disaster response coordination",
      "Emergency response team training",
      "Compliance with fire safety regulations",
      "Documentation and certification support",
    ],
    benefits: [
      "Reduced fire and disaster risks",
      "Compliance with safety regulations",
      "Prepared workforce for emergencies",
      "Minimized damage in case of incidents",
      "Insurance compliance and documentation",
      "Enhanced safety culture in organization",
    ],
    useCases: [
      "Industrial facilities and factories",
      "Commercial buildings and offices",
      "Educational institutions",
      "Healthcare facilities",
      "Residential complexes",
      "Hotels and hospitality venues",
    ],
  },
  {
    slug: "customized-security-plans",
    icon: FileText,
    title: "Customized Security Plans",
    shortDescription:
      "Tailored security strategies designed specifically for your unique requirements, combining risk assessment with practical implementation roadmaps.",
    description:
      "Every facility has unique security requirements. Our customized security plans are developed through comprehensive risk assessments, understanding your specific needs, and creating tailored security strategies with practical implementation roadmaps. We work closely with you to design solutions that fit your budget, operations, and security objectives.",
    image: "/service-customized-plans.jpg",
    features: [
      "Comprehensive security risk assessment",
      "Customized security strategy development",
      "Budget-optimized security solutions",
      "Implementation roadmap and timeline",
      "Regular review and plan updates",
      "Integration with existing operations",
      "Scalable solutions for future growth",
      "Performance metrics and reporting",
    ],
    benefits: [
      "Solutions tailored to your specific needs",
      "Optimal use of security budget",
      "Aligned with your operational requirements",
      "Flexible and scalable approach",
      "Regular optimization and improvements",
      "Measurable security outcomes",
    ],
    useCases: [
      "New facility security planning",
      "Security system upgrades",
      "Multi-location security coordination",
      "Special project security requirements",
      "Seasonal or temporary security needs",
      "Industry-specific security solutions",
    ],
  },
  {
    slug: "vip-executive-protection",
    icon: UserCheck,
    title: "VIP & Executive Protection",
    shortDescription:
      "Elite close protection services for high-profile individuals and executives, delivered by specially trained security professionals with military precision.",
    description:
      "Elite close protection services for high-profile individuals, executives, and dignitaries. Our VIP protection teams consist of specially trained security professionals with military backgrounds, providing discreet, professional, and highly effective personal security services with precision and attention to detail.",
    image: "/service-vip-protection.jpg",
    features: [
      "Specially trained close protection officers",
      "Advance security planning and route reconnaissance",
      "Discreet and professional protection",
      "Threat assessment and risk mitigation",
      "Travel security and logistics coordination",
      "Residential and office security",
      "Event security for VIP appearances",
      "24/7 protection services available",
    ],
    benefits: [
      "Personalized security for high-profile individuals",
      "Discreet and professional service",
      "Peace of mind for executives and families",
      "Expert threat assessment and mitigation",
      "Seamless integration with daily activities",
      "Military-grade protection standards",
    ],
    useCases: [
      "Corporate executives and CEOs",
      "High-net-worth individuals",
      "Celebrities and public figures",
      "Diplomatic personnel",
      "Event speakers and guests of honor",
      "Family protection services",
    ],
  },
  {
    slug: "facility-management",
    icon: Building2,
    title: "Facility Management",
    shortDescription:
      "Operations support, housekeeping oversight, and on-ground coordination to maintain safe, efficient, and secure facilities.",
    description:
      "Comprehensive facility management services that go beyond security. We provide operations support, housekeeping oversight, and on-ground coordination to maintain safe, efficient, and secure facilities. Our integrated approach ensures your facility operates smoothly while maintaining the highest standards of cleanliness, safety, and security.",
    image: "/service-facility-management.jpg",
    features: [
      "Housekeeping and maintenance oversight",
      "Facility operations coordination",
      "Vendor and contractor management",
      "Waste management and disposal",
      "Utility monitoring and coordination",
      "Space management and optimization",
      "Health and safety compliance",
      "Regular facility inspections and reporting",
    ],
    benefits: [
      "Integrated facility operations",
      "Maintained facility standards",
      "Reduced operational overhead",
      "Single point of contact for facility needs",
      "Improved facility efficiency",
      "Compliance with health and safety standards",
    ],
    useCases: [
      "Office buildings and corporate facilities",
      "Residential complexes",
      "Educational institutions",
      "Healthcare facilities",
      "Shopping malls and retail centers",
      "Industrial facilities",
    ],
  },
  {
    slug: "compliance-documentation",
    icon: FileText,
    title: "Compliance Documentation",
    shortDescription:
      "Government regulations compliance, statutory documentation, and audit readiness with proper record-keeping and verifications.",
    description:
      "Comprehensive compliance and documentation services ensuring your security operations meet all regulatory requirements. We handle statutory documentation, maintain proper records, and ensure audit readiness for government regulations, industry standards, and certification requirements related to security services.",
    image: "/compliance-trust.jpg",
    features: [
      "Statutory documentation and record-keeping",
      "DGR, PASARA, and Labour Department compliance",
      "Audit preparation and support",
      "License and certification management",
      "Employee documentation and verification",
      "Regular compliance reviews and updates",
      "Regulatory filing and submissions",
      "Compliance training and awareness",
    ],
    benefits: [
      "Full regulatory compliance",
      "Reduced compliance risks",
      "Audit-ready documentation",
      "Proper record-keeping and verification",
      "Avoidance of penalties and fines",
      "Professional compliance management",
    ],
    useCases: [
      "Security service providers",
      "Facilities requiring security compliance",
      "Government contract requirements",
      "Industry-specific compliance needs",
      "Certification and audit requirements",
      "Regulatory filing and documentation",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}

