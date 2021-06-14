import { createSelector } from "reselect";

export const usersSimpleSelector = (state) => {
    return state.usersPage.users;
}

export const usersSelector = createSelector(usersSimpleSelector, (users) => {
    return users.filter(u => true);
})

export const pageSizeSelector = (state) => {
    return state.usersPage.pageSize;
}

export const totalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount;
}

export const currentPageSelector = (state) => {
    return state.usersPage.currentPage;
}

export const isFetchingSelector = (state) => {
    return state.usersPage.isFetching;
}

export const followingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress;
}