'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HoverLift } from '@/components/ui/animations';

const JobCard = ({ job, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  // Add default tags if not provided
  const displayTags = job.tags || ['Remote', 'Flexible', 'Tech'];

  const handleCardClick = () => {
    router.push(`/careers/${job.id}`);
  };

  return (
    <HoverLift>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group cursor-pointer h-full flex flex-col"
        onClick={handleCardClick}
      >
        {/* Header with Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          {/* Gradient background based on department */}
          <div className={`w-full h-full flex items-center justify-center ${
            job.department === 'Engineering' ? 'bg-gradient-to-br from-blue-100 to-purple-100' :
            job.department === 'Design' ? 'bg-gradient-to-br from-pink-100 to-purple-100' :
            job.department === 'Product' ? 'bg-gradient-to-br from-green-100 to-blue-100' :
            job.department === 'Marketing' ? 'bg-gradient-to-br from-orange-100 to-red-100' :
            'bg-gradient-to-br from-gray-100 to-blue-100'
          }`}>
            <div className="text-4xl font-bold text-gray-400 opacity-50">
              {job.title.split(' ').map(word => word[0]).join('')}
            </div>
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Featured Badge */}
          {job.featured && (
            <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 z-10">
              <Star size={14} fill="currentColor" />
              <span>Featured</span>
            </div>
          )}
          
          {/* Department Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700 z-10">
            {job.department}
          </div>
          
          {/* Animated Arrow */}
          <motion.div 
            className="absolute bottom-4 right-4 text-white z-10"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight size={24} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
            {job.title}
          </h3>
          
          {/* Meta Information */}
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center space-x-1">
              <MapPin size={16} className="flex-shrink-0" />
              <span className="truncate">{job.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={16} className="flex-shrink-0" />
              <span>{job.type}</span>
            </div>
          </div>
          
          {/* Salary */}
          {job.salary && (
            <div className="text-lg font-semibold text-gray-900 mb-3">
              {job.salary}
            </div>
          )}
          
          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed flex-1">
            {job.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {displayTags.slice(0, 3).map((tag, tagIndex) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium border border-gray-200"
              >
                {tag}
              </span>
            ))}
            {displayTags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs border border-gray-200">
                +{displayTags.length - 3} more
              </span>
            )}
          </div>
          
          {/* Experience */}
          {job.experience && (
            <div className="text-sm text-gray-500 mb-4">
              {job.experience} experience
            </div>
          )}
          
          {/* CTA */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <Link 
              href={`/careers/${job.id}`}
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center space-x-1 group/link"
              onClick={(e) => e.stopPropagation()}
            >
              <span>View Details</span>
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex"
              >
                →
              </motion.span>
            </Link>
            
            {/* Status Indicator */}
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-1"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 hidden sm:inline">Active</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </HoverLift>
  );
};

export default JobCard;