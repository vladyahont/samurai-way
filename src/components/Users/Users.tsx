import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import {Paginator} from "../commons/Paginator/Paginator";
import {User} from "./User";

export const Users = (props: UsersPropsType & { onPageChanged: any }) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage} pageSize={props.pageSize}
                       totalUsersCount={props.totalUsersCount} onPageChanged={props.onPageChanged}/>
            {
                props.users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                                           follow={props.follow} unFollow={props.unFollow}/>)

            }
        </div>
    )
}

