'use client';

import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Home, 
  BookOpen, 
  Heart, 
  Award, 
  Coffee, 
  Baby, 
  Zap,
  Users,
  Globe,
  Calendar,
  Laptop
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/animations';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'We offer competitive compensation packages with regular reviews and performance-based bonuses.',
      color: 'green'
    },
    {
      icon: Home,
      title: 'Remote Flexibility',
      description: 'Work from anywhere with our flexible remote work options and home office stipend.',
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'Learning Budget',
      description: 'Annual budget for conferences, courses, books, and professional development opportunities.',
      color: 'purple'
    },
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive health, dental, and vision insurance plans for you and your family.',
      color: 'red'
    },
    {
      icon: Award,
      title: 'Stock Options',
      description: 'Share in our success with employee stock option plans and equity packages.',
      color: 'yellow'
    },
    {
      icon: Coffee,
      title: 'Unlimited PTO',
      description: 'Take the time you need to recharge with our unlimited paid time off policy.',
      color: 'orange'
    },
    {
      icon: Baby,
      title: 'Parental Leave',
      description: 'Generous paid parental leave for new parents to bond with their children.',
      color: 'pink'
    },
    {
      icon: Zap,
      title: 'Latest Equipment',
      description: 'Top-of-the-line equipment and tools to help you do your best work.',
      color: 'indigo'
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Regular team building events, offsites, and social activities.',
      color: 'teal'
    },
    {
      icon: Globe,
      title: 'Travel Opportunities',
      description: 'Opportunities to travel for conferences, client meetings, and team gatherings.',
      color: 'cyan'
    },
    {
      icon: Calendar,
      title: 'Flexible Hours',
      description: 'Flexible working hours to accommodate different time zones and personal schedules.',
      color: 'amber'
    },
    {
      icon: Laptop,
      title: 'Tech Stipend',
      description: 'Monthly stipend for internet, phone, and other work-related expenses.',
      color: 'violet'
    }
  ];

  const colorMap = {
    green: 'from-green-500 to-green-600',
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-red-500 to-red-600',
    yellow: 'from-yellow-500 to-yellow-600',
    orange: 'from-orange-500 to-orange-600',
    pink: 'from-pink-500 to-pink-600',
    indigo: 'from-indigo-500 to-indigo-600',
    teal: 'from-teal-500 to-teal-600',
    cyan: 'from-cyan-500 to-cyan-600',
    amber: 'from-amber-500 to-amber-600',
    violet: 'from-violet-500 to-violet-600'
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Amazing <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We value our team members and provide excellent benefits to support their growth, well-being, and success.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <StaggerItem key={benefit.title}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${colorMap[benefit.color]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>

                  {/* Decorative Element */}
                  <div className={`mt-4 w-8 h-1 bg-gradient-to-r ${colorMap[benefit.color]} rounded-full group-hover:w-12 transition-all duration-300`}></div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Additional Perks */}
        <FadeIn delay={0.6}>
          <div className="mt-20 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">And So Much More...</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[
                  { value: '4.9/5', label: 'Team Satisfaction Score' },
                  { value: '95%', label: 'Employee Retention Rate' },
                  { value: '100%', label: 'Remote Team' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Join a team that truly cares about your growth, well-being, and success. 
                We're committed to creating an environment where everyone can thrive both personally and professionally.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BenefitsSection;