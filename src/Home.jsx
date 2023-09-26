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
      userProfileImg: "https://picsum.photos/200",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 2,
      username: "Jane Doe",
      userProfileImg: "https://picsum.photos/100",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 3,
      username: "Will Smith",
      userProfileImg: "https://picsum.photos/300",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 4,
      username: "Chris Evans",
      userProfileImg: "https://picsum.photos/250", // User avatar,
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 5,
      username: "Chris Rock",
      userProfileImg: "https://picsum.photos/500",
      lastMessage: "This was the message",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
  ]);

  const calls = [
    {
      id: 1,
      username: "John Doe",
      userProfileImg: "https://picsum.photos/200",
      status: "Recieved",
      call: true,
      time: "12:00",
    },
    {
      id: 2,
      username: "Jane Doe",
      userProfileImg: "https://picsum.photos/250",
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
