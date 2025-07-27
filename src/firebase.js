// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvx5kDXKKNofX8h-KW3ND1LP4CfvWwy4I",
  authDomain: "sign-up-2ff75.firebaseapp.com",
  projectId: "sign-up-2ff75",
  storageBucket: "sign-up-2ff75.firebasestorage.app",
  messagingSenderId: "205052365518",
  appId: "1:205052365518:web:3fac33f28d8b78a7f31e9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
