import React from 'react';
import Preloader from '../../commons/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/userImg.png"
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large || userPhoto} className={s.avatar} />
            </div>
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
            <div className={s.descriptionBlock}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;