'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Calendar, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/button';
import { FadeIn, SlideInUp, StaggerContainer, StaggerItem } from '@/components/ui/animations';

const JobDetail = ({ job }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{job.title}</h1>
            </FadeIn>
            
            <SlideInUp delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                  <Users size={16} />
                  <span>{job.department}</span>
                </span>
                <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{job.type}</span>
                </span>
                <span className="bg-purple-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </span>
                <span className="bg-orange-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                  <DollarSign size={16} />
                  <span>{job.salary}</span>
                </span>
              </div>
            </SlideInUp>

            <SlideInUp delay={0.4}>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {job.description}
              </p>
            </SlideInUp>

            <SlideInUp delay={0.6}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href={`/careers/apply?job=${job.id}`}
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 border-white"
                >
                  Apply Now
                </Button>
                <Button 
                  href="/careers"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  View All Positions
                </Button>
              </div>
            </SlideInUp>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Responsibilities */}
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Responsibilities</h2>
                  <StaggerContainer>
                    <ul className="space-y-4">
                      {job.responsibilities.map((responsibility, index) => (
                        <StaggerItem key={responsibility}>
                          <motion.li 
                            className="flex items-start space-x-3"
                            whileHover={{ x: 5 }}
                          >
                            <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                          </motion.li>
                        </StaggerItem>
                      ))}
                    </ul>
                  </StaggerContainer>
                </div>
              </FadeIn>

              {/* Requirements */}
              <FadeIn delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Requirements</h2>
                  <StaggerContainer>
                    <ul className="space-y-4">
                      {job.requirements.map((requirement, index) => (
                        <StaggerItem key={requirement}>
                          <motion.li 
                            className="flex items-start space-x-3"
                            whileHover={{ x: 5 }}
                          >
                            <CheckCircle size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{requirement}</span>
                          </motion.li>
                        </StaggerItem>
                      ))}
                    </ul>
                  </StaggerContainer>
                </div>
              </FadeIn>

              {/* Nice to Have */}
              {job.niceToHave && (
                <FadeIn delay={0.3}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Nice to Have</h2>
                    <StaggerContainer>
                      <ul className="space-y-4">
                        {job.niceToHave.map((item, index) => (
                          <StaggerItem key={item}>
                            <motion.li 
                              className="flex items-start space-x-3"
                              whileHover={{ x: 5 }}
                            >
                              <CheckCircle size={20} className="text-purple-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 leading-relaxed">{item}</span>
                            </motion.li>
                          </StaggerItem>
                        ))}
                      </ul>
                    </StaggerContainer>
                  </div>
                </FadeIn>
              )}

              {/* Application Process */}
              <FadeIn delay={0.4}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Process</h2>
                  <StaggerContainer>
                    <div className="space-y-6">
                      {job.applicationProcess.map((step, index) => (
                        <StaggerItem key={step}>
                          <motion.div
                            whileHover={{ y: -2 }}
                            className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200"
                          >
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                              {index + 1}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{step}</h3>
                            </div>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Apply Card */}
                <FadeIn delay={0.2}>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Apply?</h3>
                    <p className="text-gray-600 mb-4">
                      Take the next step in your career and join our innovative team.
                    </p>
                    <Button 
                      href={`/careers/apply?job=${job.id}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 justify-center mb-3"
                    >
                      Apply for This Position
                    </Button>
                    <p className="text-sm text-gray-500 text-center">
                      Average response time: 2-3 business days
                    </p>
                  </div>
                </FadeIn>

                {/* Job Details Card */}
                <FadeIn delay={0.3}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Job Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Department:</span>
                        <span className="font-semibold text-gray-900">{job.department}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-semibold text-gray-900">{job.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-semibold text-gray-900">{job.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Experience:</span>
                        <span className="font-semibold text-gray-900">{job.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Salary:</span>
                        <span className="font-semibold text-gray-900">{job.salary}</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Benefits Preview */}
                <FadeIn delay={0.4}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Benefits & Perks</h3>
                    <div className="space-y-2">
                      {job.benefits.slice(0, 5).map((benefit, index) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                    {job.benefits.length > 5 && (
                      <p className="text-sm text-gray-500 mt-3">
                        +{job.benefits.length - 5} more benefits
                      </p>
                    )}
                  </div>
                </FadeIn>

                {/* Share Job */}
                <FadeIn delay={0.5}>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Share This Position</h3>
                    <div className="flex space-x-3">
                      {['Twitter', 'LinkedIn', 'Email'].map((platform) => (
                        <motion.button
                          key={platform}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 border border-gray-300"
                        >
                          {platform}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Jobs CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Not the Right Fit?</h2>
          </FadeIn>
          
          <SlideInUp delay={0.2}>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore other exciting opportunities that match your skills and interests.
            </p>
          </SlideInUp>

          <SlideInUp delay={0.4}>
            <Button 
              href="/careers"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              View All Open Positions
            </Button>
          </SlideInUp>
        </div>
      </section>
    </>
  );
};

export default JobDetail;