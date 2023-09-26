import {
  MdArrowBack,
  MdBlock,
  MdNotifications,
  MdReport,
} from "react-icons/md";
import "./Details.css";
import { useState, useEffect } from "react";

const Details = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const logsElement = document.getElementById("thread-details");
      if (logsElement) {
        const offset = logsElement.scrollTop;
        setScrolled(offset > 100);
      }
    };

    const logsElement = document.getElementById("thread-details");
    if (logsElement) {
      logsElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (logsElement) {
        logsElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div id="details">
      <header>
        <div id="details-navigation">
          <button>
            <MdArrowBack size={20} />
          </button>
        </div>

        <div id="tab-title" style={{ padding: scrolled && "0.5rem" }}>
          <p
            style={{
              fontWeight: "700",
              fontSize: "2rem",
              fontSize: scrolled ? "1.5rem" : "2rem",
              marginTop: scrolled ? "-3.4rem" : "0",
              marginLeft: scrolled ? "1.5rem" : "0",
              transition: "all 0.2s ease",
            }}
          >
            Details
          </p>
        </div>
      </header>

      <div id="thread-details">
        <div className="details-box" style={{ alignItems: "center" }}>
          <img
            style={{
              height: "8rem",
              width: "8rem",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
            src="https://picsum.photos/500"
          />

          <div style={{ textAlign: "center" }}>
            <p style={{ marginBottom: "0.5rem" }}>chrisrock@mail.com</p>
            <p
              style={{
                marginBottom: "0.5rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Chris Rock
            </p>
            <p style={{ fontSize: "0.75rem" }}>Online</p>
          </div>
        </div>

        <div className="details-box">
          {/* Mute notifiications */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MdNotifications style={{ marginRight: "1rem" }} size={20} />
              <p>Mute Notifications</p>
            </div>

            <div>
              <input type="checkbox" />
            </div>
          </div>

          {/* Disappearing messages */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MdNotifications style={{ marginRight: "1rem" }} size={20} />
              <p>Disappearing Messages</p>
            </div>

            <div>
              <input type="checkbox" />
            </div>
          </div>

          {/* Auto-download media */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MdNotifications style={{ marginRight: "1rem" }} size={20} />
              <p>Auto-download media</p>
            </div>

            <div>
              <input type="checkbox" />
            </div>
          </div>
        </div>

        <div className="details-box">
          <p
            style={{
              fontSize: "0.75rem",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}
          >
            Media
          </p>
          <div id="media-display">
            <img
              style={{ borderRadius: "0.5rem", height: "6rem", width: "6rem" }}
              src="https://picsum.photos/100"
            />
            <img
              style={{ borderRadius: "0.5rem", height: "6rem", width: "6rem" }}
              src="https://picsum.photos/200"
            />
            <img
              style={{ borderRadius: "0.5rem", height: "6rem", width: "6rem" }}
              src="https://picsum.photos/300"
            />
            <img
              style={{ borderRadius: "0.5rem", height: "6rem", width: "6rem" }}
              src="https://picsum.photos/400"
            />
            <img
              style={{ borderRadius: "0.5rem", height: "6rem", width: "6rem" }}
              src="https://picsum.photos/500"
            />
            <img
              style={{ borderRadius: "0.5rem", height: "6rem", width: "6rem" }}
              src="https://picsum.photos/150"
            />
            <img
              style={{ borderRadius: "0.5rem", height: "6rem", width: "6rem" }}
              src="https://picsum.photos/250"
            />
            <img
              style={{ borderRadius: "0.5rem", height: "6rem", width: "6rem" }}
              src="https://picsum.photos/350"
            />
            <img
              style={{ borderRadius: "0.5rem", height: "6rem", width: "6rem" }}
              src="https://picsum.photos/450"
            />
          </div>
        </div>

        {/* User logout and report */}
        <div className="details-box">
          <button className="red-btn" style={{ marginBottom: "1rem" }}>
            <MdBlock style={{ marginRight: "1rem" }} size={20} />
            <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Block Username
            </p>
          </button>
          <button className="red-btn">
            <MdReport style={{ marginRight: "1rem" }} size={20} />
            <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Report Username
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
