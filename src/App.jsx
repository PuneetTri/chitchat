import "./App.css";
import { auth, db, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  Timestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("contacts");

  const handleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);

      // Check if the user document already exists (using email as document ID)
      const usersCollection = collection(db, "users"); // Replace 'users' with your Firestore collection name
      const q = query(usersCollection, where("email", "==", user.email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // If the document does not exist, create it with additional data
        const userDocRef = doc(usersCollection, user.email);
        await setDoc(userDocRef, {
          uid: user.uid,
          email: user.email,
          profileImg: user.photoURL,
          lastSeen: Timestamp.now(),
          username: user.displayName,
        });

        console.log("User document added:", userDocRef.id);
      } else {
        console.log("User document already exists");
      }

      // Store the user object in local storage
      localStorage.setItem("user", JSON.stringify(user));
      setSignedIn(true); // Set user state to signedIn
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      // Set user state signedIn if user is in local storage
      setSignedIn(true);
    }
  }, []);

  return signedIn ? <Home /> : <Login handleAuth={handleAuth} />;
};

export default App;
