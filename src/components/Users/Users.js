import React from "react";
import {OneUser} from "./OneUser/OneUser";
import styles from "./Users.module.css";
import axios from "axios";


export class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChange = (p) => {
        this.props.setCurrentPage(p);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        let usersElement = this.props.users.map(
            m => <OneUser
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                id={m.id}
                name={m.name}
                status={m.status}
                photo={m.photos.small}
                location="location"
                followed={m.followed}/>
        );

        return (
            <div className={styles.container}>
                {pages.map(p => {
                    return <span onClick={()=> { this.onPageChange(p) }} className={this.props.currentPage === p && styles.selectedPage}>{p}</span>})}
                {usersElement}
            </div>
        )
    }
}