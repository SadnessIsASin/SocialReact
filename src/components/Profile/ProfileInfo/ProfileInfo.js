import styles from './ProfileInfo.module.css';
import {Preloader} from "../../../Common/Preloader/Preloader";

export const ProfileInfo = (props) => {
        if (!props.profile) {
            return <Preloader/>
        }
        return <div className={styles.container}>
            <div>
                {/*<img src="https://klike.net/uploads/posts/2019-11/1573833417_2.jpg" alt="" />*/}
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div className={styles.infoParams}>
                <div className={styles.param}>
                    <b>Имя:</b> {props.profile.fullName}
                </div>
                <div className={styles.param}>
                    <b>Обо мне:</b> {props.profile.aboutMe}
                </div>
                <div className={styles.param}>
                    <b>В поисках работы:</b> {props.profile.lookingForAJob ? "Да" : "Нет"}
                </div>
                <div className={styles.param}>
                    <b>Подробнее о поиске работы:</b> {props.profile.lookingForAJobDescription}
                </div>
                <div className={styles.param}>
                    <ul>
                        <li><b>facebook:</b> {props.profile.contacts.facebook}</li>
                        <li><b>website:</b> {props.profile.contacts.website}</li>
                        <li><b>vk:</b> {props.profile.contacts.vk}</li>
                        <li><b>twitter:</b> {props.profile.contacts.twitter}</li>
                        <li><b>instagram:</b> {props.profile.contacts.instagram}</li>
                        <li><b>youtube:</b> {props.profile.contacts.youtube}</li>
                        <li><b>github:</b> {props.profile.contacts.github}</li>
                        <li><b>mainLink:</b> {props.profile.contacts.mainLink}</li>
                    </ul>
                </div>
            </div>
        </div>
}
