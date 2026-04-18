import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvqvlo10QeMX79i7XRD5nI8nJdkw0yV3g",
  authDomain: "samvidhaan-73085.firebaseapp.com",
  projectId: "samvidhaan-73085",
  storageBucket: "samvidhaan-73085.firebasestorage.app",
  messagingSenderId: "111817585063",
  appId: "1:111817585063:web:a6e58f13be520aabacc682"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Firestore
export const db = getFirestore(app);

export default app;
