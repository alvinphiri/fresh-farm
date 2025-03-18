import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import FarmSales from './pages/FarmSales';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/farm-sales" element={<FarmSales />} />
      </Routes>
    </Router>
  );
}

export default App;
