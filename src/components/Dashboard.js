import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { callApi } from "../api";

import { Button } from "@material-ui/core";
import "./specificStyles.css";

const Dashboard = ({ token, userData }) => {
  const myMessages = userData.messages;
  // console.log("dashboard", myMessages);
  // console.log(myMessages[0].content)
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    const data = await callApi({
      url: `/posts`,
      body: { post: { title, description, price, location, deliver } },
      method: "GET",
      token: token,
    });
  };

  return (
    <div className="dashboardBody">
      <h3 className="userDashboardTitle">{userData.username}'s Dashboard</h3>
      <h2 className="messagesHeading">Messages</h2>

      {myMessages.map((message) => (
        <div
          key={message._id}
          style={{ borderTop: "1px solid black", padding: ".5em" }}
        >
          <h5>{message.fromUser.username}</h5>
          <div>Message:{message.content}</div>
          <div>Post: {message.post.title} </div>
          <button
            className="viewPostsButton"
            onClick={() => {
              history.push(`/reply/${message.post._id}`);
            }}
          >
            Reply
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
