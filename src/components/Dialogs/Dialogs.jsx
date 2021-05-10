import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import Button from '../SeparateElements/Button/Button';
import Textarea from '../SeparateElements/Textarea/Textarea';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {
    let dialogElements = props.data.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.data.messagesData.map(msg => <Message message={msg.message} id={msg.id} />);

    let newMessage = React.createRef();

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
        // console.log(props.data.newMessageText);
    }

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.writingBlock}>
                    <Textarea ref={newMessage} onChange={onMessageChange} rows="2" cols="50" value={props.data.newMessageText} />
                    <Button text="Send" onClick={sendMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;