'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import Button from '@/components/ui/button';

const JobSearch = ({ onSearch, onFilter, jobs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const departments = [...new Set(jobs.map(job => job.department))];
  const locations = [...new Set(jobs.map(job => job.location))];
  const types = [...new Set(jobs.map(job => job.type))];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilter = (type, value) => {
    switch (type) {
      case 'department':
        setDepartmentFilter(value);
        break;
      case 'location':
        setLocationFilter(value);
        break;
      case 'type':
        setTypeFilter(value);
        break;
    }
    onFilter({ department: type === 'department' ? value : departmentFilter, 
               location: type === 'location' ? value : locationFilter, 
               type: type === 'type' ? value : typeFilter });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setDepartmentFilter('');
    setLocationFilter('');
    setTypeFilter('');
    onSearch('');
    onFilter({ department: '', location: '', type: '' });
  };

  const activeFiltersCount = [searchTerm, departmentFilter, locationFilter, typeFilter].filter(Boolean).length;

  return (
    <div className="mb-12">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search jobs by title, keyword, or technology..."
            value={searchTerm}
            onChange={handleSearch}
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
      <motion.div
        initial={false}
        animate={{ 
          height: showFilters || window.innerWidth >= 1024 ? 'auto' : 0,
          opacity: showFilters || window.innerWidth >= 1024 ? 1 : 0 
        }}
        className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-6 overflow-hidden"
      >
        <select
          value={departmentFilter}
          onChange={(e) => handleFilter('department', e.target.value)}
          className="w-full lg:w-auto px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        >
          <option value="">All Departments</option>
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>

        <select
          value={locationFilter}
          onChange={(e) => handleFilter('location', e.target.value)}
          className="w-full lg:w-auto px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        >
          <option value="">All Locations</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>

        <select
          value={typeFilter}
          onChange={(e) => handleFilter('type', e.target.value)}
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
    </div>
  );
};

export default JobSearch;