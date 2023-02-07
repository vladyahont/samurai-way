import {authAPI} from "../api/api";
import {Dispatch} from "redux";

const initialState: InitialStateType = {
    id: 0,
    email: 'null',
    login: 'Vlad',
    isAuth: false
}

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type setAuthUserDataType = {
    type: 'SET-USER-DATA',
    payload: InitialStateType
}

type ActionsTypes = setAuthUserDataType

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}


export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => {
    return {
        type: 'SET-USER-DATA',
        payload: {id, email, login, isAuth}
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: any) => {
        authAPI.getAuthMe().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data.login
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            })
    }
}
export const logOutTC = () => {
    return (dispatch: any) => {
        authAPI.logOut()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}


