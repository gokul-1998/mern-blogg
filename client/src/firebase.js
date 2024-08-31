// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdrHYmvwvvmFBmtAWkjewzKKUQ4KCjqQA",
  authDomain: "mern-blog-c5108.firebaseapp.com",
  projectId: "mern-blog-c5108",
  storageBucket: "mern-blog-c5108.appspot.com",
  messagingSenderId: "764012665242",
  appId: "1:764012665242:web:ccea103a8c0096882d8223",
  measurementId: "G-K27V3QZ7DY"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);