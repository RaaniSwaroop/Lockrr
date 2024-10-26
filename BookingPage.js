import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from '../firebase/firebaseConfig'; // Adjust this path

const BookingPage = () => {
  const [lockerId, setLockerId] = useState('');
  const [lockerLocation, setLockerLocation] = useState('');
  const [lockerPassword, setLockerPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (lockerId && lockerLocation && lockerPassword) {
      try {
        // Store locker booking data in Firebase under 'lockers'
        const lockerRef = ref(database, 'lockers/' + lockerId);
        await set(lockerRef, {
          lockerId,
          lockerLocation,
          lockerPassword,
        });

        setSuccess('Locker booked successfully!');
        setLockerId('');
        setLockerLocation('');
        setLockerPassword('');
      } catch (error) {
        setError('Error booking the locker: ' + error.message);
      }
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Book a Locker</h2>
      <form onSubmit={handleBooking}>
        <div>
          <input
            type="text"
            placeholder="Locker ID"
            value={lockerId}
            onChange={(e) => setLockerId(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Locker Location"
            value={lockerLocation}
            onChange={(e) => setLockerLocation(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Locker Password"
            value={lockerPassword}
            onChange={(e) => setLockerPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>Book Locker</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default BookingPage;
