/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, StarIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const CaregiverCard = ({ name, role, image, index, rating, experience, location, isDesktop }) => {
  if (isDesktop) {
    return (
      <motion.div 
        className="card hover:shadow-xl transition-all duration-300 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center shadow-md">
            <StarIcon className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-semibold text-textDark">{name}</h3>
          <p className="text-primary font-medium">{role}</p>
          
          <div className="mt-3 space-y-2">
            <div className="flex items-center text-gray-600 text-sm">
              <BriefcaseIcon className="w-4 h-4 mr-2" />
              <span>Kinh nghiệm: {experience}</span>
            </div>
            
            <div className="flex items-center text-gray-600 text-sm">
              <MapPinIcon className="w-4 h-4 mr-2" />
              <span>{location}</span>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-primary">200k/giờ</span>
            <motion.button 
              className="btn-primary py-2 px-4 text-sm"
              whileTap={{ scale: 0.95 }}
            >
              Đặt ngay
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="card flex items-center mb-4 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <h3 className="text-xl font-semibold text-textDark mr-2">{name}</h3>
          {rating && (
            <div className="flex items-center bg-yellow-50 px-2 py-0.5 rounded-full">
              <StarIcon className="w-3 h-3 text-yellow-500 mr-1" />
              <span className="text-xs font-medium">{rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-500 mb-2">{role}</p>
        
        {location && (
          <div className="flex items-center text-gray-600 text-xs mb-2">
            <MapPinIcon className="w-3 h-3 mr-1" />
            <span>{location}</span>
          </div>
        )}
        
        <motion.button 
          className="btn-primary mt-2 py-2 px-4 text-sm"
          whileTap={{ scale: 0.95 }}
        >
          Đặt ngay
        </motion.button>
      </div>
      
      <div className="w-1/3">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-40 object-cover rounded-xl"
        />
      </div>
    </motion.div>
  );
};

export default CaregiverCard; 