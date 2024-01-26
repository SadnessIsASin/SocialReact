import React from "react";
import styles from './SendMessage.module.css';

export const SendMessage = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={styles.container}>
            <textarea onChange={onMessageChange} ref={newMessageElement}
                      placeholder="Написать сообщение..." cols="50" rows="1"/>
            <button onClick={sendMessage}>Добавить</button>
        </div>
    )
}