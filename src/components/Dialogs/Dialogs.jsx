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
    let dialogsData = [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Igor" },
        { id: 3, name: "Fedor" },
        { id: 4, name: "Roma" },
        { id: 5, name: "Dasha" },
        { id: 6, name: "Katya" }
    ];

    let dialogElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How your doing?" },
        { id: 3, message: "Let's go for a walk" }
    ]

    let messagesElements = messagesData.map(msg => <Message message={msg.message} id={msg.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;