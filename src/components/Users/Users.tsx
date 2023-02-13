import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/img/470-4703547_icon-user-icon-hd-png-download.png";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";

export const Users = (props: UsersPropsType & { onPageChanged: any }) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    console.log(pagesCount)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map((p, index) => <span key={index}
                                                  className={props.currentPage === p ? s.selectedPage : ''}
                                                  onClick={() => {
                                                      props.onPageChanged(p)
                                                  }}>{p}</span>)
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img alt={''} className={s.userPhoto}
                                 src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unFollow(u.id)
                                      }}>UnFollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.id}</div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.uniqueUrlName}</div>
                        <div>{u.followed}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )
}

