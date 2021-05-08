import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    // console.log(props.message);
    return <div className={classes.item}>
        <img src={props.picture} alt="Avatar" />
        <div>
            {props.message}
        </div>
        <span className={classes.likesCount}>likes: {props.likesCount}</span>
    </div>
}
//src="http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1"

export default Post;