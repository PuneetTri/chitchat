import React, { useState } from "react";
import Contacts from "./components/Contacts/Contacts";
import Messages from "./components/Messages/Messages";
import Details from "./components/Details/Details";

const Home = () => {
  const [contacts, setContacts] = useState([
    // Create place holder contacts here atleast 10
    {
      id: 1,
      username: "John Doe",
      userProfileImg: "https://via.placeholder.com/50",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 2,
      username: "Jane Doe",
      userProfileImg: "https://via.placeholder.com/50",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 3,
      username: "John Doe",
      userProfileImg: "https://via.placeholder.com/50",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 4,
      username: "Jane Doe",
      userProfileImg: "https://via.placeholder.com/50",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 5,
      username: "John Doe",
      userProfileImg: "https://via.placeholder.com/50",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 6,
      username: "Jane Doe",
      userProfileImg: "https://via.placeholder.com/50",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 7,
      username: "John Doe",
      userProfileImg: "https://via.placeholder.com/50",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 8,
      username: "Jane Doe",
      userProfileImg: "https://via.placeholder.com/50",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 9,
      username: "John Doe",
      userProfileImg: "https://via.placeholder.com/50",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },

    {
      id: 10,
      username: "Jane Doe",
      userProfileImg: "https://via.placeholder.com/50",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 1,
    },
  ]);

  const calls = [
    {
      id: 1,
      username: "John Doe",
      userProfileImg: "https://via.placeholder.com/50",
      status: "Recieved",
      call: true,
      time: "12:00",
    },
    {
      id: 2,
      username: "Jane Doe",
      userProfileImg: "https://via.placeholder.com/50",
      status: "Missed",
      call: false,
      time: "12:00",
    },
  ];

  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "This was the message",
      for: "123", // Replace with the intended recipient's user ID
      from: "123", // Use the user's UID as the sender
      time: new Date(), // You can set the time as needed
      type: "sent",
    },
    {
      id: 2,
      message: "Hello",
      for: "1234", // Replace with the intended recipient's user ID
      from: "123", // Use the user's UID as the sender
      time: new Date(), // You can set the time as needed
      type: "sent",
    },
  ]);

  const [currentPage, setCurrentPage] = useState("contacts");

  return (
    <div id="main">
      <Contacts data={contacts} calls={calls} />

      <Messages data={messages} setData={setMessages} intendedRecipient={123} />

      <Details />
    </div>
  );
};

export default Home;
