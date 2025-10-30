'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/siteConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const serviceLinks = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'App Development', href: '/services/app-development' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 xl:col-span-1"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ST</span>
              </div>
              <span className="text-xl font-bold">Savacy Technologies</span>
            </div>
            
            <p className="text-gray-400 text-base leading-relaxed">
              Transforming ideas into digital reality through innovative technology solutions. 
              We create experiences that drive growth and innovation.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"
          >
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                  Services
                </h3>
                <ul className="space-y-3">
                  {serviceLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-base text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-base text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    123 Tech Street<br />
                    San Francisco, CA 94105
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">info@savacytech.com</span>
                </div>
              </div>
            </div>
          </motion.div>  
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              &copy; {currentYear} {siteConfig.companyName}. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;