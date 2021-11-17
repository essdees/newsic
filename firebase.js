// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV66dEDMd9Ru8WDSfK_Ymzx1oZ8j_vWKA",
  authDomain: "newsic-ab69c.firebaseapp.com",
  projectId: "newsic-ab69c",
  storageBucket: "newsic-ab69c.appspot.com",
  messagingSenderId: "106349470334",
  appId: "1:106349470334:web:293e87fe22f67e2fd32e2f",
  measurementId: "G-5PSTBYM5HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);