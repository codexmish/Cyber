// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUhB91BlKnZsbgN2wyiNrRb1rBg5IYddw",
  authDomain: "cyber-87381.firebaseapp.com",
  projectId: "cyber-87381",
  storageBucket: "cyber-87381.firebasestorage.app",
  messagingSenderId: "457538270080",
  appId: "1:457538270080:web:a72285a0e750b3e6728765",
  measurementId: "G-Y9T2P5ZQB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app