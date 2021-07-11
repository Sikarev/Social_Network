import React from 'react';
import Preloader from '../../commons/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/userImg.png"
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataReduxForm from './ProfileDataForm';

const ProfileInfo = (props) => {


    let [editMode, setEditMode] = useState(false);

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

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large || userPhoto} className={s.avatar} />
            </div>
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
            <div className={s.descriptionBlock}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />

                {editMode ? <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit} contacts={props.profile.contacts} /> : <ProfileData profile={props.profile} isOwner={props.isOwner} enableEditMode={() => { setEditMode(true) }} />}
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, enableEditMode }) => {
    return (
        <div>
            {isOwner && <div><button onClick={enableEditMode}>Edit</button></div>}
            <div>
                <b>Full name: </b> {profile.fullName}
            </div>
            <div>
                <b>About me: </b> {profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b>My professional skills: </b> {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>Contacts: </b> {
                    Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })
                }
            </div>
        </div>)
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}: </b> {contactValue}
        </div>
    )
}

export default ProfileInfo;