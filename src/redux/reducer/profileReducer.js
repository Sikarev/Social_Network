import { profileAPI, usersAPI } from "../../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST"

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
      default:
        return profileState;
    }  
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getProfile = (userId) => {
        return (dispatch) => {
            usersAPI.getProfile(userId)
              .then(data => {
                  dispatch(setUserProfile(data));
              });
          }
};
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data));
      }
    )
  }
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
  }
}


export default profileReducer;