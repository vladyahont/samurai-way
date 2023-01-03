import React from 'react';
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from '../../redux/message-reducer';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageText: (newMessage: string) => {
            dispatch(updateNewMessageTextActionCreator(newMessage))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
