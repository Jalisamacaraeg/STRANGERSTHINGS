
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { callApi } from "../api";

import { Button } from "@material-ui/core";
import "./specificStyles.css";

const Dashboard = ({ token, post, userData }) => {
  const myMessages = userData.messages;
  const postsToDisplay = userData.posts;
  const history = useHistory();
  // console.log("dashboard", myMessages);
  // console.log(myMessages);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const data = await callApi({
      url: `/posts/${post._id}`,
      body: { post: { title, description, price, location, deliver } },
      method: "PATCH",
      token: token,
    });
  };

  const handleDelete = async (event) => {
    const data = await callApi({
      url: `/posts`,
      body: { post: { title, description, price, location, deliver } },
      method: "DELETE",
      token: token,
    });
  };

  const handleReply = async (event) => {
    const data = await callApi({
      url: `/posts`,
      body: { post: { title, description, price, location, deliver } },
      method: "POST",
      token: token,
    });
  };

  return (
    <div className="dashboardBody">
      <h3 className="userDashboardTitle">{userData.username}'s Dashboard</h3>
      <h2 className="postsHeading">Posts</h2>

      <div>
        {postsToDisplay.map((post) => (
          <div
            key={post._id}
            style={{ borderTop: "1px solid black", padding: ".5em" }}
          >
            <h5>{post.title}</h5>
            <div>Posted by : {post.author.username}</div>
            <div>Description : {post.description}</div>
            <div>Created at: {post.createdAt}</div>

            <Button
              variant="contained"
              type="submit"
              style={{
                marginTop: "10px",
                marginRight: "15px",
                backgroundColor: "blue",
                color: "white",
              }}
              onClick={() => handleUpdate()}
            >
              Update
            </Button>

            <Button
              variant="contained"
              type="submit"
              style={{
                marginTop: "10px",
                marginRight: "15px",
                backgroundColor: "blue",
                color: "white",
              }}
              onClick={() => handleDelete()}
              // history.push(`/reply/${message.post._id}`);              
            >
              DELETE
            </Button>

          </div>
        ))}
      </div>

      <h2 className="messagesHeading">Messages</h2>
      {myMessages.map((message) => (
        <div
          key={message._id}
          style={{ borderTop: "1px solid black", padding: ".5em" }}
        >
          <h5>{message.fromUser.username}</h5>
          <div>Message:{message.content}</div>
          <div>Post: {message.post.title} </div>

          <span>
            <Button
              variant="contained"
              type="submit"
              style={{
                marginTop: "10px",
                marginRight: "15px",
                backgroundColor: "blue",
                color: "white",
              }}
              onClick={() => handleReply()}
              // history.push(`/reply/${message.post._id}`);
            >
              Reply
            </Button>
          </span>

        </div>
      ))}
    </div>
  );
};

export default Dashboard;