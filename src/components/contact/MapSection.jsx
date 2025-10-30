'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { FadeIn } from '@/components/ui/animations';

const MapSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find Our <span className="gradient-text">Office</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at our headquarters in San Francisco's Innovation District
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 lg:h-[500px] flex items-center justify-center relative overflow-hidden"
            >
              {/* Mock Map Interface */}
              <div className="absolute inset-0 bg-blue-200">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}></div>
                
                {/* Roads */}
                <div className="absolute top-1/2 left-0 right-0 h-8 bg-gray-600 transform -translate-y-1/2"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-gray-600 transform -translate-x-1/2"></div>
                
                {/* Building Mockups */}
                <div className="absolute top-1/4 left-1/4 w-16 h-32 bg-gray-800 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/3 right-1/3 w-20 h-40 bg-gray-700 transform -translate-y-1/2"></div>
                <div className="absolute bottom-1/4 left-1/3 w-24 h-28 bg-gray-900 transform -translate-x-1/2"></div>
                
                {/* Location Marker */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-4 h-4 bg-red-500 rotate-45"></div>
                </motion.div>
              </div>

              {/* Map Controls */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Navigation size={20} className="text-gray-700" />
                </button>
                <button className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <span className="text-lg font-bold text-gray-700">+</span>
                </button>
                <button className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <span className="text-lg font-bold text-gray-700">-</span>
                </button>
              </div>

              {/* Watermark */}
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                <span className="text-sm text-gray-600">Interactive Map</span>
              </div>
            </motion.div>
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600">
                      123 Tech Street<br />
                      Innovation District<br />
                      San Francisco, CA 94105
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
                    <p className="text-gray-600">
                      Underground parking available<br />
                      Validated parking for visitors
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Public Transport</h4>
                    <p className="text-gray-600">
                      BART: Montgomery Station (5 min walk)<br />
                      Muni: Multiple lines nearby<br />
                      Bus: 5, 30, 45
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Schedule a Visit</h3>
                <p className="mb-4 opacity-90">
                  Planning to visit? Let us know in advance so we can prepare for your arrival and make your visit productive.
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  Schedule Appointment
                </motion.a>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-orange-900 mb-2">COVID-19 Update</h3>
                <p className="text-orange-800 text-sm">
                  Our office follows all local health guidelines. Masks are optional but recommended. 
                  We also offer virtual meeting options for your convenience.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;