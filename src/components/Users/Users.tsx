import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/img/470-4703547_icon-user-icon-hd-png-download.png";
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType & { onPageChanged: any }) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages: number[] = []
    console.log(props.totalUsersCount)
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
                                                      props.onPageChanged(pagesCount)
                                                  }}
                    >
                        {p}
                    </span>)}
            </div>
            {
                props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img alt={''} className={s.userPhoto} src={u.photos.small !== null
                            ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{'u.fullName'}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    );
};

