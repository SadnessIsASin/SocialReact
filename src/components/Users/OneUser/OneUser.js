import styles from './OneUser.module.css';
import {NavLink} from "react-router-dom";
import React from "react";
import axios from "axios";

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



                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                            {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "7f89d151-ae2e-4942-92f0-aabd82b0ee8d"
                                }
                            })
                            .then(response => {
                                if(response.data.resultCode === 0){
                                    props.unfollow(props.id)
                                }
                            });

                    }}>Удалить</button> :

                    <button onClick={() => {

                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {},
                            {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "7f89d151-ae2e-4942-92f0-aabd82b0ee8d"
                                }
                            })
                            .then(response => {
                                if(response.data.resultCode === 0){
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