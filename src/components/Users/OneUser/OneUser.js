import styles from './OneUser.module.css';

export const OneUser = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                    <img src= {props.photoUrl}
                             alt=""/>
                        {props.followed ?
                            <button onClick={() => props.unfollow(props.id)}>Удалить</button> :
                            <button onClick={() => props.follow(props.id)}>Добавить</button>}
                </div>
            <div className={styles.userInfo}>
                <div>
                    {props.fullName}
                </div>
                <div>
                    {props.location.city}
                </div>
                <div>
                    {props.status}
                </div>
            </div>
        </div>
    );
}