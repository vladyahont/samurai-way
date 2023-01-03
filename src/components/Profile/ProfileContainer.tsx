import React, {Component} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {useParams, Params} from "react-router-dom";


type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
    getUserProfile: (userId: string) => void
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & {
    params: Params
}

class ProfileContainer extends React.Component <ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} getUserProfile={this.props.getUserProfile}/>
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


export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer))

