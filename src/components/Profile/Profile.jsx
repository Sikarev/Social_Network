import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css';

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='https://static-cse.canva.com/blob/185563/56.-Sunkissed-Village.f8ebc04e.png' />
        </div>
        <div>
            avatar + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;