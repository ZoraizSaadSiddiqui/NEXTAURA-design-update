'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/animations';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: MapPin,
      title: 'Our Office',
      content: '123 Tech Street, Innovation District\nSan Francisco, CA 94105',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      color: 'green',
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@savacytech.com',
      color: 'purple',
      link: 'mailto:info@savacytech.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM',
      color: 'orange'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      content: 'Available 24/7 for urgent inquiries',
      color: 'red'
    }
  ];

  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    red: 'bg-red-100 text-red-600'
  };

  return (
    <div className="space-y-8">
      <FadeIn>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Start a Conversation</h2>
          <p className="text-gray-600 leading-relaxed">
            We're here to help you bring your ideas to life. Get in touch with us through any of the following methods, and our team will respond promptly.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer>
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <StaggerItem key={method.title}>
              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-start space-x-4 p-4 rounded-2xl border border-gray-200 hover:border-${method.color}-200 transition-all duration-300 group cursor-pointer`}
                onClick={() => method.link && window.open(method.link, '_blank')}
              >
                <div className={`w-12 h-12 ${colorMap[method.color]} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{method.content}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>

      {/* Social Links */}
      <FadeIn delay={0.6}>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 shadow-sm hover:shadow-md border border-gray-200"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Emergency Support */}
      <FadeIn delay={0.8}>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-red-900 mb-2">Emergency Support</h3>
          <p className="text-red-700 text-sm mb-3">
            For urgent technical issues affecting your live systems
          </p>
          <a 
            href="tel:+15551234567"
            className="text-red-600 font-semibold hover:text-red-700 text-lg"
          >
            +1 (555) 123-HELP
          </a>
        </div>
      </FadeIn>
    </div>
  );
};

export default ContactInfo;