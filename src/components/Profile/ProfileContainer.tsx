import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";

type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component <ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

