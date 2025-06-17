import React from 'react';
import { motion } from 'framer-motion';

const AIMessage = ({ message, time, isUser }) => {
  return (
    <motion.div 
      className={`mb-4 flex ${isUser ? 'justify-end' : 'justify-start'}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!isUser && (
        <div className="mr-2">
          <img 
            src="/logo.png" 
            alt="MomHelper AI" 
            className="w-10 h-10 rounded-full"
          />
        </div>
      )}
      
      <div className={`max-w-[75%] ${isUser ? 'order-1' : 'order-2'}`}>
        <div className="flex items-center mb-1">
          <p className="text-sm font-medium text-gray-600">
            {isUser ? 'Bạn' : 'MomHelper'}
          </p>
          <p className="text-xs text-gray-400 ml-2">{time}</p>
        </div>
        
        <div 
          className={`p-3 rounded-2xl ${
            isUser 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-textDark'
          }`}
        >
          <p className="whitespace-pre-line">{message}</p>
        </div>
      </div>
      
      {isUser && (
        <div className="ml-2 order-3">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="User" 
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      )}
    </motion.div>
  );
};

export default AIMessage; 