import styles from './Dialogs.module.css';
import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {SendMessage} from "./DialogItem/SendMessage/SendMessage";

export const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>
    );

    let messagesElements = props.messages.map(
        m => <Message message={m.message}/>
    );

    return (
        <div className={styles.container}>
            <div className={styles.dialogsBox}>
                {dialogsElements}
            </div>

            <div className={styles.messageBox}>
                {messagesElements}
                <SendMessage
                    dispatch = {props.dispatch}
                />
            </div>
        </div>
    )
}