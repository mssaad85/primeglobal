// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKdOPSx4uMC4fPun9C-wvim6kyFSrwY-o",
  authDomain: "prime-8b57a.firebaseapp.com",
  projectId: "prime-8b57a",
  storageBucket: "prime-8b57a.firebasestorage.app",
  messagingSenderId: "137360923319",
  appId: "1:137360923319:web:f85c829aaec73fa6014b32",
  measurementId: "G-FVBW8L45J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);