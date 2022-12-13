import {ActionsTypes, PostType, ProfilePageType} from "./store";

let initialState = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hi! How are you?))', likeCount: 14},
        {id: 2, message: "Hello! It's my first post!", likeCount: 20}
    ],
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
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
        default:
            return state
    }
}


export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST',
    } as const
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}