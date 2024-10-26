// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to LOCKR!</h1>
      <button onClick={() => navigate('/book-locker')}>Book a Locker</button>
      <br /><br />
      <button onClick={() => navigate('/cancel')}>Cancel Locker</button>
      <br /><br />
      <button onClick={() => navigate('/booking-history')}>View Booking History</button>
      </div>
  );
};

export default HomePage;
