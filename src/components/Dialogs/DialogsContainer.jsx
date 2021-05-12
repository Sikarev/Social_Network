import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducer/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        newMessageText: state.dialogsPage.newMessageText,
        messagesData: state.dialogsPage.messagesData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => { dispatch(updateNewMessageTextActionCreator(text)); },
        sendMessage: () => { dispatch(sendMessageActionCreator()) }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;