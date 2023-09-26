import React from "react";
import { MdCall, MdVideocam } from "react-icons/md";

const CallItem = ({ data }) => {
  console.log(data);
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
            {data.status} {data.time}
          </p>
        </div>
      </div>

      <div className="thread-info">
        {!data.call ? <MdVideocam size={20} /> : <MdCall size={20} />}
      </div>
    </div>
  );
};

export default CallItem;
