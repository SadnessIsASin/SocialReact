import styles from './Navbar.module.css';


export const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.item}>
                <a href="/profile">Профиль</a>
            </div>
            <div className={styles.item}>
                <a href="/dialogs">Сообщения</a>
            </div>
            <div className={styles.item}>
                <a href="/news">Новости</a>
            </div>
            <div className={styles.item}>
                <a href="/music">Музыкая</a>
            </div>
            <div className={styles.item}>
                <a href="/settings">Настройки</a>
            </div>
        </nav>
    )
}