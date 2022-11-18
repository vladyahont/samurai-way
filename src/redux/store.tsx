import {profileReducer, addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import {messagesReducer, sendMessageActionCreator, updateNewMessageTextActionCreator} from "./message-reducer";
import {sidebarReducer} from "./sidebar-reducer";

type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
    avatar: string
}
export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type SidebarType = {}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>
    | ReturnType<typeof sendMessageActionCreator>

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}
export let store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, message: 'Hi! How are you?))', likeCount: 14},
                {id: 2, message: "Hello! It's my first post!", likeCount: 20}
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vlad', avatar: ''},
                {id: 2, name: 'Tanya', avatar: ''},
                {id: 3, name: 'Viktor', avatar: ''},
                {id: 4, name: 'Chong', avatar: ''},
            ],
            messages: [
                {id: 1, message: 'Hi everyone!'},
                {id: 2, message: "What's up????"},
                {id: 3, message: "Let's go! Fly!"},
                {id: 4, message: 'YOOGOOGOO'},
            ],
            newMessageText: '',
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('hau hi')
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = messagesReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()

    }
}








