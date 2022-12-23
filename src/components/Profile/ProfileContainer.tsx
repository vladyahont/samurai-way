import React, {Component} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {useParams, Params} from "react-router-dom";


type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile
                    /*{...this.props} */
                    profile={this.props.profile} setUserProfile={this.props.setUserProfile}/>
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


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))

