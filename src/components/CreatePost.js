import React, { useState } from "react";
import { callApi } from "../api";

import "./specificStyles.css";
import { Button } from "@material-ui/core";

const CreatePost = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [deliver, setDeliver] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const token = data?.data?.token;
    // if there's data, tack on data prop. if data.data tack on token prop
    const data = await callApi({
      url: `/posts`,
      body: { post: { title, description, price, location, deliver } },
      method: "POST",
      token: token,
    });

    const postSuccess = data?.success;
    if (postSuccess) {
      window.alert("Post submitted!")
      history.push("/");
    } else {
      window.alert("Post wasn't successful");
    }
    //  console.log("hey", data)
  }; 

  return (
    <div className="createPostPage">
      <h2 className="createPost">Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="titleText" htmlFor="Title">
            Title:
          </div>
          <input
            className="title"
            type="text"
            // placeholder="Title"
            required
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <div>
          <div className="descriptionText" htmlFor="Description">
            Description:
          </div>
          <textarea
            className="description"
            type="text"
            // placeholder="Description"
            required
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div>
          <div className="priceText" htmlFor="Price">
            Price:
          </div>
          <input
            className="price"
            type="number"
            // placeholder="Price"
            required
            onChange={(event) => setPrice(event.target.value)}
          ></input>
        </div>
        <div>
          <div className="locationText" htmlFor="Location">
            Location:
          </div>
          <input
            className="location"
            type="text"
            // placeholder="Location"
            required
            onChange={(event) => setLocation(event.target.value)}
          ></input>
        </div>
        <div className="willDeliver">
          <div>
            Will Deliver ?{" "}
            <select
              value={deliver}
              onChange={(event) => {
                setDeliver(event.target.value);
              }}
            >
              <option value={true}> -- select an option -- </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div>
          <Button
            type="submit"
            style={{
              display: "flex",
              marginTop: "15px",
              marginLeft: "15px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
