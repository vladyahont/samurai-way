import React, {Component, ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {useParams, Params, Navigate} from "react-router-dom";
import withAuthRedirect from "../HOK/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: number) => void
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & {
    params: Params
}

class ProfileContainer extends React.Component <ProfilePropsType> {

    componentDidMount() {
        let userId = Number(this.props.params.userId)
        if (!userId && this.props.profile) {
            userId = this.props.profile.userId
        }
        this.props.getUserProfile(userId)
    }

    render() {
        /* if (!this.props.isAuth) return <Navigate to={'login'}/>*/
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})


function withRouter(Component: any) {
    function ComponentWithParams(props: Omit<ProfilePropsType, 'params'>) {
        return <Component {...props} params={useParams()}/>
    }

    return ComponentWithParams
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect)
(ProfileContainer)


