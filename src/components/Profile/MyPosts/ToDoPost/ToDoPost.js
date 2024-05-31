import styles from './ToDoPost.module.css';
import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/state";

export const ToDoPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        if (newPostElement.current.value !== ''){
            props.dispatch(addPostActionCreator());
        }
        
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangeActionCreator(text));
    }

    return (
        <div className={styles.container}>
            <textarea onChange={onPostChange} ref={newPostElement}
                      placeholder="Написать комментарий..." cols="50" rows="1"/>
            <button onClick={addPost}>Добавить</button>
        </div>
    )
}