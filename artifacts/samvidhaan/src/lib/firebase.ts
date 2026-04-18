import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Hardcoded for absolute reliability - Auth Only (No Database)
const firebaseConfig = {
  apiKey: "AIzaSyCj4SPRee9mL8Dr0Ktf-kdrnFpZkiky8RA",
  authDomain: "samvidhaan-d7d69.firebaseapp.com",
  projectId: "samvidhaan-d7d69",
  storageBucket: "samvidhaan-d7d69.firebasestorage.app",
  messagingSenderId: "523238834510",
  appId: "1:523238834510:web:3d55947df26aef05125e1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
