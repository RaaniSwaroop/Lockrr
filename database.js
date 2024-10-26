// database.js
import { ref, set, onValue } from "firebase/database";
import { database } from './firebaseConfig';  // Import Realtime Database from firebaseConfig.js

// Function to add user data to Realtime Database
export const addUser = (userId, additionalData) => {
  set(ref(database, 'users/' + userId), {
    username: additionalData.username,
    email: additionalData.email,
    phone: additionalData.phone,
    location: additionalData.location,
    department: additionalData.department,
    checkbox: additionalData.checkbox
  }).then(() => {
    console.log('User data added successfully!');
  }).catch((error) => {
    console.error('Error adding user data:', error);
  });
};

// Function to fetch user data from Realtime Database
export const getUserData = (userId) => {
  const userRef = ref(database, 'users/' + userId);
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    console.log('User data:', data);
    // Handle the retrieved data (e.g., update UI)
  });
};
