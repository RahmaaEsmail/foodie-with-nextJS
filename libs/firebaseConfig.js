// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-4pw2T9nLU1rUBQaQLal1plXGNLPPsMQ",
  authDomain: "foodie-app-e686d.firebaseapp.com",
  projectId: "foodie-app-e686d",
  storageBucket: "foodie-app-e686d.appspot.com",
  messagingSenderId: "731749195587",
  appId: "1:731749195587:web:f4107893a9b22c5baed9f6",
  measurementId: "G-BSLS9V2G1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);