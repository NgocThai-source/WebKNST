import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import useResponsive from '../hooks/useResponsive';
import { MagnifyingGlassIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

const SupportChat = () => {
  const { isDesktop } = useResponsive();
  const [activeContact, setActiveContact] = useState(0);
  
  const contacts = [
    {
      id: 1,
      name: 'Hương Nguyễn',
      role: 'Y tá sau sinh',
      lastMessage: 'Em sẽ đến nhà chị.',
      time: '10:40 AM',
      unread: false,
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
      id: 2,
      name: 'Minh Tâm',
      role: 'Huấn luyện giấc ngủ',
      lastMessage: 'Bé nhà chị ngủ được mấy tiếng rồi?',
      time: '9:15 AM',
      unread: true,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Thu Thủy',
      role: 'Chăm bé',
      lastMessage: 'Vâng, ngày mai em sẽ đến sớm.',
      time: 'Hôm qua',
      unread: false,
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 4,
      name: 'Thanh Hà',
      role: 'Y tá sau sinh',
      lastMessage: 'Chị có thể gửi ảnh bé cho em xem không?',
      time: 'Hôm qua',
      unread: false,
      avatar: 'https://randomuser.me/api/portraits/women/54.jpg'
    }
  ];

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Hương Nguyễn',
      message: 'Chào chị, em có thể gặp chị lúc 10h sáng mai được không?',
      time: '10:30 AM',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      isCurrentUser: false
    },
    {
      id: 2,
      sender: 'Mai Trần',
      message: 'Được chứ, mình gặp ở đâu?',
      time: '10:35 AM',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      isCurrentUser: true
    },
    {
      id: 3,
      sender: 'Hương Nguyễn',
      message: 'Em sẽ đến nhà chị.',
      time: '10:40 AM',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      isCurrentUser: false
    }
  ]);

  const handleSendMessage = (message) => {
    const newMessage = {
      id: messages.length + 1,
      sender: 'Mai Trần',
      message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      isCurrentUser: true
    };
    
    setMessages([...messages, newMessage]);
  };

  return (
    <motion.div
      className="flex flex-col h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!isDesktop && <Header title="Trò chuyện hỗ trợ" showVideoCall={true} />}
      
      {isDesktop ? (
        <div className="flex h-full">
          {/* Contacts sidebar */}
          <div className="w-80 border-r border-gray-200 bg-white h-full flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Trò chuyện</h2>
              <div className="mt-3 relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {contacts.map((contact, index) => (
                <motion.div 
                  key={contact.id}
                  className={`p-4 border-b border-gray-100 flex items-center cursor-pointer ${
                    activeContact === index ? 'bg-lightPink' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveContact(index)}
                  whileHover={{ backgroundColor: activeContact === index ? '' : '#f9fafb' }}
                >
                  <div className="relative">
                    <img 
                      src={contact.avatar} 
                      alt={contact.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {contact.unread && (
                      <span className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-white"></span>
                    )}
                  </div>
                  
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{contact.name}</h3>
                      <span className="text-xs text-gray-500">{contact.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{contact.role}</p>
                    <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Chat area */}
          <div className="flex-1 flex flex-col bg-gray-50">
            {/* Chat header */}
            <div className="bg-white p-4 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center">
                <img 
                  src={contacts[activeContact].avatar} 
                  alt={contacts[activeContact].name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h3 className="font-medium">{contacts[activeContact].name}</h3>
                  <p className="text-xs text-gray-500">{contacts[activeContact].role}</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <PhoneIcon className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <VideoCameraIcon className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              {messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  message={msg.message}
                  sender={msg.sender}
                  time={msg.time}
                  avatar={msg.avatar}
                  isCurrentUser={msg.isCurrentUser}
                />
              ))}
            </div>
            
            {/* Input area */}
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      ) : (
        <>
          <motion.div 
            className="text-center py-3 bg-gray-50 border-b border-gray-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h2 className="text-lg font-medium">Hôm nay</h2>
          </motion.div>
          
          <div className="flex-1 overflow-y-auto p-4 pb-16">
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg.message}
                sender={msg.sender}
                time={msg.time}
                avatar={msg.avatar}
                isCurrentUser={msg.isCurrentUser}
              />
            ))}
          </div>
          
          <ChatInput onSendMessage={handleSendMessage} />
        </>
      )}
    </motion.div>
  );
};

export default SupportChat; 