import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='https://static-cse.canva.com/blob/185563/56.-Sunkissed-Village.f8ebc04e.png' />
        </div>
        <div>
            avatar + description
        </div>
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    post 1
                </div>
                <div className={classes.item}>
                    post 2
                </div>
                <div className={classes.item}>
                    post 3
                </div>
            </div>
        </div>
    </div>
}

export default Profile;