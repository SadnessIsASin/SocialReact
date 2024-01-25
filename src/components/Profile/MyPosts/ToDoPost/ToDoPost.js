import styles from './ToDoPost.module.css';
import React from "react";
export const ToDoPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let textPost = newPostElement.current.value;
        props.addPost(textPost);
        newPostElement.current.value = '';
    }

    return (
        <div className={styles.container}>
            <textarea ref={newPostElement} placeholder="Написать комментарий..." cols="50" rows="1"></textarea>
            <button onClick={addPost}>Добавить</button>
        </div>
    )
}