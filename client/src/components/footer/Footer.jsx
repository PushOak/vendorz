import React from "react";
import styles from "./footer.module.scss";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                &copy; {year} All Rights Reserved
            </div>
        </>
    );
};