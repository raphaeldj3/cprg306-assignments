// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKqSZYrgltOkpq3wdu7kLarDxD7y5TCqs",
  authDomain: "cprg306-assignments-b7d78.firebaseapp.com",
  projectId: "cprg306-assignments-b7d78",
  storageBucket: "cprg306-assignments-b7d78.firebasestorage.app",
  messagingSenderId: "35709986775",
  appId: "1:35709986775:web:2bd214647b719ecce1cd92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);