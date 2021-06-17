import { usersAPI } from "../../api/api";
import { updateObjectInArray } from "../../utilities/objectHelpers";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "users/TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let state = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}

const usersReducer = (usersState = state, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...usersState,
                users: updateObjectInArray(usersState.users, action.userId, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...usersState,
                users: updateObjectInArray(usersState.users, action.userId, "id", {followed: false})
            };
        case SET_USERS:
            return {...usersState, users: [...action.users]};
      
        case SET_CURRENT_PAGE:
            return {...usersState, currentPage: action.currentPage};
        
        case SET_TOTAL_USERS_COUNT:
            return{...usersState, totalUsersCount: action.totalUsersCount};
            
        case TOGGLE_IS_FETCHING:
            return{...usersState, isFetching: action.isFetching};

        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return{
                ...usersState,
                followingInProgress: action.isFetching
                    ?[...usersState.followingInProgress, action.userId]
                    :usersState.followingInProgress.filter(id => id != action.userId)
            };

        default:
            return usersState;
    }  
}

export const followSuccess = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (usersArr) => ({type: SET_USERS, users: usersArr});
export const setCurrentPage = (pageNum) => ({type: SET_CURRENT_PAGE, currentPage: pageNum});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId});

//всё что ниже - thunk
export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setCurrentPage(currentPage));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId));
        let response = await apiMethod(userId)
                if (response.data.resultCode === 0) { 
                    dispatch(actionCreator(userId)); 
                };
                dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        // let apiMethod = usersAPI.follow.bind(usersAPI);
        // let actionCreator = followSuccess;
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        // let apiMethod = usersAPI.unfollow.bind(usersAPI);
        // let actionCreator = unfollowSuccess;
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;