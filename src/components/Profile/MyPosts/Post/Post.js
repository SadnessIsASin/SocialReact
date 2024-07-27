import styles from './Post.module.css';
import {useState} from "react";

export const Post = (props) => {

    const [likes, setLikes] = useState(props.likesCount);
    const [isLiked, setIsLiked] = useState(false);

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
                <div >
                    <div className={styles.like} onClick={() => {
                        if(!isLiked) {
                            setLikes(likes + 1);
                            setIsLiked(true);
                            } else {
                            setLikes(likes - 1);
                            setIsLiked(false);
                            }
                        }}>
                        {likes}
                    </div>
                </div>
            </div>
        </div>
    )
}