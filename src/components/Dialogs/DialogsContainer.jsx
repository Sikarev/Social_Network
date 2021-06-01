import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessage, updateNewMessageText } from '../../redux/reducer/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        newMessageText: state.dialogsPage.newMessageText,
        messagesData: state.dialogsPage.messagesData,
    }
};

const DialogsContainer = withAuthRedirect(connect(mapStateToProps,
    {
        sendMessage,
        updateNewMessageText
    })(Dialogs));

export default DialogsContainer;