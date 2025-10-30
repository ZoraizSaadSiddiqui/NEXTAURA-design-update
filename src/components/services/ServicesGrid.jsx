'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Database, 
  Search, 
  BarChart3, 
  Cloud,
  Shield,
  ArrowRight
} from 'lucide-react';
import Button from '@/components/ui/button';
import { FadeIn, SlideInUp, StaggerContainer, StaggerItem, HoverLift } from '@/components/ui/animations';

const ServicesGrid = () => {
  // In the services array, make sure all hrefs are correct:
const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
    features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'API Integration'],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    color: 'blue',
    href: '/services/web-development'  // Fixed href
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
    features: ['React Native', 'Flutter', 'App Store Deployment', 'Offline Capabilities'],
    technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
    color: 'green',
    href: '/services/app-development'  // Fixed href
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging, intuitive, and beautiful digital experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
    color: 'purple',
    href: '/services/ui-ux-design'  // Fixed href
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your online presence and drive business growth.',
    features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'PPC Campaigns'],
    technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp'],
    color: 'orange',
    href: '/services/digital-marketing'  // Fixed href
  },
  {
    icon: Cloud,
    title: 'SaaS Development',
    description: 'Scalable software-as-a-service solutions with cloud architecture and subscription models.',
    features: ['Cloud Architecture', 'API Integration', 'Security', 'Subscription Management'],
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    color: 'indigo',
    href: '/services/saas-development'  // Fixed href
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic with proven SEO strategies.',
    features: ['Keyword Research', 'Technical SEO', 'Content Optimization', 'Analytics'],
    technologies: ['Google Search Console', 'Ahrefs', 'Moz', 'Screaming Frog'],
    color: 'red',
    href: '/services/seo-optimization'  // Fixed href
  },
  {
    icon: BarChart3,
    title: 'Dashboard Development',
    description: 'Interactive dashboards for data visualization, business intelligence, and real-time analytics.',
    features: ['Data Visualization', 'Real-time Updates', 'Custom Metrics', 'Export Features'],
    technologies: ['D3.js', 'Chart.js', 'Tableau', 'Power BI'],
    color: 'teal',
    href: '/services/dashboard-development'  // Fixed href
  },
  {
    icon: Shield,
    title: 'Health Dashboards',
    description: 'Specialized health monitoring dashboards with HIPAA compliance and real-time data tracking.',
    features: ['HIPAA Compliant', 'Real-time Monitoring', 'Patient Analytics', 'Security'],
    technologies: ['HL7', 'FHIR', 'HIPAA', 'SSL/TLS'],
    color: 'pink',
    href: '/services/health-dashboards'  // Fixed href
  }
];

  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    indigo: 'from-indigo-500 to-indigo-600',
    red: 'from-red-500 to-red-600',
    teal: 'from-teal-500 to-teal-600',
    pink: 'from-pink-500 to-pink-600'
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <FadeIn>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="gradient-text">Services</span>
            </motion.h1>
          </FadeIn>
          
          <SlideInUp delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions to transform your business and drive growth in the modern landscape
            </p>
          </SlideInUp>

          <SlideInUp delay={0.4}>
            <Button 
              href="#services-grid"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              Explore Our Services
            </Button>
          </SlideInUp>
        </div>

        {/* Animated background elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Grid Section */}
      <section id="services-grid" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We <span className="gradient-text">Offer</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to deployment, we provide end-to-end digital solutions tailored to your business needs
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <StaggerItem key={service.title}>
                  <HoverLift>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group cursor-pointer"
                      onClick={() => window.location.href = service.href}
                    >
                      {/* Icon Header */}
                      <div className={`bg-gradient-to-r ${colorMap[service.color]} p-6 text-white relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                        <service.icon size={48} className="relative z-10" />
                        <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <motion.li 
                                key={feature}
                                className="flex items-center text-xs text-gray-500"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: featureIndex * 0.1 }}
                              >
                                <div className={`w-1.5 h-1.5 bg-gradient-to-r ${colorMap[service.color]} rounded-full mr-2`}></div>
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-1">
                            {service.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${colorMap[service.color]} text-white`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-semibold bg-gradient-to-r ${colorMap[service.color]} bg-clip-text text-transparent flex items-center group-hover:translate-x-1 transition-transform duration-300`}>
                            Learn More
                            <ArrowRight size={16} className="ml-1" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </HoverLift>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* CTA Section */}
          <FadeIn delay={0.6}>
            <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your ideas into reality with our comprehensive digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/contact"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Get Free Consultation
                </Button>
                <Button 
                  href="/about"
                  variant="outline"
                  size="lg"
                >
                  Learn About Us
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default ServicesGrid;