import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {messagesReducer} from "./message-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    users: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
//@ts-ignore
window.store = store









