"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Users, Trophy, Clock, Star } from "lucide-react";
import Button from "../ui/buttons";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animations";

const AboutPreview = () => {
  const stats = [
    { icon: Trophy, number: "200+", label: "Projects Completed" },
    { icon: Users, number: "50+", label: "Happy Clients" },
    { icon: Clock, number: "5+", label: "Years Experience" },
    { icon: Star, number: "15+", label: "Team Members" },
  ];

  const features = [
    "5+ Years Industry Experience",
    "Cutting-edge Technology Stack",
    "Agile Development Methodology",
    "24/7 Support & Maintenance",
    "Competitive Pricing",
    "Quality Assurance",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <SlideInLeft>
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Choose{" "}
                <span className="gradient-text">Savacy Technologies?</span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                With over 5 years of experience in the digital space, we've
                helped numerous businesses transform their ideas into successful
                digital products. Our team of experts is dedicated to delivering
                solutions that drive real results.
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                We believe in building long-term partnerships with our clients,
                providing ongoing support and continuously optimizing solutions
                to meet evolving business needs.
              </motion.p>

              {/* Features List */}
              <StaggerContainer>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <StaggerItem key={feature}>
                      <motion.div
                        className="flex items-center space-x-3"
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle
                          size={20}
                          className="text-green-500 flex-shrink-0"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Button href="/about" size="lg">
                  Learn More About Us
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Get In Touch
                </Button>
              </motion.div>
            </div>
          </SlideInLeft>

          {/* Right Content - Stats */}
          <SlideInRight>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <stat.icon size={48} className="text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Technology Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative mt-12 bg-blue-900 rounded-2xl p-8 text-white overflow-hidden"
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

              <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                Our Technology Stack
              </h3>

              <div className="flex flex-wrap justify-center gap-3 relative z-10">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "MongoDB",
                  "AWS",
                  "Docker",
                  "Figma",
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
