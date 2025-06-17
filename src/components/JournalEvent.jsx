import React from 'react';
import { motion } from 'framer-motion';

const JournalEvent = ({ time, activity, duration, icon, index }) => {
  return (
    <motion.div 
      className="flex items-center mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="bg-gray-100 p-4 rounded-xl mr-4">
        {icon}
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-textDark">{time}</h3>
        {duration && <p className="text-gray-500 text-sm">{duration}</p>}
        <p className="text-gray-600">{activity}</p>
      </div>
    </motion.div>
  );
};

export default JournalEvent; 