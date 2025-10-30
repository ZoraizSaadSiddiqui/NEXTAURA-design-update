'use client';

import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { useState } from 'react';
import { FadeIn, SlideInUp } from '@/components/ui/animations';

const AboutHero = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/about-bg.webp"
        >
          <source src="/bg-1.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-[#1A2A4F]"></div>
      </div>

      {/* Video Controls */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-300"
      >
        {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <FadeIn>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="">Story</span>
          </motion.h1>
        </FadeIn>
        
        <SlideInUp delay={0.2}>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Pioneering digital innovation and transforming businesses since 2018
          </p>
        </SlideInUp>

       
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;