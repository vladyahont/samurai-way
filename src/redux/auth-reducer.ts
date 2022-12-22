const initialState: InitialStateType = {
    id: 0,
    email: 'null',
    login: 'null',
    isAuth: false
}

export type InitialStateType = {
    id: number,
    email: string,
    login: string
    isAuth: boolean
}

type setAuthUserDataType = {
    type: 'SET-USER-DATA',
    data: InitialStateType
}


type ActionsTypes = setAuthUserDataType

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}


export const setAuthUserData = (data: InitialStateType): setAuthUserDataType => {
    return {
        type: 'SET-USER-DATA',
        data
    } as const
}

