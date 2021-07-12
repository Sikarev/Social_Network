import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../../api/api";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const GET_CAPTCHA_SUCCESS = 'security/GET_CAPTCHA_SUCCESS';


let state = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
}

const authReducer = (authState = state, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_SUCCESS:
           return {
               ...state,
               ...action.data
            }
        default:
            return authState;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});
export const getCaptchaSuccess = (captchaURL) => ({type: GET_CAPTCHA_SUCCESS, data: {captchaURL}})

export const getAuthUsersData = () => {
    return async (dispatch) => {
        let response = await authAPI.me()
            if (response.resultCode === 0) {//если успешно залогинились
                let { id, email, login } = response.data;
                dispatch(setAuthUserData(id, email, login, true));//здесь первая data - стандарт axios, а вторая отностся к серверу (так её назвал разработчик)
            }
        return response;
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUsersData());
            } else {
                if (response.data.resultCode === 10) {
                    dispatch(getCaptcha());
                }

                let message = response.data.messages.length > 0 ? response.data.messages[0] : "";
                dispatch(stopSubmit("login", {_error: message}));
            }
    }
}

export const logout = () => {
    return async  (dispatch) => {
        let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
    }
}

export const getCaptcha = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL()
    const url = response.data.url
    dispatch(getCaptchaSuccess(url));
}

export default authReducer;