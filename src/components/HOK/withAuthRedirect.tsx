import React, {Component, ComponentType, FC, ReactNode} from 'react';
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export function WithAuthRedirect<T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) {
    const RedirectComponent: FC<mapStateToPropsForRedirectType> = (props) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Navigate to="/login"/>
        }
        return <Component {...restProps as T} />
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
};

export default WithAuthRedirect;