import styles from "../../components/Users/Users.module.css";
import preloader from "../../asserts/preloader.svg";
import React from "react";

export const Preloader = (props) => {
    return <div className={styles.preloader}>
        <img src={preloader} alt=""/>
    </div>
}