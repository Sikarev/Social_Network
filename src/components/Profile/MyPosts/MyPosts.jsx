import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likesCount="15" />
                <Post message="This is my first post" likesCount="7" />
                <Post message="React is cool" likesCount="67" />
            </div>
        </div>
    )
}

export default MyPosts;