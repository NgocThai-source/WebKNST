import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import AIMessage from '../components/AIMessage';
import ChatInput from '../components/ChatInput';
import { Cog6ToothIcon, InformationCircleIcon, BookmarkIcon, ArrowPathIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import useResponsive from '../hooks/useResponsive';

const MomHelperAI = () => {
  const { isDesktop } = useResponsive();
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "Chào bạn, mình là Mom Helper. Mình có thể hỗ trợ bạn về thai kỳ, em bé hoặc trẻ nhỏ. Hôm nay bạn cần mình giúp gì?",
      time: "3:20 PM",
      isUser: false
    },
    {
      id: 2,
      message: "Làm sao để cho trẻ sơ sinh bú đúng cách?",
      time: "3:21 PM",
      isUser: true
    },
    {
      id: 3,
      message: "Việc cho con bú là một kỹ năng cần luyện tập để trở nên thuần thục hơn. Dưới đây là vài mẹo giúp bạn bắt đầu:\n\n- Đầu tiên, hãy chọn một tư thế ngồi thật thoải mái.\n- Sau đó, đưa bé lại gần ngực bạn. Hãy đảm bảo đầu và thân bé nằm trên một đường thẳng.\n- Cuối cùng, đỡ cổ và vai bé một cách nhẹ nhàng.\n\nNếu bạn cần thêm thông tin, đừng ngại nói với mình nhé!",
      time: "3:22 PM",
      isUser: false
    }
  ]);

  const suggestedQuestions = [
    "Làm thế nào để giúp trẻ sơ sinh ngủ ngon?",
    "Các dấu hiệu nhận biết trẻ đói",
    "Lịch tiêm chủng cho trẻ sơ sinh",
    "Cách xử lý khi trẻ bị sốt"
  ];

  const handleSendMessage = (message) => {
    const newMessage = {
      id: messages.length + 1,
      message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true
    };
    
    setMessages([...messages, newMessage]);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        message: "Cảm ơn bạn đã chia sẻ. Tôi sẽ cung cấp thêm thông tin chi tiết về cách cho bé bú đúng trong vài phút tới. Bạn có thể đặt thêm câu hỏi nếu cần.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: false
      };
      
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  return (
    <motion.div
      className="flex flex-col h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!isDesktop ? (
        <div className="bg-white p-4 flex items-center justify-between shadow-sm">
          <h1 className="text-xl font-semibold">MomHelper AI</h1>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Cog6ToothIcon className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <Header title="MomHelper AI" />
      )}
      
      {isDesktop ? (
        <div className="flex flex-1 overflow-hidden">
          {/* Left sidebar */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Hội thoại mới</h2>
              <p className="text-sm text-gray-500 mt-1">Hỏi MomHelper AI về bất kỳ vấn đề nào liên quan đến chăm sóc trẻ</p>
            </div>
            
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 mb-2">LỊCH SỬ HỘI THOẠI</h3>
              <div className="space-y-2">
                {["Cách chăm sóc trẻ sơ sinh", "Thực đơn ăn dặm cho bé 6 tháng", "Các dấu hiệu sốt ở trẻ"].map((title, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                  >
                    <DocumentTextIcon className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-sm">{title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="p-4 mt-auto border-t border-gray-200">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium flex items-center">
                  <InformationCircleIcon className="w-5 h-5 mr-2 text-primary" />
                  Về MomHelper AI
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  MomHelper AI được thiết kế để hỗ trợ các bà mẹ với thông tin về chăm sóc trẻ sơ sinh và trẻ nhỏ.
                </p>
              </div>
            </div>
          </div>
          
          {/* Main chat area */}
          <div className="flex-1 flex flex-col bg-gray-50">
            <div className="flex-1 overflow-y-auto p-4 pb-16">
              {messages.map((msg) => (
                <AIMessage
                  key={msg.id}
                  message={msg.message}
                  time={msg.time}
                  isUser={msg.isUser}
                />
              ))}
            </div>
            
            {/* Suggested questions */}
            <div className="px-4 py-3 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Câu hỏi gợi ý:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    className="text-xs bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1.5 text-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSendMessage(question)}
                  >
                    {question}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
          
          {/* Right sidebar */}
          <div className="w-80 bg-white border-l border-gray-200 p-4 hidden lg:block">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="font-medium mb-2">Tùy chọn AI</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Phong cách trả lời</label>
                  <select className="w-full border border-gray-300 rounded-lg p-2 text-sm">
                    <option>Chi tiết</option>
                    <option>Ngắn gọn</option>
                    <option>Thân thiện</option>
                    <option>Chuyên nghiệp</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Độ tuổi trẻ</label>
                  <select className="w-full border border-gray-300 rounded-lg p-2 text-sm">
                    <option>Sơ sinh (0-3 tháng)</option>
                    <option>Trẻ nhỏ (3-12 tháng)</option>
                    <option>Trẻ tập đi (1-3 tuổi)</option>
                    <option>Mầm non (3-5 tuổi)</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Lưu trữ</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-center p-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  <BookmarkIcon className="w-4 h-4 mr-2" />
                  Lưu hội thoại
                </button>
                
                <button className="w-full flex items-center justify-center p-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  <ArrowPathIcon className="w-4 h-4 mr-2" />
                  Hội thoại mới
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto p-4 pb-16">
            {messages.map((msg) => (
              <AIMessage
                key={msg.id}
                message={msg.message}
                time={msg.time}
                isUser={msg.isUser}
              />
            ))}
          </div>
          
          <ChatInput onSendMessage={handleSendMessage} />
        </>
      )}
    </motion.div>
  );
};

export default MomHelperAI; 