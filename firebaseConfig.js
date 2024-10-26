// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Import the database function

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSKcXhZgMiPno-TF-9zQob2utDQRzTeQk",
  authDomain: "lockrr.firebaseapp.com",
  databaseURL: "https://lockrr-default-rtdb.asia-southeast1.firebasedatabase.app", 
  projectId: "lockrr",
  storageBucket: "lockrr.appspot.com",
  messagingSenderId: "712096170287",
  appId: "1:712096170287:web:e4cb40b9f2b6c1e182e1da",
  measurementId: "G-LSJJ5B8LMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Database
export const auth = getAuth(app);
export const database = getDatabase(app); // Export the database instance

