import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ6MuRFkDOC7jkoRhE9EG8ekhtjGgw2LQ",
  authDomain: "chitchat-7f98d.firebaseapp.com",
  projectId: "chitchat-7f98d",
  storageBucket: "chitchat-7f98d.appspot.com",
  messagingSenderId: "931949562954",
  appId: "1:931949562954:web:5efbabe568090e9f1c2ab3",
  measurementId: "G-MW4YM9HBG3",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
