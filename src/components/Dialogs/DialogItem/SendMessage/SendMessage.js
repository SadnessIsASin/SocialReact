import React from "react";
import styles from './SendMessage.module.css';

export const SendMessage = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        if (newMessageElement.current.value != ''){
            props.dispatch({ type: 'SEND-MESSAGE' });
        }
        
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({ type : 'UPDATE-NEW-MESSAGE-TEXT', newText: text });
    }

    return (
        <div className={styles.container}>
            <textarea onChange={onMessageChange} ref={newMessageElement}
                      placeholder="Написать сообщение..." cols="50" rows="1"/>
            <button onClick={sendMessage}>Добавить</button>
        </div>
    )
}