'use client';

import { Target, Eye, Award } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance user experiences, and transform ideas into reality through innovative technology.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe in the power of technology to solve complex problems and create 
                meaningful impact for our clients and their customers in the digital age.
              </p>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What Drives Us</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Innovation and creativity in every project</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Client success and satisfaction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Continuous learning and improvement</span>
                  </li>
                </ul>
              </div>
            </div>

          {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To be the leading digital solutions provider, recognized for our innovation, 
                quality, and ability to transform businesses through technology.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We envision a future where every business, regardless of size, can leverage 
                cutting-edge technology to achieve their goals and create exceptional value.
              </p>

              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Aspirations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Pioneering new technologies and methodologies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Building long-term partnerships with clients</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Creating positive impact through technology</span>
                  </li>
                </ul>
              </div>
            </div>
        </div>

        {/* Values Highlight */}
          <div className="mt-20 text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Commitment</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Quality Excellence',
                  description: 'We never compromise on quality, ensuring every project meets the highest standards of excellence.',
                  color: 'blue'
                },
                {
                  title: 'Client Success',
                  description: 'Your success is our success. We measure our achievements by the value we create for our clients.',
                  color: 'green'
                },
                {
                  title: 'Innovation First',
                  description: 'We stay at the forefront of technology to deliver cutting-edge solutions that drive real results.',
                  color: 'purple'
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
       
      </div>
    </section>
  );
};

export default MissionVision;