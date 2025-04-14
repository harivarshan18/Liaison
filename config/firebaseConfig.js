// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "liaisonmain-5c6ca.firebaseapp.com",
  projectId: "liaisonmain-5c6ca",
  storageBucket: "liaisonmain-5c6ca.appspot.com",
  messagingSenderId: "1087000060631",
  appId: "1:1087000060631:web:bd29e2d780b59d3bf2c692",
  measurementId: "G-RG81PZYPMG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const analytics = getAnalytics(app);