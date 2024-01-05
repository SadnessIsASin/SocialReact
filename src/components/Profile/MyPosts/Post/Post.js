import styles from './Post.module.css';

export const Post = () => {
    return (
        <div className={styles.container}>
            <textarea placeholder="Написать комментарий..." cols="50" rows="1"></textarea>
            <button>Добавить</button>
            <div><span>Нравится</span></div>
        </div>
    )
}