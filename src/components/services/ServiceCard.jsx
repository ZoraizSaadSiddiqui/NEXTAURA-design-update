'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HoverLift } from '@/components/ui/animations';

const ServiceCard = ({ service, index }) => {
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
    <HoverLift>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group cursor-pointer"
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
                transition={{ delay: featureIndex * 0.1 }}
              >
                <div className={`w-2 h-2 bg-gradient-to-r ${colorMap[service.color]} rounded-full mr-3`}></div>
                {feature}
              </motion.li>
            ))}
          </ul>

          {/* Learn More Link */}
          <Link 
            href={service.href}
            className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${colorMap[service.color]} bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300 group/link`}
          >
            Learn More
            <motion.span
              className="ml-1 group-hover/link:translate-x-1 transition-transform duration-300"
            >
              <ArrowRight size={16} />
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </HoverLift>
  );
};

export default ServiceCard;