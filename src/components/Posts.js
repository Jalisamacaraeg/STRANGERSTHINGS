
import React from 'react';
import { useHistory } from 'react-router-dom';

import './specificStyles.css'

const Posts = ({ posts }) => {
    const history = useHistory();
    return (
        <div className="postsBody">            
            <h2 className="postsHeading">Posts</h2>              
            {posts.map((post) => (
                <div key={post._id} style={{ borderTop: '1px solid black', padding: '.5em' }}>
                    <h5>{post.title}</h5>
                    <div>Posted by: {post.author.username}</div>
                    <div>Description: {post.description} </div>
                    <button className="viewPostsButton"
                        onClick={() => {
                            history.push(`/posts/${post._id}`);
                        }}
                    >
                        View Post
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Posts;