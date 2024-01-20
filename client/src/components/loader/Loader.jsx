import React from "react";
import styles from "./loader.module.scss";
import loaderImg from "../../assets/loader.gif";
import ReactDOM from "react-dom";

export default function Loader() {
    return ReactDOM.createPortal(
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <img src={loaderImg} alt="loading" />
            </div>
        </div>,
        document.getElementById("loader")
    )
};

export const Spinner = () => {
    return (
        <div className="--center-all">
            <img src={loaderImg} alt="Loading..." width={40} />
        </div>
    );
};
