export type UserType = {
    id: number
    photos: { small: string }
    followed: boolean
    fullName: string
    status: string
    location: { country: string, city: string }
}

const initialState: InitialStateType = {
    users: []
}

export type InitialStateType = {
    users: Array<UserType>
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

type ActionsTypes = followACType | unFollowACType | setUsersACType

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}


export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const

}