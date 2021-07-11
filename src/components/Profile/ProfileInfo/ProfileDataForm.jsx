import React from 'react'
import { createField, Input } from '../../commons/FromControls/FormControls';
import { reduxForm } from 'redux-form';
import s from './ProfileInfo.module.css'
import styles from '../../commons/FromControls/FormControls.module.css'

const ProfileDataForm = ({ handleSubmit, contacts, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Save</button>
            <div>
                {error && <div className={styles.error}>
                    {error}
                </div>}
            </div>
            <div>
                <b>Full name: </b> {createField(Input, "fullName", "Full name", [], {})}
            </div>
            <div>
                <b>About me: </b>
                <div>
                    {createField("textarea", "aboutMe", "About me", [], {})}
                </div>
            </div>
            <div>
                <b>Looking for a job:</b> {createField("input", "lookingForAJob", "", [], { type: "checkbox" })}
            </div>
            <div>
                <b>My professional skills: </b>
                <div>
                    {createField("textarea", "lookingForAJobDescription", "What can I do", [], {})}
                </div>
            </div>
            <div>
                <b>Contacts: </b> {
                    Object.keys(contacts).map(key => {
                        return (
                            <div key={key} className={s.contact}>
                                <b>{key}</b> {createField(Input, "contacts." + key, key, [], {})}
                            </div>)
                    })
                }
            </div>
        </form>)
}

const ProfileDataReduxForm = reduxForm({ form: 'profileData' })(ProfileDataForm);

export default ProfileDataReduxForm;