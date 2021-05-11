const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (profileState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
          id: 4,
          message: profileState.newPostText,
          likesCount: 0,
          picture: "http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1"
        };
      
        profileState.postsData.push(newPost);
        profileState.newPostText = '';
}
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      profileState.newPostText = action.newText;
    }

    return profileState;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;