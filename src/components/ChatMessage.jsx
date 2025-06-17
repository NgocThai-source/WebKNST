import React from 'react';
import { motion } from 'framer-motion';

const ChatMessage = ({ message, sender, time, avatar, isCurrentUser }) => {
  return (
    <motion.div 
      className={`mb-4 flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!isCurrentUser && (
        <div className="mr-2">
          <img 
            src={avatar} 
            alt={sender} 
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      )}
      
      <div className="max-w-[70%]">
        {!isCurrentUser && (
          <p className="text-sm text-gray-600 mb-1">{sender}</p>
        )}
        
        <div 
          className={`p-3 rounded-2xl ${
            isCurrentUser 
              ? 'bg-primary text-white rounded-tr-none' 
              : 'bg-gray-100 text-textDark rounded-tl-none'
          }`}
        >
          <p>{message}</p>
        </div>
        
        <p className="text-xs text-gray-500 mt-1 text-right">{time}</p>
      </div>
      
      {isCurrentUser && (
        <div className="ml-2">
          <img 
            src={avatar} 
            alt="You" 
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      )}
    </motion.div>
  );
};

export default ChatMessage; 