import React from 'react';
import {ProfileInfo} from "./My posts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {Navigate} from "react-router-dom";


type ProfileProsType = {
    profile: ProfileType
    getUserProfile: (userId: string) => void
}
export const Profile = (props: ProfileProsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}