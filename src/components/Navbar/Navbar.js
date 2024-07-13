import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = (props) => {
    return (
        <nav className={styles.container}>
            <div className={styles.item}>
                <NavLink to="/profile">Профиль</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs">Сообщения</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news">Новости</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music">Музыка</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings">Настройки</NavLink>
            </div>
            {/*<Sidebar myFriends = {props.myFriends} />*/}
        </nav>
    )
}
