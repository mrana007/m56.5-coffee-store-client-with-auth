// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1X8djiQ-cnCIAunjeQWihLOrQTyFb4_g",
  authDomain: "coffee-strore.firebaseapp.com",
  projectId: "coffee-strore",
  storageBucket: "coffee-strore.appspot.com",
  messagingSenderId: "582841999590",
  appId: "1:582841999590:web:3b2ab7feb649ce4631db27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;