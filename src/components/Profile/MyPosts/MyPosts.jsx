import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utilities/validators/validator';
import { Textarea } from '../../commons/FromControls/FormControls';

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" validate={[requiredField, maxLength10]} />
            </div>
            <button>Add post</button>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: 'addPost' })(PostForm);

const MyPosts = React.memo((props) => {

    let postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} picture={p.picture} />).reverse();

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
})

export default MyPosts;