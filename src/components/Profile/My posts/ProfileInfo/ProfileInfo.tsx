import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void

}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img
                    src='https://st3.depositphotos.com/7677414/14881/i/450/depositphotos_148811257-stock-photo-cityscape-with-empty-floor.jpg'
                    alt='#'/>
            </div>
            <div className={s.profileClass}>
                <h3>{props.profile.fullName}</h3>
                <img src={props.profile.photos.large} alt={''}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <p>{props.profile.aboutMe}</p>

                {/*<a href={'#'}>Main content</a>*/}
            </div>
        </div>
    )
}