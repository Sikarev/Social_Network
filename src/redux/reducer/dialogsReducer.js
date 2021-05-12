const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let state = {
    dialogsData: [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Igor" },
        { id: 3, name: "Fedor" },
        { id: 4, name: "Roma" },
        { id: 5, name: "Dasha" },
        { id: 6, name: "Katya" }
    ],
      
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How your doing?" },
        { id: 3, message: "Let's go for a walk" }
      ],

      newMessageText: ""
};

const dialogsReducer = (dialogState = state, action) => {
    if (action.type === SEND_MESSAGE){
        let newMessage = {
          id: 1,
          message: dialogState.newMessageText
        }

        let stateCopy = {...dialogState};
        stateCopy.messagesData = [...dialogState.messagesData];
  
        stateCopy.messagesData.push(newMessage);
        stateCopy.newMessageText = '';

        return stateCopy;
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        let stateCopy = {...dialogState};
        stateCopy.newMessageText = action.newText;
        return stateCopy;
    }

    return dialogState;
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;