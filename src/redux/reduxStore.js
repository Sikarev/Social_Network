import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducer/dialogsReducer";
import profileReducer from "./reducer/profileReducer";
import sidebarReducer from "./reducer/sidebarReducer";
import usersReducer from "./reducer/usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
    });

let store = createStore(reducers);

window.store = store;

export default store;