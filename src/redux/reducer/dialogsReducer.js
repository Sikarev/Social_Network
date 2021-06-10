const SEND_MESSAGE = "SEND-MESSAGE";

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
      ]
};

const dialogsReducer = (dialogState = state, action) => {
    switch (action.type) {
      case SEND_MESSAGE:
        return {
          ...dialogState,
          messagesData: [...dialogState.messagesData, {id: 1, message: action.newMessageText}],
        };
      default:
        return dialogState;
    }
}

export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText });

export default dialogsReducer;