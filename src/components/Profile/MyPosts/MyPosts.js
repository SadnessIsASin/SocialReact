import {ToDoPost} from './ToDoPost/ToDoPost';
import {Post} from './Post/Post';
import styles from './MyPosts.module.css';

export const MyPosts = (props) => {

    let postsElements = props.posts.map(
        p => <Post author={p.author} message={p.message} likesCount={p.likeCount}/>
    );

    return (
        <div className={styles.container}>
            {postsElements}
            <ToDoPost/>
        </div>
    )
}