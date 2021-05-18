const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let state = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
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
            return {...usersState, users: [...action.users]};
      
        case SET_CURRENT_PAGE:
            return {...usersState, currentPage: action.currentPage};
        
        case SET_TOTAL_USERS_COUNT:
            return{...usersState, totalUsersCount: action.totalUsersCount};
            
        case TOGGLE_IS_FETCHING:
            return{...usersState, isFetching: action.isFetching};

        default:
            return usersState;
    }  
}

export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (usersArr) => ({type: SET_USERS, users: usersArr});
export const setCurrentPage = (pageNum) => ({type: SET_CURRENT_PAGE, currentPage: pageNum});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});

export default usersReducer;