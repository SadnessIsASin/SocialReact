import styles from './Sidebar.module.css';
import React from "react";
import {SideBarFriend} from "./SideBarFriend/SideBarFriend";

export const Sidebar = (props) => {
    let sidebarElements = props.myFriends.map(
        s => <SideBarFriend url={s.url} name={s.name}/>
    );

    return (
        <div className={styles.container}>
            <div className={styles.h}>Кенты онлайн:</div>
            <div className={styles.friends}>
                {sidebarElements}
            </div>
        </div>
    )
};