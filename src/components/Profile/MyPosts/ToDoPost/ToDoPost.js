import styles from './ToDoPost.module.css';

export const ToDoPost = () => {
    return (
        <div className={styles.container}>
            <textarea placeholder="Написать комментарий..." cols="50" rows="1"></textarea>
            <button>Добавить</button>
        </div>
    )
}