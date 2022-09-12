import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCs-_jvgnYTnQ9ySWTm8n3o37X1w-OLQgI",
  authDomain: "chat-1cc48.firebaseapp.com",
  projectId: "chat-1cc48",
  storageBucket: "chat-1cc48.appspot.com",
  messagingSenderId: "817435907707",
  appId: "1:817435907707:web:64146a610f84f01161f4de",
  measurementId: "G-G041H9H790"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();