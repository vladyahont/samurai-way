import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const initialState = {
    id: 0,
    email: 'null',
    login: 'Vlad',
    isAuth: false
}

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

type SetAuthUserDataType = ReturnType<typeof setAuthUserData>

type ActionsTypes = SetAuthUserDataType

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean | null) => {
    return {
        type: 'SET-USER-DATA',
        payload: {id, email, login, isAuth}
    } as const
}

export const getAuthUserData = () => async (dispatch: any) => {
    const data = await authAPI.getAuthMe()
    if (data.resultCode === 0) {
        const {id, email, login} = data.data.login
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: any) => {
        const data = await authAPI.login(email, password, rememberMe)
        if (data.resultCode === 0) {
            console.log('sdcsdsd')
            dispatch(getAuthUserData())
        } else {
            const errMess = data.messages.length > 0 ? data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {email: errMess}))
        }
    }
}
export const logOutTC = () => async (dispatch: any) => {
    const data = await authAPI.logOut()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


