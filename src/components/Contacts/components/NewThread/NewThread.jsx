import { useState } from "react";
import "./NewThread.css";
import { MdOutlineChat } from "react-icons/md";

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { db } from "../../../../../firebase";

const NewThread = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [email, setEmail] = useState("");

  const usersCollection = collection(db, "users"); // Reference to the 'users' collection

  const startNewThread = async (e) => {
    e.preventDefault();
    setPopupVisible(false);

    try {
      // Query Firestore to find the user document with the given email
      const q = query(usersCollection, where("email", "==", e.target[0].value));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size === 0) {
        console.log("No user found with the email:", email);
      } else {
        querySnapshot.forEach(async (doc) => {
          const toUid = doc.data().uid;
          console.log("User UID:", toUid);

          // Send a "Hello, there!" message
          const messagesCollection = collection(db, "messages"); // Replace with your messages collection name
          const newMessage = {
            message: "Hello, there!",
            to: toUid,
            from: JSON.parse(localStorage.getItem("user")).uid,
            time: new Date().toISOString(), // Use the current timestamp
            type: "sent",
          };

          try {
            await addDoc(messagesCollection, newMessage);
            console.log("Message sent successfully:", newMessage);
          } catch (error) {
            console.error("Error sending message:", error);
          }
        });
      }
    } catch (error) {
      console.error("Error searching for user by email: ", error);
    }
  };

  return (
    <>
      <button id="new-thread" onClick={() => setPopupVisible(true)}>
        <MdOutlineChat size={20} />
        <p style={{ marginLeft: "0.5rem" }}>New Chat</p>
      </button>

      <div
        style={{ display: popupVisible ? "block" : "none" }}
        id="new-thread-popup-backdrop"
        onClick={() => setPopupVisible(false)}
      ></div>

      <div
        style={{ display: popupVisible ? "block" : "none" }}
        id="new-thread-popup"
      >
        <p>New Thread</p>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form onSubmit={startNewThread}>
            <input
              style={{
                outline: "none",
                border: "none",
                fontSize: "1rem",
                flex: 1,
                marginRight: "1rem",
              }}
              type="text"
              placeholder="Enter email address"
            />
            <button
              style={{
                outline: "none",
                border: "none",
                backgroundColor: "blue",
                padding: "0.5rem",
                color: "white",
                borderRadius: "0.5rem",
                marginTop: "1rem",
              }}
            >
              Start Conversation
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewThread;
