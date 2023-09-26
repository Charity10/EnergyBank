import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtAaORB_jd6uI2yEXq-h2TdnmUpGdyPKk",
  authDomain: "energydatabank.firebaseapp.com",
  projectId: "energydatabank",
  storageBucket: "energydatabank.appspot.com",
  messagingSenderId: "405722561657",
  appId: "1:405722561657:web:a846cdfedbbfd543f2e8a8"
};

// Initialize Firebase[=]
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()

// Sign-In with email and password



