import React from 'react';
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from '../../redux/message-reducer';
import {RootStateType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state: RootStateType) => {
    return {
        messagesPage: state.dialogsPage
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
