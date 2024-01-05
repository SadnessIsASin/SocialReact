import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}><a href="#">Мой профиль</a></div>
            <div className={styles.item}><a href="#">Сообщения</a></div>
            <div className={styles.item}><a href="#">Новости</a></div>
            <div className={styles.item}><a href="#">Музыка</a></div>
            <div className={styles.item}><a href="#">Настройки</a></div>
        </div>
    )
}