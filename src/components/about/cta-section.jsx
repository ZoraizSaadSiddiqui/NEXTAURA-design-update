'use client';

import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import Button from '../ui/buttons';
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-12 lg:p-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
             
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Work With Us?
                </h2>
              
              
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Let's build something amazing together. Get in touch to start your project and discover how our expertise can drive your business forward.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Calendar, text: 'Free 30-minute consultation' },
                    { icon: MessageCircle, text: 'Detailed project proposal' },
                    { icon: Phone, text: 'Ongoing support and maintenance' }
                  ].map((item, index) => (
                    <div
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <item.icon size={16} className="text-white" />
                      </div>
                      <span className="text-blue-100">{item.text}</span>
                    </div>
                  ))}
                </div>
            </div>

            {/* Right Content */}
            <div className="p-12 lg:p-16">
             
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Start Your Project Today
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Fill out our project inquiry form and we'll get back to you within 24 hours with a comprehensive proposal and timeline.
                </p>

                <div className="space-y-4">
                  <Button 
                    href="/contact"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 justify-center"
                  >
                    Start Your Project
                  </Button>
                  
                  <Button 
                    href="/services"
                    variant="outline"
                    size="lg"
                    className="w-full justify-center"
                  >
                    Explore Our Services
                  </Button>
                </div>

              {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center text-gray-600">
                    <p className="mb-2">Prefer to talk directly?</p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
                      <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-700 font-semibold">
                        +1 (555) 123-4567
                      </a>
                      <a href="mailto:info@savacytech.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                        info@savacytech.com
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
          <div className="text-center mt-12">
            <p className="text-gray-500 mb-6">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['TechCorp', 'InnovateLabs', 'DigitalPlus', 'FutureSystems', 'NextGen'].map((company, index) => (
                <div
                  key={company}
                  
                  className="text-gray-400 font-semibold text-lg"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default CTASection;