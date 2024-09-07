import React from 'react';
import {OneUser} from "./OneUser/OneUser";
import styles from "./Users.module.css";
import {Preloader} from "../../Common/Preloader/Preloader";


export let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i < 6) pages.push(i);
    }

    let usersElement = props.users.map(
        m => <OneUser
            follow={props.follow}
            unfollow={props.unfollow}
            id={m.id}
            name={m.name}
            status={m.status}
            photo={m.photos.small}
            location="location"
            followed={m.followed}
            toggleFollowingProgress={props.toggleFollowingProgress}
            followingInProgress={props.followingInProgress}
        />
    );

    return (
        <div className={styles.container}>
            {props.isFetching ?
                <Preloader />
                : null}
            <div className={styles.pages}>
                {pages.map(p => {
                    return <a href="#" onClick={() => {
                       props.onPageChange(p)
                    }} className={props.currentPage === p && styles.selectedPage}>{p}</a>
                })}
            </div>
                {usersElement}
        </div>
    )
}