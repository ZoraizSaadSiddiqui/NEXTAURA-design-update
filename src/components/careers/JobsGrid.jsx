'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Clock, Filter, X } from 'lucide-react';
import Button from '../ui/buttons';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/animations';
import JobCard from './JobCard';

const JobsGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const jobs = [
    {
      id: 'senior-frontend-developer',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'San Francisco, CA',
      experience: '5+ years',
      salary: '$120,000 - $150,000',
      image: '/images/careers/frontend.jpg',
      hoverImage: '/images/careers/frontend-hover.jpg',
      description: 'We are looking for an experienced Frontend Developer to join our team and help build amazing user experiences with React and Next.js.',
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      featured: true
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Remote',
      experience: '3+ years',
      salary: '$80,000 - $110,000',
      image: '/images/careers/designer.jpg',
      hoverImage: '/images/careers/designer-hover.jpg',
      description: 'Create beautiful and intuitive user interfaces for web and mobile applications using modern design tools and methodologies.',
      tags: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      featured: false
    },
    {
      id: 'fullstack-developer',
      title: 'Full Stack Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'New York, NY',
      experience: '4+ years',
      salary: '$100,000 - $140,000',
      image: '/images/careers/fullstack.jpg',
      hoverImage: '/images/careers/fullstack-hover.jpg',
      description: 'Work on both frontend and backend technologies to deliver complete solutions across the entire stack.',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
      featured: true
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      experience: '4+ years',
      salary: '$110,000 - $140,000',
      image: '/images/careers/devops.jpg',
      hoverImage: '/images/careers/devops-hover.jpg',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines to ensure scalability and reliability.',
      tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      featured: false
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'Product',
      type: 'Full-time',
      location: 'San Francisco, CA',
      experience: '5+ years',
      salary: '$130,000 - $160,000',
      image: '/images/careers/pm.jpg',
      hoverImage: '/images/careers/pm-hover.jpg',
      description: 'Lead product development and work with cross-functional teams to deliver value to our customers.',
      tags: ['Product Strategy', 'Agile', 'User Stories', 'Roadmapping'],
      featured: true
    },
    {
      id: 'digital-marketing-specialist',
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      type: 'Full-time',
      location: 'Remote',
      experience: '3+ years',
      salary: '$70,000 - $90,000',
      image: '/images/careers/marketing.jpg',
      hoverImage: '/images/careers/marketing-hover.jpg',
      description: 'Drive growth through digital marketing strategies, campaigns, and data-driven optimization.',
      tags: ['SEO', 'Social Media', 'Google Ads', 'Analytics'],
      featured: false
    },
    {
      id: 'backend-developer',
      title: 'Backend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      experience: '4+ years',
      salary: '$110,000 - $140,000',
      image: '/images/careers/backend.jpg',
      hoverImage: '/images/careers/backend-hover.jpg',
      description: 'Develop scalable backend services and APIs using modern technologies and best practices.',
      tags: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
      featured: false
    },
    {
      id: 'qa-engineer',
      title: 'QA Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      experience: '3+ years',
      salary: '$80,000 - $110,000',
      image: '/images/careers/qa.jpg',
      hoverImage: '/images/careers/qa-hover.jpg',
      description: 'Ensure product quality through comprehensive testing strategies and automation.',
      tags: ['Testing', 'Automation', 'Cypress', 'Jest'],
      featured: false
    }
  ];

  const departments = [...new Set(jobs.map(job => job.department))];
  const locations = [...new Set(jobs.map(job => job.location))];
  const types = [...new Set(jobs.map(job => job.type))];

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDepartment = !departmentFilter || job.department === departmentFilter;
      const matchesLocation = !locationFilter || job.location.includes(locationFilter);
      const matchesType = !typeFilter || job.type === typeFilter;
      
      return matchesSearch && matchesDepartment && matchesLocation && matchesType;
    });
  }, [searchTerm, departmentFilter, locationFilter, typeFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setDepartmentFilter('');
    setLocationFilter('');
    setTypeFilter('');
  };

  const activeFiltersCount = [searchTerm, departmentFilter, locationFilter, typeFilter].filter(Boolean).length;

  return (
    <section id="jobs-grid" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect role for your skills and passion. Join us in building the future of technology.
            </p>
          </div>
        </FadeIn>

        {/* Search and Filters */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search jobs by title, keyword, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm"
              />
            </div>
          </div>

          {/* Filter Toggle for Mobile */}
          <div className="flex justify-center mb-6 lg:hidden">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Filter size={20} />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {(showFilters || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-6"
              >
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="w-full lg:w-auto px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                >
                  <option value="">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>

                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="w-full lg:w-auto px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>

                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full lg:w-auto px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                >
                  <option value="">All Types</option>
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                {activeFiltersCount > 0 && (
                  <Button
                    onClick={clearFilters}
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <X size={16} />
                    <span>Clear Filters</span>
                  </Button>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-gray-600">
              Showing {filteredJobs.length} of {jobs.length} positions
              {activeFiltersCount > 0 && ' (filtered)'}
            </p>
          </div>
        </div>

        {/* Jobs Grid */}
        <StaggerContainer>
          <AnimatePresence mode="wait">
            {filteredJobs.length > 0 ? (
              <motion.div
                key="jobs-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredJobs.map((job, index) => (
                  <StaggerItem key={job.id}>
                    <JobCard job={job} index={index} />
                  </StaggerItem>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={40} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No positions found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We couldn't find any positions matching your criteria. Try adjusting your filters or search terms.
                </p>
                <Button onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Don't See the Perfect Role?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We're always looking for talented people. Send us your resume and we'll contact you when a matching position opens up.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/contact"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Send Your Resume
                </Button>
                <Button 
                  href="/about"
                  variant="outline"
                  size="lg"
                >
                  Learn About Our Culture
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default JobsGrid;