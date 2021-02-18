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
      body: { post: {title, description, price, location, deliver } },
      method: "POST",
      token: token, 
   });

   const postSuccess = data?.success;
    if (postSuccess) {
      history.push("/");
    } else {
      window.alert("Post wasn't successful")
    }
  //  console.log("hey", data)
  }

  return (
    <div className="createPost">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="Title">Title:</label>
        <input
          type="text"
          placeholder="Title"
          required
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label htmlFor="Description">Description:</label>
        <input
          type="text"
          placeholder="Description"
          required          
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <label htmlFor="Price">Price:</label><input
          type="$"
          placeholder="Price"
          required          
          onChange={(event) => setPrice(event.target.value)}
        ></input>
        <label htmlFor="Location">Location:</label><input
          type="text"
          placeholder="Location"
          required          
          onChange={(event) => setLocation(event.target.value)}
        ></input>      
        {/* <div onChange={handleChange}>
          <label htmlFor="Will Deliver">Will Deliver</label>
          <input type="radio" id="yes" value="yes" />
          <input type="radio" id="no" value="no" />
        </div> */}
         <label>
          {" "}
          Will Deliver ?
          <select value={deliver} onChange={(event) => {
              setDeliver(event.target.value)
          }}>
           <option value ={ true }> -- select an option -- </option>
            <option value="No">Yes</option>
            <option value="Yes">No</option>
          </select>
        </label> 

         <Button
        // variant="contained"
        type="submit"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "15px",
          margin: "auto",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Submit
      </Button> 

      </form>    
    </div>
  );
};

export default CreatePost;
