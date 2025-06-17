import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const DateSelector = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Generate days for the current month
  const generateDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    const daysArray = [];
    const daysInMonth = lastDay.getDate();
    
    // Get the day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeek = firstDay.getDay();
    
    // Add empty days for the start of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      daysArray.push({ day: null, date: null });
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      daysArray.push({ day, date });
    }
    
    return daysArray;
  };

  const days = generateDays();
  
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  const isSelectedDate = (date) => {
    if (!date) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  return (
    <div className="bg-white rounded-t-3xl p-5">
      <div className="flex justify-between items-center mb-4">
        <button onClick={goToPreviousMonth} className="p-2">
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        
        <h2 className="text-lg font-semibold">
          Tháng {currentMonth.getMonth() + 1} năm {currentMonth.getFullYear()}
        </h2>
        
        <button onClick={goToNextMonth} className="p-2">
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        <div className="text-sm font-medium">S</div>
        <div className="text-sm font-medium">M</div>
        <div className="text-sm font-medium">T</div>
        <div className="text-sm font-medium">W</div>
        <div className="text-sm font-medium">T</div>
        <div className="text-sm font-medium">F</div>
        <div className="text-sm font-medium">S</div>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.9 }}
            className={`aspect-square flex items-center justify-center rounded-full cursor-pointer ${
              day.day === null ? 'invisible' : ''
            }`}
            onClick={() => day.date && setSelectedDate(day.date)}
          >
            {day.day && (
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  isSelectedDate(day.date)
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {day.day}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DateSelector; 