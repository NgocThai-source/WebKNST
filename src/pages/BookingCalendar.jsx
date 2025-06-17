import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import DateSelector from '../components/DateSelector';
import TimeSlotSelector from '../components/TimeSlotSelector';
import { XMarkIcon, UserIcon, ClockIcon, CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import useResponsive from '../hooks/useResponsive';

const BookingCalendar = () => {
  const { isDesktop } = useResponsive();
  const [selectedCaregiver, setSelectedCaregiver] = useState({
    name: 'Ngọc Lan',
    role: 'Y tá sau sinh',
    rating: 4.9,
    price: '200.000đ / giờ',
    location: 'Quận 1, TP.HCM',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
  });

  return (
    <motion.div
      className="flex flex-col h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!isDesktop ? (
        <div className="bg-white p-4 flex items-center justify-between shadow-sm">
          <button className="p-2">
            <XMarkIcon className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Chọn ngày</h1>
          <div className="w-10"></div> {/* Empty div for alignment */}
        </div>
      ) : (
        <Header title="Đặt lịch hẹn" />
      )}
      
      {isDesktop ? (
        <div className="flex p-6 gap-6 flex-1 overflow-hidden">
          {/* Left column - Calendar */}
          <div className="w-2/3 bg-white rounded-xl shadow-sm overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Chọn ngày và giờ</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <DateSelector />
                </div>
                
                <div className="border-l border-gray-200 pl-6">
                  <h3 className="text-lg font-medium mb-4">Chọn giờ</h3>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {['8:00 AM', '9:00 AM', '10:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'].map((time, index) => (
                      <motion.button
                        key={time}
                        className={`py-2 px-3 rounded-lg text-center ${
                          index === 2 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-medium mb-4">Chọn gói dịch vụ</h3>
                  
                  <div className="space-y-3">
                    {[
                      { id: 'morning', label: 'Trợ giúp buổi sáng', price: '400.000đ' },
                      { id: 'evening', label: 'Trợ giúp buổi tối', price: '450.000đ', selected: true },
                      { id: 'fullday', label: 'Trợ giúp cả ngày', price: '800.000đ' }
                    ].map((service) => (
                      <motion.div
                        key={service.id}
                        className={`p-3 border rounded-lg flex justify-between items-center ${
                          service.selected ? 'border-primary bg-lightPink' : 'border-gray-200'
                        }`}
                        whileHover={{ scale: 1.01 }}
                      >
                        <div>
                          <p className={`font-medium ${service.selected ? 'text-primary' : 'text-gray-700'}`}>
                            {service.label}
                          </p>
                          <p className="text-sm text-gray-500">2 giờ</p>
                        </div>
                        <p className="font-bold">{service.price}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Summary */}
          <div className="w-1/3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Chi tiết đặt lịch</h2>
              
              <div className="flex items-center mb-6">
                <img 
                  src={selectedCaregiver.avatar} 
                  alt={selectedCaregiver.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{selectedCaregiver.name}</h3>
                  <p className="text-primary">{selectedCaregiver.role}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <ClockIcon className="w-5 h-5 text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Thời gian</p>
                    <p className="text-gray-600">Thứ 4, 07/02/2023</p>
                    <p className="text-gray-600">10:00 AM - 12:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Địa điểm</p>
                    <p className="text-gray-600">Nhà riêng</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CurrencyDollarIcon className="w-5 h-5 text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Giá dịch vụ</p>
                    <p className="text-gray-600">Trợ giúp buổi tối - 450.000đ</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Tổng thời gian:</span>
                  <span className="font-medium">2 giờ</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Tổng tiền:</span>
                  <span className="text-primary">450.000đ</span>
                </div>
              </div>
              
              <motion.button 
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Xác nhận đặt lịch
              </motion.button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DateSelector />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <TimeSlotSelector />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default BookingCalendar; 