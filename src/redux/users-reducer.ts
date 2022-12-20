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
    isFetching: false
}

export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

type followACType = {
    type: 'FOLLOW',
    userId: number
}
type unFollowACType = {
    type: 'UNFOLLOW',
    userId: number
}
type setUsersACType = {
    type: 'SET-USERS',
    users: Array<UserType>
}
type setCurrentPageACType = {
    type: 'SET-CURRENT-PAGE',
    currentPage: number
}
type totalUsersCountACType = {
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount: number
}
type toggleIsFetchingACType = {
    type: 'TOGGLE-IS-FETCHING',
    isFetching: boolean
}


type ActionsTypes = followACType | unFollowACType | setUsersACType
    | setCurrentPageACType | totalUsersCountACType | toggleIsFetchingACType

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            console.log(action)
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {

            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}


export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unFollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    }
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
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
    }
}
