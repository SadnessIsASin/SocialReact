import styles from './SideBarFriend.module.css';
import React from "react";

export const SideBarFriend = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.element}>
                <img src={props.url} alt=""/>
            </div>
            <div className={styles.name}>{props.name}</div>
        </div>
    )
};