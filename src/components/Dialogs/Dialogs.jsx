import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import Button from '../SeparateElements/Button/Button';
import Textarea from '../SeparateElements/Textarea/Textarea';

const Dialogs = (props) => {
    let dialogElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.messagesData.map(msg => <Message message={msg.message} id={msg.id} />);

    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        console.log(text);
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.writingBlock}>
                    <Textarea ref={newMessage} rows="2" cols="50" />
                    <Button text="Send" onClick={sendMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;