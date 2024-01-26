import styles from './ToDoPost.module.css';
import React from "react";

export const ToDoPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.container}>
            <textarea onChange={onPostChange} ref={newPostElement}
                      placeholder="Написать комментарий..." cols="50" rows="1"/>
            <button onClick={addPost}>Добавить</button>
        </div>
    )
}