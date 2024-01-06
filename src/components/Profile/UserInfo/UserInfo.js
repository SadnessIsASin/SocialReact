import styles from './UserInfo.module.css';

export const UserInfo = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src="https://klike.net/uploads/posts/2019-11/1573833417_2.jpg" alt="" />
            </div>
            <div className= {styles.infoParams}>
                <div className={styles.param}>
                    <b>Зовут:</b> Валерия Ким
                </div>
                <div className={styles.param}>
                    <b>Возраст:</b>  27
                </div>
                <div className={styles.param}>
                    <b>Город:</b> Москва, Нагатино
                </div>
                <div className={styles.param}>
                    <b>Семейное положение:</b> Замужем
                </div>
            </div>
        </div>
    )
}
