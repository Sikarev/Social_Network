import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts data={props.postsData} addPost={props.addPost} />
        </div>
    )
}

export default Profile;