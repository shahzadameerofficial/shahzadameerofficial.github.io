
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "portfolio-35cba.firebaseapp.com",
  projectId: "portfolio-35cba",
  storageBucket: "portfolio-35cba.appspot.com",
  messagingSenderId: "1024327941916",
  appId: "1:1024327941916:web:2749655bbfaf281f9a84d9",
  measurementId: "G-L68DB9KMWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export {auth, db, storage}