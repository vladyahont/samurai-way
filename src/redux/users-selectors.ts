import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersArr = (state: AppStateType) => {
    return state.users.users
}

export const getUsersSuperSel = createSelector(getUsersArr, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType) => {
    return state.users.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.users.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.users.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.users.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.users.followingInProgress
}
