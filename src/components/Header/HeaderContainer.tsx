import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, setAuthUserData} from "../../redux/auth-reducer";
import {getAuth} from "../../api/api";

export type AuthPropsType = {
    setAuthUserData: (data: InitialStateType) => void
    isAuth: boolean,
    login: string
}

class HeaderContainer extends React.Component <AuthPropsType> {

    componentDidMount() {
        getAuth().then(data => {
            if (data.resultCode === 0) {
                this.props.setAuthUserData(data.data.login)
            }
        })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)