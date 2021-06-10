import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" />
            </div>
            <button>Add post</button>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: 'addPost' })(PostForm);

const MyPosts = (props) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} picture={p.picture} />);

    const addPost = (formData) => {
        props.addPost(formData.newPostText);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <PostReduxForm onSubmit={addPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;