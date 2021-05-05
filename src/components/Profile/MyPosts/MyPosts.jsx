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
            <Post message="Hi, how are you?" likesCount="15" />
            <Post message="This is my first post" likesCount="7" />
            <Post message="React is cool" likesCount="67" />
        </div>
    </div>
}

export default MyPosts;