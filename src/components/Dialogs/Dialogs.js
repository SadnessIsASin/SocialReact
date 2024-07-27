import styles from './Dialogs.module.css';
import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onNewMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageBody(text);
    }

    return (
        <div className={styles.container}>
            <div className={styles.dialogsBox}>
                {dialogsElements} 
            </div>

            <div className={styles.messageBox}>
                {messagesElements}
                <div>
                    <textarea onChange={onNewMessageChange} ref={newMessageElement} value={props.newPostText}
                              placeholder="Написать сообщение..." cols="50" rows="1"/>
                    <button onClick={sendMessage}>Добавить</button>
                </div>
            </div>
        </div>
    )
}