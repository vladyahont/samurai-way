import {ActionsTypes} from "./store";

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
    avatar: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Vlad', avatar: 'https://biogr.net/wp-content/uploads/2021/10/fdsfsdsdf.jpg'},
        {
            id: 2,
            name: 'Tanya',
            avatar: 'https://assets.vogue.ru/photos/602f633b9b261345fa10c5b6/2:3/w_2560%2Cc_limit/Tanya-Reynolds-vogue-credit-Matt-Holyoak1.jpg'
        },
        {
            id: 3,
            name: 'Viktor',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80_%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%BD%D1%80%D0%B0%D0%B2%D0%BE%D0%B2_03.jpg/274px-%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80_%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%BD%D1%80%D0%B0%D0%B2%D0%BE%D0%B2_03.jpg'
        },
        {
            id: 4,
            name: 'Chong',
            avatar: 'https://media.gq.com/photos/5dc2f6030f41120008b8a9e9/4:3/w_1776,h_1332,c_limit/GettyImages-949064916-resized.jpg'
        },
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi everyone!'},
        {id: 2, message: "What's up????"},
        {id: 3, message: "Let's go! Fly!"},
        {id: 4, message: 'YOOGOOGOO'},
    ] as Array<MessagesType>
}

export type InitialStateType = typeof initialState


export const messagesReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            return {
                ...state,
                dialogs: [...state.dialogs, {
                    id: 5,
                    name: 'Vlad',
                    avatar: 'https://biogr.net/wp-content/uploads/2021/10/fdsfsdsdf.jpg'
                }],
                messages: [...state.messages, {id: 5, message: action.newMessageText}]
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageText: string) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageText
    } as const
}