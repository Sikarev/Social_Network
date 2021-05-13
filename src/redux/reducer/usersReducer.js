const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let state = {
  users: []
}

const usersReducer = (usersState = state, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...usersState,
                //users: [...state.users],
                users: usersState.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                        //Согласно принципу immutable functions,
                        //мы не имеем права изменять объект внутри чистой функции. 
                        //Поэтому нам нужно создать его копию и вернуть именно её
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...usersState,
                //users: [...state.users],
                users: usersState.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                        //Согласно принципу immutable functions,
                        //мы не имеем права изменять объект внутри чистой функции. 
                        //Поэтому нам нужно создать его копию и вернуть именно её
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...usersState, users: [...usersState.users, ...action.users]};
      default:
        return usersState;
    }  
}

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (usersArr) => ({type: SET_USERS, users: usersArr});

export default usersReducer;