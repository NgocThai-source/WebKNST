import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import JournalEvent from '../components/JournalEvent';
import { PlusIcon, ChartBarIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/solid';
import useResponsive from '../hooks/useResponsive';

const BabyJournal = () => {
  const { isDesktop } = useResponsive();
  const [activeTab, setActiveTab] = useState('today');

  const journalEvents = [
    {
      id: 1,
      time: '7:00 SA',
      activity: 'Bú sữa',
      duration: '5 phút',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9" />
        </svg>
      )
    },
    {
      id: 2,
      time: '6:00 SA',
      activity: 'Thay tã',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      )
    },
    {
      id: 3,
      time: '5:30 SA',
      activity: 'Tắm bé',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      )
    },
    {
      id: 4,
      time: '4:00 SA',
      activity: 'Chăm bé',
      duration: '20 phút',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9" />
        </svg>
      )
    },
    {
      id: 5,
      time: '3:00 SA',
      activity: 'Chăm bé',
      duration: '10 phút',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9" />
        </svg>
      )
    }
  ];

  // Stats for desktop view
  const stats = [
    { label: 'Bú sữa', count: 8, icon: '🍼', color: 'bg-blue-100 text-blue-600' },
    { label: 'Thay tã', count: 6, icon: '👶', color: 'bg-green-100 text-green-600' },
    { label: 'Ngủ', count: '5h 30m', icon: '💤', color: 'bg-purple-100 text-purple-600' },
    { label: 'Tắm', count: 2, icon: '🛁', color: 'bg-yellow-100 text-yellow-600' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header title="Nhật ký của bé" />
      
      {isDesktop ? (
        <div className="grid grid-cols-3 gap-6 p-6">
          {/* Left column - Journal entries */}
          <div className="col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-4">
                  <button 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === 'today' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setActiveTab('today')}
                  >
                    Hôm nay
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === 'yesterday' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setActiveTab('yesterday')}
                  >
                    Hôm qua
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === 'week' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setActiveTab('week')}
                  >
                    Tuần này
                  </button>
                </div>
                
                <button className="p-2 bg-primary rounded-lg text-white">
                  <CalendarIcon className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                {journalEvents.map((event, index) => (
                  <JournalEvent
                    key={event.id}
                    time={event.time}
                    activity={event.activity}
                    duration={event.duration}
                    icon={event.icon}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Stats */}
          <div className="space-y-6">
            {/* Today's summary */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <ChartBarIcon className="w-5 h-5 mr-2 text-primary" />
                Tổng kết hôm nay
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className={`${stat.color} rounded-lg p-4 flex flex-col items-center`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-lg font-bold">{stat.count}</div>
                    <div className="text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Sleep tracking */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-primary" />
                Theo dõi giấc ngủ
              </h3>
              
              <div className="h-32 flex items-end space-x-2">
                {[40, 65, 30, 80, 55, 70, 45].map((height, index) => (
                  <motion.div
                    key={index}
                    className="bg-primary bg-opacity-80 rounded-t-md"
                    style={{ height: `${height}%`, width: '14%' }}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  ></motion.div>
                ))}
              </div>
              
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>T2</span>
                <span>T3</span>
                <span>T4</span>
                <span>T5</span>
                <span>T6</span>
                <span>T7</span>
                <span>CN</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <motion.h2 
            className="text-xl font-semibold mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Hôm nay
          </motion.h2>
          
          <div className="mb-8">
            {journalEvents.map((event, index) => (
              <JournalEvent
                key={event.id}
                time={event.time}
                activity={event.activity}
                duration={event.duration}
                icon={event.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
      
      <motion.button
        className={`fixed ${isDesktop ? 'bottom-6 right-6' : 'bottom-20 right-4'} w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
      >
        <PlusIcon className="w-8 h-8 text-white" />
      </motion.button>
    </motion.div>
  );
};

export default BabyJournal; 