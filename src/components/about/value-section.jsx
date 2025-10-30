'use client';

import { motion } from 'framer-motion';
import { Rocket, Heart, Users, Zap, Shield, Lightbulb } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/animations';

const ValuesSection = () => {
  const values = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the curve.',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and pour our hearts into every project, ensuring exceptional quality and attention to detail.',
      color: 'red'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, fostering open communication and teamwork to achieve shared success.',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing requirements and market dynamics, delivering fast and flexible solutions.',
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards, building trust through transparency and reliability in all our dealings.',
      color: 'indigo'
    },
    {
      icon: Lightbulb,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer service and beyond.',
      color: 'purple'
    }
  ];

  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    red: 'from-red-500 to-red-600',
    green: 'from-green-500 to-green-600',
    yellow: 'from-yellow-500 to-yellow-600',
    indigo: 'from-indigo-500 to-indigo-600',
    purple: 'from-purple-500 to-purple-600'
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorMap[value.color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>

                  {/* Decorative Element */}
                  <div className={`mt-6 w-12 h-1 bg-gradient-to-r ${colorMap[value.color]} rounded-full group-hover:w-16 transition-all duration-300`}></div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Culture Section */}
        <FadeIn delay={0.6}>
          <div className="mt-20 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Savacy Technologies, we foster a culture of innovation, collaboration, and continuous learning. 
                We believe that great ideas can come from anywhere, and we empower every team member to contribute 
                to our shared success.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { number: '100%', label: 'Remote Team' },
                  { number: '4.9/5', label: 'Client Rating' },
                  { number: '24/7', label: 'Support' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ValuesSection;