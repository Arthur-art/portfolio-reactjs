import React from "react";
import styles from "./style.module.scss"

export function Profile() {

    return (
        <div className={styles.container}>
            <h1>ARTHUR TEIXEIRA SANTOS SILVA</h1>
            <img alt="Img-Arthur" src="https://avatars.githubusercontent.com/u/54858003?v=4"  />
            <h1>BEM-VINDO AO MEU PORTFÓLIO</h1>
            <h2>Visite algumas de minhas aplicações!</h2>
        </div>
    )
}