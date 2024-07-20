import React from "react";
import {OneUser} from "./OneUser/OneUser";
import styles from "./Users.module.css";
import axios from "axios";


export class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });

    }

    render() {

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
                {usersElement}
            </div>
        )
    }
}