import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const SearchBar = ({ placeholder = "Tìm kiếm theo tên hoặc địa điểm" }) => {
  return (
    <motion.div 
      className="relative mx-4 my-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          className="w-full py-3 pl-12 pr-4 bg-gray-100 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          placeholder={placeholder}
        />
      </div>
    </motion.div>
  );
};

export default SearchBar; 