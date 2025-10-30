'use client';

import { motion } from 'framer-motion';
import { FadeIn, SlideInUp } from '@/components/ui/animations';

const ContactHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <FadeIn>
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
        </FadeIn>
        
        <SlideInUp delay={0.2}>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Let's start the conversation and build something amazing together.
          </p>
        </SlideInUp>

        <SlideInUp delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>24-48 hour response time</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>No obligation quote</span>
            </div>
          </div>
        </SlideInUp>
      </div>

      {/* Animated elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      />
    </section>
  );
};

export default ContactHero;