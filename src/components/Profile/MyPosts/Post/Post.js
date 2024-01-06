import styles from './Post.module.css';

export const Post = (props) => {
    return (
        <div className={styles.container}>
            <div>
                <img src="https://masterpiecer-images.s3.yandex.net/1aeb9828675611ee8790aaafe6635749:upscaled" alt="" />
            </div>
            <div className={styles.comment}>
                <div className={styles.author}>
                    <span><b>{props.author}</b></span>
                </div>
                <div className={styles.message}>
                    <span>{props.message}</span>
                </div>
                <div className= {styles.like}>
                    <span>{props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}