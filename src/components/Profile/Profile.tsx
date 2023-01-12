import React from 'react';
import {ProfileInfo} from "./My posts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


export type ProfileProsType = {
    profile: ProfileType
}
export const Profile = (props: ProfileProsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}