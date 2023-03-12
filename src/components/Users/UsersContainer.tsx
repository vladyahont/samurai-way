import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    followSuccess, requestUsers,
    setCurrentPage,
    toggleFollowingInProgress, unFollow,
    unFollowSuccess,
    UserType
} from "../../redux/users-reducer";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import PreLoader from "../commons/preLoader/preLoader";
import withAuthRedirect from "../HOK/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuperSel
} from "../../redux/users-selectors";

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
    users: Array<UserType>
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
    requestUsers: (page: number, pageSize: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component <UsersPropsType> {


    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.requestUsers(currentPage, this.props.pageSize)
    }


    render() {
        return <>
            {this.props.isFetching ? <PreLoader/> : null}
            <Users setCurrentPage={this.props.setCurrentPage}
                   users={this.props.users}
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
                   requestUsers={this.props.requestUsers}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
            />
        </>

    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsersSuperSel(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export const UserContainer = compose<ComponentType>(
    connect(mapStateToProps, {
        followSuccess,
        unFollowSuccess,
        setCurrentPage,
        toggleFollowingInProgress,
        requestUsers,
        follow,
        unFollow
    }),
    withAuthRedirect)
(UsersContainer)