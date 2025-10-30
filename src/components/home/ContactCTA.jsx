'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import Button from '../ui/buttons';
import { FadeIn, SlideInUp, StaggerContainer, StaggerItem } from '@/components/ui/animations';

const ContactCTA = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team in real-time',
      action: 'Start Chat',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone Call',
      description: 'Speak directly with our experts',
      action: 'Call Now',
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your project details',
      action: 'Send Email',
      color: 'purple'
    }
  ];

  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600'
  };

  return (
    <section className="py-20 bg-blue-900  relative overflow-hidden">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Start Your <span className="gradient-text">Project?</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Let's discuss your ideas and how we can help bring them to life. Get in touch for a free consultation and project estimate.
            </motion.p>
          </div>
        </FadeIn>

        {/* Contact Methods */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <StaggerItem key={method.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-500 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorMap[method.color]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-blue-100 mb-6">{method.description}</p>
                  
                  <Button
                    href="/contact"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900 w-full"
                  >
                    {method.action}
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Main CTA */}
        <SlideInUp>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Get Free Consultation
              </h3>
              <p className="text-blue-100 mb-6">
                Schedule a 30-minute call with our experts to discuss your project requirements and get a detailed proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/contact"
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 border-white"
                >
                  Schedule Call
                </Button>
                <Button 
                  href="/services"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </SlideInUp>

        {/* Trust Indicators */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>No upfront costs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>24-48 hour response</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>100% satisfaction guaranteed</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactCTA;