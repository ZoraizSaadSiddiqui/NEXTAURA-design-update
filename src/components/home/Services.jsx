"use client";
import Link from "next/link";
// import Button from "../ui/buttons";
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
  SlideInLeft,
  SlideInRight,
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
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
      ],
      color: "blue",
      href: "/components/webdevelopment",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["React Native", "Flutter", "App Store Deployment"],
      color: "green",
      href: "/services/app-development",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design that creates engaging, intuitive, and beautiful digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping"],
      color: "purple",
      href: "/services/ui-ux-design",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to grow your online presence and drive business growth.",
      features: ["SEO", "Social Media", "Content Strategy"],
      color: "orange",
      href: "/services/digital-marketing",
    },
    {
      icon: Cloud,
      title: "SaaS Development",
      description:
        "Scalable software-as-a-service solutions with cloud architecture and subscription models.",
      features: ["Cloud Architecture", "API Integration", "Security"],
      color: "indigo",
      href: "/services/saas-development",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic with proven SEO strategies.",
      features: ["Keyword Research", "Technical SEO", "Analytics"],
      color: "red",
      href: "/services/seo-optimization",
    },
    {
      icon: BarChart3,
      title: "Dashboard Development",
      description:
        "Interactive dashboards for data visualization, business intelligence, and real-time analytics.",
      features: ["Data Visualization", "Real-time Updates", "Custom Metrics"],
      color: "teal",
      href: "/services/dashboard-development",
    },
    {
      icon: Database,
      title: "Health Dashboards",
      description:
        "Specialized health monitoring dashboards with HIPAA compliance and real-time data tracking.",
      features: [
        "HIPAA Compliant",
        "Real-time Monitoring",
        "Patient Analytics",
      ],
      color: "pink",
      href: "/services/health-dashboards",
    },
  ];

  const colorMap = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    indigo: "from-indigo-500 to-indigo-600",
    red: "from-red-500 to-red-600",
    teal: "from-teal-500 to-teal-600",
    pink: "from-pink-500 to-pink-600",
  };

  return (
    <section
      id="services"
      className="relative py-20 bg-blue-900 mt-20 overflow-hidden"
    >
      {/* Dotted Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
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
              Comprehensive digital solutions to transform your business and
              drive growth in the modern landscape.
            </motion.p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <HoverLift>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group"
                  >
                    <div
                      className={`bg-gradient-to-r ${
                        colorMap[service.color]
                      } p-6 text-white relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <service.icon size={48} className="relative z-10" />
                      <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            className="flex items-center text-sm text-gray-500"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * featureIndex }}
                          >
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${
                                colorMap[service.color]
                              } rounded-full mr-3`}
                            ></div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Learn More Link */}
                      <Link
                        href={service.href}
                        className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${
                          colorMap[service.color]
                        } bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300 group/link`}
                      >
                        Learn More
                        <motion.span className="ml-1 group-hover/link:translate-x-1 transition-transform duration-300">
                          →
                        </motion.span>
                      </Link>
                    </div>
                  </motion.div>
                </HoverLift>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-16 flex justify-center items-center">
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
