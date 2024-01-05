
import { Post } from './Post/Post';
import styles from './MyPosts.module.css';

export const MyPosts = () => {
    return (
        <div className={styles.container}>
            <div>Стена</div>
            <Post />
            <Post />
        </div>
    )
}