// firebaseService.js
import { database } from '../firebase/firebaseConfig'; // Ensure this path is correct
import { ref, set, onValue } from "firebase/database"; // Import onValue here

// Function to store locker data
export const storeLockerData = (lockerId, lockerData) => {
  const lockerRef = ref(database, 'lockers/' + lockerId);
  return set(lockerRef, {
    ...lockerData,
    timestamp: Date.now()
  });
};

// Function to fetch booking history
export const fetchBookingHistory = () => {
  const historyRef = ref(database, 'lockers');
  return new Promise((resolve, reject) => {
    onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        resolve(data);
      } else {
        reject('No data available');
      }
    });
  });
};
