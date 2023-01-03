import {usersAPI} from "../api/api";

type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>

type PostType = {
    id: number
    message: string
    likeCount: number
}

type initialStateType = {
    messageForNewPost: string
    posts: Array<PostType>
    profile: ProfileType
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
    messageForNewPost: '',
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
    }
}


export const profileReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.messageForNewPost,
                likeCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                messageForNewPost: ''
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                messageForNewPost: action.newText
            }
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}


export const addPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export const getUserProfile = (userId: string) => {
    return (dispatch: any) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}