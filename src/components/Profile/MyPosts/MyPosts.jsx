import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return <div>
        My posts
                <div>
            New posts
                </div>
        <div className={classes.posts}>
            <Post message="Hi, how are you?" />
            <Post message="This is my first post" />
            <Post message="React is cool" />
        </div>
    </div>
}

export default MyPosts;