
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
    return (
        <div className={styles.container}>
            <ProfileInfo profile = {props.profile} />
            <MyPostsContainer />
        </div>
    )
} 