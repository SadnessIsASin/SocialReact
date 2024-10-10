import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {usersAPI} from "../API/API";
import {toggleIsFetching} from "../../redux/auth-reduser";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {


        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.toggleIsFetching(true);

        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items)
        //     });
    }
    render() {
        return <>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChange={this.onPageChange}
                isFetching={this.props.isFetching}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }

}

export const UsersConnect= connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingProgress, toggleIsFetching, getUsers
})(UsersContainer);