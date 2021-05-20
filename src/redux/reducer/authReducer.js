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
export default authReducer;