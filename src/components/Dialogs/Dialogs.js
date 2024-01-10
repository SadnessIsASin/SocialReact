import styles from './Dialogs.module.css';
import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Павел Сундиков'},
        {id: 2, name: 'Александр Ватутин'},
        {id: 3, name: 'Дмитрий Петров'},
        {id: 4, name: 'Петр Александров'},
        {id: 5, name: 'Алексей Васильев'},
        {id: 6, name: 'Василий Алексеев'}
    ];

    let messagesData = [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Привет'},
        {id: 3, message: 'Привет'},
        {id: 4, message: 'Привет'},
        {id: 5, message: 'Привет'},
        {id: 6, message: 'Привет'}
    ];

    return (
        <div className={styles.container}>
            <div className={styles.dialogsBox}>
                <DialogItem name = {dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name = {dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name = {dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name = {dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name = {dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name = {dialogsData[5].name} id={dialogsData[5].id}/>
            </div>

            <div className={styles.messageBox}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
            </div>
        </div>
    )
}