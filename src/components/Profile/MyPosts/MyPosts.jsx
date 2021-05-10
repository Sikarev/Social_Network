import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import Button from '../../SeparateElements/Button/Button';
import Textarea from '../../SeparateElements/Textarea/Textarea';

const MyPosts = (props) => {
    let postsElements = props.data.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} picture={p.picture} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: "ADD-POST", postMessage: props.data.newPostText });
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <Textarea ref={newPostElement} onChange={onPostChange} value={props.data.newPostText} />
                </div>
                <Button text="Add post" onClick={addPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;