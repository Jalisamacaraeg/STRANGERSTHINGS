
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { AccountForm, Posts, Post } from '.';
import { callApi } from '../api';

import { NavBar } from '.';

const fetchUserData = async (token) => {
    const { data } = await callApi({
        url: '/users/me',
        token,
    });

    return data;
};
const fetchPosts = async () => {
    const {
        data: { posts },
    } = await callApi({
        url: '/posts',
    });
    return posts;
};

const App = () => {
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const posts = await fetchPosts();
        setPosts(posts);

        if (!token) {
            setToken(localStorage.getItem('token'));
            return;
        }
        const data = await fetchUserData(token);
        if (data && data.username) {
            setUserData(data);
        }
        
    }, [token]);

    return (
        <>
            <NavBar />

            <Route exact path="/">
                <Posts posts={posts} />  {/* moved here to land on posts page */}
                {userData.username && <div>Hello, {userData.username}!</div>}
            </Route>

            {/* <Route exact path="/posts">
            <Posts posts={posts} />
            </Route> (we moved it up to above) */}

            <Route path="/posts/:postId">
                <Post posts={posts} />
            </Route>

            <Route path="/login">
                <AccountForm
                    action="login"
                    setToken={setToken}
                    setUserData={setUserData}
                />
            </Route>

            <Route path="/register">
                <AccountForm
                    action="register"
                    setToken={setToken}
                    setUserData={setUserData}
                />
            </Route>
        </>
    );
};

export default App;