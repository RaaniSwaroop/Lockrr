// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage'; 
import SignUpPage from './SignUpPage';
import BookingPage from './components/BookingPage'; 
import BookingHistory from './components/BookingHistory';
import CancelLocker from './CancelLocker'; // Import CancelLocker
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />  
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/book-locker" element={<BookingPage />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/cancel" element={<CancelLocker />} /> {/* Route for CancelLocker */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
