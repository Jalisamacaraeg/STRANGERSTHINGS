
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { callApi } from "../api";

import { Button } from "@material-ui/core";
import "./specificStyles.css";

const Dashboard = ({ token, posts }) => {
    
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const token = data?.data?.token;
        // if there's data, tack on data prop. if data.data tack on token prop
        const data = await callApi({
          url: `/posts`,
          body: { post: { title, description, price, location, deliver } },
          method: "GET",
          token: token,
        });
    }
    
    return (
        <Button>hey</Button>
//     <div className="userPostsBody">            
//             <h2 className="userPostsHeading">User Posts</h2>              
//             {posts.map((post) => (
//                 <div key={post._id} style={{ borderTop: '1px solid black', padding: '.5em' }}>
//                     <h5>{post.title}</h5>
//                     <div>Posted by: {post.author.username}</div>
//                     <div>Description: {post.description} </div>

//                     <button className="viewPostsButton"
//                         onClick={() => {
//                             history.push(`/posts/${post._id}`);
//                         }}
//                     >
//                         View Post
//                     </button>
//                 </div>
//             ))}
//         </div>
//     )
    )
 }

export default Dashboard;