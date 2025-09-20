// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOre33gkmJBwwrDtOQdBOzVGqJXnneBCI",
  authDomain: "chatroom-2495d.firebaseapp.com",
  projectId: "chatroom-2495d",
  storageBucket: "chatroom-2495d.appspot.com",
  messagingSenderId: "68969405777",
  appId: "1:68969405777:web:42f0c1ea63b519b216c770"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);