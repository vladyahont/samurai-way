import React from 'react';
import {ProfileInfo} from "./My posts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


export type ProfileProsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}
export const Profile = (props: ProfileProsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}