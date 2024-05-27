// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8-z9672HY5iO61la8ESPcA5tCAixQKVw",
  authDomain: "cassandra-53625.firebaseapp.com",
  projectId: "cassandra-53625",
  storageBucket: "cassandra-53625.appspot.com",
  messagingSenderId: "983007274898",
  appId: "1:983007274898:web:76e8280121a9bdbf81434b",
  measurementId: "G-0PJ8X5554Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
