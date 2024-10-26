// src/components/CancelLocker.js
import React, { useState, useEffect } from 'react';
import { ref, remove, onValue } from 'firebase/database';
import { database } from './firebase/firebaseConfig'; // Adjust this path as needed

const CancelLocker = () => {
  const [bookedLockers, setBookedLockers] = useState([]);
  const [lockerIdToCancel, setLockerIdToCancel] = useState('');
  const [message, setMessage] = useState('');

  // Fetch booked lockers from Firebase
  useEffect(() => {
    const lockersRef = ref(database, 'lockers/');
    onValue(lockersRef, (snapshot) => {
      const data = snapshot.val();
      const lockers = data ? Object.entries(data).map(([id, details]) => ({ id, ...details })) : [];
      setBookedLockers(lockers);
    });
  }, []);

  const handleCancelLocker = async (e) => {
    e.preventDefault();
    if (lockerIdToCancel) {
      try {
        const lockerRef = ref(database, 'lockers/' + lockerIdToCancel);
        await remove(lockerRef);
        setMessage(`Locker ${lockerIdToCancel} has been canceled successfully.`);
        setLockerIdToCancel('');
      } catch (error) {
        setMessage(`Error canceling the locker: ${error.message}`);
      }
    } else {
      setMessage('Please enter a locker ID.');
    }
  };

  return (
    <div>
      <h2>Cancel Locker</h2>
      <form onSubmit={handleCancelLocker}>
        <input
          type="text"
          placeholder="Enter Locker ID"
          value={lockerIdToCancel}
          onChange={(e) => setLockerIdToCancel(e.target.value)}
          required
        />
        <button type="submit">Cancel Locker</button>
      </form>
      <p>{message}</p>
      <h3>Booked Lockers:</h3>
      <ul>
        {bookedLockers.map((locker) => (
          <li key={locker.id}>
            Locker ID: {locker.id}, Location: {locker.lockerLocation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CancelLocker;
