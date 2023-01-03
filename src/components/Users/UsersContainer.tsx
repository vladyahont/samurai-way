import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    followSuccess, getUsers,
    setCurrentPage,
    toggleFollowingInProgress, unFollow,
    unFollowSuccess,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";

import PreLoader from "../preLoader/preLoader";

// const users = [
//     {
//         id: 1,
//         photoUrl: '',
//         followed: true,
//         fullName: 'Vladislav',
//         status: 'I am a bocman',
//         location: {country: 'Belarus', city: 'Minsk'}
//     },
//     {
//         id: 2,
//         photoUrl: '',
//         followed: true,
//         fullName: 'Tatiana',
//         status: 'I am a bocmanka',
//         location: {country: 'Russia', city: 'Moscow'}
//     },
//     {
//         id: 3,
//         photoUrl: '',
//         followed: false,
//         fullName: 'Victor',
//         status: 'I am a bocman too',
//         location: {country: 'Ukraine', city: 'Kiev'}
//     },
//     {
//         id: 4,
//         photoUrl: '',
//         followed: true,
//         fullName: 'Chong',
//         status: 'I am a bocman too too too',
//         location: {country: 'Poland', city: 'Warsaw'}
//     }
// ]

type MapStateToPropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type MapDispatchToPropsType = {
    followSuccess: (userId: number) => void
    unFollowSuccess: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component <UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize)
    }


    render() {
        return <>
            {this.props.isFetching ? <PreLoader/> : null}
            <Users setCurrentPage={this.props.setCurrentPage}
                   usersPage={this.props.usersPage}
                   setUsers={this.props.setUsers}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   unFollowSuccess={this.props.unFollowSuccess}
                   followSuccess={this.props.followSuccess}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}
                   toggleIsFetching={this.props.toggleIsFetching}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}
                   getUsers={this.props.getUsers}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
            />;
        </>

    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(totalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export const UserContainer = connect(mapStateToProps, {
    followSuccess,
    unFollowSuccess,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers,
    follow,
    unFollow
})(UsersContainer)