const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (dialogState, action) => {
    if (action.type === SEND_MESSAGE){
        let newMessage = {
          id: 1,
          message: dialogState.newMessageText
        }
  
        dialogState.messagesData.push(newMessage);
        dialogState.newMessageText = '';
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        dialogState.newMessageText = action.newText;
    }

    return dialogState;
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;