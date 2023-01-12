import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";

export type AuthPropsType = {
    getAuthUserData: () => void
    //setAuthUserData: (data: InitialStateType) => void
    isAuth: boolean,
    login: string
}

class HeaderContainer extends React.Component <AuthPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }


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

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)