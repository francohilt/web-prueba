import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from '@/pages/HomePage';
import DashboardPage from '@/pages/DashboardPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </AnimatePresence>
      <Toaster />
    </>
  );
}

export default App;