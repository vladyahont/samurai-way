import React, {ComponentType} from 'react';
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from '../../redux/message-reducer';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import withAuthRedirect from "../HOK/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: AppStateType) => {
    return {
        messagesPage: state.messagesPage
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


//const AuthRedirectComponent = withAuthRedirect()
export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs)
