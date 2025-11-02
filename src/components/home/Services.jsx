"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  Database,
  Search,
  BarChart3,
  Cloud,
} from "lucide-react";
import Button from "../ui/buttons";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverLift,
} from "@/components/ui/animations";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions"],
      color: "#3B82F6", // blue
      href: "/components/webdevelopment",
      image: "/assets/webdev.jpg",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["React Native", "Flutter", "App Store Deployment"],
      color: "#10B981", // green
      href: "/services/app-development",
      image: "/assets/mbl.jpg",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design that creates engaging, intuitive, and beautiful digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping"],
      color: "#A855F7", // purple
      href: "/services/ui-ux-design",
      image: "/assets/ui.jpg",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to grow your online presence and drive business growth.",
      features: ["SEO", "Social Media", "Content Strategy"],
      color: "#F59E0B", // orange
      href: "/services/digital-marketing",
      image: "/assets/digital.jpg",
    },
    {
      icon: Cloud,
      title: "SaaS Development",
      description:
        "Scalable software-as-a-service solutions with cloud architecture and subscription models.",
      features: ["Cloud Architecture", "API Integration", "Security"],
      color: "#6366F1", // indigo
      href: "/services/saas-development",
      image: "/assets/saas.jpg",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic with proven SEO strategies.",
      features: ["Keyword Research", "Technical SEO", "Analytics"],
      color: "#EF4444", // red
      href: "/services/seo-optimization",
      image: "/assets/seo.jpg",
    },
    {
      icon: BarChart3,
      title: "Dashboard Development",
      description:
        "Interactive dashboards for data visualization, business intelligence, and real-time analytics.",
      features: ["Data Visualization", "Real-time Updates", "Custom Metrics"],
      color: "#0EA5E9", // cyan
      href: "/services/dashboard-development",
      image: "/assets/dashboard.jpg",
    },
    {
      icon: Database,
      title: "Health Dashboards",
      description:
        "Specialized health monitoring dashboards with HIPAA compliance and real-time data tracking.",
      features: ["HIPAA Compliant", "Real-time Monitoring", "Patient Analytics"],
      color: "#EC4899", // pink
      href: "/services/health-dashboards",
      image: "/assets/health.jpg",
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-blue-900 mt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our <span className="gradient-text">Services</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Comprehensive digital solutions to transform your business and drive growth.
            </motion.p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <HoverLift>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl shadow-2xl hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] flex flex-col h-[410px] overflow-hidden group transition-all duration-300"
                    >
                      {/* Image */}
                      {service.image && (
                        <div className="relative w-full h-[45%]">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover rounded-t-2xl"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-4 flex flex-col flex-1">
                        {/* Icon + Title */}
                        <div className="flex items-center mb-3 space-x-3 mt-1">
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="flex items-center justify-center"
                          >
                            <Icon
                              size={38}
                              style={{ color: service.color }}
                              className="drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                            />
                          </motion.div>
                          <h3 className="text-[18px] font-bold text-black">{service.title}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-2 leading-snug">
                          {service.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-1 mb-2">
                          {service.features.map((feature, i) => (
                            <motion.li
                              key={i}
                              custom={i}
                              variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: (i) => ({
                                  opacity: 1,
                                  x: 0,
                                  transition: { delay: i * 0.1, duration: 0.25 },
                                }),
                              }}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              className="flex items-center text-sm text-gray-500"
                            >
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>

                        {/* Learn More */}
                        <Link
                          href={service.href}
                          className="inline-flex items-center text-sm font-semibold text-gray-800 transition-colors duration-300 mt-2 hover:text-gray-600"
                        >
                          Learn More
                          <motion.span
                            className="ml-1"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.3 }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </div>
                    </motion.div>
                  </HoverLift>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-16">
            <Button href="/contact" variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
