import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "redux/redux-store";
import {logOutTC} from "redux/auth-reducer";
import {compose} from "redux";

type MapStateToPropsType = {
    isAuth: boolean,
    login: string
}
type MapDispatchToPropsType = {
    logOutTC: () => void
}
export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType

// export type AuthPropsType = {
//     getAuthUserData: () => void
//     logOutTC: () => void
//     isAuth: boolean,
//     login: string
// }

class HeaderContainer extends React.Component <AuthPropsType> {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose<React.FC>(connect(mapStateToProps, {logOutTC}))(HeaderContainer)