import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CaregiverCard from '../components/CaregiverCard';
import useResponsive from '../hooks/useResponsive';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const FindCaregivers = () => {
  const { isDesktop } = useResponsive();
  const [activeFilter, setActiveFilter] = useState('all');

  const caregivers = [
    {
      id: 1,
      name: 'Ngọc Lan',
      role: 'Y tá sau sinh',
      rating: 4.9,
      experience: '5 năm',
      location: 'Quận 1, TP.HCM',
      image: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
      id: 2,
      name: 'Minh Tâm',
      role: 'Huấn luyện giấc ngủ',
      rating: 4.7,
      experience: '3 năm',
      location: 'Quận 2, TP.HCM',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Thu Thủy',
      role: 'Chăm bé',
      rating: 4.8,
      experience: '4 năm',
      location: 'Quận 7, TP.HCM',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 4,
      name: 'Hương Giang',
      role: 'Y tá sau sinh',
      rating: 4.6,
      experience: '6 năm',
      location: 'Quận 3, TP.HCM',
      image: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    {
      id: 5,
      name: 'Thanh Hà',
      role: 'Chăm bé',
      rating: 4.8,
      experience: '5 năm',
      location: 'Quận Bình Thạnh, TP.HCM',
      image: 'https://randomuser.me/api/portraits/women/54.jpg'
    },
    {
      id: 6,
      name: 'Mỹ Linh',
      role: 'Huấn luyện giấc ngủ',
      rating: 4.9,
      experience: '7 năm',
      location: 'Quận Phú Nhuận, TP.HCM',
      image: 'https://randomuser.me/api/portraits/women/76.jpg'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'nurse', label: 'Y tá' },
    { id: 'sleep', label: 'Giấc ngủ' },
    { id: 'care', label: 'Chăm bé' }
  ];

  const filteredCaregivers = caregivers.filter(caregiver => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'nurse') return caregiver.role.includes('Y tá');
    if (activeFilter === 'sleep') return caregiver.role.includes('giấc ngủ');
    if (activeFilter === 'care') return caregiver.role.includes('Chăm bé');
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={isDesktop ? 'pb-8' : ''}
    >
      <Header title="Tìm người chăm sóc" showSearch={true} />
      <SearchBar />
      
      {isDesktop && (
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-500" />
            <span className="font-medium">Bộ lọc:</span>
          </div>
          
          <div className="flex space-x-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className={`p-4 ${isDesktop ? 'grid grid-cols-2 lg:grid-cols-3 gap-6' : ''}`}>
        {filteredCaregivers.map((caregiver, index) => (
          <div key={caregiver.id} className={isDesktop ? '' : 'mb-4'}>
            <CaregiverCard
              name={caregiver.name}
              role={caregiver.role}
              image={caregiver.image}
              index={index}
              rating={caregiver.rating}
              experience={caregiver.experience}
              location={caregiver.location}
              isDesktop={isDesktop}
            />
          </div>
        ))}
      </div>
      
      <motion.div 
        className={`mt-8 p-4 bg-lightPink rounded-xl mx-4 ${isDesktop ? 'max-w-3xl mx-auto' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <p className="text-center text-gray-700">
          MomHelper là ứng dụng hỗ trợ các bà mẹ sau sinh dễ dàng tìm kiếm, kết nối và tương tác với đội ngũ người chăm sóc chuyên nghiệp như y tá sơ sinh, bảo mẫu và chuyên gia tư vấn.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FindCaregivers; 