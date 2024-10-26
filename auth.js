// auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase/firebaseConfig';  // Import Auth from firebaseConfig.js
import { addUser } from './firebase/database';  // Import function to add users to Realtime Database

// Function to register a new user
export const registerUser = (email, password, additionalData) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User registered:', user);

      // Add additional user data to Realtime Database
      addUser(user.uid, additionalData);
    })
    .catch((error) => {
      console.error('Error registering user:', error);
    });
};

// Function to sign in a user
export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User signed in:', user);
    })
    .catch((error) => {
      console.error('Error signing in:', error);
    });
};
