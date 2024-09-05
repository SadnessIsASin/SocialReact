import styles from './OneUser.module.css';
import {NavLink} from "react-router-dom";
import React from "react";
import {followAPI} from "../../API/API";

export const OneUser = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <NavLink to={"/profile/" + props.id}>
                    <img src={props.photo != null ?
                        props.photo
                        : "https://masterpiecer-images.s3.yandex.net/56304048743311eebac46a0259d7362a:upscaled"
                    }
                         alt=""/>
                </NavLink>
                {props.followed ?
                    <button onClick={() => {
                        followAPI.unfollow(props.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(props.id)
                                }
                            });
                    }}>Удалить</button> :
                    <button onClick={() => {
                        followAPI.follow(props.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(props.id);
                                }
                            });
                    }}>Добавить</button>}
            </div>
            <div className={styles.userInfo}>
                <div>
                    {props.name}
                </div>
                <div>
                    "props.location.city"
                </div>
                <div>
                    {props.status}
                </div>
            </div>
        </div>

    );
}