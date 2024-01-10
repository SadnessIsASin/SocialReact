import {ToDoPost} from './ToDoPost/ToDoPost';
import {Post} from './Post/Post';
import styles from './MyPosts.module.css';

export const MyPosts = () => {
    let postsData = [
        {id: 1, author: 'Светлана Красных', message: 'Красотка, привет! Как ты?', likeCount: 4},
        {id: 2, author: 'Лиана Мун', message: 'Давай встретимся сегодня вечером?', likeCount: 15},
    ];

    return (
        <div className={styles.container}>
            <Post author={postsData[0].author} message={postsData[0].message} likesCount={postsData[0].likeCount}/>
            <Post author={postsData[1].author} message={postsData[1].message} likesCount={postsData[1].likeCount}/>

            <ToDoPost/>
        </div>
    )
}