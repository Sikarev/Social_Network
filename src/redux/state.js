import { renderEntireTree } from "../render";

let state = {
    dialogsPage: {
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
    },
    
    profilePage: {
        postsData: [
            { id: 1, message: "Hi, how are you?", likesCount: 15, picture: "http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1" },
            { id: 2, message: "This is my first post", likesCount: 7, picture: "http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1" },
            { id: 3, message: "React is cool", likesCount: 67, picture: "http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1" }
          ],

          newPostText:"lorem ipsum"
    }
}

window.state = state;

export let addPost = (postMessage) => {
  let newPost = {
    id: 4,
    message: postMessage,
    likesCount: 0,
    picture: "http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1"
  };

  state.profilePage.postsData.push(newPost);
  updateNewPostText("");
  renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export default state;