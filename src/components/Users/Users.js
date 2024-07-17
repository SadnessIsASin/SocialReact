import React from "react";
import {OneUser} from "./OneUser/OneUser";
import styles from "./Users.module.css";
import axios from "axios";

export const Users = (props) => {

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            if (props.users.length === 0) {
                props.setUsers(response.data.items)
            }
        });

    let usersElement = props.users.map(
        m => <OneUser
            follow={props.follow}
            unfollow={props.unfollow}
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