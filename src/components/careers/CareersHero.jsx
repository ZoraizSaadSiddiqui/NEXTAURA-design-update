'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Link from 'next/link';

import Button from '@/components/ui/button';
import { FadeIn, SlideInUp } from '@/components/ui/animations';

const CareersHero = () => {
  const scrollToJobs = () => {
    document.getElementById('jobs-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-[#1A2A4F] overflow-hidden">
      
      <div className="absolute inset-0">
        
        <div className="absolute inset-0 opacity-10 bg-[#1A2A4F] h-screen">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
       
       
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join Our <span className="">Team</span>
          </h1>
       
        
       
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Build the future with us. Explore exciting career opportunities and grow with a team that values innovation and excellence.
          </p>
       

        
          <div className="max-w-2xl mx-auto mb-8 flex justify-center w-full items-center">
            {/* Search Bar */}
            <div className="relative flex w-1/2 ">
              <input
                type="text"
                placeholder="Search jobs "
                className="w-full h-[60px]  px-6 py-4 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onFocus={scrollToJobs}
              />
              <Search className="absolute left-75 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
            </div>
          </div>
      

       
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToJobs}
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 border-white"
            >
              View Open Positions
            </button>
            <Link 
              href="/about"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              Learn About Us
            </Link>
          </div>
      

          <div className="flex flex-wrap justify-center gap-8 mt-12 text-gray-300">
            {[
              { number: '15+', label: 'Open Positions' },
              { number: '100%', label: 'Remote Friendly' },
              { number: '4.9/5', label: 'Team Satisfaction' },
              { number: 'Flexible', label: 'Working Hours' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.8 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        
      </div>

      
      <button
        onClick={scrollToJobs}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-blue-400 transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </button>
    </section>
  );
};

export default CareersHero; 