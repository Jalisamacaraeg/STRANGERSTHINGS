
import React from 'react';
import { useHistory } from 'react-router-dom';

const Posts = ({ posts }) => {
    const history = useHistory();
    return (
        <>
            <h2>Posts</h2>
            {posts.map((post) => (
                <div key={post._id} style={{ border: '1px solid black' }}>
                    <h5>{post.title}</h5>
                    <div>Posted by: {post.author.username}</div>
                    <div>Description: {post.description} </div>
                    <button
                        onClick={() => {
                            history.push(`/posts/${post._id}`);
                        }}
                    >
                        View Post
                    </button>
                </div>
            ))}
        </>
    );
};

export default Posts;