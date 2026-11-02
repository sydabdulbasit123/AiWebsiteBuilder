// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webbuilder-dc568.firebaseapp.com",
  projectId: "webbuilder-dc568",
  storageBucket: "webbuilder-dc568.firebasestorage.app",
  messagingSenderId: "132171321745",
  appId: "1:132171321745:web:3ea024f3a5c967cf9f8a30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider =new GoogleAuthProvider();

export { auth, provider };
