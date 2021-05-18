import { connect } from 'react-redux';
import { sendMessage, updateNewMessageText } from '../../redux/reducer/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        newMessageText: state.dialogsPage.newMessageText,
        messagesData: state.dialogsPage.messagesData
    }
};

const DialogsContainer = connect(mapStateToProps,
    {
        sendMessage,
        updateNewMessageText
    })(Dialogs);

export default DialogsContainer;