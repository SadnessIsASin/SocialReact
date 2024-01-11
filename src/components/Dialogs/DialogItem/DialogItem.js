import styles from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.container}>
                <div className={styles.item}>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
        </div>
    )
}