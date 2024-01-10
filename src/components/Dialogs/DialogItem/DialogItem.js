import styles from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItem = (props) => {
    return (
        <div className={styles.container}>
                <div className={styles.item}>
                    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
                </div>
        </div>
    )
}