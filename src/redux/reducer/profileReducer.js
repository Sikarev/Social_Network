import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../../api/api";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SET_PHOTO = "SET_PHOTO";

let state = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 15, picture: "http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1" },
    { id: 2, message: "This is my first post", likesCount: 7, picture: "http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1" },
    { id: 3, message: "React is cool", likesCount: 67, picture: "http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1" }
  ],
  profile: null,
  status: ""
}

const profileReducer = (profileState = state, action) => {
    switch (action.type) {
      case ADD_POST:
        return {
          ...profileState,
          postsData: [...profileState.postsData, {
            id: 4,
            message: action.newPostText,
            likesCount: 0,
            picture: "http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1"
          }]
        }
      case SET_STATUS:
        return {
          ...profileState,
          status: action.status
        }
      case SET_USER_PROFILE:
        return {
          ...profileState,
          profile: action.profile
        }
      case DELETE_POST:
        return {
          ...profileState,
          postsData: profileState.postsData.filter(p => p.id != action.postId)
        }
      case SET_PHOTO:
        return {
          ...profileState,
          profile: {
            ...profileState.profile,
            photos: action.photos
          }
        }
      default:
        return profileState;
    }  
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setPhoto = (photos) => ({type: SET_PHOTO, photos});

export const getProfile = (userId) => {
        return async (dispatch) => {
            let data = await usersAPI.getProfile(userId)
                  dispatch(setUserProfile(data));
          }
};
export const getStatus = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
      dispatch(setStatus(response.data));
  }
};
export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
  }
}

export const savePhoto = (file) => {

  return async(dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(setPhoto(response.data.data.photos));
    }
  }
}

export const saveProfile = (profile) => {
  return async(dispatch, getState) => {
    let response = await profileAPI.saveProfile(profile);
    const userId = getState().auth.userId;
    if (response.data.resultCode === 0) {
      dispatch(getProfile(userId));
    } else {
      dispatch(stopSubmit("profileData", {_error: response.data.messages[0]}))
      return Promise.reject(response.data.messages[0]);
    }
  }
}


export default profileReducer;