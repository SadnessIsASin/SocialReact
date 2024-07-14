import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={styles.container}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
} 