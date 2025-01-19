// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf324lwpFceqt6TIBzV48DuNixqmY3t4s",
  authDomain: "profile-mapping-1ab57.firebaseapp.com",
  projectId: "profile-mapping-1ab57",
  storageBucket: "profile-mapping-1ab57.firebasestorage.app",
  messagingSenderId: "998535318182",
  appId: "1:998535318182:web:6a694700ddd3ab76c00267",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
