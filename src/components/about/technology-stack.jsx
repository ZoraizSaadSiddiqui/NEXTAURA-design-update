'use client';

import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/animations';

const TechnologyStack = () => {
  const technologies = {
    'Frontend': ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Python', 'Java', 'PHP', 'Ruby on Rails', 'Go'],
    'Mobile': ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'],
    'Database': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    'Cloud & DevOps': ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
    'Tools & Others': ['Figma', 'Git', 'Jira', 'Webpack', 'GraphQL']
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with modern technologies and tools to deliver exceptional, scalable, and high-performance solutions
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, techs], categoryIndex) => (
              <StaggerItem key={category}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 cursor-default shadow-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Methodology */}
        <FadeIn delay={0.6}>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Our Development Methodology</h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                We follow agile development practices with continuous integration and deployment, 
                ensuring rapid delivery without compromising on quality.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { step: '01', title: 'Discovery', desc: 'Requirements analysis' },
                  { step: '02', title: 'Design', desc: 'UI/UX planning' },
                  { step: '03', title: 'Development', desc: 'Agile sprints' },
                  { step: '04', title: 'Deployment', desc: 'CI/CD pipeline' }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      {item.step}
                    </div>
                    <div className="font-semibold mb-1">{item.title}</div>
                    <div className="text-blue-100 text-sm">{item.desc}</div>
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

export default TechnologyStack;