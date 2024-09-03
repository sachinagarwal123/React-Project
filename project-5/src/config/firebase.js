// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBr9WN5ivKQ2B9D8E8IjfUHVj6vnslTc6A",
  authDomain: "vite-contact-c32dc.firebaseapp.com",
  projectId: "vite-contact-c32dc",
  storageBucket: "vite-contact-c32dc.appspot.com",
  messagingSenderId: "833952494816",
  appId: "1:833952494816:web:39af0320235e3fc6920c85"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
