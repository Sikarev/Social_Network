import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../commons/FromControls/FormControls';
import { requiredField } from '../../utilities/validators/validator';

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.writingBlock}>
            <Field placeholder={"Type here"} name={"message"} component={Textarea} validate={[requiredField]} />
            <button>Send</button>
        </form>
    )
}

const MessageReduxForm = reduxForm({ form: 'sendMessage' })(MessageForm);

const Dialogs = (props) => {
    const onSubmit = (formData) => {
        props.sendMessage(formData.message);
    }
    let dialogElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.messagesData.map(msg => <Message message={msg.message} id={msg.id} />);

    // let newMessage = React.createRef();

    // let onMessageChange = () => {
    //     let text = newMessage.current.value;
    //     props.updateNewMessageText(text);
    // }

    // let sendMessage = () => {
    //     props.sendMessage();
    // }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <MessageReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Dialogs;