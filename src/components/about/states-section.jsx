'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Counter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <span ref={ref} className="font-bold">
      {isInView ? value : 0}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    { number: 200, suffix: '+', label: 'Projects Completed', color: 'blue' },
    { number: 50, suffix: '+', label: 'Happy Clients', color: 'green' },
    { number: 15, suffix: '+', label: 'Team Members', color: 'purple' },
    { number: 5, suffix: '+', label: 'Years Experience', color: 'orange' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              By The <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Our journey in numbers - milestones that showcase our growth and impact
            </p>
          </div>

       </div>
    </section>
  );
};

export default StatsSection;