import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name="Sasha" />
                <DialogItem id="2" name="Igor" />
                <DialogItem id="3" name="Fedor" />
                <DialogItem id="4" name="Roma" />
                <DialogItem id="5" name="Dasha" />
                <DialogItem id="6" name="Katya" />
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How your doing?" />
                <Message message="Let's go to walking" />
            </div>
        </div>
    )
}

export default Dialogs;