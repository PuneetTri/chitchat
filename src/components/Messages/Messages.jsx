import React, { useState, useEffect, useRef } from "react";
import { MdAdd, MdArrowBack, MdCall, MdMic, MdVideocam } from "react-icons/md";
import "./Messages.css";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";

const Messages = ({ data, setData, intendedRecipient }) => {
  // Retrieve the user data from localStorage
  const userData = JSON.parse(localStorage.getItem("user"));

  const [messageText, setMessageText] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [data]);

  const sendMessage = async (e) => {
    e.preventDefault();

    const message = messageText.trim();
    if (message === "") return;

    // Retrieve the user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      const newMessage = {
        message,
        for: intendedRecipient, // Replace with the intended recipient's user ID
        from: userData.uid, // Use the user's UID as the sender
        time: Timestamp.fromDate(new Date()), // Use Firebase Timestamp for time
        type: "sent",
      };

      try {
        // Add the message to a "messages" collection in Firestore
        const docRef = await addDoc(collection(db, "messages"), newMessage);

        // Update the local state with the new message
        setData([...data, { ...newMessage, id: docRef.id }]);

        // Clear the message input
        setMessageText("");

        // Scroll to the bottom
        scrollToBottom();
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <div id="messages">
      <header>
        <div id="messages-header-user-btns">
          <button>
            <MdArrowBack size={20} />
          </button>
          <img
            id="user-profile-img"
            src="https://picsum.photos/500"
            alt="user"
            style={{ marginRight: "0.5rem" }}
          />
          <div>
            <p style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
              Chris Rock
            </p>
            <p style={{ fontSize: "0.75rem" }}>Online</p>
          </div>
        </div>

        <div id="messages-header-extra-btns">
          <button>
            <MdCall size={20} />
          </button>

          <button>
            <MdVideocam size={20} />
          </button>
        </div>
      </header>

      <div id="messages-logs-container">
        <div
          id="messages-logs"
          style={{ maxHeight: "calc(100vh - 150px)", overflowY: "auto" }}
        >
          {data.map((message, index) =>
            message.from !== userData.uid ? (
              <div
                style={{ maxWidth: "60%", width: "auto", textAlign: "left" }}
                className="message-container"
                key={index}
              >
                <p>{message.message}</p>
                <p style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>
                  12:53 PM
                </p>
              </div>
            ) : (
              <div
                style={{ textAlign: "right", maxWidth: "60%", width: "auto" }}
                className="message-container-user"
                key={index}
              >
                <p>{message.message}</p>
                <p style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>
                  12:00 PM
                </p>
              </div>
            )
          )}
          <div ref={messagesEndRef} />
        </div>

        <div id="messages-input-container">
          <button>
            <MdAdd size={20} />
          </button>

          <form onSubmit={sendMessage} style={{ width: "100%" }}>
            <input
              style={{ width: "100%" }}
              placeholder="Enter a message"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
          </form>
          <button>
            <MdMic size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
