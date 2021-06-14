import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./reducer/authReducer";
import dialogsReducer from "./reducer/dialogsReducer";
import profileReducer from "./reducer/profileReducer";
import sidebarReducer from "./reducer/sidebarReducer";
import usersReducer from "./reducer/usersReducer";
import thunkMiddlare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./reducer/appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
    });

export let store = createStore(reducers, applyMiddleware(thunkMiddlare));

window.store = store;

export default store;