// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey=process.env.apiKey;
const authDomain=process.env.authDomain;
const projectId=process.env.projectId;
const storageBucket=process.env.storageBucket;
const messagingSenderId=process.env.messagingSenderId;
const appId=process.env.appId;
const measurementId=process.env.measurementId;


const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);