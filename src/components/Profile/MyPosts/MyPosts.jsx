import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
    let postsData = [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "This is my first post", likesCount: 7 },
        { id: 3, message: "React is cool", likesCount: 67 }
    ]

    let postsElements = postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />);

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;