import React from "react";
import {OneUser} from "./OneUser/OneUser";
import styles from "./Users.module.css";


export const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {id: 1, photoUrl: 'https://masterpiecer-images.s3.yandex.net/56304048743311eebac46a0259d7362a:upscaled', fullName: 'Павел Сундиков', followed: false, status: 'Всем привет! Ищу друзей', location: {city: 'Москва', country: 'Россия'}},
                {id: 2, photoUrl: 'https://masterpiecer-images.s3.yandex.net/56304048743311eebac46a0259d7362a:upscaled', fullName: 'Павел Сундиков', followed: false, status: 'Всем привет! Ищу друзей', location: {city: 'Москва', country: 'Россия'}},
                {id: 3, photoUrl: 'https://masterpiecer-images.s3.yandex.net/56304048743311eebac46a0259d7362a:upscaled', fullName: 'Павел Сундиков', followed: true, status: 'Всем привет! Ищу друзей', location: {city: 'Москва', country: 'Россия'}},
                {id: 4, photoUrl: 'https://masterpiecer-images.s3.yandex.net/56304048743311eebac46a0259d7362a:upscaled', fullName: 'Павел Сундиков', followed: true, status: 'Всем привет! Ищу друзей', location: {city: 'Москва', country: 'Россия'}}
            ]
        )
    }



    let usersElement = props.users.map(
        m => <OneUser
            follow = {props.follow}
            unfollow = {props.unfollow}
            id = {m.id}
            fullName={m.fullName}
            status={m.status}
            photoUrl = {m.photoUrl}
            location={m.location}
            followed = {m.followed}/>
    );

    return (
        <div className={styles.container}>
            {usersElement}
        </div>
    )
}