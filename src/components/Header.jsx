import React from 'react';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import useResponsive from '../hooks/useResponsive';

const Header = ({ title, showSearch = false, showVideoCall = false }) => {
  const { isDesktop } = useResponsive();

  return (
    <header className={`bg-white py-4 px-5 flex items-center justify-between shadow-sm ${isDesktop ? 'rounded-lg m-4' : ''}`}>
      <div className="flex items-center">
        {!isDesktop && (
          <motion.img 
            src="/logo.png" 
            alt="MomHelper Logo" 
            className="h-14 w-14 mr-3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {isDesktop && (
          <button className="p-2 rounded-md hover:bg-gray-100 mr-2">
            <Bars3Icon className="w-6 h-6 text-gray-500" />
          </button>
        )}
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <h1 className="text-2xl font-semibold text-textDark">{title}</h1>
          {isDesktop && (
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <span>Trang chủ</span>
              <span className="mx-2">/</span>
              <span className="text-primary">{title}</span>
            </div>
          )}
        </motion.div>
      </div>

      <div className="flex items-center">
        {showSearch && (
          <motion.button 
            className="p-2 rounded-full bg-gray-100 mr-2"
            whileTap={{ scale: 0.95 }}
          >
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />
          </motion.button>
        )}
        
        {showVideoCall && (
          <motion.button 
            className="p-2 rounded-full bg-gray-100"
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
              <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </motion.button>
        )}
        
        {isDesktop && (
          <div className="flex items-center ml-4">
            <div className="relative">
              <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="User" 
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="ml-3 hidden md:block">
              <p className="text-sm font-medium">Mai Trần</p>
              <p className="text-xs text-gray-500">Người dùng</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 