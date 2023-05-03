import {usersAPI} from "api/api";
import {updateObjectInArray} from "components/objects-helpers";

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null,
        large: string | null
    }
    status: string | null
    followed: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}

type followSuccessACType = {
    type: 'FOLLOW',
    userId: number
}
type unFollowSuccessACType = {
    type: 'UNFOLLOW',
    userId: number
}
type setUsersACType = {
    type: 'SET-USERS',
    users: Array<UserType>
}
type setCurrentPageACType = {
    type: 'SET-CURRENT-PAGE',
    page: number
}
type totalUsersCountACType = {
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount: number
}
type toggleIsFetchingACType = {
    type: 'TOGGLE-IS-FETCHING',
    isFetching: boolean
}
type toggleFollowingInProgressACType = {
    type: 'TOGGLE-IS-FOLLOWING',
    isFetching: boolean,
    userId: number
}


type ActionsTypes = followSuccessACType | unFollowSuccessACType | setUsersACType | setCurrentPageACType
    | totalUsersCountACType | toggleIsFetchingACType | toggleFollowingInProgressACType

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.page}
        }
        case 'SET-TOTAL-USERS-COUNT': {

            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING": {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}


export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unFollowSuccess = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPage = (page: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        page
    } as const
}
export const totalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING',
        isFetching,
        userId
    } as const
}


export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
    const data = await usersAPI.getUsers(page, pageSize)
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(totalUsersCount(data.totalCount))
}

export const unFollow = (id: number) => async (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, id))
    const data = await usersAPI.getUnFollow(id)
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(id))
            }
            dispatch(toggleFollowingInProgress(false, id))
}
export const follow = (id: number) => async (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, id))
    const data = await usersAPI.getFollow(id)
            if (data.resultCode === 0) {
                dispatch(followSuccess(id))
            }
            dispatch(toggleFollowingInProgress(false, id))
}
