import {profileAPI, usersAPI} from "api/api";

type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>

type PostType = {
    id: number
    message: string
    likeCount: number
}

type initialStateType = {
    posts: Array<PostType>
    profile: ProfileType
    status: string
}
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    }
    lookingForJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: { small: string, large: string }
}

let initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi! How are you?))', likeCount: 14},
        {id: 2, message: "Hello! It's my first post!", likeCount: 20}
    ],
    profile: {
        aboutMe: 'string',
        contacts: {
            facebook: 'string',
            website: 'string',
            vk: 'string',
            twitter: 'string',
            instagram: 'string',
            youtube: 'string',
            github: 'string',
            mainLink: 'string'
        },
        lookingForJob: true,
        lookingForAJobDescription: 'string',
        fullName: 'string',
        userId: 1,
        photos: {small: 'string', large: 'string'}
    },
    status: 'string'
}

export const profileReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}


export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText
    } as const
}
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export const setStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}

export const getUserProfile = (userId: string) => async (dispatch: any) => {
    const data = await usersAPI.getProfile(userId)
    dispatch(setUserProfileAC(data))
}
export const getUserStatus = (userId: string) => async (dispatch: any) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(res))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}