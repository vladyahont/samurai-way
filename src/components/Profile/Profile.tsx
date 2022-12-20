import React from 'react';
import {ProfileInfo} from "./My posts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfileProsType = {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
}
export const Profile = (props: ProfileProsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}