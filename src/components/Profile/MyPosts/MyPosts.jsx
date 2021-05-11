import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import Button from '../../SeparateElements/Button/Button';
import Textarea from '../../SeparateElements/Textarea/Textarea';

const MyPosts = (props) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} picture={p.picture} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <Textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                </div>
                <Button text="Add post" onClick={onAddPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;