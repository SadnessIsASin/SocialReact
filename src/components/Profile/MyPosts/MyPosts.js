import {Post} from './Post/Post';
import styles from './MyPosts.module.css';
import React from "react";

export const MyPosts = (props) => {
    let postsElements = props.posts.map(
        p => <Post author={p.author} message={p.message} likesCount={p.likeCount} key = {p.id} />
    );

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
            {postsElements}
            <div className={styles.inputArea}>
                <textarea id="textareaid" onChange={onPostChange} ref={newPostElement} value={props.newPostText}
                          placeholder="Написать комментарий..." cols="50" rows="1"/>
                <button onClick={addPost}>Отправить</button>
            </div>

        </div>
    )
}