import styles from "../../components/Users/Users.module.css";
import preloader from "../../assets/preloader.svg";
import React from "react";

export const Preloader = () => {
    return <div className={styles.preloader}>
        <img src={preloader} alt=""/>
    </div>
}