import React from "react";
import styles from './Message.module.css';

export const Message = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                {props.message}
            </div>
        </div>
    )
}