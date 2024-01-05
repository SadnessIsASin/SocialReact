import { MyPosts } from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import { UserInfo } from './UserInfo/UserInfo';


export const Profile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <UserInfo />
                <MyPosts />
            </div>
        </div>
    )
} 