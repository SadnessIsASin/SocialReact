import styles from './Dialogs.module.css';
import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Павел Сундиков'},
        {id: 2, name: 'Александр Ватутин'},
        {id: 3, name: 'Дмитрий Петров'},
        {id: 4, name: 'Петр Александров'},
        {id: 5, name: 'Алексей Васильев'},
        {id: 6, name: 'Василий Алексеев'}
    ];

    let messages = [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Привет'},
        {id: 3, message: 'Привет'},
        {id: 4, message: 'Привет'},
        {id: 5, message: 'Привет'},
        {id: 6, message: 'Привет'}
    ];

    let dialogsElements = dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>
    );

    let messagesElements = messages.map(
        m => <Message message={m.message}/>
    );

    return (
        <div className={styles.container}>
            <div className={styles.dialogsBox}>
                {dialogsElements}
            </div>

            <div className={styles.messageBox}>
                {messagesElements}
            </div>
        </div>
    )
}