// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-68f13.firebaseapp.com",
  projectId: "mern-estate-68f13",
  storageBucket: "mern-estate-68f13.appspot.com",
  messagingSenderId: "787406461087",
  appId: "1:787406461087:web:195041ef991d7a2310aaaa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);