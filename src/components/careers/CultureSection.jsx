'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Zap, 
  Heart, 
  TrendingUp, 
  Globe,
  Award,
  Clock,
  Coffee,
  Brain,
  Rocket,
  Star
} from 'lucide-react';
import Button from '../ui/buttons';
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '@/components/ui/animations';

const CultureSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'We are passionate about our mission to transform businesses through technology.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We believe in the power of teamwork and open communication.',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Innovative',
      description: 'We constantly push boundaries and explore new possibilities.',
      color: 'yellow'
    },
    {
      icon: Heart,
      title: 'Caring',
      description: 'We support each other and create a positive, inclusive environment.',
      color: 'red'
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'We embrace challenges and continuously learn and improve.',
      color: 'purple'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We value diverse perspectives and think globally.',
      color: 'indigo'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Developer',
      quote: 'The culture here is incredible. I\'ve never worked somewhere that values both innovation and work-life balance so highly.',
      avatar: '/images/team/sarah.jpg',
      tenure: '3 years'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Product Manager',
      quote: 'The trust and autonomy we\'re given is amazing. It really empowers us to do our best work.',
      avatar: '/images/team/marcus.jpg',
      tenure: '2 years'
    },
    {
      name: 'Elena Petrova',
      role: 'UI/UX Designer',
      quote: 'I love how collaborative everyone is. Great ideas can come from anywhere in the company.',
      avatar: '/images/team/elena.jpg',
      tenure: '4 years'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Culture Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <SlideInLeft>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Culture</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Savacy Technologies, we've built a culture that fosters innovation, collaboration, 
                and personal growth. We believe that great work happens when people feel valued, 
                supported, and empowered to do their best work.
              </p>
              
              <div className="space-y-4">
                {[
                  'Remote-first company with team members across the globe',
                  'Flat hierarchy with open communication channels',
                  'Focus on results, not hours worked',
                  'Regular team building and social events',
                  'Commitment to diversity, equity, and inclusion'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Award, value: '4.9/5', label: 'Team Satisfaction' },
                { icon: Clock, value: '100%', label: 'Remote Team' },
                { icon: Coffee, value: 'Unlimited', label: 'Paid Time Off' },
                { icon: Brain, value: '$2,000', label: 'Learning Budget' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-blue-200 transition-all duration-300"
                >
                  <item.icon size={32} className="text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
                  <div className="text-gray-600 text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </SlideInRight>
        </div>

        {/* Values */}
        <FadeIn>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon size={24} className="text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Team Testimonials */}
        <FadeIn>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Hear From Our Team</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our team members have to say about working at Savacy.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={testimonial.name}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300"
                >
                  {/* Quote */}
                  <div className="mb-6">
                    <Rocket size={24} className="text-blue-600 mb-2" />
                    <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-gray-600 text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-gray-500">{testimonial.tenure} at Savacy</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Final CTA */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Take the next step in your career and become part of something special. 
                Browse our open positions and apply today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="#jobs-grid"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 border-white"
                >
                  View Open Positions
                </Button>
                <Button 
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CultureSection;