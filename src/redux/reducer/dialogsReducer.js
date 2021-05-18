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
    switch (action.type) {
      case SEND_MESSAGE:
        let body = dialogState.newMessageText;

        return {
          ...dialogState,
          messagesData: [...dialogState.messagesData, {id: 1, message: body}],
          newMessageText: ''
        };
      case UPDATE_NEW_MESSAGE_TEXT:
        return {
          ...dialogState,
          newMessageText: action.newText
        };
      default:
        return dialogState;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;