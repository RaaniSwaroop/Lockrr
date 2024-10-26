// src/components/BookingHistory.js
import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase/firebaseConfig'; // Adjust this path as needed

const BookingHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchBookingHistory = () => {
      const lockersRef = ref(database, 'lockers/');
      onValue(lockersRef, (snapshot) => {
        const data = snapshot.val();
        const lockers = data ? Object.entries(data).map(([id, details]) => ({ id, ...details })) : [];
        setHistory(lockers);
      });
    };

    fetchBookingHistory();
  }, []);

  return (
    <div>
      <h2>Booking History</h2>
      <ul>
        {history.length > 0 ? (
          history.map((entry) => (
            <li key={entry.id}>
              Locker ID: {entry.id}, Location: {entry.lockerLocation}, Password: {entry.lockerPassword}
            </li>
          ))
        ) : (
          <li>No booking history available.</li>
        )}
      </ul>
    </div>
  );
};

export default BookingHistory;
