
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './specificStyles.css'
import  { callApi } from "../api";
import { Button } from "@material-ui/core";

const CreatePost = ({ token, posts, setPosts }) => {
//     const [title, setTitle] = useState("");
//     const [postedBy, setPostedBy] = useState("");
//     const [description , setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [location, setLocation] = useState("");
//     const [delivers, setDelivers] = useState("");
    
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const data = await callApi({
//           url: `/posts`,
//           body: { post },
//           method: "POST",
//           token: {token}          
//         });
//         const token = data?.data?.token;
//     }
        

//     const { postId } = useParams();
//     const post = posts.find((post) => postId === post._id);
    
//     return (                
//         <div className="createPost">
//             <h2>Create Post</h2>
//             <form onSubmit={handleSubmit}>
//             {/* {postId !== undefined && <Post posts={posts} />} */}
//             <input type="text" >Title: {event.target.value}</input>
//             <input>Posted by: {event.target.value}</input>
//             <input>Description: {event.target.value} </input>
//             <input>Price: {event.target.value}</input>
//             <input>Location: {event.target.value}</input>

//             <div>
//             <input type ="radio" id = "yes" value="yes"/>
//             <label htmlFor="Will Deliver">Will Deliver</label>
//             </div>

//             <div>
//             <input type ="radio" id = "no" value="no"/>
//                 <label htmlFor="Will NOT Deliver">Will NOT Deliver</label>
//             </div>
//             </form>

//         </div>
//     )
}

export default CreatePost;