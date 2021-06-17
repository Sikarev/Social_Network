import { getAuthUsersData } from "./authReducer";

const INITIALIZE_SUCCESSFUL = "app/INITIALIZE_SUCCESSFUL"


let state = {
    initialized: false
}

const appReducer = (appState = state, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESSFUL:
            return {
                ...state,
                initialized: true
            }
            default:
                return appState;
    }
}

export const initializedSuccessful = () => ({type: INITIALIZE_SUCCESSFUL});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUsersData());
    promise.then(() => {
        dispatch(initializedSuccessful())
    });
}

export default appReducer;