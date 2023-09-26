import React from "react";

const ThreadItem = ({ data }) => {
  return (
    <div className="threads">
      <div className="profile-img-container">
        <img src={data.userProfileImg} alt="user" />
        <div
          style={{
            backgroundColor: "#3DC13C",
            height: "0.75rem",
            width: "0.75rem",
            position: "absolute",
            borderRadius: "50%",
            bottom: "1rem",
            left: "3rem",
          }}
        ></div>
      </div>

      <div className="thread-message">
        <div>
          <p style={{ fontWeight: "bold" }}>{data.username}</p>
          <p
            style={{
              fontSize: "0.75rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
            }}
          >
            {data.lastMessage}
          </p>
        </div>
      </div>

      <div className="thread-info">
        <p style={{ fontSize: "0.75rem" }}>{data.lastMessageTime}</p>

        {data.unreadMessages > 0 && (
          <div className="unread-messages">
            <p style={{ fontSize: "0.7rem" }}>{data.unreadMessages}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreadItem;
