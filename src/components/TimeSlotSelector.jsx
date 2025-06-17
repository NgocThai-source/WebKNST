import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TimeSlotSelector = () => {
  const [selectedTime, setSelectedTime] = useState('9:30 PM');
  
  const timeSlots = [
    '9:00 PM',
    '9:30 PM',
    '10:00 PM'
  ];

  const serviceTypes = [
    { id: 'morning', label: 'Trợ giúp buổi sáng' },
    { id: 'evening', label: 'Trợ giúp buổi tối' },
    { id: 'fullday', label: 'Trợ giúp cả ngày' }
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="p-5">
      <h3 className="text-lg font-medium mb-3">Chọn giờ</h3>
      
      <div className="flex justify-between mb-6">
        {timeSlots.map((time, index) => (
          <motion.button
            key={time}
            className={`py-2 px-4 rounded-lg ${
              selectedTime === time 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setSelectedTime(time)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {time}
          </motion.button>
        ))}
      </div>
      
      <h3 className="text-lg font-medium mb-3">Chọn gói dịch vụ</h3>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {serviceTypes.map((service, index) => (
          <motion.button
            key={service.id}
            className={`py-2 px-4 rounded-lg border ${
              selectedService === service.id 
                ? 'border-primary bg-lightPink text-primary' 
                : 'border-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedService(service.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {service.label}
          </motion.button>
        ))}
      </div>
      
      <motion.button 
        className="btn-primary w-full"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Xác nhận đặt lịch
      </motion.button>
    </div>
  );
};

export default TimeSlotSelector; 