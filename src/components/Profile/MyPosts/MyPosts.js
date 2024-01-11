import {ToDoPost} from './ToDoPost/ToDoPost';
import {Post} from './Post/Post';
import styles from './MyPosts.module.css';

export const MyPosts = () => {
    let posts = [
        {id: 1, author: 'Светлана Красных', message: 'Красотка, привет! Как ты?', likeCount: 4},
        {id: 2, author: 'Лиана Мун', message: 'Давай встретимся сегодня вечером?', likeCount: 15},
    ];

    let postsElements = posts.map(
        p => <Post author={p.author} message={p.message} likesCount={p.likeCount}/>
    );

    return (
        <div className={styles.container}>
            {postsElements}
            <ToDoPost/>
        </div>
    )
}