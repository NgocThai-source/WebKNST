import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, CalendarIcon, ChatBubbleLeftRightIcon, BeakerIcon, SparklesIcon } from '@heroicons/react/24/outline';
import useResponsive from '../hooks/useResponsive';

const Layout = () => {
  const { isDesktop } = useResponsive();

  return (
    <div className="flex h-screen bg-secondary">
      {/* Sidebar for desktop */}
      {isDesktop && (
        <motion.div 
          className="w-64 bg-white shadow-md flex flex-col"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 flex items-center border-b border-gray-100">
            <img src="/logo.png" alt="MomHelper Logo" className="h-12 w-12 mr-3" />
            <h1 className="text-2xl font-bold text-primary">MomHelper</h1>
          </div>
          
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              <SidebarNavItem to="/" icon={<HomeIcon className="w-6 h-6" />} label="Tìm người chăm sóc" />
              <SidebarNavItem to="/journal" icon={<CalendarIcon className="w-6 h-6" />} label="Nhật ký của bé" />
              <SidebarNavItem to="/chat" icon={<ChatBubbleLeftRightIcon className="w-6 h-6" />} label="Trò chuyện hỗ trợ" />
              <SidebarNavItem to="/booking" icon={<BeakerIcon className="w-6 h-6" />} label="Đặt lịch" />
              <SidebarNavItem to="/ai" icon={<SparklesIcon className="w-6 h-6" />} label="MomHelper AI" />
            </div>
          </nav>
          
          <div className="p-4 border-t border-gray-100">
            <div className="bg-lightPink rounded-lg p-4 text-sm">
              <p className="font-medium text-primary mb-2">Hỗ trợ 24/7</p>
              <p className="text-gray-600">Liên hệ với chúng tôi bất cứ khi nào bạn cần giúp đỡ.</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto pb-16 md:pb-0">
          <Outlet />
        </main>

        {/* Bottom navigation - only on mobile and tablet */}
        {!isDesktop && (
          <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 py-2 px-4 flex justify-around items-center">
            <NavItem to="/" icon={<HomeIcon className="w-6 h-6" />} label="Tìm người" />
            <NavItem to="/journal" icon={<CalendarIcon className="w-6 h-6" />} label="Nhật ký" />
            <NavItem to="/chat" icon={<ChatBubbleLeftRightIcon className="w-6 h-6" />} label="Trò chuyện" />
            <NavItem to="/booking" icon={<BeakerIcon className="w-6 h-6" />} label="Đặt lịch" />
            <NavItem to="/ai" icon={<SparklesIcon className="w-6 h-6" />} label="AI" />
          </nav>
        )}
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `flex flex-col items-center ${isActive ? 'text-primary' : 'text-gray-500'}`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.div 
              className="absolute top-0 w-12 h-1 bg-primary rounded-full -mt-2"
              layoutId="activeTab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          {icon}
          <span className="text-xs mt-1">{label}</span>
        </>
      )}
    </NavLink>
  );
};

const SidebarNavItem = ({ to, icon, label }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `flex items-center px-4 py-3 rounded-lg transition-all ${
          isActive 
            ? 'bg-lightPink text-primary font-medium' 
            : 'text-gray-600 hover:bg-gray-50'
        }`
      }
    >
      <div className="mr-3">
        {icon}
      </div>
      <span>{label}</span>
    </NavLink>
  );
};

export default Layout; 