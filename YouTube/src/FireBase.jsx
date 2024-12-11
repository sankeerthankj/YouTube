// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore,serverTimestamp} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7SAcyCEr8q-N5NFU_8imZ1Npq7-LUVUo",
  authDomain: "yt-clone-11.firebaseapp.com",
  projectId: "yt-clone-11",
  storageBucket: "yt-clone-11.firebasestorage.app",
  messagingSenderId: "52638696171",
  appId: "1:52638696171:web:788fa328791661e58934ae",
  measurementId: "G-G7ZE17R7W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db=getFirestore();
const auth= getAuth();
const provider= new GoogleAuthProvider();
const timestamp = serverTimestamp();

export {app, analytics, db, auth, provider, timestamp};