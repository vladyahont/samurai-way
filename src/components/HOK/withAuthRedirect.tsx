import React, {Component, ComponentType, FC} from 'react';
import {Navigate} from "react-router-dom";
import {AppStateType} from "redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsForRedirectType = {
    isAuth: boolean | null
}
const mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export function WithAuthRedirect<T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) {
    const RedirectComponent: FC<mapStateToPropsForRedirectType> = (props) => {
        const {isAuth, ...restProps} = props
        console.log(isAuth)
        if (!isAuth) {
            return <Navigate to="/login"/>
        }
        return <Component {...restProps as T} />
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

export default WithAuthRedirect;