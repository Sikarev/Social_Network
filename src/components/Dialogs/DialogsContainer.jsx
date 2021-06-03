import { connect } from 'react-redux';
import { compose } from 'redux';
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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            sendMessage,
            updateNewMessageText
        })
)(Dialogs)

// export default DialogsContainer;