import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import FindCaregivers from './pages/FindCaregivers';
import BabyJournal from './pages/BabyJournal';
import SupportChat from './pages/SupportChat';
import BookingCalendar from './pages/BookingCalendar';
import MomHelperAI from './pages/MomHelperAI';
import Layout from './components/Layout';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-secondary text-textDark">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<FindCaregivers />} />
            <Route path="journal" element={<BabyJournal />} />
            <Route path="chat" element={<SupportChat />} />
            <Route path="booking" element={<BookingCalendar />} />
            <Route path="ai" element={<MomHelperAI />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App; 