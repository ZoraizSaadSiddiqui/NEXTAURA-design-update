'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Play, Users, Target, Zap, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/button';
import { FadeIn, SlideInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '@/components/ui/animations';

const ServiceDetail = ({ service }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <FadeIn>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {service.title}
            </motion.h1>
          </FadeIn>
          
          <SlideInUp delay={0.2}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </SlideInUp>

          <SlideInUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact"
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 border-white"
              >
                Start Your Project
              </Button>
              <Button 
                href="/services"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                View All Services
              </Button>
            </div>
          </SlideInUp>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our {service.title} Service</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.longDescription}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We combine technical expertise with creative design to deliver solutions that not only meet but exceed your business objectives, driving growth and creating exceptional user experiences.
                </p>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="relative">
                {/* Service Image Placeholder */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-400 opacity-50">
                    {service.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                
                {/* Stats overlay */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Users, value: '50+', label: 'Projects' },
                      { icon: Target, value: '98%', label: 'Success Rate' },
                      { icon: Zap, value: '24/7', label: 'Support' },
                      { icon: CheckCircle, value: '100%', label: 'Satisfaction' }
                    ].map((stat, index) => (
                      <div key={stat.label} className="text-center">
                        <stat.icon size={20} className="text-blue-600 mx-auto mb-1" />
                        <div className="font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive features designed to meet your business needs and exceed expectations
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, index) => (
                <StaggerItem key={feature}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={24} className="text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{feature}</h3>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with modern, proven technologies to deliver robust and scalable solutions
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach that ensures quality, transparency, and successful project delivery
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <StaggerItem key={step.step}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.step}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Case Studies Section */}
      {service.caseStudies && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  See how we've helped businesses achieve their goals with our {service.title} services
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-200 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                  <div className="text-lg font-semibold text-blue-600 mb-4">{caseStudy.result}</div>
                  <p className="text-gray-600 leading-relaxed">{caseStudy.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          </FadeIn>
          
          <SlideInUp delay={0.2}>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and how we can help bring your vision to life with our {service.title} services.
            </p>
          </SlideInUp>

          <SlideInUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 border-white"
              >
                Get Free Consultation
              </Button>
              <Button 
                href="/services"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                View All Services
              </Button>
            </div>
          </SlideInUp>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;