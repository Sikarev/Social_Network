import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducer/dialogsReducer';
import Dialogs from './Dialogs';
import store from '../../redux/reduxStore';

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    return (
        <Dialogs dialogsData={state.dialogsPage.dialogsData}
            newMessageText={state.dialogsPage.newMessageText}
            messagesData={state.dialogsPage.messagesData}
            updateNewMessageText={onMessageChange}
            sendMessage={sendMessage}
        />
    )
}

export default DialogsContainer;