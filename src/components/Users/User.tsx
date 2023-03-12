import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/img/470-4703547_icon-user-icon-hd-png-download.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/users-reducer";

type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    follow: any
    unFollow: any

}
export const User = (props: UserPropsType) => {

    // @ts-ignore
    // @ts-ignore
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + props.user.id}>
                            <img alt={''} className={s.userPhoto}
                                 src={props.user.photos.small != null ? props.user.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {props.user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.unFollow(props.user.id)
                                      }}>UnFollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.follow(props.user.id)
                                      }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{props.user.id}</div>
                        <div>{props.user.name}</div>
                        <div>{props.user.status}</div>
                    </span>
                    <span>
                        <div>{props.user.uniqueUrlName}</div>
                        <div>{props.user.followed}</div>
                    </span>
                </span>
        </div>)
}

