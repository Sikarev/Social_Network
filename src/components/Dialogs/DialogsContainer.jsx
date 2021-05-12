import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducer/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                return <Dialogs dialogsData={state.dialogsPage.dialogsData}
                    newMessageText={state.dialogsPage.newMessageText}
                    messagesData={state.dialogsPage.messagesData}
                    updateNewMessageText={onMessageChange}
                    sendMessage={sendMessage}
                />
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;