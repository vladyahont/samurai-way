import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const initialState: InitialStateType = {
    initialized: false
}

export type InitialStateType = {
    initialized: boolean
}

type SetInitializedType = {
    type: 'SET-INITIALIZED'
}

type ActionsTypes = SetInitializedType

export const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED": {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}


export const setInitialized = (): SetInitializedType => {
    return {
        type: 'SET-INITIALIZED'
    } as const
}

export const initialize = () => (dispatch: Dispatch) => {
    // @ts-ignore
    const promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(setInitialized())
    })
}




