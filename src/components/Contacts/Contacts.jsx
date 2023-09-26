import "./Contacts.css";

import {
  MdSearch,
  MdMoreVert,
  MdChat,
  MdCall,
  MdOutlineWebStories,
  MdSettings,
  MdAdd,
  MdOutlineChat,
  MdArrowBack,
} from "react-icons/md";
import ThreadItem from "./components/ThreadItem.jsx/ThreadItem";
import { useEffect, useState } from "react";
import NewThread from "./components/NewThread/NewThread";
import StoryItem from "./components/StoryItem/StoryItem";
import CallItem from "./components/CallItem/CallItem";

const Contacts = ({ data, calls }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [scrolled, setScrolled] = useState(false);
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [activeTab, setActiveTab] = useState("messages");

  const handleSearchBarOpen = () => {
    setSearchBarActive(true);

    setTimeout(() => {
      document.getElementById("search-bar").style.width = "calc(100% - 1rem)";
    }, 1);
  };

  const handleSearchBarClose = () => {
    document.getElementById("search-bar").style.width = "0";
    setTimeout(() => {
      setSearchBarActive(false);
    }, 100);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      const logsElement = document.getElementById("logs");
      if (logsElement) {
        const offset = logsElement.scrollTop;
        setScrolled(offset > 100);
      }
    };

    const logsElement = document.getElementById("logs");
    if (logsElement) {
      logsElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (logsElement) {
        logsElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const renderContent = () => {
    if (activeTab === "messages") {
      return (
        <div>
          {data.map((thread, index) => (
            <ThreadItem key={index} data={thread} />
          ))}
          ;
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <p style={{ marginRight: "0.25rem", fontSize: "0.75rem" }}>
              These messages are
            </p>
            <p style={{ color: "#3e66fb", fontSize: "0.75rem" }}>
              end-to-end encrypted
            </p>
          </div>
        </div>
      );
    } else if (activeTab === "calls") {
      return (
        <div>
          {calls.map((call, index) => (
            <CallItem key={index} data={call} />
          ))}
          ;
        </div>
      );
    } else if (activeTab === "stories") {
      return (
        <div>
          {data.map((story, index) => (
            <StoryItem key={index} data={story} />
          ))}
          ;
        </div>
      );
    } else if (activeTab === "settings") {
      return (
        <div>
          <button
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "transparent",
              color: "red",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              marginTop: "1rem",
              cursor: "pointer",
            }}
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      );
    }
  };

  return (
    <div id="contacts">
      <header className={scrolled ? "scrolled" : ""}>
        <div id="user-info" style={{ marginTop: scrolled ? "-4rem" : "" }}>
          <div id="user-profile">
            <img id="user-profile-img" src={user.photoURL} alt="user" />
            <div>
              <p style={{ fontWeight: "800" }}>{user.displayName}</p>
              <p style={{ fontSize: "0.75rem" }}>Currently at work</p>
            </div>
          </div>

          <div
            id="search-bar"
            style={{
              position: "absolute",
              backgroundColor: "#fff",
              padding: "1rem",
              borderRadius: "1rem",
              width: "calc(100% - 1rem)",
              alignItems: "center",
              display: "flex",
              display: searchBarActive ? "flex" : "none",
              transition: "all 0.2s ease",
              width: "0",
            }}
          >
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginRight: "0.5rem",
                cursor: "pointer",
              }}
              onClick={handleSearchBarClose}
            >
              <MdArrowBack size={20} />
            </button>
            <input
              style={{
                outline: "none",
                border: "none",
                fontSize: "1rem",
                width: "100%",
              }}
              placeholder="Search..."
            />
          </div>

          <div id="extra-btns">
            <button onClick={handleSearchBarOpen}>
              <MdSearch size={20} />
            </button>
          </div>
        </div>

        <div id="tab-title" style={{ marginBottom: scrolled ? "1rem" : "" }}>
          <p
            style={{
              fontWeight: "700",
              fontSize: scrolled ? "1.5rem" : "2rem",
              height: scrolled ? "3rem" : "2.4rem",
              transition: "all 0.2s ease",
              alignItems: "center",
              display: "flex",
            }}
          >
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </p>
        </div>
      </header>
      <div id="logs">{renderContent()}</div>

      <NewThread />

      <div id="navigation-btns">
        <button
          onClick={() => handleTabClick("messages")}
          className={activeTab === "messages" ? "selected" : ""}
        >
          <MdChat size={20} />
        </button>

        <button
          onClick={() => handleTabClick("stories")}
          className={activeTab === "stories" ? "selected" : ""}
        >
          <MdOutlineWebStories size={20} />
        </button>

        <button
          onClick={() => handleTabClick("calls")}
          className={activeTab === "calls" ? "selected" : ""}
        >
          <MdCall size={20} />
        </button>

        <button
          onClick={() => handleTabClick("settings")}
          className={activeTab === "settings" ? "selected" : ""}
        >
          <MdSettings size={20} />
        </button>
      </div>
    </div>
  );
};

export default Contacts;
