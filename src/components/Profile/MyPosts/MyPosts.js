import { ToDoPost } from './ToDoPost/ToDoPost';
import { Post } from './Post/Post';
import styles from './MyPosts.module.css';

export const MyPosts = () => {
    return (
        <div className={styles.container}>
            <Post author = 'Светлана Красных' message = 'Красотка, привет! Как ты?' likesCount = '4'/>
            <Post author = 'Лиана Мун' message = 'Давай встретимся сегодня вечером?' likesCount = '15'/>
            <ToDoPost />
        </div>
    )
}