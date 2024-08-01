import styles from './OneUser.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

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
                    <button onClick={() => props.unfollow(props.id)}>Удалить</button> :
                    <button onClick={() => props.follow(props.id)}>Добавить</button>}
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