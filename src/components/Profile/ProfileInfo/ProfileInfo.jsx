import React from 'react';
import Preloader from '../../commons/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/userImg.png"


const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;