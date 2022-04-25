// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW2iLG7VVcRii6V8dT20NtlyFSAqzu5zA",
  authDomain: "memory-josh-clyde.firebaseapp.com",
  projectId: "memory-josh-clyde",
  storageBucket: "memory-josh-clyde.appspot.com",
  messagingSenderId: "968343289882",
  appId: "1:968343289882:web:59e8c6b6560c8fd70251a3",
  measurementId: "G-668CH9FZ8Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
