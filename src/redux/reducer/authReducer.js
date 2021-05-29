import { auth } from "../../api/api";

const SET_USER_DATA = 'SET-USER-DATA';


let state = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (authState = state, action) => {
    switch (action.type) {
        case SET_USER_DATA:
           return {
               ...state,
               ...action.data,// деструктуризируем action и получаем
                isAuth: true
            }
        default:
            return authState;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export const authThunk = () => {
    return (dispatch) => {
        auth().then(data => {
            if (data.resultCode === 0) {//если успешно залогинились
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login));//здесь первая data - стандарт axios, а вторая отностся к серверу (так её назвал разработчик)
            }
        });
    }
}

export default authReducer;