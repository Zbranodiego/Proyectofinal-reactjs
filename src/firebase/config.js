// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd3FXhwdvZGgQE_D-I4pDX2Od98Xg-DMs",
  authDomain: "final-f3a78.firebaseapp.com",
  projectId: "final-f3a78",
  storageBucket: "final-f3a78.appspot.com",
  messagingSenderId: "652536564604",
  appId: "1:652536564604:web:e33857e43cb00c569db2f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app