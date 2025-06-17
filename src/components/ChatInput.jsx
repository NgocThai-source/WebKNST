import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon, PhotoIcon } from '@heroicons/react/24/solid';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="border-t border-gray-200 bg-white p-3 flex items-center sticky bottom-0"
    >
      <button 
        type="button" 
        className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
      >
        <PhotoIcon className="w-6 h-6" />
      </button>
      
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Viết tin nhắn..."
        className="flex-1 border-none bg-gray-100 rounded-full py-2 px-4 mx-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      
      <motion.button
        type="submit"
        className={`p-2 rounded-full ${message.trim() ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'}`}
        disabled={!message.trim()}
        whileTap={{ scale: 0.9 }}
        whileHover={message.trim() ? { scale: 1.1 } : {}}
      >
        <PaperAirplaneIcon className="w-5 h-5" />
      </motion.button>
    </form>
  );
};

export default ChatInput; 